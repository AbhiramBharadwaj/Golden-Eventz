import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const visited = new Set();
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'];
const mediaPattern = /\.(png|jpe?g|gif|webp|avif|svg|mp4|webm)$/i;

function walk(file) {
  file = path.resolve(file);
  if (visited.has(file)) return;
  visited.add(file);
  if (!extensions.includes(path.extname(file)) && !file.endsWith('.html')) return;
  const source = readFileSync(file, 'utf8');
  // The metadata index references every variant; it must not make an unused
  // photo appear used after its last component import is removed.
  const metadataOnly = file === path.join(root, 'src/assets/imageMetadata.js');
  const references = source.matchAll(/(?:from\s*|import\s*|import\(\s*|url\(\s*)["']([^"']+)["']/g);
  for (const [, specifier] of references) {
    const base = specifier.startsWith('@/') ? path.join(root, 'src', specifier.slice(2))
      : specifier.startsWith('/src/') ? path.join(root, specifier.slice(1))
      : specifier.startsWith('.') ? path.resolve(path.dirname(file), specifier) : null;
    if (!base) continue;
    const target = [base, ...extensions.map(ext => base + ext)].find(p => existsSync(p) && statSync(p).isFile());
    assert.ok(target, `Missing local dependency: ${path.relative(root, file)} -> ${specifier}`);
    if (!metadataOnly) walk(target);
  }
}

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}

walk(path.join(root, 'src/main.jsx'));
// A small variant is used through the metadata index only when its full-size
// image is actually imported by a route or component.
for (const file of [...visited]) {
  if (!mediaPattern.test(file)) continue;
  const ext = path.extname(file);
  const small = file.slice(0, -ext.length) + '-small' + ext;
  if (existsSync(small)) visited.add(small);
}
const assets = filesIn(path.join(root, 'src/assets')).filter(file => mediaPattern.test(file));
const unused = assets.filter(file => !visited.has(file));
assert.deepEqual(unused.map(file => path.relative(root, file)), [], 'Unreferenced app media');
const html = readFileSync('index.html', 'utf8');
for (const publicFile of ['favicon.png', 'social-card.jpg']) {
  assert.ok(existsSync(path.join(root, 'public', publicFile)), `Missing public ${publicFile}`);
  assert.ok(html.includes('/' + publicFile), `Missing HTML reference to ${publicFile}`);
}
assert.ok(!html.includes('/srs/assets/'), 'Broken legacy social card URL');
console.log(`Asset check passed: ${assets.length} media files, all reachable from app routes; public icons/previews exist.`);

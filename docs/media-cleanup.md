# Media cleanup and loading improvements

Unused files were identified by tracing imports from `src/main.jsx` through all routes, CSS URLs and lazy modules. Unused import bindings were removed before tracing. The intended social preview was preserved as `public/social-card.jpg`, with its broken metadata URL corrected.

## Removed unused media (38 files)

| Path | Original MiB |
| --- | ---: |
| `src/assets/GreenImageContactUs.jpeg` | 0.19 |
| `src/assets/OurWorkPagePhotos/1.png` | 1.29 |
| `src/assets/OurWorkPagePhotos/13.png` | 3.77 |
| `src/assets/OurWorkPagePhotos/17.png` | 0.53 |
| `src/assets/OurWorkPagePhotos/19.png` | 0.93 |
| `src/assets/OurWorkPagePhotos/31.png` | 0.18 |
| `src/assets/OurWorkPagePhotos/5.png` | 3.39 |
| `src/assets/OurWorkPagePhotos/6.png` | 1.98 |
| `src/assets/OurWorkPagePhotos/7.png` | 14.82 |
| `src/assets/OurWorkPagePhotos/8.png` | 2.51 |
| `src/assets/SageGreen.png` | 0.01 |
| `src/assets/WhoWeAre3.jpeg` | 0.16 |
| `src/assets/background-4.jpeg` | 0.22 |
| `src/assets/background-flip.jpeg` | 0.38 |
| `src/assets/background.jpeg` | 0.84 |
| `src/assets/backup.mp4` | 54.19 |
| `src/assets/bg-2.png` | 3.10 |
| `src/assets/corporate-event.png` | 4.91 |
| `src/assets/earth-bg.mp4` | 19.05 |
| `src/assets/earth-bg1.mp4` | 52.20 |
| `src/assets/earth-bg5.mp4` | 21.04 |
| `src/assets/earth-bg7.mp4` | 9.16 |
| `src/assets/eventimage.jpeg` | 0.53 |
| `src/assets/gifs/2.gif` | 1.91 |
| `src/assets/moon-surface-hd.png` | 0.59 |
| `src/assets/music-event.png` | 1.98 |
| `src/assets/profile.png` | 0.85 |
| `src/assets/purple-unsplash.jpg` | 1.56 |
| `src/assets/satelite1.jpg` | 4.91 |
| `src/assets/satelite2.jpg` | 2.60 |
| `src/assets/satelite3.jpg` | 0.06 |
| `src/assets/special-event.png` | 3.40 |
| `src/assets/sports-event.png` | 3.87 |
| `src/assets/testBack.png` | 0.33 |
| `src/assets/wave Gif.gif` | 3.63 |
| `src/assets/wave.jpg` | 0.01 |
| `src/assets/wqe.jpg` | 0.02 |
| `public/vite.svg` | 0.00 |

Four unreachable template component/style files were also removed because they referenced unused images. Original assets remain recoverable from Git history; history was not rewritten.

## Replaced delivery assets

Active photographs were resized without cropping to at most 1280 pixels wide and 1920 pixels tall, encoded as WebP, and given 640-pixel variants where useful. Animated GIFs retain their frame counts and looping behavior as animated WebP. The transparent navbar logo is now 192 pixels, and the favicon has its own 48-pixel PNG.

| Original | Replacement | Before MiB | After MiB including responsive variant |
| --- | --- | ---: | ---: |
| `src/assets/Location.png` | `src/assets/Location.webp` | 1.442 | 0.083 |
| `src/assets/Location1.png` | `src/assets/Location1.webp` | 3.119 | 0.245 |
| `src/assets/OurWorkPagePhotos/10.png` | `src/assets/OurWorkPagePhotos/10.webp` | 0.110 | 0.090 |
| `src/assets/OurWorkPagePhotos/11.png` | `src/assets/OurWorkPagePhotos/11.webp` | 2.436 | 0.135 |
| `src/assets/OurWorkPagePhotos/12.png` | `src/assets/OurWorkPagePhotos/12.webp` | 2.855 | 0.207 |
| `src/assets/OurWorkPagePhotos/14.png` | `src/assets/OurWorkPagePhotos/14.webp` | 3.239 | 0.489 |
| `src/assets/OurWorkPagePhotos/15.png` | `src/assets/OurWorkPagePhotos/15.webp` | 4.669 | 0.407 |
| `src/assets/OurWorkPagePhotos/16.png` | `src/assets/OurWorkPagePhotos/16.webp` | 12.891 | 0.210 |
| `src/assets/OurWorkPagePhotos/18.png` | `src/assets/OurWorkPagePhotos/18.webp` | 0.158 | 0.128 |
| `src/assets/OurWorkPagePhotos/2.png` | `src/assets/OurWorkPagePhotos/2.webp` | 0.152 | 0.133 |
| `src/assets/OurWorkPagePhotos/20.png` | `src/assets/OurWorkPagePhotos/20.webp` | 11.351 | 0.093 |
| `src/assets/OurWorkPagePhotos/21.png` | `src/assets/OurWorkPagePhotos/21.webp` | 0.381 | 0.253 |
| `src/assets/OurWorkPagePhotos/22.png` | `src/assets/OurWorkPagePhotos/22.webp` | 0.312 | 0.208 |
| `src/assets/OurWorkPagePhotos/23.png` | `src/assets/OurWorkPagePhotos/23.webp` | 0.289 | 0.157 |
| `src/assets/OurWorkPagePhotos/24.png` | `src/assets/OurWorkPagePhotos/24.webp` | 0.276 | 0.299 |
| `src/assets/OurWorkPagePhotos/25.png` | `src/assets/OurWorkPagePhotos/25.webp` | 0.391 | 0.183 |
| `src/assets/OurWorkPagePhotos/26.png` | `src/assets/OurWorkPagePhotos/26.webp` | 0.280 | 0.111 |
| `src/assets/OurWorkPagePhotos/27.png` | `src/assets/OurWorkPagePhotos/27.webp` | 0.253 | 0.242 |
| `src/assets/OurWorkPagePhotos/28.png` | `src/assets/OurWorkPagePhotos/28.webp` | 0.247 | 0.237 |
| `src/assets/OurWorkPagePhotos/29.png` | `src/assets/OurWorkPagePhotos/29.webp` | 3.016 | 0.253 |
| `src/assets/OurWorkPagePhotos/3.png` | `src/assets/OurWorkPagePhotos/3.webp` | 6.785 | 0.271 |
| `src/assets/OurWorkPagePhotos/30.png` | `src/assets/OurWorkPagePhotos/30.webp` | 0.154 | 0.216 |
| `src/assets/OurWorkPagePhotos/32.png` | `src/assets/OurWorkPagePhotos/32.webp` | 3.153 | 0.183 |
| `src/assets/OurWorkPagePhotos/33.png` | `src/assets/OurWorkPagePhotos/33.webp` | 0.051 | 0.030 |
| `src/assets/OurWorkPagePhotos/34.png` | `src/assets/OurWorkPagePhotos/34.webp` | 4.907 | 0.404 |
| `src/assets/OurWorkPagePhotos/35.png` | `src/assets/OurWorkPagePhotos/35.webp` | 0.257 | 0.269 |
| `src/assets/OurWorkPagePhotos/36.png` | `src/assets/OurWorkPagePhotos/36.webp` | 1.455 | 0.052 |
| `src/assets/OurWorkPagePhotos/37.png` | `src/assets/OurWorkPagePhotos/37.webp` | 0.352 | 0.048 |
| `src/assets/OurWorkPagePhotos/38.png` | `src/assets/OurWorkPagePhotos/38.webp` | 0.090 | 0.104 |
| `src/assets/OurWorkPagePhotos/4.png` | `src/assets/OurWorkPagePhotos/4.webp` | 2.576 | 0.275 |
| `src/assets/OurWorkPagePhotos/Our_1.png` | `src/assets/OurWorkPagePhotos/Our_1.webp` | 0.207 | 0.226 |
| `src/assets/WhoWeAre1.jpeg` | `src/assets/WhoWeAre1.webp` | 0.142 | 0.135 |
| `src/assets/WhoWeAre2.jpeg` | `src/assets/WhoWeAre2.webp` | 14.824 | 0.145 |
| `src/assets/WhoWeAre4.png` | `src/assets/WhoWeAre4.webp` | 2.352 | 0.124 |
| `src/assets/background-flip3.jpeg` | `src/assets/background-flip3.webp` | 0.169 | 0.010 |
| `src/assets/gifs/1.gif` | `src/assets/gifs/1.webp` | 3.787 | 0.589 |
| `src/assets/gifs/3.gif` | `src/assets/gifs/3.webp` | 3.525 | 0.626 |
| `src/assets/logo.png` | `src/assets/logo.webp` | 0.472 | 0.008 |
| `src/assets/money.jpg` | `src/assets/money.webp` | 4.880 | 0.293 |

## Loading changes

- Route-level lazy loading isolates pages and their styles. Page CSS selectors are scoped so visiting another route does not change the homepage. Firebase and Lottie are additionally deferred until contact-form submission.
- Noncritical images use native lazy loading, responsive sources, async decoding and intrinsic dimensions.
- Homepage section backgrounds load when within 300 pixels of the viewport.
- Hero text is visible immediately; reduced-motion preferences are respected.
- The duplicate GSAP hover implementation was removed; the existing CSS hover behavior is retained.
- Content-hashed assets use immutable browser caching on Vercel, and application routes rewrite to the SPA entry.

## Validation

- `npm run build`, `npx tsc --noEmit`, and `npm run check:assets` pass.
- All 71 retained app media files are reachable through the app import graph. Every WebP decodes successfully.
- Browser checks passed all eight routes, mobile/desktop screenshots, scrolling through lazy media, blog expansion, required contact fields, and reduced-motion heading visibility. No test inquiry was sent to the live database.
- The local mobile homepage initially downloaded about 128–247 KB of images across the local mobile checks, with service-card images and the reviews background deferred until scrolling. This is a local functional measurement, not a controlled comparison of production load time.
- The initial JS bundle fell from 1.277 MB to about 394 KB before compression (about 131 KB gzip).
- Existing ESLint diagnostics remain: 28 errors and one warning, compared with 52 errors and one warning in the original source. All remaining diagnostics were confirmed to be pre-existing.

## Maintaining media

Run `npm run check:assets` after adding/removing assets. Update `src/assets/imageMetadata.js` with the actual dimensions and optional responsive variant for new photos. Keep the delivery WebP and any small variant together. The check runs before production builds and catches missing imports or orphaned media.

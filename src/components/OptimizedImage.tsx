import type { ImgHTMLAttributes } from 'react';
import { imageMetadata } from '../assets/imageMetadata';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

/** Reserve layout space and choose a delivery size without downloading originals. */
export default function OptimizedImage({ src, alt, sizes = '(max-width: 767px) 100vw, 50vw', loading = 'lazy', ...props }: OptimizedImageProps) {
  const image = imageMetadata[src];
  return (
    <img
      src={src}
      alt={alt}
      width={image?.width}
      height={image?.height}
      srcSet={image?.srcSet}
      sizes={image?.srcSet ? sizes : undefined}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
}

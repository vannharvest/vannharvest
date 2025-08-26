'use client';

import { useState, useMemo, useEffect } from 'react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { imageConfig, getImageSizes, getImageQuality } from '@/config/images';
import { isWhitelistedImage } from '@/lib/image-utils';

type ImageSizePreset = keyof typeof imageConfig.sizes;
type ImageQualityPreset = keyof Pick<typeof imageConfig, 'defaultQuality' | 'highQuality' | 'lowQuality'>;

type ImageSource = string | { src: string; width?: number; height?: number };

export interface ImageProps extends Omit<NextImageProps, 'src' | 'alt' | 'sizes' | 'quality'> {
  src: string | { src: string; width: number; height: number };
  alt: string;
  size?: ImageSizePreset | string;
  quality?: ImageQualityPreset | number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  onLoadingComplete?: () => void;
  fallbackSrc?: ImageSource;
  caption?: string;
  unoptimized?: boolean;
  isIOS?: boolean;
}

export function Image({
  src,
  alt,
  size = 'card',
  quality = 'defaultQuality',
  priority = false,
  className = '',
  containerClassName = '',
  onLoadingComplete,
  fallbackSrc = imageConfig.fallbackImage,
  caption,
  unoptimized: propUnoptimized,
  isIOS: propIsIOS,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState<ImageSource>(src);
  const [isIOS, setIsIOS] = useState(propIsIOS ?? false);

  // Detect iOS on client-side
  useEffect(() => {
    if (typeof window !== 'undefined' && propIsIOS === undefined) {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    }
  }, [propIsIOS]);

  // Calculate sizes and quality
  const sizes = typeof size === 'string' && size in imageConfig.sizes 
    ? getImageSizes(size as ImageSizePreset)
    : size;
  
  const imageQuality = typeof quality === 'string' 
    ? getImageQuality(quality as ImageQualityPreset) 
    : quality;

  // Check if the image is local or external
  const isLocalImage = useMemo(() => {
    if (typeof src === 'string') {
      return src.startsWith('/') || src.startsWith('data:') || src.startsWith('blob:');
    }
    return false;
  }, [src]);

  // Handle image loading state
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoadingComplete?.();
    props.onLoad?.(e);
  };

  // Handle image errors
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && !hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
    props.onError?.(e);
  };

  // Update image source when it changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  // Determine if we should use the Next.js Image component
  const shouldUseNextImage = useMemo(() => {
    // Always use img tag on iOS for better compatibility
    if (isIOS) return false;
    
    // Allow forcing unoptimized via prop
    if (propUnoptimized !== undefined) return !propUnoptimized;
    
    // For local images, always use Next.js Image
    if (isLocalImage) return true;
    
    // For external images, only use Next.js Image if whitelisted
    if (typeof src === 'string') {
      return isWhitelistedImage(src);
    }
    
    return true;
  }, [isIOS, isLocalImage, propUnoptimized, src]);

  // If there was an error and we have a fallback, show the fallback
  if (hasError && fallbackSrc) {
    const fallbackSrcStr = typeof fallbackSrc === 'string' ? fallbackSrc : fallbackSrc.src;
    const fallbackWidth = typeof fallbackSrc === 'string' ? undefined : fallbackSrc.width;
    const fallbackHeight = typeof fallbackSrc === 'string' ? undefined : fallbackSrc.height;
    
    return (
      <div className={cn('relative', containerClassName)}>
        <img
          src={fallbackSrcStr}
          alt={alt}
          className={cn('w-full h-auto', className)}
          loading="lazy"
          width={fallbackWidth}
          height={fallbackHeight}
        />
        {caption && (
          <figcaption className="mt-2 text-sm text-gray-500 text-center">
            {caption}
          </figcaption>
        )}
      </div>
    );
  }

  // Common props for both Next.js Image and native img
  const commonProps = {
    src: typeof imgSrc === 'string' ? imgSrc : imgSrc.src,
    alt,
    className: cn(
      'transition-opacity duration-300 w-full h-auto',
      isLoading ? 'opacity-0' : 'opacity-100',
      className
    ),
    onLoad: handleLoad,
    onError: handleError,
    ...(typeof imgSrc === 'object' && {
      width: imgSrc.width,
      height: imgSrc.height
    })
  };

  return (
    <div className={cn('relative', containerClassName)}>
      {shouldUseNextImage ? (
        <NextImage
          {...commonProps}
          sizes={sizes}
          quality={imageQuality}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          placeholder={!priority ? 'blur' : undefined}
          blurDataURL={!priority ? imageConfig.placeholder.blurDataURL : undefined}
          unoptimized={process.env.NODE_ENV !== 'production' && !isLocalImage && !priority}
          {...props}
        />
      ) : (
        <img
          {...commonProps}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
      
      {/* Loading placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"
          style={{
            backgroundImage: `url("${imageConfig.placeholder.blurDataURL}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {/* Caption */}
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-500 text-center">
          {caption}
        </figcaption>
      )}
    </div>
  );
}

// Re-export Next.js Image types for convenience
export type { ImageLoaderProps } from 'next/image';

// Default export for backward compatibility
export default Image;

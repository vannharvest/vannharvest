'use client';

import { type FC } from 'react';
import Image, { type ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

export const OptimizedImage: FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  ...props
}) => {
  // Skip optimization for SVG files and data URLs
  const isSvg = src.endsWith('.svg');
  const isDataUrl = src.startsWith('data:');
  const unoptimized = isSvg || isDataUrl;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${className}`}
      priority={priority}
      loading={loading}
      unoptimized={unoptimized}
      {...props}
    />
  );
};

// Helper function to generate responsive image sizes
export function getResponsiveSizes(maxWidth: number): string {
  const breakpoints = [640, 768, 1024, 1280, 1536];
  const filtered = breakpoints.filter((bp) => bp <= maxWidth);
  const sizes = filtered.map((bp) => `(max-width: ${bp}px) ${bp}px`);
  return [...sizes, `${maxWidth}px`].join(', ');
}

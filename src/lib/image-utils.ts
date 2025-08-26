import type { ImageLoaderProps as NextImageLoaderProps } from 'next/image';
import { imageConfig } from '@/config/images';

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

/**
 * Get image dimensions from a file or URL
 */
export const getImageDimensions = async (file: File | string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    if (typeof file === 'string') {
      // Handle URL
      const img = new window.Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        });
      };
      img.onerror = reject;
      img.src = file;
    } else {
      // Handle File object
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);
      
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        });
        URL.revokeObjectURL(objectUrl);
      };
      
      img.onerror = (err) => {
        URL.revokeObjectURL(objectUrl);
        reject(err);
      };
      
      img.src = objectUrl;
    }
  });
};

/**
 * Generate a blur data URL for placeholder images
 */
export const generateBlurDataURL = (width: number, height: number): string => {
  // Return a small, blurred version of the image
  return `data:image/svg+xml;base64,${btoa(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
      <filter id='blur' x='0' y='0' width='100%' height='100%'>
        <feGaussianBlur stdDeviation='20' />
      </filter>
      <rect width='100%' height='100%' fill='#f3f4f6' filter='url(#blur)' />
    </svg>`
  )}`;
};

/**
 * Check if an image URL is from a whitelisted domain
 */
export const isWhitelistedImage = (url: string): boolean => {
  try {
    const imageUrl = new URL(url);
    const whitelist = imageConfig.contentSecurityPolicy.imgSrc;
    
    // Check for wildcard or self
    if (whitelist.includes('*' as any) || 
        (whitelist.includes('self' as any) && !url.startsWith('http'))) {
      return true;
    }
    
    // Check domain patterns
    return whitelist.some(domain => {
      if (typeof domain === 'string' && domain.startsWith('http')) {
        try {
          const domainUrl = new URL(domain);
          return imageUrl.hostname.endsWith(domainUrl.hostname.replace('*.', ''));
        } catch {
          return false;
        }
      }
      return false;
    });
  } catch (e) {
    return false;
  }
};

/**
 * Optimize image URL with query parameters
 */
export const optimizeImageUrl = (
  src: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  } = {}
): string => {
  if (!src) return '';
  
  try {
    const url = new URL(src);
    const params = new URLSearchParams();
    
    // Add optimization parameters
    if (options.width) params.set('w', options.width.toString());
    if (options.height) params.set('h', options.height.toString());
    if (options.quality) params.set('q', options.quality.toString());
    if (options.format) params.set('fm', options.format);
    if (options.fit) params.set('fit', options.fit);
    
    // Preserve existing query parameters
    const existingParams = new URLSearchParams(url.search);
    existingParams.forEach((value, key) => {
      if (!params.has(key)) {
        params.set(key, value);
      }
    });
    
    url.search = params.toString();
    return url.toString();
  } catch (e) {
    // If URL parsing fails, return the original src
    return src;
  }
};

/**
 * Preload an image
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

/**
 * Convert a file to base64
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
};

/**
 * Create a responsive image srcSet
 */
export const createSrcSet = (
  src: string, 
  widths: number[], 
  options: {
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
  } = {}
): string => {
  return widths
    .map(width => {
      const url = optimizeImageUrl(src, {
        ...options,
        width,
      });
      return `${url} ${width}w`;
    })
    .join(', ');
};

// Check if an image is local
const isLocalImage = (src: string): boolean => {
  return !src.startsWith('http') || src.startsWith('/');
};

// Custom image loader for Next.js Image component
const imageLoader = ({
  src,
  width,
  quality = imageConfig.defaultQuality
}: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  // If it's a local image or from a whitelisted domain, use the optimized URL
  if (isLocalImage(src) || isWhitelistedImage(src)) {
    return optimizeImageUrl(src, {
      width,
      quality,
    });
  }

  // For external images that aren't whitelisted, return as-is
  return src;
};

const imageUtils = {
  getImageDimensions,
  generateBlurDataURL,
  isWhitelistedImage,
  optimizeImageUrl,
  preloadImage,
  fileToBase64,
  createSrcSet,
  imageLoader,
};

export default imageUtils;

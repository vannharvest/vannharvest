import type { ImageLoaderProps } from 'next/image';

export const imageConfig = {
  // Image quality (0-100)
  defaultQuality: 80,
  highQuality: 90,
  lowQuality: 60,
  
  // Responsive image presets
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px',
    blog: '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px',
    card: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
    thumbnail: '200px',
    full: '100vw',
  },
  
  // Device sizes for responsive images (in pixels)
  deviceSizes: [
    640,  // Mobile
    768,  // Tablet
    1024, // Small desktop
    1280, // Desktop
    1536, // Large desktop
    1920, // Full HD
    2560, // 2K
    3840, // 4K
  ],
  
  // Image sizes for different use cases (in pixels)
  imageSizes: {
    icon: 24,
    avatar: 40,
    small: 160,
    medium: 320,
    large: 640,
    xlarge: 1080,
    xxlarge: 1920,
  },

  // Image formats and optimization
  formats: ['image/avif', 'image/webp'],
  defaultFormat: 'image/webp',
  
  // Placeholder configuration
  placeholder: {
    blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEBgMBvIgP4QAAAABJRU5ErkJggg==',
    backgroundColor: '#f3f4f6',
  },
  
  // Content security policy for external images
  contentSecurityPolicy: {
    imgSrc: [
      "'self'",
      'data:',
      'https://images.unsplash.com',
      'https://plus.unsplash.com',
      'https://img.freepik.com',
      'https://images.pexels.com',
      'https://upload.wikimedia.org',
      'https://vannharvest.com',
      'https://www.vannharvest.com',
    ],
  },
  
  // Performance optimization
  optimization: {
    // Enable WebP format by default
    webp: true,
    // Enable AVIF format (better compression but slower encoding)
    avif: true,
    // Enable lazy loading by default for images outside viewport
    lazy: true,
    // Preload critical images
    preload: true,
  },
  
  // Error handling
  fallbackImage: '/images/fallback.webp',
  
  // Default loader for Next.js Image component
  loader: ({ src, width, quality = 80 }: ImageLoaderProps) => {
    // Handle external URLs
    if (src.startsWith('http')) {
      const url = new URL(src);
      const isWhitelisted = imageConfig.contentSecurityPolicy.imgSrc.some(domain => {
        if (domain.startsWith('http')) {
          const domainUrl = new URL(domain);
          return url.hostname.endsWith(domainUrl.hostname.replace('*.', ''));
        }
        return false;
      });
      
      if (isWhitelisted) {
        return `${src}?w=${width}&q=${quality}&fm=webp`;
      }
      return src;
    }
    
    // Handle local images
    return `${src}?w=${width}&q=${quality}`;
  },
} as const;

export type ImageSizePreset = keyof typeof imageConfig.sizes;
export type ImageQualityPreset = keyof Pick<typeof imageConfig, 'defaultQuality' | 'highQuality' | 'lowQuality'>;

export const getImageSizes = (preset: ImageSizePreset = 'card') => {
  return imageConfig.sizes[preset];
};

export const getImageQuality = (preset: ImageQualityPreset = 'defaultQuality') => {
  return imageConfig[preset];
};
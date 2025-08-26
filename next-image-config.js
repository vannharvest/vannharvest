// Next.js image configuration
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
    750,  // Small tablets
    828,  // iPhone XR
    1080, // Small laptops
    1200, // Tablets
    1920, // Laptops
    2048, // Large screens
    3840, // 4K screens
  ],
  
  // Image sizes for different breakpoints
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
  // Default image formats to generate
  formats: ['image/webp'],
  
  // Minimum size (in bytes) for images to be optimized
  minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  
  // Domains that are allowed to be optimized
  domains: [],
  
  // Path to the loader (e.g., 'default', 'imgix', 'cloudinary', 'akamai', or a custom loader)
  loader: 'default',
  
  // Path prefix for the Image component
  path: '/_next/image',
  
  // Enable/disable image optimization in development
  disableStaticImages: false,
  
  // Enable/disable blur-up placeholder
  dangerouslyAllowSVG: false,
  
  // Content Security Policy (CSP) for the Image component
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
};

export default imageConfig;

// Image configuration for the image proxy

export const imageConfig = {
  // List of allowed image domains (for Next.js Image component)
  domains: [
    'localhost',
    'vannharvest.com',
    'www.vannharvest.com',
    'images.unsplash.com',
    'source.unsplash.com',
    'res.cloudinary.com',
    'via.placeholder.com'
  ],
  
  // Content Security Policy for images
  contentSecurityPolicy: {
    imgSrc: [
      "'self'",
      'data:',
      'blob:',
      'https://vannharvest.com',
      'https://www.vannharvest.com',
      'https://images.unsplash.com',
      'https://source.unsplash.com',
      'https://res.cloudinary.com',
      'https://via.placeholder.com'
    ]
  },
  
  // Image formats to support
  formats: ['image/avif', 'image/webp'],
  
  // Default image quality (0-100)
  defaultQuality: 80,
  
  // Default image sizes for responsive images
  defaultSizes: [
    { width: 640, maxWidth: 768 },
    { width: 768, maxWidth: 1024 },
    { width: 1024, maxWidth: 1280 },
    { width: 1280 }
  ],
  
  // Placeholder image (used as fallback)
  placeholderImage: '/images/placeholder.jpg'
};

// Next.js image configuration
export const imageConfig = {
  contentSecurityPolicy: {
    imgSrc: [
      'https://vannharvest.com',
      'https://www.vannharvest.com',
      'https://images.unsplash.com',
      'https://img.youtube.com',
    ],
  },
  domains: [
    'vannharvest.com',
    'www.vannharvest.com',
    'images.unsplash.com',
    'img.youtube.com',
  ],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp'],
  minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
};

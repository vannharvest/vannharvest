export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vannharvest.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/*?search=',
          '/*?category=',
          '/*.css$',
          '/*.js$',
          '/*.webp$',
          '/*.jpg$',
          '/*.png$',
          '/*.svg$',
        ],
        disallow: [
          '/api/',
          '/_next/static/',
          '/_next/image/',
          '/_next/data/',
          '/private/',
          '/admin/',
          '/login/',
          '/wp-admin/',
          '/wp-login.php',
          '/*?*sort=',
          '/*?*filter=',
          '/*?*page=',
          '/*?*', // Disallow other query strings
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

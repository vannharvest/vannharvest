import type { Metadata } from 'next';

type Robots = {
  rules: {
    userAgent: string;
    allow?: string | string[];
    disallow?: string | string[];
    crawlDelay?: number;
  }[];
  sitemap?: string | string[];
  host?: string;
};

export default function robots(): Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
      // Add more rules for specific user agents if needed
      // {
      //   userAgent: 'Googlebot',
      //   allow: ['/'],
      //   disallow: ['/private/'],
      //   crawlDelay: 10,
      // },
    ],
    sitemap: 'https://vannharvest.com/sitemap.xml',
    // host: 'https://vannharvest.com', // Uncomment and set your production URL
  };
}

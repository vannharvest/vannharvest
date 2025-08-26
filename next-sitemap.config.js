/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://vannharvest.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://vannharvest.com/sitemap.xml',
      'https://vannharvest.com/sitemap-*.xml',
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*', '/private/*'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  autoLastmod: true,
  outDir: 'public',
  // Optional: Transform function to add more fields to each URL
  transform: async (config, path) => {
    // Add lastmod, changefreq, and priority based on path
    let priority = 0.7;
    let changefreq = 'daily';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/products')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/about') || path.startsWith('/contact')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://vannharvest.com/en${path === '/' ? '' : path}`,
          hreflang: 'en',
        },
        {
          href: `https://vannharvest.com/hi${path === '/' ? '' : path}`,
          hreflang: 'hi',
        },
      ],
    };
  },
};

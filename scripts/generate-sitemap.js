import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://vannharvest.com';
const PAGES_DIR = join(process.cwd(), 'src/app');
const EXCLUDE_PATTERNS = ['/api', '/_*', '/*/\[', '/*/layout.tsx', '/*/loading.tsx', '/*/error.tsx'];

async function generateSitemap() {
  // Get all page files
  const pages = await glob('**/page.{js,jsx,ts,tsx}', {
    cwd: PAGES_DIR,
    ignore: EXCLUDE_PATTERNS.map(pattern => `**${pattern}**`),
  });

  // Convert file paths to URLs
  const urls = pages.map(page => {
    const path = page
      .replace(/\/page\.[jt]sx?$/, '')
      .replace(/\[([^\]]+)\]/g, (_, param) => `:${param}`);
    return `${SITE_URL}/${path === 'page' ? '' : path}`;
  });

  // Add static pages
  const staticPages = ['/', '/about', '/products', '/contact'];
  staticPages.forEach(page => {
    if (!urls.includes(`${SITE_URL}${page}`)) {
      urls.push(`${SITE_URL}${page}`);
    }
  });

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urls
    .sort()
    .map(
      url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${url === SITE_URL + '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  // Write sitemap to public directory
  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

}

generateSitemap().catch(console.error);

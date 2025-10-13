import { type NextRequest } from 'next/server';

export async function GET() {
  const robots = `
    User-agent: *
    Allow: /
    Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://vannharvest.com'}/sitemap.xml
  `;

  // Generate ETag based on content
  const content = robots.trim();
  const etag = `"${Buffer.from(content).toString('base64')}"`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
      'ETag': etag,
    },
  });
}

export const dynamic = 'force-static';

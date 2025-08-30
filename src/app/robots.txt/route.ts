import { type NextRequest } from 'next/server';

export async function GET() {
  const robots = `
    User-agent: *
    Allow: /
    Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/sitemap.xml
  `;

  return new Response(robots.trim(), {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}

export const dynamic = 'force-static';

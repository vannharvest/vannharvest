import { NextResponse } from 'next/server';
import { imageConfig } from '@/config/images';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  // Width and quality parameters are reserved for future image optimization
  // const width = parseInt(searchParams.get('w') || '0');
  // const quality = parseInt(searchParams.get('q') || '80');

  if (!url) {
    return new NextResponse('Missing image URL', { status: 400 });
  }

  try {
    // Validate the URL is from an allowed domain
    const isValidDomain = imageConfig.contentSecurityPolicy.imgSrc.some(domain => {
      if (domain.startsWith('https://')) {
        const domainUrl = new URL(domain);
        const srcUrl = new URL(url);
        return srcUrl.hostname.endsWith(domainUrl.hostname);
      }
      return false;
    });

    if (!isValidDomain) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Fetch the image
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Get the image data
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return the image with appropriate headers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': `public, max-age=${60 * 60 * 24 * 7}`, // 1 week
        'CDN-Cache-Control': 'public, max-age=604800', // 1 week
        'Vary': 'Accept-Encoding',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

type MetaDataProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book' | 'profile' | 'product';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
};

// Ensure image URL is absolute
const getAbsoluteUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `${siteConfig.url}${path.startsWith('/') ? '' : '/'}${path}`;
};

/**
 * Generates complete metadata for a page with SEO optimizations
 */
export function generateMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: MetaDataProps = {}): Metadata {
  const pageTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const absoluteUrl = getAbsoluteUrl(url);
  const absoluteImageUrl = getAbsoluteUrl(image);
  
  // Combine default keywords with any additional tags
  const allKeywords = [
    ...["premium raisins", "Indian raisins", "export quality dry fruits", "Vann Harvest products", "dry fruits exporter", "Indian raisins supplier", "best quality raisins"],
    ...tags
  ];

  const openGraph = {
    type,
    locale: 'en_US',
    siteName: siteConfig.name,
    title: pageTitle,
    description,
    url: absoluteUrl,
    images: [
      {
        url: absoluteImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
    publishedTime,
    modifiedTime,
    authors: author ? [author] : undefined,
    section,
    tags: tags.length > 0 ? tags : undefined,
  };

  const twitter = {
    card: 'summary_large_image' as const,
    title: pageTitle,
    description,
    images: [absoluteImageUrl],
    creator: siteConfig.social.twitter ? `@${siteConfig.social.twitter}` : undefined,
    site: siteConfig.social.twitter ? `@${siteConfig.social.twitter}` : undefined,
  };

  const robots = {
    index: !noIndex,
    follow: !noIndex,
    googleBot: {
      index: !noIndex,
      follow: !noIndex,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };

  // Build and return the metadata object with proper typing
  return {
    title: pageTitle,
    description,
    generator: 'Next.js',
    keywords: allKeywords.join(', '),
    
    // OpenGraph metadata
    openGraph: {
      type,
      title: pageTitle,
      description,
      url: absoluteUrl,
      // @ts-ignore - siteName is valid but not in the type definition
      siteName: siteConfig.name,
      locale: 'en_US',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    
    // Twitter card metadata
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [absoluteImageUrl],
      // @ts-ignore - creator is valid but not in the type definition
      creator: siteConfig.social.twitter ? `@${siteConfig.social.twitter}` : undefined,
      // @ts-ignore - site is valid but not in the type definition
      site: siteConfig.social.twitter ? `@${siteConfig.social.twitter}` : undefined,
    },
    
    // Robots meta tags
    robots: robots,
    
    // Verification meta tags
    ...(siteConfig.verification && {
      verification: {
        google: siteConfig.verification.google,
        yandex: siteConfig.verification.yandex,
        yahoo: siteConfig.verification.yahoo,
        me: siteConfig.verification.me,
      },
    }),
    
    // Additional meta tags
    other: {
      'application-name': siteConfig.name,
      'msapplication-TileColor': '#ffffff',
      'theme-color': '#ffffff',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': siteConfig.name,
      'apple-mobile-web-app-status-bar-style': 'default',
    },
    
    // Canonical URL
    alternates: {
      canonical: absoluteUrl,
    },
  };
}

// Viewport configuration for responsive design
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
} as const;

// Helper function for JSON-LD structured data
export function jsonLd<T extends Record<string, any>>(data: T): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  });
}

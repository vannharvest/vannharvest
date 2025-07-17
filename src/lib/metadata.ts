import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetaDataProps {
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
}

// Extend the base Metadata type to include our custom properties
type ExtendedMetadata = Metadata & {
  openGraph: Metadata['openGraph'] & {
    siteName?: string;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string | string[];
    section?: string;
    tags?: string[];
  };
  twitter: Metadata['twitter'] & {
    creator?: string;
    site?: string;
  };
  other?: Record<string, string>;
};

const getAbsoluteUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `${siteConfig.url}${path.startsWith('/') ? '' : '/'}${path}`;
};

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
}: MetaDataProps = {}): ExtendedMetadata {
  const pageTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const absoluteUrl = getAbsoluteUrl(url);
  const absoluteImageUrl = getAbsoluteUrl(image);

  const allKeywords = [
    ...["premium raisins", "Indian raisins", "export quality dry fruits", "Vann Harvest products", "dry fruits exporter", "Indian raisins supplier", "best quality raisins"],
    ...tags
  ];

  // Build base metadata with type assertion
  const metadata = {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: absoluteUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: allKeywords.join(', '),
    openGraph: {
      type,
      title: pageTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: 'en_US',
      images: [{
        url: absoluteImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [absoluteImageUrl],
    },
    other: {
      'application-name': siteConfig.name,
      'msapplication-TileColor': '#ffffff',
      'theme-color': '#ffffff',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': siteConfig.name,
      'apple-mobile-web-app-status-bar-style': 'default',
    },
  };

  // Add verification
  if (siteConfig.verification.google) {
    const verification: Record<string, string> = { google: siteConfig.verification.google };
    if (siteConfig.verification.yandex) verification.yandex = siteConfig.verification.yandex;
    if (siteConfig.verification.bing) verification.bing = siteConfig.verification.bing;
    if (siteConfig.verification.me) verification.me = siteConfig.verification.me;
    
    // @ts-ignore - verification is a valid property but not in the type definition
    metadata.verification = verification;
  }

  // Create a new OpenGraph object with all properties
  const openGraph = {
    ...metadata.openGraph,
    ...(publishedTime && { publishedTime }),
    ...(modifiedTime && { modifiedTime }),
    ...(author && { authors: [author] }),
    ...(section && { section }),
    ...(tags.length > 0 && { tags })
  };

  // Create a new Twitter object with all properties
  const twitter = {
    ...metadata.twitter,
    ...(siteConfig.social?.twitter && {
      creator: `@${siteConfig.social.twitter}`,
      site: `@${siteConfig.social.twitter}`
    })
  };

  // Update metadata with the new objects
  metadata.openGraph = openGraph;
  metadata.twitter = twitter;

  return metadata as unknown as ExtendedMetadata;
}

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

type JsonLdData = Record<string, unknown>;

export function jsonLd<T extends JsonLdData>(data: T): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  });
}

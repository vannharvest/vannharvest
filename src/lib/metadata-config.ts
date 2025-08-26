import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const ogImageUrl = siteConfig.ogImage.startsWith('http') 
  ? siteConfig.ogImage 
  : `${siteConfig.url}${siteConfig.ogImage.startsWith('/') ? '' : '/'}${siteConfig.ogImage}`;

export const baseMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': '/en-US',
      'hi-IN': '/hi-IN',
    },
  },
};

// Add these meta tags via next/head in the RootLayout component
export const additionalMetaTags = {
  keywords: ['premium raisins', 'Indian raisins', 'organic raisins', 'dried fruits', 'export quality raisins'].join(', '),
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  'format-detection': 'telephone=no,address=no,email=no',
  author: 'Vann Harvest',
  'og:site_name': siteConfig.name,
  'og:locale': 'en_US',
  'twitter:site': `@${siteConfig.social.twitter}`,
  'twitter:creator': `@${siteConfig.social.twitter}`,
};

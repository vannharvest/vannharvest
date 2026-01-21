import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

// Blog layout metadata
export const metadata: Metadata = {
  title: 'Blog | Vann Harvest',
  description: 'Discover the latest insights, tips, and stories about premium dried fruits and nuts from Vann Harvest. Learn about health benefits, recipes, and industry trends.',
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/blog`,
    title: 'Blog | Vann Harvest',
    description: 'Discover the latest insights, tips, and stories about premium dried fruits and nuts from Vann Harvest.',
    images: [
      {
        url: `${siteConfig.url}/images/og-blog.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vann Harvest Blog - Premium Dried Fruits & Nuts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Vann Harvest',
    description: 'Discover the latest insights, tips, and stories about premium dried fruits and nuts from Vann Harvest.',
    images: [`${siteConfig.url}/images/og-blog.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

// Keywords and robots meta tags will be added via the page component

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the blog
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'headline': 'Vann Harvest Blog',
    'description': 'Discover the latest insights, tips, and stories about premium dried fruits and nuts from Vann Harvest',
    'url': `${siteConfig.url}/blog`,
    'publisher': {
      '@type': 'Organization',
      'name': 'Vann Harvest',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.url}/images/logo/vann-harvest-official-logo.webp`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog`,
    },
    'inLanguage': 'en-US',
    'isFamilyFriendly': true,
    'keywords': [
      'dried fruits blog',
      'healthy snacks',
      'premium nuts',
      'Vann Harvest articles',
      'nutrition tips',
      'healthy eating',
      'food industry insights',
    ].join(', '),
  };

  return (
    <>
      {/* Add structured data for the blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}

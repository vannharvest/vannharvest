import { Metadata } from 'next';

// Define the base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vannharvest.com';

// Define the canonical URL
const canonicalUrl = `${baseUrl}/infrastructure/certifications`;

// Define the OG image URL
const ogImageUrl = `${baseUrl}/images/og/certifications-og.jpg`;

// Define the metadata
export const metadata: Metadata = {
  title: 'Certifications | Vann Harvest | Quality Standards',
  description: 'Explore our industry certifications and quality standards that ensure premium quality raisins from Vann Harvest.',
  
  // Open Graph
  openGraph: {
    title: 'Our Certifications | Vann Harvest',
    description: 'Explore our industry certifications and quality standards that ensure premium quality raisins from Vann Harvest.',
    url: canonicalUrl,
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Vann Harvest Certifications'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Our Certifications | Vann Harvest',
    description: 'Explore our industry certifications and quality standards that ensure premium quality raisins from Vann Harvest.',
    images: [ogImageUrl]
  },
  
  // Additional metadata
  alternates: {
    canonical: canonicalUrl
  }
};

// Note: For robots meta tags, add them to your layout.tsx file using next/head

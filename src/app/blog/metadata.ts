import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const title = 'Blog | Vann Harvest';
const description = 'Discover the latest insights, tips, and stories about premium dried fruits and nuts from Vann Harvest. Learn about health benefits, recipes, and industry trends.';
const url = `${siteConfig.url}/blog`;
const ogImage = {
  url: `${siteConfig.url}/images/og-blog.jpg`,
  width: 1200,
  height: 630,
  alt: 'Vann Harvest Blog - Premium Dried Fruits & Nuts',
};

// Blog metadata with only supported Next.js 13+ metadata properties
const blogMetadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [{
      url: ogImage.url,
      width: ogImage.width,
      height: ogImage.height,
      alt: ogImage.alt,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage.url],
  },
  alternates: {
    canonical: url,
  },
  // Note: metadataBase should be set in layout.tsx or page.tsx, not in metadata
};

export default blogMetadata;

import type { Metadata } from 'next';
import { blogImages } from './data';
import { BlogClientPage } from './BlogClientPage';

// Generate static metadata for the blog page
export const metadata: Metadata = {
  title: 'Blog | Vann Harvest Insights & Stories',
  description: 'Explore expert articles and behind-the-scenes stories from the world of premium raisins, sustainability, and wellness — brought to you by Vann Harvest.',
  openGraph: {
    title: 'Blog | Vann Harvest',
    description: 'Insights and stories about premium raisins, sustainable farming, and healthy living.',
    images: [{
      url: blogImages.hero,
      width: 1200,
      height: 630,
      alt: 'Vann Harvest Blog - Premium Dried Fruits & Nuts',
    }],
  },
};

// Add keywords and robots meta tags in a custom head component
const BlogHead = () => {
  const keywords = [
    'dried fruits blog',
    'healthy snacks',
    'premium nuts',
    'Vann Harvest articles',
    'nutrition tips',
    'healthy eating',
    'food industry insights',
    'raisins',
    'almonds',
    'cashews',
    'pistachios',
    'dates',
  ].join(', ');

  return (
    <>
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
    </>
  );
};

export default function BlogPage() {
  return (
    <>
      <BlogHead />
      <BlogClientPage />
    </>
  );
}

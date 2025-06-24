import { Metadata } from 'next';
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
      alt: 'Vann Harvest Blog',
    }],
  },
};

export default function BlogPage() {
  return <BlogClientPage />;
}

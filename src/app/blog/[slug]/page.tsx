import type { Metadata } from 'next';
import { blogPosts } from '../data';
import { constructUrl, getSiteUrl } from '@/lib/url';
import BlogPostClient from './BlogPostClient';

// 1. Disable dynamic params to ensure only statically generated pages are served
export const dynamicParams = false;

type Params = {
  params: {
    slug: string;
  };
};

// 2. Generate static params at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 3. Static metadata for each post
export function generateMetadata({ params }: Params): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const postUrl = constructUrl(getSiteUrl(), `/blog/${post.slug}`);

  return {
    title: `${post.title} | Vann Harvest`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      publishedTime: post.date,
      authors: post.author ? [post.author] : ['Vann Harvest Team'],
      images: [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

// 4. The actual page component
export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return null; // Fallback handled by BlogPostClient

  return <BlogPostClient slug={params.slug} />;
}

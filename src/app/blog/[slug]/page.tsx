import type { Metadata } from 'next';
import { blogPosts } from '../data';
import { constructUrl, getSiteUrl } from '@/lib/url';
import BlogPostClient from './BlogPostClient';

// This tells Next.js to pre-render these pages at build time
export const dynamicParams = false;

// Generate static paths for each blog post
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper to get blog post by slug
function findPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

// Static metadata for each post
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = findPostBySlug(params.slug);
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

// Blog Post Page (Fully Static)
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  if (!post) return null; // Will be handled by the client component

  return <BlogPostClient slug={params.slug} />;
}

// src/app/blog/[slug]/page.tsx

import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, type BlogPost } from '../data';
import { constructUrl, getSiteUrl } from '@/lib/url';
import BlogPostClient from './BlogPostClient';

// Helper function to find a blog post by slug
function findPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const post = findPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const parentMeta = await parent;
  const previousImages = Array.isArray(parentMeta?.openGraph?.images)
    ? parentMeta.openGraph.images
    : [];

  const url = constructUrl(getSiteUrl(), `/blog/${post.slug}`);

  return {
    title: `${post.title} | Vann Harvest`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: post.date,
      authors: [post.author || 'Vann Harvest Team'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Main dynamic blog page component
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient slug={slug} />;
}

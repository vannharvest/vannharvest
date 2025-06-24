import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data';
import { constructUrl, getSiteUrl } from '@/lib/url';
import BlogPostClient from './BlogPostClient';

// This is a server component that handles static generation and metadata
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to find post by slug
function findPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Get the slug from params
  const { slug } = await Promise.resolve(params);
  const post = findPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Get parent metadata if available
  const parentMetadata = await parent;
  const previousImages = Array.isArray(parentMetadata?.openGraph?.images) 
    ? parentMetadata.openGraph.images 
    : [];

  // Basic metadata
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
      canonical: postUrl,
    },
  };
}

// Main page component (Server Component)
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Get the slug from params
  const { slug } = await Promise.resolve(params);
  const post = findPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostClient slug={slug} />;
}

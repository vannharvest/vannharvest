import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';
import { constructUrl, getSiteUrl } from '@/lib/url';

// This is a static page
export const dynamic = 'force-static';

// Generate static params at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to find post by slug
function findPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Ensure we have the slug
  const { slug } = await params;
  try {
    const post = findPostBySlug(slug);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    // Get parent metadata if available
    const parentMetadata = await Promise.resolve(parent);
    const previousImages = Array.isArray(parentMetadata?.openGraph?.images) 
      ? parentMetadata.openGraph.images 
      : [];

    // Basic metadata
    const postUrl = constructUrl(getSiteUrl(), `/blog/${post.slug}`);
    const metadata: Metadata = {
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

    return metadata;
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'An error occurred while loading this page.',
    };
  }
}

// Blog post page component (Server Component)
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get slug from params
  const { slug } = await params;
  
  // Find the post by slug
  const post = findPostBySlug(slug);
  
  // Return 404 if post not found
  if (!post) {
    notFound();
  }
  
  // Pass the post data to the client component
  return <BlogPostContent post={post} />;
}

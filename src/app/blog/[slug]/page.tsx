import type { Metadata } from 'next';
import { blogPosts } from '../data';
import { constructUrl, getSiteUrl } from '@/lib/url';
import BlogPostClient from './BlogPostClient';

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
export function generateMetadata(
  { params }: { params: { slug: string } }
): Metadata {
  const { slug } = params;
  const post = findPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

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

// Blog Post Page (Static)
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = findPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">404 - Post Not Found</h1>
          <p className="text-gray-600 mb-6">The requested blog post could not be found.</p>
          <a
            href="/blog"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return <BlogPostClient slug={slug} />;
}

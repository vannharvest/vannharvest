'use client';

import Link from 'next/link';
import { blogPosts } from '../data';
import BlogPostContent from './BlogPostContent';

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">404 - Post Not Found</h1>
          <p className="text-gray-600 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}

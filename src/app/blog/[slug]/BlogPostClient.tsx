'use client';

import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
          <p className="text-gray-600 mb-4">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/blog"
            className="inline-block px-5 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}

'use client';

import { useParams } from 'next/navigation';
import { blogPosts } from '../data';
import BlogPostClient from './BlogPostClient';

// This is a client component that handles the dynamic routing
export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params!.slug as string; // Non-null assertion with type annotation
  
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">404 - Invalid URL</h1>
          <p className="text-gray-600">The requested URL is not valid.</p>
          <a href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }
  
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">404 - Post Not Found</h1>
          <p className="text-gray-600">The requested blog post could not be found.</p>
          <a href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return <BlogPostClient slug={slug} />;
}

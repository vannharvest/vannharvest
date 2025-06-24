'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';

export default function BlogPostClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Find the post by slug
    const foundPost = blogPosts.find((p) => p.slug === slug);
    
    if (!foundPost) {
      // Instead of using notFound(), we'll handle it in the render
      setIsLoading(false);
      return;
    }
    
    setPost(foundPost);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    // Redirect to 404 page or show not found message
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600">The requested blog post could not be found.</p>
          <button
            onClick={() => router.push('/blog')}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}

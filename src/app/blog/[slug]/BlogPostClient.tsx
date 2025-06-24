'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';

type BlogPostClientProps = {
  slug: string;
};

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);

    setPost(foundPost ?? null);
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
          <p className="text-gray-600 mb-4">
            The blog post you’re looking for doesn’t exist or has been removed.
          </p>
          <button
            onClick={() => router.push('/blog')}
            className="px-5 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}

'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';

export default function BlogPostClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the post by slug
    const foundPost = blogPosts.find((p) => p.slug === slug);
    
    if (!foundPost) {
      notFound();
    }
    
    setPost(foundPost);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>; // Added a nice loading spinner
  }

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../data';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors duration-200"
          aria-label="Back to blog"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Blog
        </Link>
        
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-500 text-sm mb-8">
            <time dateTime={post.date}>
              {formattedDate}
            </time>
            <span className="mx-2">•</span>
            <span className="capitalize">{post.category}</span>
          </div>
          
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSIyLjUiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDE2IDEwIDUgMjEiPjwvcG9seWxpbmU+PC9zdmc+"
            />
          </div>
          
          <div className="prose lg:prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {post.excerpt}
            </p>
            {/* Blog post content would go here */}
            <div className="mt-8 space-y-4">
              <p>
                This is where the full blog post content would be displayed. In a production application,
                this content would typically come from a CMS or markdown files.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

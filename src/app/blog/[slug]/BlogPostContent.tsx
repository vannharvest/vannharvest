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
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back to blog link */}
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
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center text-gray-500 text-sm mb-6 flex-wrap gap-1">
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="mx-2">•</span>
            <span className="capitalize">{post.category}</span>
            {(post.author || post.readTime) && (
              <>
                <span className="mx-2">•</span>
                {post.author && <span>{post.author}</span>}
                {post.readTime && (
                  <span className="ml-2 text-gray-400">
                    {post.readTime} min read
                  </span>
                )}
              </>
            )}
          </div>

          {/* Feature image */}
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

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content 
                  ? post.content
                      .replace(/^# (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>')
                      .replace(/^## (.*$)/gim, '<h3 class="text-2xl font-semibold mt-6 mb-3">$1</h3>')
                      .replace(/^### (.*$)/gim, '<h4 class="text-xl font-medium mt-4 mb-2">$1</h4>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/^- (.*$)/gim, '<li className="ml-4 list-disc">$1</li>')
                      .replace(/\n\n/g, '</p><p className="mt-4">')
                      .replace(/\n/g, '<br />')
                  : post.excerpt 
              }} 
            />
          </div>

          {/* Sharing links */}
          <div className="mt-10 border-t pt-6">
            <p className="text-sm text-gray-500 mb-2">Share this post:</p>
            <div className="flex gap-4">
              <Link
                href={`https://twitter.com/intent/tweet?url=https://vannharvest.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                className="text-gray-400 hover:text-blue-500 underline text-sm"
              >
                Twitter
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https://vannharvest.com/blog/${post.slug}`}
                target="_blank"
                className="text-gray-400 hover:text-blue-500 underline text-sm"
              >
                Facebook
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://vannharvest.com/blog/${post.slug}`}
                target="_blank"
                className="text-gray-400 hover:text-blue-500 underline text-sm"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

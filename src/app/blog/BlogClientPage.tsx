'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import { blogPosts, blogImages } from './data';

// Format date for display
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export function BlogClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[calc(100vh-10rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden mt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={blogImages.hero}
            alt="Blog Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="absolute z-20 left-6 md:left-12 bottom-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Vann Harvest Blog</h1>
          <p className="text-2xl mt-2 font-light text-white/90">
            Insights from the farm, health tips & sustainability stories
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <PageWrapper className="py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = blogImages.fallback;
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-green-600 font-semibold">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{formatDate(post.date)}</p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-green-700 hover:underline text-sm font-medium"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, BlogPost } from '../data';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata for the blog post
export async function generateMetadata(
  { params, searchParams: _searchParams }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const slug = params.slug;
  
  // Get the post
  const post = blogPosts.find((post: BlogPost) => post.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Vann Harvest Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
  };
}

// Blog post page component
export default function BlogPostPage({ params }: Props) {
  // Get the slug from params
  const { slug } = params;
  
  // Find the post synchronously since we're using static data
  // In a real app, you might want to fetch this data
  const post = blogPosts.find((post: BlogPost) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-16">

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-green-700 hover:underline inline-flex items-center mb-6"
          >
            ← Back to Blog
          </Link>
          
          <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8 bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg">{post.excerpt}</p>
            
            {/* Blog post content would go here */}
            <div className="mt-8 space-y-4">
              <p>
                This is where the full blog post content would be displayed. In a real application, 
                this content would likely come from a CMS or markdown files.
              </p>
              <p>
                You would typically see multiple paragraphs, images, and other rich content here 
                that makes up the complete blog post.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

import { notFound } from 'next/navigation';
import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';

// This is a static page
export const dynamic = 'force-static';

type BlogPostParams = {
  params: { slug: string };
};

// Generate static params at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to find post by slug
function findPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } }
) {
  try {
    const post = findPostBySlug(params.slug);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: `${post.title} | Vann Harvest`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'An error occurred while loading this page.',
    };
  }
}

// Blog post page component (Server Component)
export default function BlogPostPage({ params }: BlogPostParams) {
  // Get slug from params
  const { slug } = params;
  
  // Find the post by slug
  const post = findPostBySlug(slug);
  
  // Return 404 if post not found
  if (!post) {
    notFound();
  }
  
  // Pass the post data to the client component
  return <BlogPostContent post={post} />;
}

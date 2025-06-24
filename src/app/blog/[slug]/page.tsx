import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { blogPosts, type BlogPost } from '../data';
import BlogPostContent from './BlogPostContent';

// This is a static page
export const dynamic = 'force-static';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
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
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const post = findPostBySlug(params.slug);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: `${post.title} | Vann Harvest`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.slug}`,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author || 'Vann Harvest Team'],
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
          ...previousImages,
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.image],
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
export default function BlogPostPage({ params }: Props) {
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

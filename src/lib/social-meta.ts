import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SocialMetaProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  author?: string;
  date?: string;
}

export function generateSocialMeta({
  title,
  description,
  image = siteConfig.ogImage,
  url,
  type = 'website',
  twitterCard = 'summary_large_image',
  author,
  date,
}: SocialMetaProps): Partial<Metadata> {
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    openGraph: {
      type,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(author && { authors: [author] }),
      ...(date && { publishedTime: date }),
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [imageUrl],
    }
  };
}

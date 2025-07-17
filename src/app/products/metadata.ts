import { Metadata } from 'next';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const category = searchParams.category as string || 'all';
  
  // Define category-specific metadata
  const categoryMeta = {
    title: '',
    description: '',
    image: '',
  };

  switch (category) {
    case 'black-raisins':
      categoryMeta.title = 'Premium Black Raisins';
      categoryMeta.description = 'Discover our premium quality black raisins, naturally sun-dried and packed with nutrients.';
      categoryMeta.image = '/images/products/og-black-raisins.webp';
      break;
    case 'golden-raisins':
      categoryMeta.title = 'Golden Raisins Collection';
      categoryMeta.description = 'Explore our golden raisins, carefully processed to maintain their natural sweetness and golden color.';
      categoryMeta.image = '/images/products/og-golden-raisins.webp';
      break;
    case 'green-raisins':
      categoryMeta.title = 'Green Raisins Selection';
      categoryMeta.description = 'Our selection of green raisins, known for their unique flavor and health benefits.';
      categoryMeta.image = '/images/products/og-green-raisins.webp';
      break;
    default:
      categoryMeta.title = 'Premium Raisin Products';
      categoryMeta.description = 'Browse our wide selection of premium quality raisins, carefully sourced and processed to perfection.';
      categoryMeta.image = '/images/products/og-default.webp';
  }

  return baseGenerateMetadata({
    title: categoryMeta.title,
    description: categoryMeta.description,
    url: `${siteConfig.url}/products${category !== 'all' ? `?category=${category}` : ''}`,
    image: categoryMeta.image,
  });
}

// This ensures the metadata is revalidated when needed
export const revalidate = 3600; // Revalidate every hour

import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';

type ProductCategory = 'black-raisins' | 'golden-raisins' | 'green-raisins' | 'all';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const category = (searchParams.category as ProductCategory) || 'all';
  
  // Define category-specific metadata
  // Map categories to their respective product images
  const productImages = {
    'black-raisins': '/images/products/verticle-img/black-round-seeded-raisins.avif',
    'golden-raisins': '/images/products/verticle-img/golden-long-premium-raisins.avif',
    'green-raisins': '/images/products/verticle-img/green-long-premium-raisins.avif',
    'all': '/images/logo/vann-harvest-official-logo.webp'
  };

  const categoryMeta = {
    title: '',
    description: '',
    image: productImages[category === 'all' ? 'all' : category] || productImages['all'],
    type: 'product' as const,
  };

  switch (category) {
    case 'black-raisins':
      categoryMeta.title = 'Premium Black Raisins';
      categoryMeta.description = 'Discover our premium quality black raisins, naturally sun-dried and packed with nutrients.';
      break;
    case 'golden-raisins':
      categoryMeta.title = 'Golden Raisins Collection';
      categoryMeta.description = 'Explore our golden raisins, carefully processed to maintain their natural sweetness and golden color.';
      break;
    case 'green-raisins':
      categoryMeta.title = 'Green Raisins Selection';
      categoryMeta.description = 'Our selection of green raisins, known for their unique flavor and health benefits.';
      break;
    default:
      categoryMeta.title = 'Premium Raisin Products';
      categoryMeta.description = 'Browse our wide selection of premium quality raisins, carefully sourced and processed to perfection.';
  }
  
  // Add brand name to titles
  categoryMeta.title = `${categoryMeta.title} | ${siteConfig.name}`;

  return baseGenerateMetadata({
    title: categoryMeta.title,
    description: categoryMeta.description,
    url: `${siteConfig.url}/products${category !== 'all' ? `?category=${category}` : ''}`,
    image: categoryMeta.image,
  });
}

// This ensures the metadata is revalidated when needed
export const revalidate = 3600; // Revalidate every hour

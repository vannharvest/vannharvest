'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Info } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  category: string;
}

const getCategories = (): Category[] => {
  // These are the base categories we want to display
  const baseCategories = [
    { name: 'Golden Long', displayName: 'Golden Long Raisins' },
    { name: 'Golden Round', displayName: 'Golden Round Raisins' },
    { name: 'Green Long', displayName: 'Green Long Raisins' },
    { name: 'Green Round', displayName: 'Green Round Raisins' },
  ];

  // In a real app, you would fetch this from an API or use require.context
  // For now, we'll use the existing image paths
  return baseCategories.map((cat, index) => ({
    id: `cat-${index + 1}`,
    name: cat.displayName,
    slug: cat.name.toLowerCase().replace(/\s+/g, '-'),
    image: `/images/products/${cat.name} A${cat.name.includes('Green') && !cat.name.includes('Long') ? '-01' : ''}.webp`,
    alt: cat.displayName,
    category: 'Premium Quality',
  }));
};

export default function CategorySection() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setIsNavigating(slug);
    // Redirect to products page with category filter
    router.push(`/products?category=${slug}`);
  };

  useEffect(() => {
    try {
      // In a real app, you would fetch this from an API
      // For now, we'll use our local function
      const fetchedCategories = getCategories();
      setCategories(fetchedCategories);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load categories');
      setIsLoading(false);
      console.error('Error loading categories:', err);
    }
  }, []);

  if (isLoading) {
    return (
      <section className="bg-[#f9f9f9] py-20 w-full">
        <div className="w-full max-w-[calc(100%-32px)] mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          </div>
        </div>
      </section>
    );
  }


  if (error) {
    return (
      <section className="bg-[#f9f9f9] py-20 w-full">
        <div className="w-full max-w-[calc(100%-32px)] mx-auto px-4">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f9f9f9] py-20 w-full">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-0">Our Categories</h2>
          <Link
            href="/products"
            className="inline-block bg-white border-2 border-amber-600 text-amber-600 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            View All Categories
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              onClick={(e) => handleCategoryClick(e, category.slug)}
              className={`group relative block rounded-[28px] overflow-hidden border border-gray-200 shadow-sm transition-all hover:shadow-2xl h-[580px] bg-white ${
                isNavigating === category.slug ? 'opacity-70' : ''
              }`}
              aria-disabled={isNavigating === category.slug}
            >
              {isNavigating === category.slug && (
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              {/* Full Height Image */}
              <div className="relative w-full h-full">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />

                {/* Premium Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center shadow-sm">
                    <Info className="w-3 h-3 mr-1" />
                    Categories
                  </span>
                </div>

                {/* White box at bottom with text */}
                <div className="absolute bottom-0 w-full bg-white py-5 px-4">
                  <p className="text-xs text-gray-400">{category.category}</p>
                  <h3 className="text-base font-medium text-gray-800 mt-1 leading-tight line-clamp-2">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import products from '../../public/data/products.json';

type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
};

type ProductsData = {
  bestSellers: Product[];
};

const typedProducts = products as ProductsData;

export default function PremiumProduct() {
  const router = useRouter();
  const [navigatingId, setNavigatingId] = useState<string | null>(null);

  // Get specific products by ID (4, 8, 12, 16)
  const featuredProducts = typedProducts.bestSellers.filter(
    product => [4, 8, 12, 16].includes(product.id)
  );

  const handleProductClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    setNavigatingId(category);
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="bg-[#f9f9f9] py-16 w-full">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-0">Featured Products</h2>
          <Link
            href="/products"
            className="inline-block bg-white border-2 border-amber-600 text-amber-600 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            View All Products
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
          {featuredProducts.map((product: Product) => (
            <Link
              key={product.id}
              href={`/products?category=${encodeURIComponent(product.category)}`}
              onClick={(e) => handleProductClick(e, product.category)}
              className={`group relative block rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all hover:shadow-lg sm:hover:shadow-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] bg-white ${navigatingId === product.category ? 'opacity-80' : ''
                }`}
              aria-disabled={navigatingId === product.category}
            >
              {navigatingId === product.category && (
                <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
              )}
              {/* Full Height Image */}
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  quality={90}
                  priority
                  loading="eager"
                />

                {/* Product info */}
                <div className="absolute bottom-0 w-full bg-white/90 py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4">
                  <h3 className="text-sm sm:text-base font-medium text-gray-800 leading-tight line-clamp-2">{product.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

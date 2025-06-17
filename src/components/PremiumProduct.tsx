'use client';

import Image from 'next/image';
import Link from 'next/link';
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
  // Get specific products by ID (4, 8, 12, 16)
  const featuredProducts = typedProducts.bestSellers.filter(
    product => [4, 8, 12, 16].includes(product.id)
  );

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featuredProducts.map((product: Product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative block rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-shadow hover:shadow-lg h-[580px] bg-white"
            >
              {/* Full Height Image */}
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  quality={100}
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />

                {/* Product info */}
                <div className="absolute bottom-0 w-full bg-white/90 py-4 px-4">
                  <h3 className="text-base font-medium text-gray-800 leading-tight">{product.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

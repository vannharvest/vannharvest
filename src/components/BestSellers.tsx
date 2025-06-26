'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.bestSellers || []);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="bg-[#f9f9f9] py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f9f9f9] py-16 w-full">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-0">Best Sellers</h2>
          <Link
            href="/products"
            className="inline-block bg-white border-2 border-amber-600 text-amber-600 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            View All Products
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative block rounded-[28px] overflow-hidden border border-gray-200 shadow-sm transition-shadow hover:shadow-2xl h-[580px] bg-white"
            >
              {/* Full Height Image */}
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority
                />

                {/* White box at bottom with text */}
                <div className="absolute bottom-0 w-full bg-white py-5 px-4">
                  <p className="text-xs text-gray-400">{product.category}</p>
                  <h3 className="text-base font-medium text-gray-800 mt-1 leading-tight line-clamp-2">{product.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import products from '../../public/data/products.json';

interface Product {
  id: number | string;
  name: string;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductsData {
  bestSellers: Product[];
  blackProducts?: Product[];
}

// Type assertion with validation
const typedProducts = products as unknown as ProductsData;

export default function PremiumProduct() {
  const router = useRouter();
  const [navigatingId, setNavigatingId] = useState<string | null>(null);

  const featuredProducts = [
    {
      id: 'gold-long',
      name: 'Gold Long',
      image: '/images/products/Gold Long.webp',
      category: 'golden-long',
      inStock: true
    },
    {
      id: 'gold-round',
      name: 'Gold Round',
      image: '/images/products/Gold Round.webp',
      category: 'golden-round',
      inStock: true
    },
    {
      id: 'green-long',
      name: 'Green Long',
      image: '/images/products/Green Long.webp',
      category: 'green-long',
      inStock: true
    },
    {
      id: 'black-long',
      name: 'Black Long',
      image: '/images/products/Black Long_1.webp',
      category: 'black',
      inStock: true
    },
    {
      id: 'black-round',
      name: 'Black Round',
      image: '/images/products/Black Round_1.webp',
      category: 'black',
      inStock: true
    }
  ];

  const handleProductClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    setNavigatingId(category);
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const duplicatedProducts = [...featuredProducts, ...featuredProducts];

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 4 - 2rem * 3)); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="py-10 w-full bg-white overflow-hidden">
        <div className="w-full max-w-[calc(100%-32px)] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors whitespace-nowrap"
            >
              View All →
            </Link>
          </div>

          {/* Horizontal Scrolling Runner */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="animate-marquee">
                {[...featuredProducts, ...featuredProducts].map((product, index) => (
                  <div 
                    key={`${product.id}-${index}`}
                    className="relative group flex-shrink-0 w-[300px] mx-4 first:ml-0"
                  >
                    <Link 
                      href={`/products?category=${encodeURIComponent(product.category)}`}
                      onClick={(e) => handleProductClick(e, product.category)}
                      className="block"
                    >
                      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          quality={90}
                          priority={index < 4}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-gray-900 font-medium">{product.name}</h3>
                      </div>
                    </Link>
                    {navigatingId === product.category && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                        <Loader2 className="h-8 w-8 animate-spin text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './CategorySection.module.css';

export default function PremiumProduct() {
  const router = useRouter();
  const [navigatingId, setNavigatingId] = useState<string | null>(null);

  const featuredProducts = [
    {
      id: 'gold-long',
      name: 'Gold Long',
      image: '/images/products/top-img/golden-long-raisins.avif',
      category: 'golden-long',
      inStock: true
    },
    {
      id: 'gold-round',
      name: 'Gold Round',
      image: '/images/products/top-img/golden-round-raisins.avif',
      category: 'golden-round',
      inStock: true
    },
    {
      id: 'green-long',
      name: 'Green Long',
      image: '/images/products/top-img/green-long-raisins.avif',
      category: 'green-long',
      inStock: true
    },
      {
      id: 'green-round',
      name: 'Green Round',
      image: '/images/products/top-img/green-round-raisins.avif',
      category: 'green-round',
      inStock: true
    },
    {
      id: 'black-round-seedless',
      name: 'Black Round Seedless',
      image: '/images/products/top-img/black-round-seedless-raisins.avif',
      category: 'black',
      inStock: true
    },
    {
      id: 'black-round-seeded',
      name: 'Black Round Seeded',
      image: '/images/products/top-img/black-round-seeded-raisins.avif',
      category: 'black',
      inStock: true
    }
  ];

  const handleProductClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    setNavigatingId(category);
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-6 w-full overflow-hidden">
        <div className="w-full max-w-[calc(100%-32px)] mx-auto bg-white rounded-2xl p-4">
          <div className="animate-pulse h-[400px] w-full"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 w-full overflow-hidden">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto bg-white rounded-2xl p-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Our Products
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
              <div className={styles.animateMarquee}>
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
                          sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
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
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Natural Raisins',
    category: 'Premium Quality',
    image: 'https://images.unsplash.com/photo-1539519532614-723937382b86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Natural Raisins',
    slug: 'natural-raisins',
  },
  {
    id: 2,
    name: 'Golden Raisins',
    category: 'Premium Quality',
    image: 'https://plus.unsplash.com/premium_photo-1687014519727-7f85c60ca12e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Golden Raisins',
    slug: 'golden-raisins',
  },
  {
    id: 3,
    name: 'Black Raisins',
    category: 'Premium Quality',
    image: 'https://images.unsplash.com/photo-1518519338886-9d8f39707fa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Black Raisins',
    slug: 'black-raisins',
  },
];

export default function CategorySection() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group relative block rounded-[28px] overflow-hidden border border-gray-200 shadow-sm transition-shadow hover:shadow-2xl h-[580px] bg-white"
            >
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
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Premium
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

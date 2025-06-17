'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import productsData from '../../../public/data/products.json';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface ProductsData {
  bestSellers: Product[];
}

const typedProductsData = productsData as ProductsData;

// ✅ Friendly labels for dropdown
const categoryLabels: Record<string, string> = {
  'golden-long': 'Golden Long',
  'golden-round': 'Golden Round',
  'green-long': 'Green Long',
  'green-round': 'Green Round',
};

export default function ProductsPage() {
  const products = typedProductsData.bestSellers;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedName, setSelectedName] = useState('all');

  // Normalize category values
  const allCategories = products.map((p) => p.category.trim().toLowerCase());
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ['all', ...uniqueCategories];

  const names = ['all', ...products.map((p) => p.name)];

  const filteredProducts = products.filter((product) => {
    const productCategory = product.category.trim().toLowerCase();
    const categoryMatch = selectedCategory === 'all' || productCategory === selectedCategory;
    const nameMatch = selectedName === 'all' || product.name === selectedName;
    return categoryMatch && nameMatch;
  });

  return (
    <div className="bg-[#fefdfb] min-h-screen px-4 sm:px-6 md:px-8 py-12 font-serif">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar Filters */}
        <aside className="text-sm text-green-900 space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Filter by Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border rounded-md p-2 bg-white text-green-800"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : categoryLabels[cat] || cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Filter by Product Name</label>
            <select
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="w-full border rounded-md p-2 bg-white text-green-800"
            >
              {names.map((name) => (
                <option key={name} value={name}>
                  {name === 'all' ? 'All Products' : name}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-md">
                  Best Seller
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-md font-semibold text-green-900">{product.name}</h3>
                <p className="text-sm text-green-700 mt-1">
                  {categoryLabels[product.category.trim().toLowerCase()] || product.category}
                </p>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}

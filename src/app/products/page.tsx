'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(typedProductsData.bestSellers);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedName, setSelectedName] = useState('all');

  // Get category from URL on component mount
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Filter products when selectedCategory or selectedName changes
  useEffect(() => {
    let filtered = [...typedProductsData.bestSellers];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category.trim().toLowerCase() === selectedCategory
      );
    }
    
    if (selectedName !== 'all') {
      filtered = filtered.filter((product) => product.name === selectedName);
    }
    
    setProducts(filtered);
  }, [selectedCategory, selectedName]);

  // Get unique categories from all products
  const allCategories = typedProductsData.bestSellers.map(p => p.category.trim().toLowerCase());
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ['all', ...uniqueCategories];

  // Get unique product names based on selected category
  const getFilteredProductNames = () => {
    let filtered = [...typedProductsData.bestSellers];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category.trim().toLowerCase() === selectedCategory
      );
    }
    
    const names = filtered.map(p => p.name);
    return ['all', ...new Set(names)];
  };
  
  const productNames = getFilteredProductNames();
  
  // Update URL when name changes
  const updateName = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (name === 'all') {
      params.delete('name');
    } else {
      params.set('name', name);
    }
    window.history.pushState({}, '', `?${params.toString()}`);
    setSelectedName(name);
  };
  
  // Get name from URL on component mount
  useEffect(() => {
    const name = searchParams.get('name');
    if (name) {
      setSelectedName(name);
    }
  }, [searchParams]);

  // Update URL when category changes
  const updateCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    window.history.pushState({}, '', `?${params.toString()}`);
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#fefdfb] min-h-screen px-4 sm:px-6 md:px-8 py-12 font-serif">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar Filters */}
        <aside className="text-sm text-green-900 space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Filter by Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => updateCategory(e.target.value)}
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
              onChange={(e) => updateName(e.target.value)}
              className="w-full border rounded-md p-2 bg-white text-green-800"
              disabled={productNames.length <= 1}
            >
              {productNames.map((name) => (
                <option key={name} value={name}>
                  {name === 'all' ? 'All Products' : name}
                </option>
              ))}
              {productNames.length <= 1 && (
                <option value="all">No other products in this category</option>
              )}
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.length > 0 ? (
            products.map((product: Product, index: number) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

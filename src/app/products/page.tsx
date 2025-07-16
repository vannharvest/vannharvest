'use client';

import { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import productsData from '../../../public/data/products.json';
import Loading from './loading';

interface Product {
  id: number | string;  // Allow both number and string IDs
  name: string;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductsData {
  bestSellers: Product[];
  blackProducts?: Product[];
}

const typedProductsData = productsData as ProductsData;

// Combine all products from different categories with unique IDs
const allProducts = [
  ...(typedProductsData.bestSellers?.map(p => ({...p, id: `b-${p.id}`})) || []),
  ...(typedProductsData.blackProducts?.map(p => ({...p, id: `blk-${p.id}`})) || [])
];

// ✅ Friendly labels for dropdown
const categoryLabels: Record<string, string> = {
  'golden-long': 'Golden Long',
  'golden-round': 'Golden Round',
  'green-long': 'Green Long',
  'green-round': 'Green Round',
  'black': 'Black',
};

import PageWrapper from '@/components/PageWrapper';

// This component is wrapped in Suspense to handle client-side features
function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedName, setSelectedName] = useState('all');

  // Get category from URL on component mount
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Memoize filtered products to prevent unnecessary re-renders
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];
    
    if (selectedCategory && selectedCategory !== 'all') {
      // Check if the selected category matches any of our predefined categories
      const categoryMap: {[key: string]: string} = {
        'black-raisins': 'black',
        'golden-raisins': 'golden',
        'green-raisins': 'green',
        'sultanas': 'sultanas',
        'currants': 'currants',
        'organic-raisins': 'organic',
        'seedless-raisins': 'seedless',
        'jumbo-raisins': 'jumbo',
        'flame-raisins': 'flame',
        'munakka-raisins': 'munakka'
      };

      const categoryValue = categoryMap[selectedCategory];
      if (categoryValue) {
        filtered = filtered.filter(
          (product) => product.category.trim().toLowerCase() === selectedCategory
        );
      }
    }
    
    if (selectedName !== 'all') {
      filtered = filtered.filter((product) => product.name === selectedName);
    }
    
    console.log('Filtered products:', filtered);
    return filtered;
  }, [selectedCategory, selectedName]);

  // Update products when filtered products change
  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  // Get unique categories from all products
  const allCategories = allProducts.map(p => p.category.trim().toLowerCase());
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ['all', ...uniqueCategories];

  // Get unique product names based on selected category
  const getFilteredProductNames = () => {
    let filtered = [...allProducts];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category.trim().toLowerCase() === selectedCategory
      );
    }
    
    // Get unique names while preserving original case
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
    <PageWrapper className="pt-28">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sticky Sidebar Filters - Sticky on all devices */}
        <div className="sticky top-28 z-10 lg:z-0 mt-4 lg:mt-0 h-fit">
          <div className="lg:sticky lg:top-32 lg:w-64">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm space-y-4 sm:space-y-6 border border-gray-100 mx-4 sm:mx-0 lg:mx-0">
              <h2 className="text-lg font-bold text-green-900">Filters</h2>
              <div>
                <label className="block mb-2 text-sm font-medium text-green-800">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => updateCategory(e.target.value)}
                  className="w-full text-sm border border-gray-300 rounded-lg p-2 bg-white text-green-800 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : categoryLabels[cat] || cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-green-800">Filter by Product</label>
                <select
                  value={selectedName}
                  onChange={(e) => updateName(e.target.value)}
                  className="w-full text-sm border border-gray-300 rounded-lg p-2 bg-white text-green-800 focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 px-2 sm:px-4 lg:px-0 lg:pt-4">
          <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {products.length > 0 ? (
              products.map((product: Product, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-sm sm:shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <div className="relative w-full h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          priority={index < 4} // Prioritize first 4 images for LCP
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          unoptimized={process.env.NODE_ENV !== 'production'} // Only optimize in production
                          onError={(e) => {
                            console.error('Error loading image:', product.image, e);
                            // Try to load the image with encoded spaces as a fallback
                            const img = e.target as HTMLImageElement;
                            img.src = encodeURI(product.image);
                          }}
                        />
                      </div>
                    </div>
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-green-100 text-green-800 text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded sm:rounded-md">
                      Best Seller
                    </span>
                  </div>
                  <div className="p-2 sm:p-4 text-center">
                    <h3 className="text-sm sm:text-md font-semibold text-green-900 line-clamp-2 h-10 sm:h-auto">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-green-700 mt-0.5 sm:mt-1">
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
    </PageWrapper>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsContent />
    </Suspense>
  );
}

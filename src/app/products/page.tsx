'use client';

import { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import productsData from '../../../public/data/products.json';
import Loading from './loading';
import PageWrapper from '@/components/PageWrapper';

// Products structured data for SEO
const productsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Vann Harvest Raisin Products",
  "description": "Premium quality raisins including black, golden, and green varieties",
  "itemListElement": [
    // Black Raisins
    {
      "@type": "Product",
      "name": "Black Round Seeded Raisins",
      "description": "Naturally sun-dried black seeded raisins with rich flavor",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Black Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Black Round Seedless Raisins",
      "description": "Premium seedless black raisins perfect for baking and snacking",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Black Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },

    // Golden Raisins
    {
      "@type": "Product",
      "name": "Golden Round Raisins - Grade A",
      "description": "Premium golden raisins with natural sweetness",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Round Raisins - Grade AA",
      "description": "Superior quality golden raisins for gourmet use",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Round Raisins - Grade AAA",
      "description": "Finest quality golden raisins, hand-selected",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Round Raisins - Premium",
      "description": "Luxury golden raisins for discerning customers",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Long Raisins - Grade A",
      "description": "Premium long golden raisins, perfect for confectionery",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Long Raisins - Grade AA",
      "description": "Superior long golden raisins for professional bakers",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Long Raisins - Grade AAA",
      "description": "Finest quality long golden raisins, extra large size",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Golden Long Raisins - Premium",
      "description": "Luxury long golden raisins, hand-selected premium quality",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Golden Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },

    // Green Raisins
    {
      "@type": "Product",
      "name": "Green Round Raisins - Grade A",
      "description": "Naturally sweet green raisins, perfect for healthy snacks",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Round Raisins - Grade AA",
      "description": "Premium green raisins with superior taste and texture",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Round Raisins - Grade AAA",
      "description": "Finest quality green raisins, carefully selected",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Round Raisins - Premium",
      "description": "Luxury green raisins for gourmet culinary use",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Long Raisins - Grade A",
      "description": "Premium long green raisins, naturally sweet",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Long Raisins - Grade AA",
      "description": "Superior long green raisins for health-conscious consumers",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Long Raisins - Grade AAA",
      "description": "Finest quality long green raisins, extra large size",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    },
    {
      "@type": "Product",
      "name": "Green Long Raisins - Premium",
      "description": "Luxury long green raisins, hand-selected premium quality",
      "brand": {
        "@type": "Brand",
        "name": "Vann Harvest"
      },
      "category": "Green Raisins",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Vann Harvest Pvt. Ltd."
        }
      }
    }
  ]
};

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

const typedProductsData = productsData as ProductsData;

// Combine all products with unique prefixed IDs
const allProducts: Product[] = [
  ...typedProductsData.bestSellers.map(p => ({ ...p, id: `b-${p.id}` })),
  ...(typedProductsData.blackProducts?.map(p => ({ ...p, id: `blk-${p.id}` })) || []),
];

// Maps for labels and URL categories
const categoryLabels: Record<string, string> = {
  'golden-long': 'Golden Long',
  'golden-round': 'Golden Round',
  'green-long': 'Green Long',
  'green-round': 'Green Round',
  'black': 'Black',
};

const urlCategoryMap: Record<string, string> = {
  'black-raisins': 'black',
  'golden-raisins': 'golden',
  'green-raisins': 'green',
  'sultanas': 'sultanas',
  'currants': 'currants',
  'organic-raisins': 'organic',
  'seedless-raisins': 'seedless',
  'jumbo-raisins': 'jumbo',
  'flame-raisins': 'flame',
  'munakka-raisins': 'munakka',
  'golden-long': 'golden-long',
  'golden-round': 'golden-round',
  'green-long': 'green-long',
  'green-round': 'green-round'
};

function ProductsContent() {
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedName = searchParams.get('name') || 'all';

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategory !== 'all') {
      const categoryValue = urlCategoryMap[selectedCategory] || selectedCategory;
      filtered = filtered.filter(
        (p) => p.category.trim().toLowerCase() === categoryValue.toLowerCase()
      );
    }

    if (selectedName !== 'all') {
      filtered = filtered.filter(
        (p) => p.name.trim().toLowerCase() === selectedName.toLowerCase()
      );
    }

    return filtered;
  }, [selectedCategory, selectedName]);

  // Unique categories for dropdown
  const categories = useMemo(() => {
    const unique = Array.from(new Set(allProducts.map(p => p.category.trim().toLowerCase())));
    return ['all', ...unique];
  }, []);

  // Unique product names for dropdown, filtered by selected category
  const productNames = useMemo(() => {
    if (selectedCategory === 'all') {
      return ['all', ...new Set(allProducts.map(p => p.name))];
    }
    const filtered = allProducts.filter(
      (p) => p.category.trim().toLowerCase() === selectedCategory.toLowerCase()
    );
    return ['all', ...new Set(filtered.map(p => p.name))];
  }, [selectedCategory]);

  // URL helpers
  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  return (
    <PageWrapper className="pt-28">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="sticky top-28 z-10 lg:z-0 mt-4 lg:mt-0 h-fit">
          <div className="lg:sticky lg:top-32 lg:w-64">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 mx-4 sm:mx-0">
              <h2 className="text-lg font-bold text-green-900">Filters</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-green-800">Filter by Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => updateParam('category', e.target.value)}
                    className="w-full text-sm border rounded-lg p-2 bg-white text-green-800 focus:ring-2 focus:ring-green-500"
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
                    onChange={(e) => updateParam('name', e.target.value)}
                    className="w-full text-sm border rounded-lg p-2 bg-white text-green-800 focus:ring-2 focus:ring-green-500"
                    disabled={productNames.length <= 1}
                  >
                    {productNames.map((name) => (
                      <option key={name} value={name}>
                        {name === 'all' ? 'All Products' : name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 px-2 sm:px-4 lg:px-0 lg:pt-4">
          <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority={index < 4}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized={process.env.NODE_ENV !== 'production'}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = encodeURI(product.image);
                      }}
                    />
                    {/* <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Best Seller
                    </span> */}
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="text-sm font-semibold text-green-900 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-green-700 mt-1">
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
        </main>
      </div>

      {/* Products structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsStructuredData) }}
      />
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

import Link from 'next/link';
import { products } from '@/lib/products';

export default function ProductsPage() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Our Premium Raisin Products
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-amber-100">
            Discover our wide range of premium quality raisins, carefully selected and processed to meet the highest standards.
          </p>
        </div>
      </div>

      {/* All Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a variety of raisin types to meet different culinary needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-amber-100 flex items-center justify-center overflow-hidden">
                <div className="text-amber-800 text-lg font-medium">
                  {product.name} Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">HSN: {product.hsnCode}</span>
                  <Link 
                    href={`/products/${product.slug}`}
                    className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for Something Specific?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer custom processing and packaging solutions to meet your specific requirements. 
            Contact us today to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
          >
            Contact Us
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

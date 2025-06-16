import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Product, getProductBySlug } from '@/lib/products';

// This is a workaround for the TypeScript error
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Helper function to get related products
async function getRelatedProducts(currentProductId: string): Promise<Product[]> {
  const { products } = await import('@/lib/products');
  return products.filter(p => p.id !== currentProductId).slice(0, 3);
}

export default async function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
    return null;
  }

  const relatedProducts = await getRelatedProducts(product.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div className="flex items-center">
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link href="/products" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Products</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <span className="ml-4 text-sm font-medium text-gray-500">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mt-6 lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Image */}
            <div className="mb-8 lg:mb-0">
              <div className="bg-amber-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-contain h-full"
                  />
                ) : (
                  <div className="text-amber-800 text-xl font-medium">
                    {product.name} Image
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:pl-8">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="mt-4">
                <p className="text-2xl text-gray-900 font-semibold">
                  {product.price}
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>
                <div className="mt-2 text-gray-600 space-y-4">
                  <p>{product.description}</p>
                  <p>{product.longDescription}</p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="w-full bg-amber-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Add to cart
                </button>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-amber-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">24 reviews</p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Specifications</h2>
                <div className="mt-4 space-y-6">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex text-sm">
                      <dt className="font-medium text-gray-900 w-1/3">{spec.split(':')[0]}</dt>
                      <dd className="text-gray-600">{spec.split(':').slice(1).join(':').trim()}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-amber-100 flex items-center justify-center">
                {relatedProduct.image ? (
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="object-contain h-full"
                  />
                ) : (
                  <div className="text-amber-800">{relatedProduct.name} Image</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                <p className="text-amber-600 font-medium">{relatedProduct.price}</p>
                <div className="mt-4">
                  <Link href={`/products/${relatedProduct.slug}`} className="text-sm font-medium text-amber-600 hover:text-amber-500">
                    View details<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  hsnCode?: string;
}

export default function ProductCard({ name, description, image, slug, hsnCode }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-amber-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-amber-800">Product Image</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        {hsnCode && (
          <p className="text-sm text-gray-500 mb-3">HSN: {hsnCode}</p>
        )}
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          href={`/products/${slug}`}
          className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

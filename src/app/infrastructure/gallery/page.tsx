import { ImageIcon } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import PageWrapper from '@/components/PageWrapper';

const gallerySections = [
  {
    title: 'Our Farm',
    description: 'Explore our lush raisin farms where quality begins',
    images: Array(4).fill({
      id: 1,
      src: '/images/infrastructure/farm.jpg',
      alt: 'Our farm',
      title: 'Farm View'
    })
  },
  {
    title: 'Processing',
    description: 'State-of-the-art processing facilities ensuring quality',
    images: Array(4).fill({
      id: 2,
      src: '/placeholder-processing.jpg',
      alt: 'Processing',
      title: 'Processing Facility'
    })
  },
  {
    title: 'Products',
    description: 'Discover our premium raisin varieties',
    images: Array(4).fill({
      id: 3,
      src: '/placeholder-products.jpg',
      alt: 'Our products',
      title: 'Product Range'
    })
  },
  {
    title: 'Team',
    description: 'Meet our dedicated team behind the scenes',
    images: Array(4).fill({
      id: 4,
      src: '/placeholder-team.jpg',
      alt: 'Our team',
      title: 'Vann Harvest Team'
    })
  }
];

export default function GalleryPage() {
  return (
    <PageWrapper>
      <PageLayout
        title="Our Gallery"
        description="A visual journey through our farm, processing facilities, and premium raisin products"
        bgColor="bg-amber-700"
        textColor="text-amber-100"
      >
      {/* Main Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {gallerySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-green-900 mb-2">{section.title}</h2>
              <p className="text-lg text-green-700 max-w-3xl mx-auto">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.images.map((image, index) => (
                <div 
                  key={`${sectionIndex}-${index}`} 
                  className="group relative aspect-square bg-green-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                    <span className="text-green-800 font-medium">{section.title} {index + 1}</span>
                    <span className="text-sm text-green-600 mt-1">Click to view</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold">{image.title} {index + 1}</h3>
                      <p className="text-sm text-green-100">{section.title} Collection</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">See Our Products in Action</h2>
          <p className="text-lg text-green-800 max-w-2xl mx-auto mb-8">
            Interested in learning more about our premium raisins? Contact us for product samples and wholesale inquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-700 text-base font-medium rounded-lg shadow-sm text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
      </PageLayout>
    </PageWrapper>
  );
}

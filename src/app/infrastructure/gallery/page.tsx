'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import PageWrapper from '@/components/PageWrapper';

interface GalleryImage {
  src: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

// Image URLs from Unsplash with agricultural/farming theme
const imageUrls = {
  farm: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  harvest: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  processing: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80',
  quality: 'https://images.unsplash.com/photo-1573435567373-ef55d1ffd44f?auto=format&fit=crop&w=1200&q=80',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  sustainability: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
  products: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&q=80',
  hero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80'
};

const galleryImages: GalleryImage[] = [
  {
    src: imageUrls.farm,
    fallback: imageUrls.farm,
    alt: 'Sunrise over raisin vineyards',
    width: 800,
    height: 1200,
    category: 'Farm'
  },
  {
    src: imageUrls.harvest,
    fallback: imageUrls.harvest,
    alt: 'Harvesting fresh grapes',
    width: 1200,
    height: 800,
    category: 'Harvest'
  },
  {
    src: imageUrls.processing,
    fallback: imageUrls.processing,
    alt: 'Drying raisins under the sun',
    width: 800,
    height: 1000,
    category: 'Processing'
  },
  {
    src: imageUrls.quality,
    fallback: imageUrls.quality,
    alt: 'Quality inspection',
    width: 1200,
    height: 900,
    category: 'Quality'
  },
  {
    src: imageUrls.processing,
    fallback: imageUrls.processing,
    alt: 'Packaging facility',
    width: 1000,
    height: 800,
    category: 'Processing'
  },
  {
    src: imageUrls.farm,
    fallback: imageUrls.farm,
    alt: 'Organic farming practices',
    width: 800,
    height: 600,
    category: 'Farm'
  },
  {
    src: imageUrls.team,
    fallback: imageUrls.team,
    alt: 'Team members working',
    width: 1200,
    height: 800,
    category: 'Team'
  },
  {
    src: imageUrls.sustainability,
    fallback: imageUrls.sustainability,
    alt: 'Sustainable water management',
    width: 1000,
    height: 1200,
    category: 'Sustainability'
  },
  {
    src: imageUrls.products,
    fallback: imageUrls.products,
    alt: 'Final product packaging',
    width: 1200,
    height: 900,
    category: 'Products'
  },
];

const heroImage = imageUrls.hero;

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = useCallback((index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  }, []);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const lastIndex = filteredImages.length - 1;
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? lastIndex : (prev || 0) - 1));
    } else {
      setSelectedImage(prev => (prev === lastIndex ? 0 : (prev || 0) + 1));
    }
    setIsZoomed(false);
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    navigate('prev');
  }, [navigate]);

  const nextImage = useCallback(() => {
    navigate('next');
  }, [navigate]);

  // Close lightbox on ESC key and handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeLightbox, prevImage, nextImage]);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Gallery | Vann Harvest Raisin Farms</title>
        <meta
          name="description"
          content="Explore the world of Vann Harvest through our gallery — from lush raisin vineyards to eco-friendly practices in action."
        />
        <meta
          name="keywords"
          content="Vann Harvest Gallery, Raisin Farms India, Vineyard Images, Organic Raisin Production, Agriculture Photography"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vannharvest.com/gallery" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-10rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden mt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Raisin farm landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <motion.div
          className="absolute z-20 left-6 md:left-12 bottom-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight drop-shadow-lg text-white">
            Our Journey in Frames
          </h1>
          <p className="text-2xl mt-2 font-light text-white/90">
            Visual stories from farm to raisin
          </p>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <PageWrapper className="py-16 md:py-20">
        <div className="text-center mb-12 px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Our World
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A visual journey through our sustainable raisin production process
          </motion.p>
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-4 md:px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.alt}-${index}`}
              className="relative mb-6 break-inside-avoid rounded-xl overflow-hidden group cursor-zoom-in"
              onClick={() => handleImageClick(filteredImages.findIndex(img => img.src === image.src))}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] sm:aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = image.fallback;
                    target.onerror = () => {
                      target.src = `https://placehold.co/${image.width}x${image.height}/f3f4f6/9ca3af?text=Vann+Harvest`;
                    };
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-6xl h-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <motion.div 
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className={`object-contain cursor-${isZoomed ? 'zoom-out' : 'zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = filteredImages[selectedImage].fallback || 'https://placehold.co/1200x900/1a1a1a/ffffff?text=Image+Not+Available';
                    target.onerror = null;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="text-sm font-medium text-green-400 mb-1">
                    {filteredImages[selectedImage].category}
                  </p>
                  <p className="text-lg font-medium">{filteredImages[selectedImage].alt}</p>
                  <p className="text-sm text-gray-300 mt-1">
                    {selectedImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </div>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              Use arrow keys to navigate • Click to zoom • ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

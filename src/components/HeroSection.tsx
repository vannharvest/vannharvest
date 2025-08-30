'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Lazy load motion with no SSR to reduce bundle size
const MotionDiv = dynamic(() => import('framer-motion').then(m => m.motion.div), {
  ssr: false,
  loading: () => <div />
});

const VIDEO_ID = 'mpYtM-4s27g';
const VIDEO_TITLE = 'Vann Harvest - Our Farm Tour';
const THUMBNAIL_QUALITY = 'hqdefault'; // 'maxresdefault' for higher quality if needed

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  // Memoize the intersection callback
  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVideoLoaded(true);
    }
  }, []);

  // Lazy load video when in viewport
  useEffect(() => {
    const currentRef = iframeRef.current;
    if (!currentRef) return;

    // Only observe if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVideoLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '200px',
      threshold: 0.1
    });

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section
      className="relative w-full h-[calc(100vh-10rem)] mt-32 overflow-hidden rounded-2xl max-w-[calc(100%-32px)] mx-auto 4xl:max-w-none 4xl:mx-0 4xl:rounded-none 4xl:mt-0 4xl:h-screen"
      aria-label="Hero section - Premium Raisin Exporters from Vijayapura"
    >
      {/* Background video or poster */}
      <div ref={iframeRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Fallback image with optimized loading */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/${THUMBNAIL_QUALITY}.jpg`}
            alt="Vann Harvest Farm Tour"
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{
              opacity: isVideoLoaded ? 0 : 1,
              visibility: isVideoLoaded ? 'hidden' : 'visible',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            onError={(e) => {
              // Fallback to a placeholder if YouTube image fails
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/placeholder.jpg';
            }}
          />
        </div>
        
        {/* YouTube iframe - lazy loaded */}
        {isVideoLoaded && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1&playsinline=1`}
            title={VIDEO_TITLE}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-1/2 left-1/2 w-[220vh] min-w-full min-h-full h-[220vh] -translate-x-[52%] sm:-translate-x-1/2 -translate-y-1/2"
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              backgroundColor: '#000',
            }}
            aria-hidden={!isVideoLoaded}
          />
        )}
      </div>

      {/* Hero content */}
      <MotionDiv
        className="absolute z-20 left-6 md:left-12 lg:left-20 bottom-16 md:bottom-24 w-[90%] max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 10 }}
        aria-live="polite"
        aria-atomic="true"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-white mb-4 md:mb-6 [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
          Premium Raisin Exporters from Vijayapura – Trusted Since 1993
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-white/95 leading-relaxed mb-8 md:mb-10 max-w-3xl [text-shadow:_0_1px_1px_rgba(0,0,0,0.5)]">
          Discover Vann Harvest Pvt. Ltd., a leading wholesale raisin supplier in India, 
          producing naturally sun-dried, sulphur-free raisins from our farms in Vijayapura, Karnataka.
        </p>
        <Link
          href="/products"
          className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
          aria-label="Explore our premium raisin products"
        >
          Explore Our Products
        </Link>
      </MotionDiv>
    </section>
  );
}

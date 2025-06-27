'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Lazy load the YouTube iframe
  useEffect(() => {
    const currentRef = iframeRef.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load when within 200px of viewport
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [iframeRef]);

  return (
    <div className="relative w-full h-[calc(100vh-10rem)] mt-32 overflow-hidden rounded-2xl max-w-[calc(100%-32px)] mx-auto 4xl:max-w-none 4xl:mx-0 4xl:rounded-none 4xl:mt-0 4xl:h-screen">
      <style jsx>{`
        @media (min-width: 2560px) {
          .video-iframe {
            width: 100vw !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            max-width: none !important;
            min-width: 100vw !important;
            height: 100% !important;
            object-fit: cover !important;
          }
        }
      `}</style>
      {/* YouTube Background Video - Lazy Loaded */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden" ref={iframeRef}>
        <div className="absolute inset-0 w-full h-full">
          {isVideoLoaded && (
            <>
              {/* Preload a low-quality poster image for better LCP */}
              <link 
                rel="preload" 
                as="image"
                href="https://img.youtube.com/vi/mpYtM-4s27g/maxresdefault.jpg"
                imageSrcSet="
                  https://img.youtube.com/vi/mpYtM-4s27g/maxresdefault.jpg 1920w,
                  https://img.youtube.com/vi/mpYtM-4s27g/hqdefault.jpg 480w"
              />
              <iframe
                src={`https://www.youtube.com/embed/mpYtM-4s27g?autoplay=1&mute=1&loop=1&playlist=mpYtM-4s27g&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1&playsinline=1`}
                title="Background Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="video-iframe absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-[53%] -translate-y-1/2 md:-translate-x-1/2"
                style={{
                  minWidth: '200vh',
                  minHeight: '100%',
                  width: '200vh',
                  height: '200vh',
                  opacity: isVideoLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  backgroundColor: '#000',
                }}
                onLoad={() => {
                  // Fade in when loaded
                  if (iframeRef.current) {
                    iframeRef.current.style.opacity = '1';
                  }
                }}
              />
            </>
          )}
          {/* Fallback image in case the video doesn't load */}
          {!isVideoLoaded && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://img.youtube.com/vi/mpYtM-4s27g/maxresdefault.jpg)'
              }}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Black overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero Content */}
      <motion.div
        className="absolute z-20 left-6 md:left-12 lg:left-20 bottom-16 md:bottom-24 w-[90%] max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 10 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] drop-shadow-lg text-white mb-4 md:mb-6">
          Premium Raisin Exporters from Vijayapura – Trusted Since 1993
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-white/90 leading-relaxed mb-8 md:mb-10 max-w-3xl">
          Discover Vann Harvest Pvt. Ltd., a leading wholesale raisin supplier in India, 
          producing naturally sun-dried, sulphur-free raisins from our farms in Vijayapura, Karnataka.
        </p>
        <div className="flex">
          <Link 
            href="/products"
            className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
            aria-label="Explore our premium raisin products"
          >
            Explore Our Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-10rem)] mt-32 overflow-hidden rounded-2xl max-w-[calc(100%-32px)] mx-auto">
      {/* YouTube Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[120vw] h-[67.5vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2">
          <iframe
            src="https://www.youtube.com/embed/mpYtM-4s27g?autoplay=1&mute=1&loop=1&playlist=mpYtM-4s27g&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="w-full h-full"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero Content */}
      <motion.div
        className="absolute z-20 left-6 md:left-12 lg:left-20 bottom-16 md:bottom-24 w-[90%] max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 10 // 10 seconds delay
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] drop-shadow-lg text-white mb-4 md:mb-6">
          Premium Raisin Exporters from Vijayapura – Trusted Since 1993
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-white/90 leading-relaxed mb-8 md:mb-10 max-w-3xl">
          Discover Vann Harvest Pvt. Ltd., a leading wholesale raisin supplier in India, 
          producing naturally sun-dried, sulphur-free raisins from our farms in Vijayapura, Karnataka.
        </p>
        <div className="flex">
          <button 
            className="px-8 sm:px-10 py-3 sm:py-3.5 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
            aria-label="Explore our premium raisin products"
          >
            Explore Our Products
          </button>
        </div>
      </motion.div>
    </div>
  );
}

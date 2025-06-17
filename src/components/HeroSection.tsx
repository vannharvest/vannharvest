'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-6rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/Vann Harvest Pvt Ltd - Our farm.mp4"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="absolute z-20 left-6 md:left-12 bottom-20 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">Harvesting Nature&apos;s Best</h1>
        <p className="text-2xl mt-2 font-light">Pure, natural, and sustainably grown</p>
        <button className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition shadow-lg hover:shadow-xl">
          Explore Our Products
        </button>
      </motion.div>
    </div>
  );
}

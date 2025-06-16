'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-6rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="Beautiful green farm landscape with morning mist"
          fill
          className="object-cover"
          priority
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

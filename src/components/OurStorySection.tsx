'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Sprout } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurStorySection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            variants={item}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-amber-500/10 mix-blend-overlay"></div>
              <Image
                src="/images/nutrient-rich-soil-vineyard-cultivation.webp"
                alt="Vann Harvest Legacy - Premium Raisin Production from Nutrient-Rich Soil"
                width={800}
                height={1000}
                className="w-full h-auto object-cover aspect-[3/4]"
                priority
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-3/4 h-3/4 bg-green-100/30 rounded-2xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            variants={container}
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 text-green-600 text-sm font-semibold tracking-wider uppercase mb-4">
                <Leaf className="w-4 h-4" /> Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Rooted in Tradition, <span className="text-green-600">Growing with Innovation</span>
              </h2>
            </motion.div>

            <motion.div variants={item} className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Vann Harvest, every raisin tells a story - a story of sun-drenched vineyards, time-honored traditions, and a relentless pursuit of excellence. What began as a humble family farm has blossomed into a symbol of quality in the global raisin industry.
              </p>
              <p>
                Nestled in the fertile lands of Vijayapura, our journey is one of passion meeting innovation. We&apos;ve perfected the art of raisin-making while staying true to our roots, ensuring each golden piece carries the essence of our heritage.
              </p>
              <p className="font-medium text-gray-800">
                Today, we stand proud as a bridge between traditional farming wisdom and modern food processing, bringing you nature&apos;s candy at its finest.
              </p>
            </motion.div>

            <motion.div variants={item} className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="/our-story" 
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full flex items-center gap-2 transition-colors group"
              >
                Discover Our Story
                <Sprout className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/products" 
                className="px-8 py-4 bg-white text-gray-800 font-medium rounded-full border-2 border-gray-200 hover:border-green-400 transition-colors flex items-center gap-2 group"
              >
                Explore Products
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div variants={item} className="pt-6 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-green-600">30+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-green-600">100%</p>
                <p className="text-sm text-gray-500">Natural & Pure</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-green-600">100+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-green-600">300+</p>
                <p className="text-sm text-gray-500">Registered Farmers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-green-600">500+</p>
                <p className="text-sm text-gray-500">Employment</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Search, ArrowLeft, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-green-800 mb-4">404</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you&apos;re looking for seems to have wandered off to the vineyard.
            Don&apos;t worry, our premium raisins are still here and waiting for you!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-2 bg-white hover:bg-green-50 text-green-800 border-2 border-green-600 px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Products
          </Link>
        </motion.div>

        {/* Alternative Options */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Looking for something specific?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/our-story" className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Our Story
            </Link>
            <Link href="/products" className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Products
            </Link>
            <Link href="/blog" className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Blog
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-green-600 text-white rounded-lg p-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Need Help?</span>
          </div>
          <p className="text-green-100 mb-3">
            Can&apos;t find what you&apos;re looking for? Our team is here to help!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-800 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-colors"
          >
            Contact Us
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

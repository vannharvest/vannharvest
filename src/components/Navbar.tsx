'use client';


import Link from 'next/link';
import { Facebook, Instagram, Twitter, Search, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 pt-4 mb-4">
      <div className="w-full bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-800">Vann Harvest</span>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex gap-6 text-md font-medium text-green-800">
          <Link href="/" className="text-orange-600">home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">about</Link>
          <Link href="/blog">blog</Link>
        </nav>

        {/* Social Icons instead of Login */}
        <div className="flex items-center gap-4 text-green-800 text-sm">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-orange-500 hover:text-orange-700" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-orange-500 hover:text-orange-700" />
          </Link>
          <Link href="https://x.com" target="_blank" aria-label="X">
            <Twitter className="w-5 h-5 text-orange-500 hover:text-orange-700" />
          </Link>
        </div>
      </div>

      {/* Mobile Nav (optional dropdown on toggle) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg p-4 shadow-md space-y-3">
          <Link href="/" className="block text-orange-600">home</Link>
          <Link href="/shop" className="block text-orange-600">shop</Link>
          <Link href="/about" className="block text-orange-600">about</Link>
          <Link href="/blog" className="block text-orange-600">blog</Link>
        </div>
      )}
      </div>
    </header>
  );
}

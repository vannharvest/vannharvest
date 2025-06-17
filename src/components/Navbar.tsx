'use client';


import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Navbar() {

  return (
    <header className="w-full px-4 pt-4 mb-4">
      <div className="w-full bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block h-12 w-auto">
            <Image
              src="/images/logo/Vann-Harvest-Original-Logo.png"
              alt="Vann Harvest Logo"
              width={150}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
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
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavItemProps) => (
  <Link 
    href={href} 
    className={`text-gray-100 hover:text-orange-600 transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-800 text-white">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Vann Harvest</h3>
            <p className="text-gray-100">
              Exporting premium quality raisins from India to global markets with a commitment to quality and sustainability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/products">Products</NavLink></li>
              <li><NavLink href="/OurStory">Our Story</NavLink></li>
              <li><NavLink href="/blog">Blog</NavLink></li>
            </ul>
          </div>
          
          {/* Infrastructure */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Infrastructure</h4>
            <ul className="space-y-3">
              <li><NavLink href="/infrastructure/sustainability">Sustainability</NavLink></li>
              <li><NavLink href="/infrastructure/gallery">Gallery</NavLink></li>
              <li><NavLink href="/infrastructure/certifications">Certifications</NavLink></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic space-y-3 text-gray-100">
              <p>123 Raisin Street</p>
              <p>Farmland, FL 12345</p>
              <p>India</p>
              <p>Email: info@vannharvest.com</p>
              <p>Phone: +91 1234567890</p>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-100 text-sm">
            &copy; {currentYear} Vann Harvest. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-orange-600 transition-colors p-2"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-orange-600 transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-orange-600 transition-colors p-2"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="bg-green-800 text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 max-w-xs">
            <h3 className="text-2xl font-bold text-white">Vann Harvest</h3>
            <p className="text-gray-200 leading-relaxed">
              Exporting premium quality raisins from India to global markets with a commitment to quality and sustainability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:pl-4">
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/products">Products</NavLink></li>
              <li><NavLink href="/OurStory">Our Story</NavLink></li>
              <li><NavLink href="/blog">Blog</NavLink></li>
            </ul>
          </div>
          
          {/* Infrastructure */}
          <div className="lg:pl-4">
            <h4 className="text-lg font-semibold text-white mb-5">Infrastructure</h4>
            <ul className="space-y-3">
              <li><NavLink href="/infrastructure/sustainability">Sustainability</NavLink></li>
              <li><NavLink href="/infrastructure/gallery">Gallery</NavLink></li>
              <li><NavLink href="/infrastructure/certifications">Certifications</NavLink></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="lg:pl-4">
            <h4 className="text-lg font-semibold text-white mb-5">Contact Us</h4>
            <address className="not-italic space-y-3 text-gray-200">
              <p className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Raisin Street, Farmland, FL 12345, India</span>
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@vannharvest.com" className="hover:text-orange-500 transition-colors">info@vannharvest.com</a>
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+911234567890" className="hover:text-orange-500 transition-colors">+91 1234567890</a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm text-center md:text-left">
            &copy; {currentYear} Vann Harvest. All rights reserved.
          </p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:bg-green-700 transition-colors p-2 rounded-full"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:bg-green-700 transition-colors p-2 rounded-full"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:bg-green-700 transition-colors p-2 rounded-full"
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

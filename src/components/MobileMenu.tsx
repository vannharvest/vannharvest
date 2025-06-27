'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isActive: (path: string) => string;
  isInfrastructureActive: () => string;
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  isActive, 
  isInfrastructureActive 
}: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile menu */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl">
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="text-lg font-semibold text-green-800">Menu</span>
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-1">
            <Link 
              href="/" 
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/')}`}
            >
              Home
            </Link>
            
            <Link 
              href="/OurStory" 
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/OurStory')}`}
            >
              Our Story
            </Link>
            
            <Link 
              href="/products" 
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/products')}`}
            >
              Products
            </Link>
            
            <div className="space-y-1">
              <Link 
                href="/infrastructure" 
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${isInfrastructureActive()}`}
              >
                <span>Infrastructure</span>
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </Link>
              
              <div className="pl-6 space-y-1">
                <Link 
                  href="/infrastructure/manufacturing" 
                  className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-50"
                >
                  Manufacturing
                </Link>
                <Link 
                  href="/infrastructure/quality" 
                  className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-50"
                >
                  Quality Control
                </Link>
              </div>
            </div>
            
            <Link 
              href="/blog" 
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/blog')}`}
            >
              Blog
            </Link>
            
            <Link 
              href="/contact" 
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="border-t p-4">
            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

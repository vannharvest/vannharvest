'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  isActive: (path: string) => string;
  className?: string;
}

const NavLink = ({ href, children, isActive, className = '', ...props }: NavItemProps) => (
  <Link 
    href={href} 
    className={`hover:text-orange-600 transition-colors ${isActive(href)} ${className}`}
    {...props}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };
    return () => {
      handleRouteChange();
    };
  }, [pathname]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? 'text-orange-600' : 'text-green-800';
  };

  const isInfrastructureActive = () => {
    return pathname.startsWith('/infrastructure') ? 'text-orange-600' : 'text-green-800';
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-2">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto mt-2">
        <div className="w-full bg-white/80 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300">
          <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="block h-16 w-auto">
                <Image
                  src="/images/logo/Vann-Harvest-Original-Logo.png"
                  alt="Vann Harvest Logo"
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button - shown on screens < 768px */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop Navigation - shown on screens >= 768px */}
            <nav className="hidden lg:flex items-center gap-6 text-md font-medium">
              <NavLink href="/" isActive={isActive}>
                Home
              </NavLink>
              
              <NavLink href="/products" isActive={isActive}>
                Products
              </NavLink>
              
              <NavLink href="/OurStory" isActive={isActive}>
                Our Story
              </NavLink>
              
              {/* Infrastructure Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1 ${isInfrastructureActive()} hover:text-orange-600 transition-colors`}
                >
                  Infrastructure
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <NavLink 
                      href="/infrastructure/sustainability" 
                      isActive={isActive}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sustainability
                    </NavLink>
                    <NavLink 
                      href="/infrastructure/processing" 
                      isActive={isActive}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Processing
                    </NavLink>
                    <NavLink 
                      href="/infrastructure/packaging" 
                      isActive={isActive}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Packaging
                    </NavLink>
                    <NavLink 
                      href="/infrastructure/gallery" 
                      isActive={isActive}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Gallery
                    </NavLink>
                  </div>
                )}
              </div>
              
              <NavLink href="/blogs" isActive={isActive}>
                Blogs
              </NavLink>
            </nav>

            {/* Desktop Social Icons - shown on screens >= 768px */}
            <div className="hidden lg:flex items-center gap-4 text-green-800 text-sm">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-green-800 hover:text-orange-600 transition-colors" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-green-800 hover:text-orange-600 transition-colors" />
              </Link>
              <Link 
                href="https://x.com" 
                target="_blank" 
                aria-label="X"
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-green-800 hover:text-orange-600 transition-colors" />
              </Link>
              <Link 
                href="/contact" 
                className="ml-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Mobile menu, show/hide based on menu state - shown on screens < 768px */}
          <div 
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink 
                href="/" 
                isActive={isActive}
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              
              <NavLink 
                href="/products" 
                isActive={isActive}
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </NavLink>
              
              <NavLink 
                href="/OurStory" 
                isActive={isActive}
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Story
              </NavLink>
              
              <div className="px-3 py-2">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-base font-medium text-green-800 hover:text-orange-600"
                >
                  <span>Infrastructure</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-gray-200">
                    <NavLink 
                      href="/infrastructure/sustainability" 
                      isActive={isActive}
                      className="block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sustainability
                    </NavLink>
                    <NavLink 
                      href="/infrastructure/processing" 
                      isActive={isActive}
                      className="block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Processing
                    </NavLink>
                    <NavLink 
                      href="/infrastructure/packaging" 
                      isActive={isActive}
                      className="block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Packaging
                    </NavLink>
                    <NavLink 
                      href="/infrastructure/gallery" 
                      isActive={isActive}
                      className="block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Gallery
                    </NavLink>
                  </div>
                )}
              </div>
              
              <NavLink 
                href="/blogs" 
                isActive={isActive}
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </NavLink>
              
              <div className="pt-4 pb-2 border-t border-gray-200 mt-2">
                <div className="flex items-center justify-start space-x-4 px-3 py-2">
                  <Link 
                    href="https://facebook.com" 
                    target="_blank" 
                    aria-label="Facebook"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-green-800 hover:text-orange-600" />
                  </Link>
                  <Link 
                    href="https://instagram.com" 
                    target="_blank" 
                    aria-label="Instagram"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-green-800 hover:text-orange-600" />
                  </Link>
                  <Link 
                    href="https://x.com" 
                    target="_blank" 
                    aria-label="X"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-green-800 hover:text-orange-600" />
                  </Link>
                </div>
                <div className="px-3 pt-3">
                  <Link 
                    href="/contact" 
                    className="block w-full px-4 py-2 text-center bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

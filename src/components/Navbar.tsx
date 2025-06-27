'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

// Import the MobileMenu component
import MobileMenu from './MobileMenu';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    return () => {
      handleRouteChange();
    };
  }, [pathname]);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Check if the click is outside both the hamburger button and mobile menu
      const hamburgerButton = document.querySelector('[aria-label="Open main menu"], [aria-label="Close main menu"]');
      const isClickOutside = 
        !mobileMenuRef.current?.contains(event.target as Node) && 
        !hamburgerButton?.contains(event.target as Node);
      
      if (isClickOutside) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Menu state is managed by isMenuOpen state

  const isActive = (path: string) => {
    return pathname === path ? 'text-orange-600' : 'text-green-800';
  };

  const isInfrastructureActive = () => {
    return pathname.startsWith('/infrastructure') ? 'text-orange-600' : 'text-green-800';
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-2">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto mt-2">
        <div ref={mobileMenuRef} className="w-full bg-white/80 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300">
          <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
            {/* Logo - Optimized with priority and preload */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="block h-16 w-auto relative"
                aria-label="Vann Harvest Home"
              >
                <Image
                  src="/images/logo/Vann-Harvest-Original-Logo.png"
                  alt="Vann Harvest Logo"
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain"
                  priority
                  quality={85}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 768px) 120px, 180px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/logo/fallback-logo.png';
                  }}
                />
                {/* Preload the logo for better LCP */}
                <link 
                  rel="preload" 
                  as="image" 
                  href="/images/logo/Vann-Harvest-Original-Logo.png" 
                  imageSrcSet="
                    /images/logo/Vann-Harvest-Original-Logo.png 1x,
                    /images/logo/Vann-Harvest-Original-Logo@2x.png 2x"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                <span className="sr-only">
                  {isMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {isMenuOpen ? (
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
              
              <NavLink href="/OurStory" isActive={isActive}>
                Our Story
              </NavLink>
              
              <NavLink href="/products" isActive={isActive}>
                Products
              </NavLink>
              
              {/* Infrastructure Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => {
                  if (closeTimer.current) {
                    clearTimeout(closeTimer.current);
                    closeTimer.current = null;
                  }
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => {
                    setIsDropdownOpen(false);
                  }, 300);
                }}
              >
                <button 
                  className={`flex items-center gap-1 ${isInfrastructureActive()} hover:text-orange-600 transition-colors`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Infrastructure
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 ease-in-out ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
                  onMouseEnter={() => {
                    if (closeTimer.current) {
                      clearTimeout(closeTimer.current);
                      closeTimer.current = null;
                    }
                    setIsDropdownOpen(true);
                  }}
                >
                  <NavLink 
                    href="/infrastructure/sustainability" 
                    isActive={isActive}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Sustainability
                  </NavLink>
                  <NavLink 
                    href="/infrastructure/gallery" 
                    isActive={isActive}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Gallery
                  </NavLink>
                  <NavLink 
                    href="/infrastructure/certifications" 
                    isActive={isActive}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Certifications
                  </NavLink>
                </div>
              </div>
              
              <NavLink href="/blog" isActive={isActive}>
                Blog
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
            ref={mobileMenuRef}
            className={`lg:hidden transition-all duration-300 ease-in-out transform w-full ${isMenuOpen ? 'max-h-screen opacity-100 translate-y-0 visible' : 'max-h-0 opacity-0 -translate-y-2 invisible'}`}
            style={{
              transitionProperty: 'opacity, transform, max-height, visibility',
              willChange: 'opacity, transform, max-height, visibility',
            }}
            aria-hidden={!isMenuOpen}
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              <div className="px-1">
                <NavLink 
                  href="/" 
                  isActive={isActive}
                  className="block w-full px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </div>
              
              <div className="px-1">
                <NavLink 
                  href="/OurStory" 
                  isActive={isActive}
                  className="block w-full px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </NavLink>
              </div>
              
              <div className="px-1">
                <NavLink 
                  href="/products" 
                  isActive={isActive}
                  className="block w-full px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </NavLink>
              </div>
              
              <div className="w-full px-1 py-1">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-base font-medium px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-expanded={isDropdownOpen}
                  aria-controls="mobile-infrastructure-menu"
                >
                  <span className={isInfrastructureActive()}>Infrastructure</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-green-800 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    aria-hidden="true"
                  />
                </button>
                
                <div 
                  id="mobile-infrastructure-menu"
                  className={`mt-1 ml-3 pl-3 space-y-1 border-l-2 border-gray-200 overflow-hidden transition-all duration-200 ease-in-out ${isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <NavLink 
                    href="/infrastructure/sustainability" 
                    isActive={isActive}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Sustainability
                  </NavLink>
                  <NavLink 
                    href="/infrastructure/gallery" 
                    isActive={isActive}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Gallery
                  </NavLink>
                  <NavLink 
                    href="/infrastructure/certifications" 
                    isActive={isActive}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Certifications
                  </NavLink>
                </div>
              </div>
              
              <div className="px-1 mt-1">
                <NavLink 
                  href="/blog" 
                  isActive={isActive}
                  className="block w-full px-3 py-2.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </div>
              
              <div className="mt-3 pt-4 pb-2 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 px-2 py-2">
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
                    onClick={() => setIsMenuOpen(false)}
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

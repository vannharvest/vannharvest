'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/OurStory' },
  { label: 'Products', href: '/products' },
  {
    label: 'Infrastructure',
    subItems: [
      { label: 'Sustainability', href: '/infrastructure/sustainability' },
      { label: 'Gallery', href: '/infrastructure/gallery' },
      { label: 'Certifications', href: '/infrastructure/certifications' },
    ],
  },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    pathname === href || (href.startsWith('/infrastructure') && pathname.startsWith('/infrastructure'))
      ? 'text-orange-600'
      : 'text-green-800';

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!mobileMenuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg py-2 mx-4 my-2">
      <div className="w-full max-w-[calc(100%-32px)] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* LOGO */}
        <div className="flex-1 lg:flex-none">
          <Link href="/" className="relative h-16 w-40 block">
            <Image
              src="/images/logo/Vann-Harvest-Original-Logo.png"
              alt="Vann Harvest Logo"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 120px, 180px"
            />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-green-800 hover:text-orange-600 transition"
          aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-md">
          {NAV_ITEMS.map((item) =>
            item.subItems ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => {
                  if (closeTimer.current) {
                    clearTimeout(closeTimer.current);
                  }
                  setIsDropdownOpen(true);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  closeTimer.current = setTimeout(() => {
                    if (!isHovering) {
                      setIsDropdownOpen(false);
                    }
                  }, 300);
                }}
              >
                <button
                  className={`flex items-center gap-1 ${pathname.startsWith('/infrastructure') ? 'text-orange-600' : 'text-green-800'} hover:text-orange-600 transition`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div 
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => {
                      if (closeTimer.current) {
                        clearTimeout(closeTimer.current);
                      }
                      setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                      closeTimer.current = setTimeout(() => {
                        setIsDropdownOpen(false);
                      }, 300);
                    }}
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-green-800 hover:bg-green-100 transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-orange-600 transition ${isActive(item.href)}`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition hover:shadow-lg"
          >
            Contact Us
          </Link>
        </nav>

        {/* DESKTOP SOCIAL */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-green-800 hover:text-orange-600 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-green-800 hover:text-orange-600 transition" />
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden px-4 pb-4 pt-2 space-y-2">
          {NAV_ITEMS.map((item) =>
            item.subItems ? (
              <div key={item.label}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-medium ${pathname.startsWith('/infrastructure') ? 'text-orange-600' : 'text-green-800'} hover:bg-green-100 transition`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="mt-1 ml-3 pl-3 space-y-1 border-l-2 border-gray-200">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2.5 rounded-lg text-base font-medium text-green-800 hover:bg-green-100 transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full px-3 py-2.5 rounded-lg text-base font-medium ${isActive(item.href)} hover:bg-green-100 transition`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-green-800 hover:text-orange-600" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-green-800 hover:text-orange-600" />
            </Link>
          </div>
          <div className="px-3 pt-3">
            <Link
              href="/contact"
              className="block w-full px-4 py-2 text-center bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

// Dynamically import components with no SSR
const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-white" />
});

const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100" />
});

const LoadingSkeleton = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="animate-pulse">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
      <div className="mt-4 w-48 h-6 bg-gray-200 rounded mx-auto"></div>
    </div>
  </div>
);

export default function ClientLayout({
  children,
  className = "",
  hideFooter = false,
}: {
  children: React.ReactNode;
  className?: string;
  hideFooter?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {isLoading && <LoadingSkeleton />}
      <div className={`min-h-screen flex flex-col bg-[#fff8f1] relative transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        {!hideFooter && <Footer />}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

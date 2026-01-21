import React from 'react';
import Head from 'next/head';

export default function ResourceHints() {
  return (
    <Head>
      {/* Preconnect to important third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for social media and analytics */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Preload critical assets */}
      {/* 
        Note: The logo is used in Navbar (LCP candidate), but Next.js Image component handles
        loading optimization automatically. Explicit preload can cause double-download warnings
        if not matched perfectly with how Next.js requests the image.
        Disabling explicit preload to let Next.js optimize it.
      */}
      {/* <link 
        rel="preload" 
        href="/images/logo/vann-harvest-official-logo.webp" 
        as="image" 
        type="image/webp"
      /> */}
      
      {/* Prefetch important pages */}
      <link rel="prefetch" href="/products" />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/contact" />
    </Head>
  );
}

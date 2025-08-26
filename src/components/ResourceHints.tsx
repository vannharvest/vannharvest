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
      <link 
        rel="preload" 
        href="/images/logo/Vann-Harvest-Original-Logo.webp" 
        as="image" 
        type="image/webp"
      />
      
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/montserrat-v25-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Prefetch important pages */}
      <link rel="prefetch" href="/products" />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/contact" />
    </Head>
  );
}

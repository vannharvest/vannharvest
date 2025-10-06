/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
import { imageConfig } from './src/app/api/image-proxy/image-config';

const withBundleAnalyzerPlugin = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons'],
    scrollRestoration: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Use the device sizes from our config
    deviceSizes: [...imageConfig.deviceSizes],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Image formats to generate (AVIF and WebP for best performance)
    formats: [
      'image/avif',
      'image/webp'
    ] as const,
    
    // Enable blur placeholder
    minimumCacheTTL: 60,
    
    // Allow Next.js to optimize SVG images
    dangerouslyAllowSVG: true,
    
    // Content security policy
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Disable image optimization in development for faster builds
    disableStaticImages: process.env.NODE_ENV === 'development',

    // Configure allowed image domains from content security policy
    domains: (imageConfig.contentSecurityPolicy?.imgSrc || [])
      .filter((domain) => domain && typeof domain === 'string' && domain.startsWith('https://'))
      .map((domain) => {
        try {
          return new URL(domain).hostname.replace('*.', '');
        } catch (e) {
          console.warn(`Invalid URL in image domains: ${domain}`);
          return '';
        }
      })
      .filter(Boolean)
  },
};

// Apply the bundle analyzer plugin if needed
const config = process.env.ANALYZE === 'true' 
  ? withBundleAnalyzerPlugin(nextConfig) 
  : nextConfig;

export default config;
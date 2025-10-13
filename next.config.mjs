// @ts-nocheck
import withBundleAnalyzer from '@next/bundle-analyzer';
import { imageConfig } from './next-image-config.mjs'; // use .mjs for ESM

// Security headers
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
];

const withBundleAnalyzerPlugin = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },

  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons', 'lucide-react'],
    scrollRestoration: true,
    optimizeServerReact: true,
    bundlePagesRouterDependencies: true, // Enable bundle monitoring
  },

  typescript: { ignoreBuildErrors: false },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    disableStaticImages: process.env.NODE_ENV === 'development',
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      // Other allowed domains from config
      ...(imageConfig.contentSecurityPolicy?.imgSrc || []).map(url => {
        try {
          const u = new URL(url);
          return { protocol: u.protocol.replace(':',''), hostname: u.hostname, port: '', pathname: '/**' };
        } catch {
          return null;
        }
      }).filter(Boolean),
    ],
  },

  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  },

  output: 'standalone', // modern output for production
};

export default withBundleAnalyzerPlugin(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com'],
  },
  experimental: {
    // Enable new React 19 features
    reactCompiler: true,
  },
  compiler: {
    // Enable SWC minification
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add Babel configuration for React Compiler
  babel: {
    presets: ['next/babel'],
    plugins: [
      ['babel-plugin-react-compiler'],
    ],
  },
};

export default nextConfig;

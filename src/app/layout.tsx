import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Optimized font loading with display swap
const fontSans = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

// Ensure image URL is absolute
const ogImageUrl = siteConfig.ogImage.startsWith('http') 
  ? siteConfig.ogImage 
  : `${siteConfig.url}${siteConfig.ogImage.startsWith('/') ? '' : '/'}${siteConfig.ogImage}`;

// Define metadata with optimization
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  // Icons are defined in the head section of the document
  // using the Next.js Head component in the root layout
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Show footer on all pages by default
  const hideFooter = false;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Simple inline favicon to avoid 404 errors */}
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpi/P//PwM6YGRgYPgPxH/QAAMAYwYGAJz4CQ3QmYtGAAAAAElFTkSuQmCC" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#fff8f1] font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-[#fff8f1] relative">
            <Navbar />
            <main className="flex-grow relative z-0">
              {children}
            </main>
            {!hideFooter && (
              <div className="relative z-10">
                <Footer />
              </div>
            )}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

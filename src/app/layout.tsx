import type { Viewport } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initializeWebVitals } from '@/lib/analytics';

// Montserrat font with variable support
const fontSans = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-montserrat"
});

// Ensure absolute OG image URL
const ogImageUrl = siteConfig.ogImage.startsWith("http")
  ? siteConfig.ogImage
  : `${siteConfig.url}${siteConfig.ogImage.startsWith("/") ? "" : "/"}${siteConfig.ogImage}`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
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
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hideFooter = false;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/Vann-Harvest-Original-Logo.webp`,
    "foundingDate": "1993",
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        email: siteConfig.contact.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 529, Ganga Nagar, Sector No. 28, Nigdi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411044",
      "addressCountry": "IN"
    },
  };

  // Breadcrumb structured data for navigation
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#fff8f1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={siteConfig.url} />

        {/* Keywords & authors for SEO */}
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="author" content={siteConfig.author} />
        <meta name="twitter:creator" content={`@${siteConfig.social.twitter}`} />

        {/* Preconnect & preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/logo/Vann-Harvest-Original-Logo.webp" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body
        className={cn("min-h-screen bg-[#fff8f1] font-sans antialiased", fontSans.variable)}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <header itemScope itemType="https://schema.org/WPHeader">
              <Navbar />
            </header>
            <main
              className="flex-1"
              itemScope
              itemProp="mainContentOfPage"
              itemType="https://schema.org/WebPageElement"
            >
              {children}
            </main>
            {!hideFooter && (
              <footer itemScope itemType="https://schema.org/WPFooter">
                <Footer />
              </footer>
            )}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

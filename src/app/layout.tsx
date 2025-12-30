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
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/images/logo/Vann-Harvest-Original-Logo.webp`,
      "width": 600,
      "height": 600
    },
    "image": `${siteConfig.url}/images/logo/Vann-Harvest-Original-Logo.webp`,
    "description": siteConfig.description,
    "foundingDate": "1993",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 529, Ganga Nagar, Sector No. 28, Nigdi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411044",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phone,
        "contactType": "customer service",
        "email": siteConfig.contact.email,
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.linkedin
    ]
  };

  // WebSite structured data with SearchAction for Sitelinks Searchbox
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "potentialAction": [{
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/products?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }]
  };

  // SiteNavigationElement for better sitelinks discovery
  const navigationLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Main Navigation",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": siteConfig.url
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Our Products",
        "url": `${siteConfig.url}/products`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Our Story",
        "url": `${siteConfig.url}/our-story`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Infrastructure",
        "url": `${siteConfig.url}/infrastructure`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Sustainability",
        "url": `${siteConfig.url}/infrastructure/sustainability`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Contact Us",
        "url": `${siteConfig.url}/contact`
      }
    ]
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

  // Site navigation structured data
  const navLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": siteConfig.url
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Products",
        "url": `${siteConfig.url}/products`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "About Us",
        "url": `${siteConfig.url}/about`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Certifications",
        "url": `${siteConfig.url}/infrastructure/certifications`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Sustainability",
        "url": `${siteConfig.url}/infrastructure/sustainability`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Gallery",
        "url": `${siteConfig.url}/infrastructure/gallery`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Blog",
        "url": `${siteConfig.url}/blog`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "Contact Us",
        "url": `${siteConfig.url}/contact`
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navLd) }}
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

export const siteConfig = {
  name: "Vann Harvest - Premium Raisin Exporters from India",
  description: "Vann Harvest is a leading exporter of premium quality raisins from India, specializing in natural, sun-dried, and organic raisin varieties. We export worldwide with a focus on quality and sustainability.",
  url: "https://vannharvest.com",
  ogImage: "/images/og-image.webp",
  keywords: [
    "raisin exporters India",
    "premium raisins",
    "organic raisins",
    "Vann Harvest",
    "Indian raisin suppliers",
    "bulk raisins",
    "wholesale raisins",
    "export quality raisins"
  ],
  author: "Vann Harvest Pvt. Ltd.",
  locale: "en_US",
  
  // Social media usernames (without @)
  social: {
    twitter: "vannharvest",
    facebook: "vannharvest",
    instagram: "vannharvest",
    linkedin: "company/vannharvest",
    youtube: "@vannharvest",
    pinterest: "vannharvest"
  },
  
  // Social media links
  links: {
    twitter: "https://twitter.com/vannharvest",
    facebook: "https://facebook.com/vannharvest",
    instagram: "https://instagram.com/vannharvest",
    linkedin: "https://linkedin.com/company/vannharvest",
    youtube: "https://youtube.com/@vannharvest",
    pinterest: "https://pinterest.com/vannharvest",
    whatsapp: "https://wa.me/91774405377"
  },
  
  // Business information for structured data
  business: {
    type: "Corporation",
    name: "Vann Harvest Private Limited",
    legalName: "Vann Harvest Private Limited",
    description: "Leading exporter of premium quality raisins from India",
    foundingDate: "2015-01-01",
    foundingLocation: "Pune, Maharashtra, India",
    email: "info@vannharvest.com",
    telephone: "+91774405377",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 529 Ganga Nagar, Sector No. 28",
      addressLocality: "Nigdi (PCMC)",
      addressRegion: "Maharashtra",
      postalCode: "411044",
      addressCountry: "IN"
    },
    openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/vannharvest",
      "https://www.instagram.com/vannharvest",
      "https://www.linkedin.com/company/vannharvest",
      "https://twitter.com/vannharvest"
    ]
  },
  
  // Site verification codes
  verification: {
    google: "google53f658a803643c00.html",
    yandex: "yandex_verification_123456", // Replace with actual Yandex verification code
    bing: "BING_SITE_VERIFICATION_KEY",   // Replace with actual Bing verification code
    me: "",     // For rel="me" auth (Mastodon, etc.)
    baidu: ""    // For Baidu Webmaster Tools
  },
  contact: {
    email: "info@vannharvest.com",
    phone: "+91 77440 05377",
    address: "Plot No 529 Ganga Nagar, Sector No. 28, Nigdi ( PCMC, Maharashtra 411044, Maharashtra, India",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Our Story",
      href: "/ourstory",
    },
    {
      label: "Products",
      href: "/products",
    },

    {
      label: "Infrastructure",
      href: "/infrastructure",
    },
    {
      label: "Gallery",
      href: "/infrastructure/gallery",
    },
    {
      label: "Sustainability",
      href: "/infrastructure/sustainability",
    },
    {
      label: "Certifications",
      href: "/infrastructure/certifications",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
} as const;

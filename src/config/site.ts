export const siteConfig = {
  name: "Vann Harvest",
  description: "Premium Quality Raisins from India - Exporting Worldwide",
  url: "https://vannharvest.com",
  ogImage: "/images/og-image.webp",
  
  // Social media usernames (without @)
  social: {
    twitter: "vannharvest",
    facebook: "vannharvest",
    instagram: "vannharvest",
    linkedin: "company/vannharvest",
  },
  
  // Social media links
  links: {
    twitter: "https://twitter.com/vannharvest",
    facebook: "https://facebook.com/vannharvest",
    instagram: "https://instagram.com/vannharvest",
    linkedin: "https://linkedin.com/company/vannharvest",
  },
  
  // Site verification codes
  verification: {
    google: "google53f658a803643c00.html",
    yandex: "", // Add your Yandex verification code
    bing: "",   // Add your Bing Webmaster Tools verification code
    me: "",     // For rel="me" auth (Mastodon, etc.)
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

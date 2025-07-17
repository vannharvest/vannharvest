export const siteConfig = {
  name: "Vann Harvest",
  description: "Premium Quality Raisins from India - Exporting Worldwide",
  url: "https://vannharvest.com",
  ogImage: "/images/og-image.webp",
  links: {
    twitter: "https://twitter.com/vannharvest",
    facebook: "https://facebook.com/vannharvest",
    instagram: "https://instagram.com/vannharvest",
    linkedin: "https://linkedin.com/company/vannharvest",
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

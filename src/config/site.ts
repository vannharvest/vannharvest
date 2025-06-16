export const siteConfig = {
  name: "Vann Harvest",
  description: "Premium Quality Raisins from India - Exporting Worldwide",
  url: "https://vannharvest.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/vannharvest",
    facebook: "https://facebook.com/vannharvest",
    instagram: "https://instagram.com/vannharvest",
    linkedin: "https://linkedin.com/company/vannharvest",
  },
  contact: {
    email: "info@vannharvest.com",
    phone: "+91 XXXXXXXXXX",
    address: "Nashik, Maharashtra, India",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Infrastructure",
      href: "/infrastructure",
    },
    {
      label: "Certifications",
      href: "/certifications",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;

import { siteConfig } from '@/config/site';

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 
    | 'always' 
    | 'hourly' 
    | 'daily' 
    | 'weekly' 
    | 'monthly' 
    | 'yearly' 
    | 'never';
  priority?: number;
  alternates?: {
    languages?: Record<string, string>;
  };
  images?: Array<{
    url: string;
    title?: string;
    caption?: string;
    geoLocation?: string;
    license?: string;
  }>;
};

// Generate sitemap with enhanced metadata
export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = siteConfig.url;
  const lastModified = new Date().toISOString().split('T')[0];
  
  // Common image assets
  const logoImage = {
    url: `${baseUrl}/images/logo/Vann-Harvest-Original-Logo.webp`,
    title: 'Vann Harvest - Premium Quality Raisins',
    caption: 'Exporting Premium Quality Raisins from India to Worldwide',
    geoLocation: 'India',
    license: 'https://vannharvest.com/terms'
  };

  // Define your routes with enhanced metadata
  const routes: SitemapEntry[] = [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          hi: `${baseUrl}/hi`,
        },
      },
      images: [logoImage],
    },
    
    // Products
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
      images: [
        logoImage,
        {
          url: `${baseUrl}/images/products/raisins-1.webp`,
          title: 'Premium Quality Raisins',
          caption: 'Our finest selection of raisins'
        }
      ]
    },
    
    // About Us
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [logoImage]
    },
    
    // Infrastructure
    {
      url: `${baseUrl}/infrastructure`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [
        {
          url: `${baseUrl}/images/infrastructure/facility-1.webp`,
          title: 'Our Processing Facility',
          caption: 'State-of-the-art processing facility'
        }
      ]
    },
    
    // Certifications
    {
      url: `${baseUrl}/certifications`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return routes;
}

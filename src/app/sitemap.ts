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
  const baseUrl = 'https://vannharvest.com';
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
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [{
        ...logoImage,
        geoLocation: 'Pune, Maharashtra, India',
        license: `${baseUrl}/terms`
      }],
    },
    
    // Products - High priority
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
      images: [
        // Black Raisins
        {
          url: `${baseUrl}/images/products/verticle-img/Black-Round-Seeded.avif`,
          title: 'Black Round Seeded Raisins - Premium Quality',
          caption: 'Naturally sun-dried black seeded raisins with rich flavor',
          geoLocation: 'India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Black-Round-Seedless.avif`,
          title: 'Black Round Seedless Raisins - Premium Grade',
          caption: 'Seedless black raisins perfect for baking and snacking',
          geoLocation: 'India',
          license: `${baseUrl}/terms`
        },
        
        // Golden Raisins
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Round%20A.avif`,
          title: 'Golden Round Raisins - Grade A',
          caption: 'Premium golden raisins with natural sweetness',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Round%20AA.avif`,
          title: 'Golden Round Raisins - Grade AA',
          caption: 'Superior quality golden raisins for gourmet use',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Round%20AAA.avif`,
          title: 'Golden Round Raisins - Grade AAA',
          caption: 'Finest quality golden raisins, hand-selected',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Round%20Premium.avif`,
          title: 'Golden Round Raisins - Premium',
          caption: 'Luxury golden raisins for discerning customers',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20long%20A.avif`,
          title: 'Golden Long Raisins - Grade A',
          caption: 'Premium long golden raisins, perfect for confectionery',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Long%20AA.avif`,
          title: 'Golden Long Raisins - Grade AA',
          caption: 'Superior long golden raisins for professional bakers',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Long%20AAA.avif`,
          title: 'Golden Long Raisins - Grade AAA',
          caption: 'Finest quality long golden raisins, extra large size',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Golden%20Long%20Premium.avif`,
          title: 'Golden Long Raisins - Premium',
          caption: 'Luxury long golden raisins, hand-selected premium quality',
          geoLocation: 'India'
        },

        // Green Raisins
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Round%20A.avif`,
          title: 'Green Round Raisins - Grade A',
          caption: 'Naturally sweet green raisins, perfect for healthy snacks',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Round%20AA.avif`,
          title: 'Green Round Raisins - Grade AA',
          caption: 'Premium green raisins with superior taste and texture',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Round%20AAA.avif`,
          title: 'Green Round Raisins - Grade AAA',
          caption: 'Finest quality green raisins, carefully selected',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Round%20Premium.avif`,
          title: 'Green Round Raisins - Premium',
          caption: 'Luxury green raisins for gourmet culinary use',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Long%20A.avif`,
          title: 'Green Long Raisins - Grade A',
          caption: 'Premium long green raisins, naturally sweet',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Long%20AA.avif`,
          title: 'Green Long Raisins - Grade AA',
          caption: 'Superior long green raisins for health-conscious consumers',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Long%20AAA.avif`,
          title: 'Green Long Raisins - Grade AAA',
          caption: 'Finest quality long green raisins, extra large size',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/Green%20Long%20Premium.avif`,
          title: 'Green Long Raisins - Premium',
          caption: 'Luxury long green raisins, hand-selected premium quality',
          geoLocation: 'India'
        }
      ]
    },
    
    // Our Story - High priority
    {
      url: `${baseUrl}/our-story`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [{
        url: `${baseUrl}/images/founder.webp`,
        title: 'Our Story - Vann Harvest',
        caption: 'Journey of Vann Harvest',
        geoLocation: 'Pune, India'
      }]
    },
    
    // Infrastructure - Medium priority
    {
      url: `${baseUrl}/infrastructure`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/images/FarmBg.webp`,
          title: 'Our Processing Facility - Vann Harvest',
          caption: 'State-of-the-art processing facility in Pune',
          geoLocation: 'Pune, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/soil.webp`,
          title: 'Our Farm Land',
          caption: 'Sustainable farming practices',
          geoLocation: 'Pune, India'
        }
      ]
    },
    
    // Certifications - Medium priority
    {
      url: `${baseUrl}/certifications`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [
        {
          url: `${baseUrl}/images/certification/APEDA.avif`,
          title: 'APEDA Certification',
          caption: 'Certified by Agricultural and Processed Food Products Export Development Authority',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/FSSAI.avif`,
          title: 'FSSAI Certification',
          caption: 'Food Safety and Standards Authority of India Certified',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/Organic.avif`,
          title: 'Organic Certification',
          caption: 'Certified Organic Raisins',
          license: `${baseUrl}/terms`
        }
      ]
    },
    
    // Contact - High priority
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [logoImage]
    },
    
    // Blog - Medium priority
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/images/blog/From%20Vine%20to%20Dried%20Delights.webp`,
          title: 'From Vine to Dried Delights',
          caption: 'The journey of raisin production',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/hidden-dangers-adulteration-raisins.webp`,
          title: 'Hidden Dangers of Adulteration in Raisins',
          caption: 'Ensuring pure and natural raisins',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/natural-power-of-raisins.webp`,
          title: 'The Natural Power of Raisins',
          caption: 'Health benefits of our premium raisins',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/raisin-trends-2025.webp`,
          title: 'Raisin Industry Trends 2025',
          caption: 'Latest developments in raisin production',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/Sustainable%20Farming.webp`,
          title: 'Sustainable Farming Practices',
          caption: 'Our commitment to eco-friendly agriculture',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/Vijayapura.webp`,
          title: 'Vijayapura: The Raisin Capital',
          caption: 'Discovering the heart of raisin production',
          license: `${baseUrl}/terms`
        }
      ]
    },
    
    // Gallery - Medium priority
    {
      url: `${baseUrl}/infrastructure/gallery`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
      images: [
        {
          url: `${baseUrl}/images/gallery/Farm.avif`,
          title: 'Our Farm - Vann Harvest',
          caption: 'Sustainable raisin farming practices',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/gallery/processing.avif`,
          title: 'Processing Facility',
          caption: 'State-of-the-art processing of premium raisins',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/gallery/quality.avif`,
          title: 'Quality Control',
          caption: 'Stringent quality checks at every stage',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/gallery/team/team.avif`,
          title: 'Our Team',
          caption: 'Dedicated team ensuring quality at every step',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        }
      ]
    },
    
    // Sustainability - Medium priority
    {
      url: `${baseUrl}/sustainability`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [{
        url: `${baseUrl}/images/Greener_Tomorrow.webp`,
        title: 'Sustainability at Vann Harvest',
        caption: 'Our commitment to sustainable farming',
        license: `${baseUrl}/terms`
      }]
    }
  ];

  return routes;
}
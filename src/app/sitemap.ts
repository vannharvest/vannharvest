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
    url: `${baseUrl}/images/logo/vann-harvest-official-logo.webp`,
    title: 'Vann Harvest - Official Logo',
    caption: 'Vann Harvest - Premium Quality Raisins Exporter from India',
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
          url: `${baseUrl}/images/products/verticle-img/black-round-seeded-raisins.avif`,
          title: 'Black Round Seeded Raisins - Premium Quality',
          caption: 'Naturally sun-dried black seeded raisins with rich flavor',
          geoLocation: 'India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/products/verticle-img/black-round-seedless-raisins.avif`,
          title: 'Black Round Seedless Raisins - Premium Grade',
          caption: 'Seedless black raisins perfect for baking and snacking',
          geoLocation: 'India',
          license: `${baseUrl}/terms`
        },
        
        // Golden Raisins
        {
          url: `${baseUrl}/images/products/verticle-img/golden-round-a-raisins.avif`,
          title: 'Golden Round Raisins - Grade A',
          caption: 'Premium golden raisins with natural sweetness',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-round-aa-raisins.avif`,
          title: 'Golden Round Raisins - Grade AA',
          caption: 'Superior quality golden raisins for gourmet use',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-round-aaa-raisins.avif`,
          title: 'Golden Round Raisins - Grade AAA',
          caption: 'Finest quality golden raisins, hand-selected',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-round-premium-raisins.avif`,
          title: 'Golden Round Raisins - Premium',
          caption: 'Luxury golden raisins for discerning customers',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-long-a-raisins.avif`,
          title: 'Golden Long Raisins - Grade A',
          caption: 'Premium long golden raisins, perfect for confectionery',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-long-aa-raisins.avif`,
          title: 'Golden Long Raisins - Grade AA',
          caption: 'Superior long golden raisins for professional bakers',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-long-aaa-raisins.avif`,
          title: 'Golden Long Raisins - Grade AAA',
          caption: 'Finest quality long golden raisins, extra large size',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/golden-long-premium-raisins.avif`,
          title: 'Golden Long Raisins - Premium',
          caption: 'Luxury long golden raisins, hand-selected premium quality',
          geoLocation: 'India'
        },

        // Green Raisins
        {
          url: `${baseUrl}/images/products/verticle-img/green-round-a-raisins.avif`,
          title: 'Green Round Raisins - Grade A',
          caption: 'Naturally sweet green raisins, perfect for healthy snacks',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-round-aa-raisins.avif`,
          title: 'Green Round Raisins - Grade AA',
          caption: 'Premium green raisins with superior taste and texture',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-round-aaa-raisins.avif`,
          title: 'Green Round Raisins - Grade AAA',
          caption: 'Finest quality green raisins, carefully selected',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-round-premium-raisins.avif`,
          title: 'Green Round Raisins - Premium',
          caption: 'Luxury green raisins for gourmet culinary use',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-long-a-raisins.avif`,
          title: 'Green Long Raisins - Grade A',
          caption: 'Premium long green raisins, naturally sweet',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-long-aa-raisins.avif`,
          title: 'Green Long Raisins - Grade AA',
          caption: 'Superior long green raisins for health-conscious consumers',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-long-aaa-raisins.avif`,
          title: 'Green Long Raisins - Grade AAA',
          caption: 'Finest quality long green raisins, extra large size',
          geoLocation: 'India'
        },
        {
          url: `${baseUrl}/images/products/verticle-img/green-long-premium-raisins.avif`,
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
        url: `${baseUrl}/images/vann-harvest-founder-vineyard.webp`,
        title: 'Our Story - Vann Harvest Founder',
        caption: 'The visionary journey of Vann Harvest founder in the vineyards',
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
          url: `${baseUrl}/images/vann-harvest-grape-farm-background.webp`,
          title: 'Vann Harvest Grape Farm Background',
          caption: 'Lush green grape farm background at our state-of-the-art processing facility',
          geoLocation: 'Pune, Maharashtra, India'
        },
        {
          url: `${baseUrl}/images/nutrient-rich-soil-vineyard-cultivation.webp`,
          title: 'Nutrient-Rich Soil for Vineyard Cultivation',
          caption: 'Sustainable farming practices ensuring soil health and high-quality harvest',
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
          url: `${baseUrl}/images/certification/apeda-certification-export-quality.avif`,
          title: 'Vann Harvest APEDA Export Certification',
          caption: 'Officially certified by the Agricultural and Processed Food Products Export Development Authority (APEDA) for global quality standards',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/fssai-food-safety-certification.avif`,
          title: 'Vann Harvest FSSAI Food Safety Certification',
          caption: 'Certified by the Food Safety and Standards Authority of India (FSSAI) for rigorous food safety compliance',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/organic-farming-certification-vann-harvest.avif`,
          title: 'Vann Harvest Organic Raisin Certification',
          caption: 'Certified organic raisin production ensuring natural and chemical-free products',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/haccp-food-safety-management-certification.avif`,
          title: 'Vann Harvest HACCP Food Safety Certification',
          caption: 'Hazard Analysis and Critical Control Points (HACCP) certified for safe food handling and processing',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/iso-22000-2018-food-safety-management-system.avif`,
          title: 'Vann Harvest ISO 22000:2018 Certification',
          caption: 'International standard for food safety management systems, ensuring consistent quality and safety',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/certification/apmc-market-committee-certification.avif`,
          title: 'Vann Harvest APMC Market License',
          caption: 'Licensed by the Agricultural Produce Market Committee for ethical and transparent trade practices',
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
          url: `${baseUrl}/images/blog/from-vine-to-dried-delights-raisin-production.webp`,
          title: 'From Vine to Dried Delights: The Journey of Raisin Production',
          caption: 'Discover the meticulous process of raisin production from the vineyard to your table',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/hidden-dangers-adulteration-raisins.webp`,
          title: 'The Hidden Dangers of Adulteration in Raisins',
          caption: 'How Vann Harvest ensures pure, unadulterated, and high-quality raisins for your health',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/natural-power-of-raisins.webp`,
          title: 'The Natural Power and Health Benefits of Raisins',
          caption: 'Explore the nutritional value and essential health benefits of premium sun-dried raisins',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/raisin-trends-2025.webp`,
          title: 'Raisin Industry Trends and Future Outlook for 2025',
          caption: 'Staying ahead with the latest developments in global raisin production and consumption',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/sustainable-farming-practices-vann-harvest.webp`,
          title: 'Sustainable Farming Practices at Vann Harvest',
          caption: 'Our commitment to eco-friendly agriculture and zero-waste farming for a greener tomorrow',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/blog/vijayapura-raisin-capital-india.webp`,
          title: 'Vijayapura: The Leading Raisin Capital of India',
          caption: 'Exploring the heart of India\'s premium grape and raisin production in Vijayapura',
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
          url: `${baseUrl}/images/gallery/farm/vann-harvest-farm-landscape.avif`,
          title: 'Our Farm - Vann Harvest',
          caption: 'Sustainable raisin farming practices',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/gallery/processing/vann-harvest-raisin-processing-plant.avif`,
          title: 'Vann Harvest State-of-the-Art Raisin Processing Plant',
          caption: 'Advanced automated processing and packaging facility for premium raisins',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/gallery/processing/vann-harvest-raisin-quality-control.avif`,
          title: 'Vann Harvest Stringent Raisin Quality Control',
          caption: 'Rigorous quality checks and expert inspection ensuring premium raisin standards',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/images/gallery/team/vann-harvest-team-members.avif`,
          title: 'Vann Harvest Dedicated Team',
          caption: 'Our dedicated team ensuring quality at every step of raisin production',
          geoLocation: 'Pune, India',
          license: `${baseUrl}/terms`
        }
      ]
    },
    
    // Sustainability - Medium priority
    {
      url: `${baseUrl}/infrastructure/sustainability`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [{
        url: `${baseUrl}/images/sustainable-farming-green-grapes-harvest.webp`,
        title: 'Sustainable Farming at Vann Harvest',
        caption: 'Commitment to sustainable farming and a greener tomorrow',
        license: `${baseUrl}/terms`
      }]
    }
  ];

  return routes;
}
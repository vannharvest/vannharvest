export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  hsnCode: string;
  specifications: string[];
  packaging: string[];
  origin: string;
  shelfLife: string;
  certifications: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Black Raisins',
    slug: 'black-raisins',
    description: 'Premium quality black raisins, naturally sun-dried and packed with natural sweetness.',
    longDescription: 'Our black raisins are made from the finest Thompson seedless grapes, carefully harvested at peak ripeness and naturally sun-dried to preserve their rich flavor and nutritional value. These raisins are rich in antioxidants, iron, and fiber, making them a healthy snack option.',
    image: '/images/black-raisins.jpg',
    hsnCode: '08062010',
    specifications: [
      'Color: Dark brown to black',
      'Moisture: Max 18%',
      'Purity: 99.5%',
      'Sugar Content: 65-70%',
      'Acidity: 2.4-2.6%',
      'Size: 220-260 berries per 100g'
    ],
    packaging: [
      '5kg, 10kg, 25kg carton boxes',
      '10kg, 15kg, 20kg vacuum packs',
      'Custom packaging available',
      'MOQ: 1 x 20ft container (14 MT)'
    ],
    origin: 'Nashik, Maharashtra, India',
    shelfLife: '12 months from production date when stored in a cool, dry place',
    certifications: ['ISO 22000', 'HACCP', 'APEDA', 'USDA Organic', 'EU Organic']
  },
  {
    id: '2',
    name: 'Golden Raisins',
    slug: 'golden-raisins',
    description: 'Golden yellow raisins with a sweet and tangy flavor, perfect for baking and snacking.',
    longDescription: 'Our golden raisins are made from select seedless yellow grapes, treated with food-grade sulfur dioxide to preserve their golden color, and carefully dried to maintain their natural sweetness and soft texture. They are rich in iron, potassium, and antioxidants.',
    image: '/images/golden-raisins.jpg',
    hsnCode: '08062020',
    specifications: [
      'Color: Golden yellow',
      'Moisture: Max 16%',
      'Purity: 99.5%',
      'Sugar Content: 70-75%',
      'Acidity: 2.0-2.2%',
      'Size: 200-240 berries per 100g'
    ],
    packaging: [
      '5kg, 10kg, 25kg carton boxes',
      '10kg, 15kg, 20kg vacuum packs',
      'Custom packaging available',
      'MOQ: 1 x 20ft container (14 MT)'
    ],
    origin: 'Nashik, Maharashtra, India',
    shelfLife: '12 months from production date when stored in a cool, dry place',
    certifications: ['ISO 22000', 'HACCP', 'APEDA', 'USDA Organic', 'EU Organic']
  },
  {
    id: '3',
    name: 'Green Raisins',
    slug: 'green-raisins',
    description: 'Naturally green raisins with a unique flavor profile, rich in nutrients and antioxidants.',
    longDescription: 'Our green raisins are made from premium quality green seedless grapes, carefully dried to preserve their natural color and delicate flavor. These raisins are rich in iron, potassium, and dietary fiber, making them a nutritious addition to your diet.',
    image: '/images/green-raisins.jpg',
    hsnCode: '08062030',
    specifications: [
      'Color: Light green to golden green',
      'Moisture: Max 16%',
      'Purity: 99.5%',
      'Sugar Content: 68-72%',
      'Acidity: 2.2-2.4%',
      'Size: 210-250 berries per 100g'
    ],
    packaging: [
      '5kg, 10kg, 25kg carton boxes',
      '10kg, 15kg, 20kg vacuum packs',
      'Custom packaging available',
      'MOQ: 1 x 20ft container (14 MT)'
    ],
    origin: 'Nashik, Maharashtra, India',
    shelfLife: '12 months from production date when stored in a cool, dry place',
    certifications: ['ISO 22000', 'HACCP', 'APEDA']
  },
  {
    id: '4',
    name: 'Sultana Raisins',
    slug: 'sultana-raisins',
    description: 'Premium sultana raisins known for their sweet flavor and soft texture, ideal for baking and cooking.',
    longDescription: 'Our sultana raisins are made from seedless white grapes, carefully processed to maintain their natural sweetness and soft texture. They are rich in natural sugars, iron, and antioxidants, making them a healthy and delicious snack option.',
    image: '/images/sultana-raisins.jpg',
    hsnCode: '08062040',
    specifications: [
      'Color: Light golden brown',
      'Moisture: Max 16%',
      'Purity: 99.5%',
      'Sugar Content: 67-72%',
      'Acidity: 2.1-2.3%',
      'Size: 230-270 berries per 100g'
    ],
    packaging: [
      '5kg, 10kg, 25kg carton boxes',
      '10kg, 15kg, 20kg vacuum packs',
      'Custom packaging available',
      'MOQ: 1 x 20ft container (14 MT)'
    ],
    origin: 'Nashik, Maharashtra, India',
    shelfLife: '12 months from production date when stored in a cool, dry place',
    certifications: ['ISO 22000', 'HACCP', 'APEDA', 'USDA Organic']
  },
  {
    id: '5',
    name: 'Jumbo Raisins',
    slug: 'jumbo-raisins',
    description: 'Extra-large premium raisins with a rich, sweet flavor and soft, chewy texture.',
    longDescription: 'Our jumbo raisins are carefully selected for their large size and premium quality. Made from the finest seedless grapes, these raisins are naturally sun-dried to preserve their rich flavor and nutritional value. Perfect for snacking, baking, and cooking.',
    image: '/images/jumbo-raisins.jpg',
    hsnCode: '08062050',
    specifications: [
      'Color: Dark brown to black',
      'Moisture: Max 17%',
      'Purity: 99.5%',
      'Sugar Content: 68-72%',
      'Acidity: 2.3-2.5%',
      'Size: 180-220 berries per 100g'
    ],
    packaging: [
      '5kg, 10kg, 25kg carton boxes',
      '10kg, 15kg, 20kg vacuum packs',
      'Custom packaging available',
      'MOQ: 1 x 20ft container (14 MT)'
    ],
    origin: 'Nashik, Maharashtra, India',
    shelfLife: '12 months from production date when stored in a cool, dry place',
    certifications: ['ISO 22000', 'HACCP', 'APEDA', 'USDA Organic']
  },
  {
    id: '6',
    name: 'Organic Raisins',
    slug: 'organic-raisins',
    description: '100% organic raisins grown without synthetic pesticides or fertilizers, rich in natural goodness.',
    longDescription: 'Our organic raisins are made from certified organic seedless grapes, grown without the use of synthetic pesticides or fertilizers. These raisins are naturally sun-dried to preserve their authentic flavor and nutritional value. They are rich in antioxidants, iron, and dietary fiber.',
    image: '/images/organic-raisins.jpg',
    hsnCode: '08062060',
    specifications: [
      'Color: Dark brown to black',
      'Moisture: Max 18%',
      'Purity: 99.5%',
      'Sugar Content: 65-70%',
      'Acidity: 2.2-2.4%',
      'Size: 200-240 berries per 100g'
    ],
    packaging: [
      '5kg, 10kg, 25kg carton boxes',
      '10kg, 15kg, 20kg vacuum packs',
      'Custom packaging available',
      'MOQ: 1 x 20ft container (14 MT)'
    ],
    origin: 'Nashik, Maharashtra, India',
    shelfLife: '12 months from production date when stored in a cool, dry place',
    certifications: ['USDA Organic', 'EU Organic', 'India Organic', 'NPOP', 'ISO 22000', 'HACCP']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3); // Return first 3 products as featured
}

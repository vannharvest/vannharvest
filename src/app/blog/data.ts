// Blog post images with fallbacks
const blogImages = {
  // Health - Fresh raisins
  health: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // Sustainability - Organic farming
  sustainability: 'https://images.pexels.com/photos/2132185/pexels-photo-2132185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // Industry - Dried fruits production
  industry: 'https://images.pexels.com/photos/7365578/pexels-photo-7365578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // Hero - Fresh grapes and raisins
  hero: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // Fallback image
  fallback: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSIyLjUiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDE2IDEwIDUgMjEiPjwvcG9seWxpbmU+PC9zdmc+'
} as const;

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  category: string;
  fallback?: string;
  author?: string;
  readTime?: number;
  content?: string;
};

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    title: 'The Hidden Dangers of Adulteration in Raisins',
    excerpt: 'Learn about the significant issue of adulteration in raisins and how to ensure you\'re getting pure, high-quality products.',
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'hidden-dangers-adulteration-raisins',
    date: '2025-05-28',
    category: 'Health',
    author: 'Dr. Priya Sharma',
    readTime: 6,
    content: `Raisins, the humble dried fruits, are a staple in many households. But did you know that many raisin products on the market today contain harmful additives and adulterants? At Vann Harvest, we believe in transparency and purity, which is why we're shedding light on this important issue.

## The Reality of Adulteration
Recent studies have shown that up to 30% of raisin samples tested contained artificial sweeteners, color enhancers, or preservatives not listed on the label. These additives can have various health implications, especially when consumed regularly.

## Common Adulterants Found in Raisins:
- **Artificial sweeteners** like saccharin or aspartame
- **Sulfur dioxide** for color preservation
- **Mineral oils** to enhance shine
- **Unnatural colorants** to make raisins appear more vibrant

## How to Identify Pure Raisins
1. **Check the color**: Naturally dried raisins have a consistent, matte finish
2. **Feel the texture**: They should be slightly sticky but not oily
3. **Taste test**: Pure raisins have a natural sweetness without any chemical aftertaste
4. **Read labels carefully**: Look for certifications and ingredient lists

At Vann Harvest, we take pride in our commitment to pure, unadulterated raisins. Our products undergo rigorous testing to ensure they meet the highest standards of quality and safety.`
  },
  {
    title: 'Vijayapura: Stands First in Grape Production in Karnataka State',
    excerpt: 'Discover how Vijayapura has emerged as the leader in grape production with its fertile soil and rich viticulture heritage.',
    image: 'https://images.pexels.com/photos/2132185/pexels-photo-2132185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'vijayapura-grape-production-karnataka',
    date: '2025-05-15',
    category: 'Sustainability',
    author: 'Rajesh Kumar',
    readTime: 8,
    content: `Vijayapura, formerly known as Bijapur, has earned its reputation as the grape capital of Karnataka, contributing significantly to India's position as one of the top grape producers globally. The region's unique combination of climate, soil, and traditional farming knowledge has created the perfect environment for grape cultivation.

## Why Vijayapura Excels in Grape Production

### Ideal Climate Conditions
- **Temperature**: Consistent warm days and cool nights
- **Rainfall**: Optimal annual rainfall patterns
- **Sunlight**: Abundant sunshine throughout the year

### Soil Composition
The region's black cotton soil, rich in minerals, provides the perfect foundation for grapevines to thrive. This soil has excellent water retention capacity while still providing good drainage.

### Traditional Knowledge Meets Modern Techniques
Local farmers combine generations of viticulture knowledge with modern agricultural practices, including:
- Drip irrigation systems
- Organic pest control methods
- Sustainable farming practices

## Economic Impact
Grape farming has transformed the local economy, providing employment to thousands and establishing Vijayapura as a hub for high-quality grape production. The success of the region serves as a model for sustainable agricultural development.`
  },
  {
    title: 'From Vine to Dried Delights: The Fascinating Journey of Raisins',
    excerpt: 'Explore the meticulous process of raisin production from vine to your table, combining tradition and modern techniques.',
    image: 'https://images.pexels.com/photos/7365578/pexels-photo-7365578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'vine-to-dried-delights-raisin-journey',
    date: '2025-04-22',
    category: 'Production',
    author: 'Vann Harvest Team',
    readTime: 10,
    content: `The journey of a raisin from vine to your table is a fascinating process that combines agricultural expertise with careful processing. At Vann Harvest, we maintain the highest standards at every step to bring you the finest quality raisins.

## The Raisin-Making Process

### 1. Grape Selection
Only the finest, ripest grapes are hand-selected for raisin production. We use premium varieties known for their natural sweetness and flavor.

### 2. Harvesting
Our grapes are harvested at peak ripeness, typically in the early morning hours to preserve their natural sugars and nutrients.

### 3. Cleaning and Preparation
- Grapes are thoroughly washed
- Stems and debris are removed
- Only the best grapes proceed to drying

### 4. Natural Drying Process
We use traditional sun-drying methods that have been perfected over generations:
- Grapes are spread on clean drying trays
- They're exposed to direct sunlight for 2-3 weeks
- Regular turning ensures even drying

### 5. Quality Control
Each batch undergoes rigorous testing for:
- Moisture content
- Sweetness levels
- Purity and cleanliness

### 6. Packaging
Once dried to perfection, the raisins are:
- Cleaned again
- Sorted by size and quality
- Packaged in airtight containers to preserve freshness

At Vann Harvest, we take pride in every step of this process, ensuring that only the best raisins make it to your table. Our commitment to quality means you can taste the difference in every bite.`
  },
  {
    title: 'The Natural Power of Raisins: Why They Belong in Your Daily Diet',
    excerpt: 'Discover the health benefits of sun-dried raisins and how Vann Harvest ensures purity in every pack.',
    image: blogImages.health,
    slug: 'natural-power-of-raisins',
    date: '2025-06-20',
    category: 'Health',
    author: 'Dr. Ananya Patel',
    readTime: 7,
    content: `Raisins are nature's candy, packed with essential nutrients and health benefits. At Vann Harvest, we believe in harnessing the natural goodness of raisins to promote overall well-being.

## Nutritional Powerhouse
A small serving of raisins contains:
- **Fiber**: Supports digestive health
- **Iron**: Essential for healthy blood
- **Potassium**: Regulates blood pressure
- **Antioxidants**: Fights free radicals
- **Natural sugars**: For quick energy

## Health Benefits

### 1. Digestive Health
Raisins are rich in soluble fiber, which helps maintain a healthy digestive system and prevents constipation.

### 2. Heart Health
Studies show that regular consumption of raisins can help lower blood pressure and reduce the risk of heart disease.

### 3. Energy Boost
The natural sugars in raisins provide a quick energy boost, making them an excellent snack for active individuals.

### 4. Bone Health
Raisins contain calcium and boron, which are essential for maintaining strong bones and preventing osteoporosis.

## How to Incorporate Raisins into Your Diet
- Add to morning oatmeal or yogurt
- Mix into trail mix with nuts
- Use in baking for natural sweetness
- Enjoy as a standalone snack

At Vann Harvest, we ensure that our raisins retain maximum nutritional value through careful processing and packaging, so you get all these benefits in every bite.`
  },
  {
    title: 'Inside Our Sustainable Farming: A Journey to Organic Excellence',
    excerpt: 'Learn how Vann Harvest practices zero-waste farming and supports local communities.',
    image: blogImages.sustainability,
    slug: 'sustainable-farming-journey',
    date: '2025-06-15',
    category: 'Sustainability',
    author: 'Meera Deshpande',
    readTime: 9,
    content: `At Vann Harvest, sustainability isn't just a buzzword—it's the foundation of everything we do. Our commitment to organic farming and environmental stewardship sets us apart in the agricultural industry.

## Our Sustainable Practices

### 1. Organic Farming Methods
- No synthetic pesticides or fertilizers
- Natural pest control using beneficial insects
- Crop rotation to maintain soil health

### 2. Water Conservation
- Drip irrigation systems
- Rainwater harvesting
- Moisture retention techniques

### 3. Zero-Waste Philosophy
- All agricultural waste is composted
- Grape vines are pruned and used as natural mulch
- Packaging materials are biodegradable or recyclable

### 4. Community Impact
We work closely with local farmers to:
- Provide fair wages
- Offer training in sustainable practices
- Support education and healthcare initiatives

## The Results
Our sustainable practices have led to:
- Healthier soil with increased biodiversity
- Reduced water usage by 40%
- Carbon-negative operations
- Stronger local communities

By choosing Vann Harvest, you're not just getting premium quality raisins—you're supporting a better future for our planet and its people.`
  },
  {
    title: 'Raisin Trends 2025: Why Consumers Are Choosing Quality Over Quantity',
    excerpt: 'Premium raisins are making headlines — here\'s why quality sourcing matters now more than ever.',
    image: blogImages.industry,
    slug: 'raisin-trends-2025',
    date: '2025-06-05',
    category: 'Industry',
    author: 'Vann Harvest Team',
    readTime: 5,
    content: `The raisin industry is evolving, with consumers becoming increasingly discerning about the quality and origin of their food. In 2025, we're seeing several key trends that are shaping the future of raisin consumption.

## Top Raisin Trends for 2025

### 1. Traceability
Consumers want to know exactly where their food comes from. At Vann Harvest, we provide complete transparency about our farming and production processes.

### 2. Organic and Clean Label
There's a growing demand for:
- Organic certification
- No artificial additives
- Minimal processing

### 3. Health-Conscious Choices
- Sugar-conscious consumers are turning to natural sweeteners like raisins
- High-protein and high-fiber diets are driving raisin consumption

### 4. Sustainability Focus
Eco-conscious consumers are choosing brands that prioritize:
- Sustainable farming
- Ethical sourcing
- Environmentally friendly packaging

### 5. Premiumization
Consumers are willing to pay more for:
- Superior quality
- Unique varieties
- Specialty flavors

At Vann Harvest, we're proud to be at the forefront of these trends, offering premium quality raisins that meet the highest standards of taste, quality, and sustainability.`
  }
];

export { blogImages };

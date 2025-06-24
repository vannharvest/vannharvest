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
  },
  {
    title: 'Vijayapura: Stands First in Grape Production in Karnataka State',
    excerpt: 'Discover how Vijayapura has emerged as the leader in grape production with its fertile soil and rich viticulture heritage.',
    image: 'https://images.pexels.com/photos/2132185/pexels-photo-2132185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'vijayapura-grape-production-karnataka',
    date: '2025-05-15',
    category: 'Sustainability',
  },
  {
    title: 'From Vine to Dried Delights: The Fascinating Journey of Raisins',
    excerpt: 'Explore the meticulous process of raisin production from vine to your table, combining tradition and modern techniques.',
    image: 'https://images.pexels.com/photos/7365578/pexels-photo-7365578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'vine-to-dried-delights-raisin-journey',
    date: '2025-04-22',
    category: 'Production',
    author: 'Vann Harvest Team',
    readTime: 7,
  },
  {
    title: 'A World of Flavor and Health: Exploring the Diverse Types and Benefits of Raisins',
    excerpt: 'Discover the various types of raisins and their health benefits, making them a perfect addition to your diet.',
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'flavor-health-benefits-raisins',
    date: '2025-04-10',
    category: 'Health',
  },
  {
    title: 'The Natural Power of Raisins: Why They Belong in Your Daily Diet',
    excerpt: 'Discover the health benefits of sun-dried raisins and how Vann Harvest ensures purity in every pack.',
    image: blogImages.health,
    slug: 'natural-power-of-raisins',
    date: '2025-06-20',
    category: 'Health',
  },
  {
    title: 'Inside Our Sustainable Farming: A Journey to Organic Excellence',
    excerpt: 'Learn how Vann Harvest practices zero-waste farming and supports local communities.',
    image: blogImages.sustainability,
    slug: 'sustainable-farming-journey',
    date: '2025-06-15',
    category: 'Sustainability',
  },
  {
    title: 'Raisin Trends 2025: Why Consumers Are Choosing Quality Over Quantity',
    excerpt: 'Premium raisins are making headlines — here\'s why quality sourcing matters now more than ever.',
    image: blogImages.industry,
    slug: 'raisin-trends-2025',
    date: '2025-06-05',
    category: 'Industry',
    author: 'Vann Harvest Team',
    readTime: 4,
  },
];

export { blogImages };

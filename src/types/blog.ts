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

export type BlogImageType = {
  [key: string]: string;
  health: string;
  sustainability: string;
  industry: string;
  hero: string;
  fallback: string;
};

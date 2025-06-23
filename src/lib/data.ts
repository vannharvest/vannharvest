import fs from 'fs';
import path from 'path';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  bestSeller?: boolean;
};

// Define the ProductsData interface
interface ProductsData {
  bestSellers: Product[];
  products: Product[];
}

// Import the products data
import products from '../../public/data/products.json';

export function getProductsData(): Product[] {
  if (typeof window !== 'undefined') {
    // Client-side: return the imported JSON
    return products as unknown as Product[];
  }
  
  // Server-side: read the file using fs
  const jsonPath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(jsonPath, 'utf8');
  return JSON.parse(jsonData) as Product[];
}

export function getBestSellers(): Product[] {
  const products = getProductsData();
  return products.filter(product => product.bestSeller);
}

export function getAllCategories(): string[] {
  const products = getProductsData();
  const categories = products.map((product: Product) => product.category);
  return [...new Set(categories)];
}

export function getProductsByCategory(category: string): Product[] {
  const products = getProductsData();
  return products.filter((product: Product) => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  const products = getProductsData();
  return products.find((product: Product) => product.id === id);
}

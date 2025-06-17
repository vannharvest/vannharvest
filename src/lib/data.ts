import fs from 'fs';
import path from 'path';

export type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
};

export interface ProductsData {
  bestSellers: Product[];
}

export function getProductsData(): ProductsData {
  if (typeof window !== 'undefined') {
    // Client-side: fetch the JSON file
    return require('../../public/data/products.json');
  }
  
  // Server-side: read the file using fs
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getBestSellers(): Product[] {
  return getProductsData().bestSellers;
}

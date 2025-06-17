declare module '../../public/data/products.json' {
  export interface Product {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    inStock: boolean;
  }

  export interface ProductsData {
    bestSellers: Product[];
  }

  const data: ProductsData;
  export default data;
}

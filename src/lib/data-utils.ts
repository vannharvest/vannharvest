export async function getProductsData() {
  try {
    const response = await fetch('http://localhost:3000/api/products', {
      // Make sure to revalidate the data at most every hour
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error loading products:', error);
    return { bestSellers: [] };
  }
}

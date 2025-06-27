import { existsSync } from 'fs';
import { join } from 'path';

// Default export for Next.js image loader
export default function customLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  try {
    // Check if the file exists
    const imagePath = join(process.cwd(), 'public', src);
    const imageExists = existsSync(imagePath);

    if (!imageExists) {
      console.warn(`Image not found: ${src}, using fallback`);
      return '/images/fallback.jpg';
    }

    // Return the original source if it exists
    return src;
  } catch (error) {
    console.error('Error in image loader:', error);
    return '/images/fallback.jpg';
  }
}

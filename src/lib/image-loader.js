const fs = require('fs');
const path = require('path');

// Default export for Next.js image loader
module.exports = function customLoader({ src, width, quality }) {
  try {
    // Check if the file exists
    const imagePath = path.join(process.cwd(), 'public', src);
    const imageExists = fs.existsSync(imagePath);

    if (!imageExists) {
      console.warn(`Image not found: ${src}, using fallback`);
      return `/images/fallback.jpg`;
    }

    // Return the original source if it exists
    return src;
  } catch (error) {
    console.error('Error in image loader:', error);
    return '/images/fallback.jpg';
  }
};

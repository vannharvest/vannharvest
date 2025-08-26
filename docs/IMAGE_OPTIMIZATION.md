# Image Optimization Guide

This guide explains how to use the image optimization system in the Vann Harvest project.

## Components

### OptimizedImage Component

The `OptimizedImage` component is the recommended way to display images. It provides:
- Automatic image optimization
- Lazy loading
- Blur-up placeholders
- Error handling
- Responsive images

#### Basic Usage

```tsx
import { OptimizedImage } from '@/components/ui/OptimizedImage';

// Basic usage
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description of the image"
  width={800}
  height={600}
  className="rounded-lg shadow-lg"
  containerClassName="my-4"
/>

// With priority loading (for above-the-fold images)
<OptimizedImage
  src="/path/to/important-image.jpg"
  alt="Important image"
  width={1200}
  height={630}
  priority
/>
```

### Image Utilities

#### `imageLoader`
Custom image loader for Next.js Image component.

#### `getBlurDataURL`
Generates a blur placeholder for images.

#### `getResponsiveSizes`
Generates responsive image sizes for the `sizes` attribute.

#### `getOptimizedImageUrl`
Generates an optimized image URL with the specified options.

## Configuration

Image optimization settings can be configured in `src/config/images.ts`.

### Key Settings

- `defaultQuality`: Default image quality (0-100)
- `defaultSizes`: Default responsive image sizes
- `deviceSizes`: Available device sizes for responsive images
- `imageSizes`: Available image sizes for different breakpoints
- `contentSecurityPolicy`: Allowed image domains

## Best Practices

1. **Always specify width and height** to prevent layout shifts
2. **Use the `alt` attribute** for accessibility
3. **Set `priority` for above-the-fold images** to improve LCP
4. **Use appropriate quality settings** (default is 80)
5. **Leverage responsive images** with the `sizes` attribute

## Performance Tips

- Use WebP format for better compression
- Implement lazy loading for below-the-fold images
- Use blur placeholders for smoother loading
- Consider using a CDN for global distribution

## Troubleshooting

### Images not loading
- Check if the domain is whitelisted in `imageConfig.contentSecurityPolicy.imgSrc`
- Verify the image path is correct
- Check the browser console for errors

### Blurry images
- Ensure the image dimensions match the display size
- Check the `quality` prop (higher values = better quality but larger file size)

### Slow loading
- Consider using a CDN
- Optimize image dimensions for the display size
- Use the `priority` prop for critical images

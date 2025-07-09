import { ImageProps as NextImageProps, StaticImageData } from 'next/image';

// Extend the existing StaticImageData interface
declare module 'next/image' {
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }
}

// Define the props for our custom Image component
type CustomImageProps = Omit<NextImageProps, 'src'> & {
  src: string | StaticImageData;
  fallbackSrc?: string | StaticImageData;
};

// Export the custom props type
export type { CustomImageProps as ImageProps };


import { ImageProps as NextImageProps } from 'next/image';

declare module 'next/image' {
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }

  type ImageProps = Omit<NextImageProps, 'src'> & {
    src: string | StaticImageData;
    fallbackSrc?: string | StaticImageData;
  };

  const Image: React.FC<ImageProps>;
  export default Image;
}

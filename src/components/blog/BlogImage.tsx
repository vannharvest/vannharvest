'use client';

import { Image, type ImageProps } from '@/components/ui/Image';
import { cn } from '@/lib/utils';

interface BlogImageProps extends ImageProps {
  /**
   * Size preset for the image
   * @default 'blog'
   */
  size?: 'thumbnail' | 'card' | 'blog' | 'hero' | 'full';
  
  /**
   * Additional class name for the container
   */
  containerClassName?: string;
  
  /**
   * Whether to show a loading skeleton
   * @default true
   */
  showLoadingSkeleton?: boolean;
  
  /**
   * Whether to show a border radius
   * @default true
   */
  rounded?: boolean;
}

export function BlogImage({
  size = 'blog',
  className = '',
  containerClassName = '',
  showLoadingSkeleton = true,
  rounded = true,
  ...props
}: BlogImageProps) {
  return (
    <Image
      {...props}
      size={size}
      className={cn(
        'w-full h-auto transition-opacity duration-300',
        rounded && 'rounded-lg',
        className
      )}
      containerClassName={cn(
        'block', // Ensure it's a block element
        containerClassName
      )}
      unoptimized={!showLoadingSkeleton}
    />
  );
}

export default BlogImage;

"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function Image({
  src,
  alt = "",
  fallbackSrc = "/images/fallback.jpg",
  onError,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string | any>(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
    if (onError) {
      onError(e);
    }
  };

  // If no src is provided or it's an empty string, use the fallback
  if (!src) {
    return (
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <NextImage
          src={fallbackSrc}
          alt={alt}
          {...props}
          className={`${props.className || ""} opacity-50`}
        />
      </div>
    );
  }

  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}

// Add display name for better debugging
Image.displayName = "Image";

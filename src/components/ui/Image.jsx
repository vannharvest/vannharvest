'use client';

import { useState } from 'react';
import NextImage from 'next/image';

export default function Image({
  src,
  alt,
  fallbackSrc = '/images/fallback.jpg',
  onError,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = (e) => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <NextImage
      src={imgSrc}
      alt={alt || ''}
      onError={handleError}
      {...props}
    />
  );
}

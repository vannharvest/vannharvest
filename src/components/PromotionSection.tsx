'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PromotionSectionProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function PromotionSection({
  heading,
  subheading,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = 'Promotional image',
}: PromotionSectionProps) {
  return (
    <section className="relative w-full h-[calc(100vh-6rem)] max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden">
      {/* Full background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Text overlay */}
      <div className="absolute inset-0 bg-black/0 flex items-center justify-start px-6 md:px-16">
        <div className="max-w-[500px] text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight whitespace-pre-line mb-4">
            {heading}
          </h2>
          <p className="text-xl text-white mb-6">{subheading}</p>

          <Link
            href={buttonLink}
            className="inline-block border border-white px-6 py-3 text-base font-semibold text-white hover:bg-green-500 hover:text-white transition rounded-full"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

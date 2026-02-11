'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <section className="relative w-full h-[calc(100vh-6rem)] max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden group">
      {/* Full background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        priority
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16 lg:px-24">
        <motion.div 
          className="max-w-[500px] text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 [text-shadow:_0_4px_8px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heading}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href={buttonLink}
              className="group/btn inline-flex items-center gap-2 border-2 border-white px-8 py-3.5 text-base font-bold text-white hover:bg-green-600 hover:border-green-600 transition-all rounded-full shadow-2xl backdrop-blur-sm"
            >
              {buttonText}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

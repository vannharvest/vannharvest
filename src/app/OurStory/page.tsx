'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import { FaLeaf, FaSeedling, FaTractor, FaTruck, FaStore, FaGlobe } from 'react-icons/fa';

export default function OurStory() {
  const [isMounted, setIsMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [bgImageSrc] = useState('/images/our-story-bg.jpg');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  const timelineData = [
    {
      year: '2010',
      title: 'The Beginning',
      content: 'Our journey started with a single grape farm in the heart of India.',
      icon: <FaSeedling className="text-2xl text-green-400" />
    },
    {
      year: '2015',
      title: 'First Harvest',
      content: 'Successfully harvested and processed our first batch of premium raisins.',
      icon: <FaLeaf className="text-2xl text-green-400" />
    },
    {
      year: '2018',
      title: 'Expansion',
      content: 'Expanded our operations to include multiple farms across the region.',
      icon: <FaTractor className="text-2xl text-green-400" />
    },
    {
      year: '2020',
      title: 'National Reach',
      content: 'Started distributing our products nationwide through various channels.',
      icon: <FaTruck className="text-2xl text-green-400" />
    },
    {
      year: '2022',
      title: 'Retail Launch',
      content: 'Launched our products in major retail stores across the country.',
      icon: <FaStore className="text-2xl text-green-400" />
    },
    {
      year: '2023',
      title: 'Global Vision',
      content: 'Began exporting our premium raisins to international markets.',
      icon: <FaGlobe className="text-2xl text-green-400" />
    }
  ];

  return (
    <div ref={scrollRef} className="relative min-h-screen">
      {/* Background with parallax effect */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ 
          scale: bgScale, 
          y: bgY,
        }}
      >
        <Image
          src={bgImageSrc}
          alt="Farm Background"
          fill
          priority
          quality={90}
          className="object-cover"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </motion.div>

      <div className="relative z-10">
        <PageWrapper className="text-white">
          {/* Hero Section */}
          <section className="min-h-[90vh] flex items-center justify-center text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
                From a seed in Vijayapura to a movement in India — discover how Vann Harvest grew deep roots and blossomed into a legacy.
              </p>
            </motion.div>
          </section>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-green-600/40 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/90 text-base leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}

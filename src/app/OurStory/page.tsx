'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sprout, Sun, PackageCheck, Leaf } from 'lucide-react';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';

export default function OurStoryPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start start', 'end end'] });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [bgImageSrc, setBgImageSrc] = useState('/images/FarmBg.webp');
  const [imageError, setImageError] = useState<string | null>(null);

  const handleImageError = () => setImageError('Failed to load background image.');

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      fetch(bgImageSrc)
        .then((res) => console.log(`${bgImageSrc} status: ${res.status}`))
        .catch((err) => console.error(`Error fetching ${bgImageSrc}: ${err.message}`));
    }
  }, [bgImageSrc]);

  const timelineData = [
    {
      title: 'Founded in 1993',
      content:
        'Vann Harvest began as a small farm in Vijayapura and has grown to a 400-acre estate committed to producing premium raisins using organic, chemical-free practices.',
      icon: <Sprout className="w-8 h-8 text-green-300" />, side: 'left'
    },
    {
      title: 'Modern Processing',
      content:
        'Our state-of-the-art processing units allow us to meet global standards while catering to diverse preferences in quality and size.',
      icon: <PackageCheck className="w-8 h-8 text-blue-300" />, side: 'right'
    },
    {
      title: 'Social Responsibility',
      content:
        'We’ve transformed our entire organization into a CSR initiative, supporting fair equity for farmers and curbing rural migration.',
      icon: <Leaf className="w-8 h-8 text-emerald-300" />, side: 'left'
    },
    {
      title: 'Educating Consumers',
      content:
        'We are bridging the knowledge gap by empowering consumers to understand what sets premium raisins apart through transparency and education.',
      icon: <Sun className="w-8 h-8 text-yellow-300" />, side: 'right'
    },
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
          onError={handleImageError}
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

        {/* Founder Section */}
        <section className="py-24 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <motion.div className="relative w-full max-w-sm h-auto mx-auto">
            <Image
              src="/images/founder.jpg"
              alt="Founder"
              width={400}
              height={400}
              className="rounded-xl border-4 border-white shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <div>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">A Message from Our Founder</motion.h2>
            <p className="text-white/80 text-lg">
              Vann Harvest was founded with a mission to revolutionize the raisin industry by raising awareness, ensuring quality, and supporting rural livelihoods.
            </p>
          </div>
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

        {/* Final Quote Section */}
        <section className="py-32 text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">More Than Just Raisins</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 text-lg">
              Vann Harvest is a movement—towards better health, rural empowerment, and consumer knowledge.
            </p>
            <p className="italic text-2xl text-white/90 font-serif">
              "From root to fruit — every raisin tells a story of impact."
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition font-medium"
            >
              Learn More About Our Legacy →
            </a>
          </motion.div>
        </section>
        </PageWrapper>
      </div>
    </div>
  );
}

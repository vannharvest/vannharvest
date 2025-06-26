'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import { FaLeaf, FaSeedling, FaTractor, FaTruck, FaStore, FaGlobe } from 'react-icons/fa';

export default function OurStory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [isLoading, setIsLoading] = useState(true);
  const bgImageSrc = '/images/FarmBg.webp';

  useEffect(() => {
    const img = new window.Image();
    img.src = bgImageSrc;
    const handleLoad = () => setIsLoading(false);
    const handleError = (error: ErrorEvent) => {
      console.error('Failed to load background image:', error);
      setIsLoading(false);
    };
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const timelineData = [
    { year: '2010', title: 'The Beginning', content: 'Our journey started with a single grape farm in the heart of India.', icon: <FaSeedling className="text-2xl text-green-400" /> },
    { year: '2015', title: 'First Harvest', content: 'Successfully harvested and processed our first batch of premium raisins.', icon: <FaLeaf className="text-2xl text-green-400" /> },
    { year: '2018', title: 'Expansion', content: 'Expanded our operations to include multiple farms across the region.', icon: <FaTractor className="text-2xl text-green-400" /> },
    { year: '2020', title: 'National Reach', content: 'Started distributing our products nationwide through various channels.', icon: <FaTruck className="text-2xl text-green-400" /> },
    { year: '2022', title: 'Retail Launch', content: 'Launched our products in major retail stores across the country.', icon: <FaStore className="text-2xl text-green-400" /> },
    { year: '2023', title: 'Global Vision', content: 'Began exporting our premium raisins to international markets.', icon: <FaGlobe className="text-2xl text-green-400" /> }
  ];

  return (
    <div ref={scrollRef} className="relative min-h-screen">
      <motion.div className="fixed inset-0 -z-10" style={{ scale: bgScale, y: bgY }}>
        <Image src={bgImageSrc} alt="Vann Harvest Farm Background" fill priority quality={90} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </motion.div>

      <div className="relative z-10">
        <PageWrapper className="text-white">
          <section className="min-h-screen flex items-center justify-center text-center px-4 pt-24 pb-16 md:pt-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="mb-8">
                <motion.h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Our Story
                </motion.h1>
                <motion.div 
                  className="w-24 h-1.5 bg-green-400 mx-auto mb-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </div>
              <motion.div 
                className="max-w-3xl mx-auto text-white/90 leading-relaxed font-light tracking-wide space-y-6 text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p>Founded in 1993, Vann Harvest Pvt. Ltd. is a premium raisin producer based in Vijayapura, Karnataka - India's heartland for high-quality grapes. What began as a small family-driven venture has grown into a trusted B2B supplier of sulphur-free, sun-dried raisins, serving both domestic and international markets.</p>
                <p>At Vann Harvest, we combine age-old farming wisdom with modern processing technology to ensure every raisin meets the highest standards of purity, hygiene, and taste. Our vertically integrated operation - from vineyard to packaging - gives us unmatched control over quality and consistency.</p>
              </motion.div>
            </motion.div>
          </section>

          <section className="max-w-6xl mx-auto py-16 px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Rooted in Soil, <span className="text-green-400">Driven by Vision</span></h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed text-left">
                <p>In 1993, on the fertile lands of Vijayapura, Karnataka, a visionary farmer with a deep respect for tradition and a spark of innovation planted the seeds of what would become Vann Harvest Pvt. Ltd.</p>
                <p>Our founder came from a family of grape growers who believed in the power of nature, patience, and hard work. What began as a humble farm producing grapes for local markets soon evolved - through relentless learning, trials, and dedication - into a full-fledged raisin production enterprise with global standards.</p>
                <p>Driven by a desire to offer healthier, chemical-free alternatives, we pioneered the sun-drying process of raisins, eliminating the need for artificial preservatives or sulphur treatment. This not only retained the natural sweetness and nutrients of the grapes but also laid the foundation for Vann Harvest's commitment to purity, sustainability, and quality.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-400 flex items-center gap-3">
                  From a Single Farm to a Global Footprint
                  </h3>
                  <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                    <p>Today, Vann Harvest operates from a state-of-the-art facility with full control over every stage - from vineyard to value pack. We work closely with skilled farmers, uphold strict hygiene practices, and comply with international food safety standards.</p>
                    <p>Our raisins are now trusted by exporters, wholesalers, and food brands across India and beyond, appreciated not just for their taste and shelf life, but for the ethics and care behind them.</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Purpose</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We exist to build a healthier world - one raisin at a time. From empowering rural farmers to preserving nature and delivering clean food, Vann Harvest is more than a business. It's a legacy in the making.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-900/30 to-green-900/10 backdrop-blur-sm rounded-2xl p-8 border border-green-800/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                itemScope
                itemType="https://schema.org/Organization"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Why Businesses Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Premium <strong>sun-dried raisins from Vijayapura</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Trusted by <strong>raisin wholesalers, retail chains, and exporters</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Reliable <strong>bulk supply</strong>, fast shipping, and clean packaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>FSSAI and APEDA certified</strong> raisin producer in India</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-green-800/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Established in 1993</p>
                      <p className="text-sm text-green-300">30+ years of excellence</p>
                    </div>
                  </div>
                </div>
                <div itemProp="description" className="hidden">
                  Vann Harvest Pvt. Ltd. is a leading producer of premium sun-dried, sulphur-free raisins in Vijayapura, Karnataka, India, 
                  specializing in high-quality, natural raisins since 1993.
                </div>
              </motion.div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-10">
            <motion.div className="w-full md:w-1/2 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <Image src="/images/founder.jpg" alt="Vann Harvest Founder" fill className="object-cover" />
            </motion.div>

            <motion.div className="w-full md:w-1/2 space-y-5 text-white/90 text-base md:text-lg leading-relaxed" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">A Message from Our Founder</h2>
              <p>Vann Harvest was born from a vision: to revolutionize the raisin industry through transparency and education. Despite their popularity, raisins remain misunderstood in terms of quality and processing - something we strive to change.</p>
              <p>Our mission goes beyond business. We’re addressing rural migration, rebuilding local economies, and ensuring farmers get fair equity for their work. We’ve turned our entire organization into a CSR movement, building not just a brand but a cause.</p>
              <p>With over 30 years of expertise, cutting-edge infrastructure, and a deep respect for tradition, Vann Harvest is a promise - of quality, honesty, and community upliftment. Join us in a movement for better health, deeper knowledge, and a more sustainable future.</p>
            </motion.div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-4 py-24">
            {timelineData.map((item, index) => (
              <motion.article key={index} className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-green-600/40 transition" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/90 text-base leading-relaxed">{item.content}</p>
              </motion.article>
            ))}
          </section>
        </PageWrapper>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import { Leaf, Droplets, Recycle } from 'lucide-react';
import Image from '@/components/ui/Image';

export default function Sustainability() {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>Sustainability at Vann Harvest | Eco-Friendly Raisin Production</title>
        <meta name="description" content="Explore how Vann Harvest integrates sustainability into every step — from organic farming and waste reduction to community empowerment." />
        <meta name="keywords" content="Vann Harvest, Sustainability, Organic Raisins, Eco-Friendly Farming, Zero Waste Raisins, Green Agriculture, Raisin Production India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vannharvest.com/sustainability" />
      </Head>

      {/* Hero Section - Matches Home Page Style */}
      <div className="relative h-[calc(100vh-10rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden mt-32">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            <Image 
              src="/images/gallery/Sustainibility.avif" 
              alt="Sustainable Farming at Vann Harvest" 
              fill 
              className="object-cover"
              priority
              fallbackSrc="/images/fallback.jpg"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="absolute z-20 left-6 md:left-12 bottom-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight drop-shadow-lg text-white">Sustainable Farming,<br />Naturally Better</h1>
          <p className="text-2xl mt-2 font-light text-white/90">Preserving nature while producing premium raisins</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Sustainability Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              title: 'Eco-Friendly Farming', 
              description: '100% organic practices that nurture the land and produce the finest raisins.', 
              icon: <Leaf className="w-10 h-10 text-green-600" /> 
            }, 
            { 
              title: 'Water Conservation', 
              description: 'Innovative irrigation systems that reduce water usage by up to 50%.', 
              icon: <Droplets className="w-10 h-10 text-blue-500" /> 
            }, 
            { 
              title: 'Zero Waste', 
              description: 'Every part of the grape is utilized, from fruit to vine.', 
              icon: <Recycle className="w-10 h-10 text-amber-600" /> 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-green-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-24">
          <motion.section 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Commitment to a Greener Tomorrow</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
                At Vann Harvest, we don&apos;t just grow raisins-we cultivate a legacy of environmental stewardship and sustainable practices that nurture both people and planet.
              </p>
              <div className="space-y-6 text-gray-600">
                <p>At Vann Harvest, sustainability is at the heart of everything we do. Our farms use organic methods that work in harmony with nature, not against it.</p>
                <p>We&apos;ve implemented solar power across our facilities, reducing our carbon footprint while maintaining the highest quality standards in raisin production.</p>
                <p>Our commitment extends to fair labor practices and supporting the local communities where we operate.</p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="w-full h-full relative">
                <Image 
                  src="/images/Greener_Tomorrow.jpg" 
                  alt="Sustainable farming practices" 
                  fill
                  className="object-cover"
                  fallbackSrc="/images/fallback.jpg"
                />
              </div>
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.section>

          <motion.section 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="order-2 md:order-1">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image 
                    src="/images/soil.jpg" 
                    alt="Community impact" 
                    fill
                    className="object-cover"
                    fallbackSrc="/images/fallback.jpg"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Community & Environment</h2>
              <div className="space-y-6 text-gray-600">
                <p>We believe in giving back to the communities that support us. Our initiatives include education programs, healthcare access, and sustainable livelihood projects.</p>
                <p>Our environmental programs focus on biodiversity conservation, soil health, and reducing our overall environmental impact through innovative farming techniques.</p>
                <p>By choosing Vann Harvest, you&apos;re supporting a business that cares about people and the planet.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

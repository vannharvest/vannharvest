'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
            <p className="text-lg text-gray-700">
              At Vann Harvest, we are passionate about delivering the finest quality raisins straight from the sun-soaked vineyards of Vijayapura. Our journey began with a vision to redefine purity and trust in the dried fruit industry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/about-us-1.jpg"
              alt="Vann Harvest Raisins"
              width={600}
              height={400}
              className="rounded-3xl w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/about-us-2.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-3xl w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              We aim to empower farmers, ensure sustainable practices, and deliver naturally sweet and nutrient-rich raisins to households and businesses worldwide.
            </p>
          </motion.div>
        </div>

        {/* Commitment Section */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Commitment to Quality
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every raisin we deliver undergoes rigorous cleaning, grading, and quality checks to meet global export standards.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

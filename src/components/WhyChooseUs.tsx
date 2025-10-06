'use client';

import { motion } from 'framer-motion';
import { Medal, Sun, Globe, Package, ShieldCheck } from 'lucide-react';

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Medal className="text-green-600" size={24} />,
      title: "Unmatched Quality Since 1993",
      description: "With over three decades of experience, we deliver premium-grade raisins carefully cultivated using a blend of traditional techniques and modern innovation."
    },
    {
      icon: <Sun className="text-amber-500" size={24} />,
      title: "Naturally Sun-Dried & Sulphur-Free",
      description: "Our raisins are naturally sun-dried and 100% sulphur-free - preserving taste, nutrition, and purity without chemical intervention."
    },
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: "Trusted by Exporters & Wholesalers ",
      description: "We proudly supply to leading distributors, exporters, and food manufacturers across India, ensuring consistency, hygiene, and compliance with global food standards."
    },
    {
      icon: <Package className="text-green-700" size={24} />,
      title: "Farm-to-Factory Control",
      description: "From cultivation in our own farms in Vijayapura to in-house processing and packaging, we maintain full control over quality at every step."
    },
    {
      icon: <ShieldCheck className="text-emerald-600" size={24} />,
      title: "Certified & Sustainable",
      description: "Our facility is equipped with FSSAI and APEDA certifications, and we follow sustainable farming practices to minimize our environmental impact."
    }
  ];
  return (
    <section className="relative bg-white py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-green-600 text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Vann Harvest?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three decades of excellence in producing premium quality raisins while maintaining the highest standards of purity and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* Keyword Cloud Card */}
          <motion.div 
            className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl border border-green-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <Medal className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h3>
              <p className="text-gray-600 text-lg max-w-3xl">
                We take pride in delivering the finest quality raisins while maintaining the highest standards of sustainability and food safety.
              </p>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

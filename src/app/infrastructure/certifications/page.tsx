'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { Award, CheckCircle, Shield } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    title: 'APEDA Registered',
    description: 'Registered with the Agricultural and Processed Food Products Export Development Authority for quality exports.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/APEDA_Logo.svg/1200px-APEDA_Logo.svg.png',
    alt: 'APEDA Registration'
  },
  {
    title: 'APMC Licensed',
    description: 'Licensed by the Agricultural Produce Market Committee for fair trade practices.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/APMC_Logo.svg/1200px-APMC_Logo.svg.png',
    alt: 'APMC License'
  },
  {
    title: 'FSSAI Certified',
    description: 'Certified by the Food Safety and Standards Authority of India for food safety compliance.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/FSSAI_Logo.svg/1200px-FSSAI_Logo.svg.png',
    alt: 'FSSAI Certification'
  },
  {
    title: 'ISO 22000:2018',
    description: 'Food Safety Management System Certification ensuring safe food production processes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/ISO_Certification_Logo.svg/1200px-ISO_Certification_Logo.svg.png',
    alt: 'ISO 22000:2018 Certification'
  },
  {
    title: 'HACCP Certified',
    description: 'Hazard Analysis and Critical Control Points certification for food safety.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HACCP_Logo.svg/1200px-HACCP_Logo.svg.png',
    alt: 'HACCP Certification'
  },
  {
    title: 'Organic Certified',
    description: 'Certified organic production methods ensuring chemical-free, natural raisins.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Organic_Seal_Color_5-2010.svg/1200px-Organic_Seal_Color_5-2010.svg.png',
    alt: 'Organic Certification'
  }
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Certifications | Vann Harvest | Quality Standards</title>
        <meta name="description" content="Explore our industry certifications and quality standards that ensure premium quality raisins from Vann Harvest." />
        <meta name="keywords" content="Vann Harvest, Certifications, Food Safety, Quality Standards, ISO 22000, HACCP, Organic Certification, Kosher, Halal, FSSC 22000" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vannharvest.com/infrastructure/certifications" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-10rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden mt-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.1.0&auto=format&fit=crop&w=1950&q=80" 
            alt="Certifications at Vann Harvest" 
            fill 
            unoptimized={true}
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.1.0&auto=format&fit=crop&w=1950&q=80';
              target.onerror = null;
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="absolute z-20 left-6 md:left-12 bottom-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight drop-shadow-lg text-white">Our Certifications</h1>
          <p className="text-2xl mt-2 font-light text-white/90">Ensuring quality and safety at every step</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="prose max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
          <p className="text-lg text-gray-600">
            At Vann Harvest, we adhere to the highest industry standards. Our certifications demonstrate our dedication to quality, safety, and sustainability in every batch of raisins we produce.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-56 bg-gray-50 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-70"></div>
                
                {/* Fallback icon */}
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-300 group-hover:opacity-0">
                  <Award className="w-16 h-16 text-green-200" />
                </div>
                
                {/* Main image */}
                <div className="relative h-full w-full flex items-center justify-center p-6">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={200}
                    height={150}
                    unoptimized={true}
                    className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x200?text=Certificate+Not+Found';
                      target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium bg-black/60 px-2 py-1 rounded">View Details</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-12 h-12 mx-auto mb-6 text-green-300" />
            <h2 className="text-3xl font-bold mb-4">Have Questions About Our Certifications?</h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Our quality assurance team is ready to provide detailed information about our certifications and quality standards.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-green-800 bg-white hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

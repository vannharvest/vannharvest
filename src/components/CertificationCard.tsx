'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Certification } from '@/config/certifications';

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

export function CertificationCard({ cert, index }: CertificationCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="h-56 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src={cert.image}
            alt={cert.alt}
            width={cert.width || 200}
            height={cert.height || 150}
            className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/300x200?text=Certificate+Not+Found';
              target.onerror = null;
            }}
            loading={index > 1 ? 'lazy' : 'eager'}
            priority={index < 2}
          />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start">
          <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { certifications } from '@/config/certifications';
import { CertificationCard } from '@/components/CertificationCard';

// This is a Client Component - no need for metadata export here
// Metadata is now handled by the metadata.ts file in the same directory

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-10rem)] w-full max-w-[calc(100%-32px)] mx-auto rounded-2xl overflow-hidden mt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/team/team.avif"
            alt="Certifications at Vann Harvest"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            className="object-cover"
            priority
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9Ijg0MCI+PHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iODQwIiBmaWxsPSIjZjNmM2YzIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2RkZCI+VmFubiBIYXJ2ZXN0IENlcnRpZmljYXRpb25zPC90ZXh0Pjwvc3ZnPg=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/fallback/team-fallback.jpg';
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
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-lg text-white">
            Our Certifications
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-light text-white/90">
            Ensuring quality and safety at every step
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="prose max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            At Vann Harvest, we adhere to the highest industry standards. Our certifications demonstrate our dedication to quality, safety, and sustainability in every batch of raisins we produce.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 sm:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-green-300" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Have Questions About Our Certifications?
            </h2>
            <p className="text-base sm:text-lg text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our quality assurance team is ready to provide detailed information about our certifications and quality standards.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-green-800 bg-white hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              aria-label="Contact our team about certifications"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

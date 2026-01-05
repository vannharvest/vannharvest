import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const MewaPromotion: React.FC = () => {
  const mewaImages = [
    { src: '/images/gallery/events/mewa_5.avif', alt: 'Close-up of Vann Harvest products at MEWA India 2026' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "MEWA India 2026",
            "startDate": "2026-01-23T09:00",
            "endDate": "2026-01-25T18:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Yashobhoomi",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dwarka",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              }
            },
            "image": [
              "https://www.vannharvest.com/images/gallery/events/mewa_1.avif",
              "https://www.vannharvest.com/images/gallery/events/mewa_2.avif",
              "https://www.vannharvest.com/images/gallery/events/mewa_3.avif"
            ],
            "description": "Vann Harvest is attending MEWA India 2026, India's Largest Dry Fruits & Nuts Trade Show. Discover our premium selection and explore partnership opportunities.",
            "organizer": {
              "@type": "Organization",
              "name": "Vann Harvest Private Limited",
              "url": "https://www.vannharvest.com"
            },
            "url": "https://www.mewainia.in/"
          })
        }}
      />
      <section className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/gallery/events/mewa.avif" // Replace with an appropriate background image
          alt="Dry fruits background"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-contain mx-auto"
          quality={100}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Vann Harvest at MEWA India 2026!
          </h2>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            If you’re looking to source the finest raisins for your business, visit us at Stall B45 and let’s talk business. And if you’re just passing by, drop in to say hello, we’d love to connect!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
            <div className="flex items-center text-lg">
              <CalendarDays className="mr-2 h-6 w-6" />
              <span>Jan 23rd - 25th, 2026</span>
            </div>
            <div className="flex items-center text-lg">
              <MapPin className="mr-2 h-6 w-6" />
              <span>Yashobhoomi, New Delhi</span>
            </div>
          </div>
          <Link
            href="https://www.mewaindia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-orange-700 bg-white hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Learn more about MEWA India 2026
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="grid grid-cols-1 gap-4">
            {mewaImages.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={400}
                height={225}
                className="rounded-lg shadow-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MewaPromotion;

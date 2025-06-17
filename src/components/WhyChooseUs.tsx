'use client';

import { Star, ShieldCheck, Globe, Handshake } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#faf6ea] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-green-900 mb-16">
          Why Choose Vann Harvest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {/* Feature 1 */}
          <div>
            <div className="mb-4 text-green-800">
              <Star size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium text-green-900 mb-2">Premium Quality</h3>
            <p className="text-sm text-green-800 leading-relaxed">
              Every raisin we deliver is handpicked and triple-cleaned, ensuring unmatched taste, texture, and consistency for global and domestic markets.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="mb-4 text-green-800">
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium text-green-900 mb-2">Purity Guaranteed</h3>
            <p className="text-sm text-green-800 leading-relaxed">
              We use advanced cleaning, grading, and packaging systems to ensure every batch is free from dust, stems, and adulteration.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="mb-4 text-green-800">
              <Globe size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium text-green-900 mb-2">Global Standards</h3>
            <p className="text-sm text-green-800 leading-relaxed">
              Trusted by international buyers, our raisins comply with export regulations and food safety certifications, ensuring consistent international-grade quality.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="mb-4 text-green-800">
              <Handshake size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium text-green-900 mb-2">Customer-Centric</h3>
            <p className="text-sm text-green-800 leading-relaxed">
              From packaging customization to timely delivery, we prioritize customer satisfaction through transparent processes and responsive service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

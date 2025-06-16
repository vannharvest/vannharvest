'use client';

import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="bg-[#f3fdf5] py-20 px-6 md:px-12 rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
        
        {/* Left Image with floating shapes */}
        <div className="relative w-full max-w-sm">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#d4f9e2] rounded-full opacity-70 z-0"></div>
          <div className="absolute top-12 left-16 w-16 h-16 bg-[#d4f9e2] rounded-full opacity-70 z-0"></div>
          <div className="relative z-10">
            <Image
              src="https://plus.unsplash.com/premium_photo-1719997502948-7b85c62dce89?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vann Harvest Farmer"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4725] mb-4 leading-snug capitalize">
            More than a harvest-<br /> it's a legacy of care.
          </h2>
          <p className="text-xl md:text-2xl font-serif text-[#1c3d1c] leading-relaxed mb-6">
            Every raisin we deliver carries a story-<br className="hidden md:block" />
            of sun, soil, and the honest hands that nurtured it.
          </p>
          <p className="text-sm text-[#4a6d4a] tracking-wide font-medium">
            Rooted in tradition. Raised with love. Ready for your table.
          </p>
        </div>

        {/* Right Side Product Tube */}
        <div className="hidden lg:block max-w-[160px]">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663127351484-91abf496523a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybXMlMjBpY29ucyUyMGluZGlhbnMlMjBncmFwZXN8ZW58MHx8MHx8fDA%3D"
            alt="Vann Harvest Product"
            width={200}
            height={200}
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

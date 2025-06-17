'use client';

import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left: Image with subtle background effect */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-40 z-0"></div>
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-xl border border-green-200">
            <Image
              src="https://plus.unsplash.com/premium_photo-1719997502948-7b85c62dce89?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vann Harvest Legacy"
              width={600}
              height={700}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Story Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-6">
            Our Story
          </h2>
          <p className="text-base md:text-lg text-green-800 leading-relaxed mb-4">
            At Vann Harvest, every raisin is more than a product — it's a piece of our land, our tradition, and our pride.
          </p>
          <p className="text-base md:text-lg text-green-800 leading-relaxed mb-4">
            From sun-soaked vineyards in Vijayapura to world-class cleaning and packaging, we ensure purity, taste, and trust in every bite.
          </p>
          <p className="text-sm uppercase font-semibold tracking-wide text-green-600">
            Crafted by nature. Perfected by hands that care.
          </p>
        </div>

      </div>
    </section>
  );
}

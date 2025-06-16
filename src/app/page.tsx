import BestSellers from "@/components/BestSellers";
import HeroSection from "@/components/HeroSection";
import PromotionSection from "@/components/PromotionSection";
import CategorySection from "@/components/CategorySection";
import OurStorySection from "@/components/OurStorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Promo Section */}
      <HeroSection />

      {/* Best Sellers Section */}
      <BestSellers />
      {/* Promotion Section */}
      <PromotionSection
        heading="Premium Quality Harvest"
        subheading="Experience the freshness of our farm-to-table produce. Limited stock available!"
        buttonText="Shop Now"
        buttonLink="/products"
        imageSrc="https://images.unsplash.com/photo-1661096058717-89f2cd8fd695?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Fresh organic vegetables and fruits from Upstock"
      />
      {/* Category Section */}
      <CategorySection />

      <OurStorySection />

      {/* New Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the difference with our premium quality products and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Vann Harvest</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing the finest quality agricultural products, sourced directly from local farms and processed with the utmost care to maintain their natural goodness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
              <div className="text-4xl text-green-600 mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Organic Farming</h3>
              <p className="text-gray-600">Sustainable and eco-friendly farming practices that respect nature and deliver pure, healthy products.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
              <div className="text-4xl text-green-600 mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected and processed to ensure you receive only the best nature has to offer.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
              <div className="text-4xl text-green-600 mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">Committed to environmental responsibility and sustainable agricultural practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Vann Harvest?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering the highest quality raisins while maintaining sustainable and ethical practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-selected and carefully processed to ensure the highest quality standards.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600">Efficient logistics to ensure your orders reach you on time, every time.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified</h3>
              <p className="text-gray-600">Compliant with international quality and safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your raisin requirements and get a competitive quote.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-white hover:bg-amber-50 transition-colors"
            >
              Get a Free Quote
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

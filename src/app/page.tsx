import HeroSection from "@/components/HeroSection";
import PromotionSection from "@/components/PromotionSection";
import OurStorySection from "@/components/OurStorySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CategorySection from "@/components/CategorySection";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 🌟 Hero Section */}
      <HeroSection />
      {/* 🧺 Product Categories */}
      <CategorySection />
      {/* 🛒 Promotional Banner */}
      <PromotionSection
        heading="Premium Quality Harvest"
        subheading="Experience the freshness of our farm-to-table produce. Limited stock available!"
        buttonText="Shop Now"
        buttonLink="/products"
        imageSrc="/images/promotional/grapes_promo_2.webp"
        imageAlt="Fresh organic grapes from our farm"
      />
      {/* 📖 Brand Story */}
      <OurStorySection />
      {/* 🌟 Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
}

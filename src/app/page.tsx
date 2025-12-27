import HeroSection from "@/components/HeroSection";
import PromotionSection from "@/components/PromotionSection";
import OurStorySection from "@/components/OurStorySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CategorySection from "@/components/CategorySection";
import MewaPromotion from "@/components/MewaPromotion";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 🌟 Hero Section */}
      <HeroSection />
      {/* 🧺 Product Categories */}
      <MewaPromotion />
      <CategorySection />
      {/* 🛒 Promotional Banner */}
      <PromotionSection
        heading="Premium Quality Harvest"
        subheading="Discover the pure, natural goodness of our sun-drenched raisins, grown with care and tradition."
        buttonText="Explore Bulk Orders"
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

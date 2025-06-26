import HeroSection from "@/components/HeroSection";
import PremiumProduct from "@/components/PremiumProduct";
import PromotionSection from "@/components/PromotionSection";
import CategorySection from "@/components/CategorySection";
import OurStorySection from "@/components/OurStorySection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 🌟 Hero Section */}
      <HeroSection />

      {/* 🔥 Best Sellers */}
      <PremiumProduct />

      {/* 🛒 Promotional Banner */}
      <PromotionSection
        heading="Premium Quality Harvest"
        subheading="Experience the freshness of our farm-to-table produce. Limited stock available!"
        buttonText="Shop Now"
        buttonLink="/products"
        imageSrc="https://images.unsplash.com/photo-1661096058717-89f2cd8fd695?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Fresh organic vegetables and fruits from Upstock"
      />

      {/* 🧺 Product Categories */}
      <CategorySection />

      {/* 📖 Brand Story */}
      <OurStorySection />

      {/* 🌟 Why Choose Us */}
      <WhyChooseUs />

   
    </div>
  );
}

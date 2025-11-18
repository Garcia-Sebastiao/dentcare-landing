import { HeroSection } from "./components/hero/hero-section";
import { VideoSection } from "./components/video-section/video-section";
import { PartnersSection } from "./components/partners-section/partners-section";
import { ModulesSection } from "./components/modules-section/modules-section";
import { BenefitsSection } from "./components/benefits-section/benefits-section";
import { TestimonialsSection } from "./components/testimonials-section/testimonials-section";
import { PricingSection } from "./components/pricing-section/pricing-section";
import { ProductSection } from "./components/product-section/product-section";
import { FooterSection } from "./components/footer-section/footer-section";

export function HomeView() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <div className="relative overflow-hidden">
        <div className="relative z-20">
          <VideoSection />
          <PartnersSection />
          <ModulesSection />
          <BenefitsSection />
          <TestimonialsSection />
          <PricingSection />
          <ProductSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}

import { HeroSection } from "./components/hero/hero-section";
import { VideoSection } from "./components/video-section/video-section";
import { PartnersSection } from "./components/partners-section/partners-section";
import { ModulesSection } from "./components/modules-section/modules-section";
import { BenefitsSection } from "./components/benefits-section/benefits-section";
import { TestimonialsSection } from "./components/testimonials-section/testimonials-section";
import { PricingSection } from "./components/pricing-section/pricing-section";

export function HomeView() {
  return (
    <div className="">
      <HeroSection />
      <VideoSection />
      <PartnersSection />
      <ModulesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}

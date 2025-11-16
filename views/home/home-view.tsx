import { HeroSection } from "./components/hero/hero-section";
import { VideoSection } from "./components/video-section/video-section";
import { PartnersSection } from "./components/partners-section/partners-section";
import { ModulesSection } from "./components/modules-section/modules-section";

export function HomeView() {
  return (
    <div className="">
      <HeroSection />
      <VideoSection />
      <PartnersSection />
      <ModulesSection />
    </div>
  );
}

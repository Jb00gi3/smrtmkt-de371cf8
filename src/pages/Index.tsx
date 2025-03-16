
import NavbarWrapper from "@/components/ui-components/NavbarWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <NavbarWrapper showLandingToggle={true} />
      <main>
        <HeroSection isLandingPage={false} />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;

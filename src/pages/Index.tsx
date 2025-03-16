
import NavbarWrapper from "@/components/ui-components/NavbarWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to landing page
  return <Navigate to="/landing" replace />;
};

export default Index;

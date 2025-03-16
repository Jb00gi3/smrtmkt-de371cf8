
import React, { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { EmailCaptureForm } from "@/components/ui-components/EmailCaptureForm";
import { toast } from "@/components/ui/use-toast";
import NavbarWrapper from "@/components/ui-components/NavbarWrapper";

const Landing = () => {
  const [showEmailCapture, setShowEmailCapture] = useState(true);

  return (
    <div className="relative min-h-screen">
      <NavbarWrapper showLandingToggle={true} />
      
      {showEmailCapture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <EmailCaptureForm onClose={() => setShowEmailCapture(false)} />
        </div>
      )}
      
      <main>
        <HeroSection isLandingPage={true} />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <FooterSection hideSections={true} />
      
      {/* Floating Email Capture Button */}
      {!showEmailCapture && (
        <button 
          onClick={() => setShowEmailCapture(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg z-40 transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Landing;

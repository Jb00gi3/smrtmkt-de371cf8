
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
  const [showEmailCapture, setShowEmailCapture] = useState(false);

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
        <HowItWorksSection openEmailCapture={() => setShowEmailCapture(true)} />
        <FAQSection />
      </main>
      <FooterSection hideSections={true} />
      
      {/* Floating Email Capture Button with Shopping Cart Image */}
      {!showEmailCapture && (
        <button 
          onClick={() => setShowEmailCapture(true)}
          className="fixed bottom-6 right-6 bg-transparent hover:bg-primary/10 rounded-full p-4 shadow-lg z-40 transition-all"
          aria-label="Join waiting list"
        >
          <img 
            src="/lovable-uploads/102606c7-9c54-4763-9022-d1075dcad148.png" 
            alt="Shopping Cart"
            className="w-8 h-8"
          />
        </button>
      )}
    </div>
  );
};

export default Landing;

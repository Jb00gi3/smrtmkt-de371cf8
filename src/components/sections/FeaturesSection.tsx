
import { FeatureCard } from "../ui-components/FeatureCard";

const featureIcons = {
  compare: (
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
      <rect width="8" height="8" x="2" y="2" rx="1" />
      <path d="M14 2c.6 0 1.1.2 1.5.6.4.4.6.9.5 1.4l-1 8a2 2 0 0 1-2 1.7h-1" />
      <path d="M11 14a2 2 0 0 1-2 1.7l-8 1c-.5.1-1-.1-1.4-.5-.4-.4-.6-.9-.6-1.5V6.2A2 2 0 0 1 .9 4.5l9.6-2.5c.7-.2 1.5.3 1.5 1Z" />
      <path d="M22 13v6a2 2 0 0 1-2 2H8" />
      <path d="M22 13h-4a2 2 0 0 0-2 2v6" />
      <path d="M18 14v4" />
      <path d="M15 18h6" />
    </svg>
  ),
  algorithm: (
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  preferences: (
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
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  consolidated: (
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
      <path d="M10.3 8.2c.2-.7.9-1.2 1.7-1.2s1.5.5 1.7 1.2" />
      <path d="m8.6 10.9 1.4-1.2" />
      <path d="M14 9.7 15.4 11" />
      <circle cx="12" cy="12" r="8" />
      <path d="M18.8 19.2c-1.3-2.4-3.7-4-6.8-4s-5.5 1.6-6.8 4" />
    </svg>
  ),
  save: (
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
      <path d="M12 2v20" />
      <path d="m17 5-5-3-5 3" />
      <path d="m17 19-5 3-5-3" />
      <path d="M2 12h20" />
      <path d="m5 7-3 5 3 5" />
      <path d="m19 7 3 5-3 5" />
    </svg>
  ),
  time: (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-4">Smarter Shopping Features</h2>
          <p className="text-lg text-muted-foreground">
            Our platform is designed to make your shopping experience effortless while maximizing savings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={featureIcons.compare}
            title="Multi-Store Comparison"
            description="Compare prices across dozens of retailers to find the best deals for each item on your list."
            index={0}
          />
          
          <FeatureCard
            icon={featureIcons.algorithm}
            title="Smart Selection Algorithm"
            description="Our advanced algorithm automatically selects the specific product variants that match your preferences."
            index={1}
          />
          
          <FeatureCard
            icon={featureIcons.preferences}
            title="Personalized Preferences"
            description="Set your preferences for organic, brand loyalty, package size, and more for accurate recommendations."
            index={2}
          />
          
          <FeatureCard
            icon={featureIcons.consolidated}
            title="Consolidated Shopping Lists"
            description="See exactly which stores to visit for your shopping list, optimized for maximum savings."
            index={3}
          />
          
          <FeatureCard
            icon={featureIcons.save}
            title="Average Savings of 15%"
            description="Our users typically save 15% on their regular grocery bills compared to shopping at a single store."
            index={4}
          />
          
          <FeatureCard
            icon={featureIcons.time}
            title="Time-Saving Efficiency"
            description="Eliminate hours of manual comparison shopping with our automated price analysis system."
            index={5}
          />
        </div>
      </div>
    </section>
  );
}


import { StepCard } from "../ui-components/StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

interface HowItWorksSectionProps {
  openEmailCapture?: () => void;
}

export function HowItWorksSection({ openEmailCapture }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Finding the best deals across stores has never been easier. Follow these simple steps to start saving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <StepCard
            number={1}
            title="Create Your Shopping List"
            description="Add standard products to your list – like milk, bread, or apples – without worrying about specific brands or sizes yet."
          />
          
          <StepCard
            number={2}
            title="Set Your Preferences"
            description="Tell us your preferences for organic items, favorite brands, package sizes, and quality levels for personalized results."
          />
          
          <StepCard
            number={3}
            title="Get Optimized Results"
            description="Receive a consolidated shopping plan that shows exactly which stores to visit for the best deals on your entire list."
          />
        </div>
        
        <div className="mt-20 rounded-xl bg-gradient-to-r from-primary/10 to-blue-600/10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-medium mb-4">Ready to start saving on your shopping?</h3>
              <p className="text-muted-foreground mb-4">
                Join thousands of smart shoppers who are saving time and money every week with our price comparison tool.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-btn transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={openEmailCapture}
                >
                  Join the Waiting List
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center animate-float">
                <ShoppingCart className="text-primary" size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

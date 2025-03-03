
import { Button } from "@/components/ui/button";
import { ShoppingListDemo } from "../ui-components/ShoppingListDemo";
import { StoreComparisonDemo } from "../ui-components/StoreComparisonDemo";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none"></div>
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-12">
          {/* Hero text section */}
          <div className="flex-1 space-y-8 max-w-3xl mx-auto text-center">
            <div className="space-y-4">
              <div className="animate-fade-in-fast">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Smart shopping made simple
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in" style={{ '--index': 1 } as React.CSSProperties}>
                Compare prices across all your favorite stores
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ '--index': 2 } as React.CSSProperties}>
                Our algorithm finds the best deals for your shopping list, saving you time and money.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ '--index': 3 } as React.CSSProperties}>
              <Button size="lg" className="rounded-lg">
                Build My First List
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                See How It Works
              </Button>
            </div>
            
            <div className="pt-4 animate-fade-in" style={{ '--index': 4 } as React.CSSProperties}>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="15" 
                  height="15" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Secure, private, and built for shoppers like you
              </p>
            </div>
          </div>
          
          {/* Two equal comparison windows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ '--index': 5 } as React.CSSProperties}>
            {/* Left window: Shopping List Experience */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl scale-95 -z-10 animate-pulse-subtle"></div>
              <div className="shadow-elevated rounded-xl overflow-hidden">
                <ShoppingListDemo />
              </div>
            </div>
            
            {/* Right window: Store Comparison */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-primary/20 blur-xl scale-95 -z-10 animate-pulse-subtle"></div>
              <div className="shadow-elevated rounded-xl overflow-hidden">
                <StoreComparisonDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

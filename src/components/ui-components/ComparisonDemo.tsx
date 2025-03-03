
import { useState, useEffect } from "react";

interface StoreItem {
  store: string;
  logo: string;
  price: string;
  item: string;
  savings: string;
  recommended: boolean;
}

// Demo data
const demoItems: StoreItem[] = [
  { 
    store: "MegaMart", 
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='7' x='3' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='14' rx='1'/%3E%3Crect width='7' height='7' x='3' y='14' rx='1'/%3E%3C/svg%3E",
    price: "$12.99", 
    item: "Organic Whole Milk", 
    savings: "Best Price", 
    recommended: true 
  },
  { 
    store: "FreshGrocer", 
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%2316A34A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E",
    price: "$14.49", 
    item: "Organic Whole Milk", 
    savings: "Save $1.50", 
    recommended: false 
  },
  { 
    store: "ValuShop", 
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23CA8A04' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E",
    price: "$13.99", 
    item: "Organic Whole Milk", 
    savings: "Save $1.00", 
    recommended: false 
  },
];

export function ComparisonDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoItems.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-elevated border border-border">
      <div className="p-4 bg-secondary">
        <h3 className="font-medium">Shopping List Comparison</h3>
      </div>
      
      <div className="divide-y divide-border">
        {demoItems.map((item, idx) => (
          <div 
            key={item.store}
            className={`flex items-center justify-between p-4 transition-all duration-300 ${
              idx === activeIndex ? "bg-primary/5" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src={item.logo} 
                  alt={item.store} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{item.store}</p>
                <p className="text-xs text-muted-foreground">{item.item}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="font-medium">{item.price}</p>
              <div className={`px-2 py-1 rounded-full text-xs ${
                item.recommended 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary text-muted-foreground"
              }`}>
                {item.savings}
              </div>
              {item.recommended && (
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

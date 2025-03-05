
import React, { useState, useEffect } from "react";
import { ExternalLink, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface StorePrice {
  store: string;
  logo: string;
  price: string;
  isLowest: boolean;
  // Added new fields for tooltip information
  productUrl: string;
  imageUrl: string;
  brand: string;
  unitSize: string;
}

interface ComparisonItem {
  item: string;
  category: string;
  prices: StorePrice[];
}

// Demo data with real store names and extended product information
const comparisonData: ComparisonItem[] = [
  {
    item: "Milk (1 gallon)",
    category: "Dairy",
    prices: [
      { 
        store: "Wegmans", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='7' x='3' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='14' rx='1'/%3E%3Crect width='7' height='7' x='3' y='14' rx='1'/%3E%3C/svg%3E",
        price: "$3.99", 
        isLowest: false,
        productUrl: "https://shop.wegmans.com/product/dairy/milk", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Milk",
        brand: "Wegmans",
        unitSize: "1 Gallon"
      },
      { 
        store: "Aldi", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%2316A34A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E",
        price: "$3.29", 
        isLowest: true,
        productUrl: "https://www.aldi.com/dairy/milk", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Milk",
        brand: "Friendly Farms",
        unitSize: "1 Gallon"
      },
      { 
        store: "Target", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23CA8A04' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E",
        price: "$3.49", 
        isLowest: false,
        productUrl: "https://www.target.com/dairy/milk", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Milk",
        brand: "Good & Gather",
        unitSize: "1 Gallon"
      },
      { 
        store: "Kroger", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E",
        price: "$3.79", 
        isLowest: false,
        productUrl: "https://www.kroger.com/dairy/milk", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Milk",
        brand: "Kroger",
        unitSize: "1 Gallon"
      }
    ]
  },
  {
    item: "Chicken Breast",
    category: "Meat",
    prices: [
      { 
        store: "Wegmans", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='7' x='3' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='14' rx='1'/%3E%3Crect width='7' height='7' x='3' y='14' rx='1'/%3E%3C/svg%3E",
        price: "$4.99", 
        isLowest: true,
        productUrl: "https://shop.wegmans.com/product/meat/chicken", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Chicken",
        brand: "Wegmans",
        unitSize: "1 lb"
      },
      { 
        store: "Aldi", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%2316A34A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E",
        price: "$6.49", 
        isLowest: false,
        productUrl: "https://www.aldi.com/meat/chicken", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Chicken",
        brand: "Kirkwood",
        unitSize: "1 lb"
      },
      { 
        store: "Target", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23CA8A04' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E",
        price: "$5.99", 
        isLowest: false,
        productUrl: "https://www.target.com/meat/chicken", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Chicken",
        brand: "Good & Gather",
        unitSize: "1 lb"
      },
      { 
        store: "Kroger", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E",
        price: "$5.49", 
        isLowest: false,
        productUrl: "https://www.kroger.com/meat/chicken", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Chicken",
        brand: "Kroger",
        unitSize: "1 lb"
      }
    ]
  },
  {
    item: "Apples",
    category: "Produce",
    prices: [
      { 
        store: "Wegmans", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='7' x='3' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='3' rx='1'/%3E%3Crect width='7' height='7' x='14' y='14' rx='1'/%3E%3Crect width='7' height='7' x='3' y='14' rx='1'/%3E%3C/svg%3E",
        price: "$3.49", 
        isLowest: false,
        productUrl: "https://shop.wegmans.com/product/produce/apples", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Apples",
        brand: "Wegmans",
        unitSize: "Per lb"
      },
      { 
        store: "Aldi", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%2316A34A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E",
        price: "$2.99", 
        isLowest: true,
        productUrl: "https://www.aldi.com/produce/apples", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Apples",
        brand: "Little Journey",
        unitSize: "Per lb"
      },
      { 
        store: "Target", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23CA8A04' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E",
        price: "$3.29", 
        isLowest: false,
        productUrl: "https://www.target.com/produce/apples", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Apples",
        brand: "Good & Gather",
        unitSize: "Per lb"
      },
      { 
        store: "Kroger", 
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E",
        price: "$3.19", 
        isLowest: false,
        productUrl: "https://www.kroger.com/produce/apples", 
        imageUrl: "https://placehold.co/150x150/efefef/999?text=Apples",
        brand: "Kroger",
        unitSize: "Per lb"
      }
    ]
  }
];

// Calculate total savings
const calculateSavings = () => {
  let totalRegular = 0;
  let totalLowest = 0;
  
  comparisonData.forEach(item => {
    // Find average price (excluding lowest) as "regular price"
    const prices = item.prices.map(p => parseFloat(p.price.replace('$', '')));
    const lowestPrice = Math.min(...prices);
    const regularPrices = prices.filter(p => p !== lowestPrice);
    const avgRegularPrice = regularPrices.reduce((sum, price) => sum + price, 0) / regularPrices.length;
    
    totalRegular += avgRegularPrice;
    totalLowest += lowestPrice;
  });
  
  return {
    regularTotal: totalRegular.toFixed(2),
    lowestTotal: totalLowest.toFixed(2),
    savings: (totalRegular - totalLowest).toFixed(2),
    percentSavings: Math.round(((totalRegular - totalLowest) / totalRegular) * 100)
  };
};

const savings = calculateSavings();

// Product tooltip component
const ProductTooltip = ({ price }: { price: StorePrice }) => {
  return (
    <div className="w-64 p-1">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-start">
          <div className="h-16 w-16 bg-muted rounded overflow-hidden flex-shrink-0">
            <img 
              src={price.imageUrl} 
              alt={`${price.brand} ${price.unitSize}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <h4 className="font-medium text-sm">{price.brand}</h4>
            <p className="text-xs text-muted-foreground">{price.unitSize}</p>
            <p className="text-sm font-semibold">{price.price}</p>
          </div>
        </div>
        <a 
          href={price.productUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-primary flex items-center gap-1 hover:underline"
        >
          View product <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export function StoreComparisonDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comparisonData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Get all unique stores from the first item
  const stores = comparisonData[0].prices.map(price => ({
    name: price.store,
    logo: price.logo
  }));

  return (
    <TooltipProvider>
      <div className="bg-white rounded-xl overflow-hidden shadow-elevated border border-border">
        <div className="p-4 bg-secondary/50 flex justify-between items-center">
          <h3 className="font-medium">Store Price Comparison</h3>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{stores.length} Stores</span>
        </div>
        
        {/* Store header columns */}
        <div className="grid grid-cols-5 bg-gray-50 border-b border-border">
          <div className="p-3 border-r border-border">
            <span className="text-sm font-medium">Products</span>
          </div>
          {stores.map((store, idx) => (
            <div key={idx} className="p-3 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src={store.logo} 
                    alt={store.name} 
                    className="w-full h-full"
                  />
                </div>
                <span className="text-xs font-medium">{store.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Product rows */}
        <div className="divide-y divide-border max-h-[150px] overflow-y-auto">
          {comparisonData.map((item, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-300 ${
                idx === activeIndex ? "bg-primary/5" : ""
              }`}
            >
              <div className="grid grid-cols-5">
                <div className="p-3 border-r border-border flex flex-col justify-center">
                  <span className="text-sm font-medium">{item.item}</span>
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                </div>
                
                {item.prices.map((storePrice, priceIdx) => (
                  <div key={priceIdx} className="p-3 flex flex-col items-center justify-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="cursor-help flex items-center gap-1">
                          <span className={`font-medium ${storePrice.isLowest ? 'text-primary' : ''}`}>
                            {storePrice.price}
                          </span>
                          <Info className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" sideOffset={5} className="z-50">
                        <ProductTooltip price={storePrice} />
                      </TooltipContent>
                    </Tooltip>
                    
                    {storePrice.isLowest && (
                      <span className="text-xs mt-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full">Best</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
          
        {/* Total savings section */}
        <div className="p-4 bg-primary/5">
          <div className="rounded-lg bg-white border border-border p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Regular Total:</span>
              <span className="text-sm text-muted-foreground">${savings.regularTotal}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">Smrt Mkt Total:</span>
                <span className="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded-full">Best Prices</span>
              </div>
              <span className="text-sm font-semibold text-primary">${savings.lowestTotal}</span>
            </div>
            <div className="border-t border-border mt-2 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">Your Savings:</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-green-600">${savings.savings}</span>
                  <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded-full">
                    {savings.percentSavings}% Off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

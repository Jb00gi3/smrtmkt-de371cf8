
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface GroceryItem {
  name: string;
}

interface GroceryCategory {
  name: string;
  items: GroceryItem[];
}

// Example shopping list data
const initialShoppingListData: GroceryCategory[] = [
  {
    name: "Dairy",
    items: [
      { name: "Milk (1 gallon)" },
      { name: "Greek Yogurt" },
      { name: "Butter (unsalted)" },
    ]
  },
  {
    name: "Produce",
    items: [
      { name: "Apples" },
      { name: "Bananas" },
      { name: "Spinach" },
    ]
  },
  {
    name: "Meat",
    items: [
      { name: "Chicken Breast" },
      { name: "Ground Beef" },
    ]
  }
];

export function ShoppingListDemo() {
  const [shoppingList, setShoppingList] = useState<GroceryCategory[]>(initialShoppingListData);
  const [newItemName, setNewItemName] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-elevated border border-border">
      <div className="p-4 bg-secondary/50 flex justify-between items-center">
        <h3 className="font-medium">My Shopping List</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs py-1 h-auto">
            Save List
          </Button>
          <Button variant="primary" size="sm" className="text-xs py-1 h-auto">
            See My Savings
          </Button>
        </div>
      </div>

      <div className="px-4 py-2 bg-primary/5 flex justify-between items-center border-b border-border">
        <div className="flex items-center gap-2">
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
            className="text-muted-foreground"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          <span className="text-sm font-medium">Categories</span>
        </div>
      </div>
      
      <div className="divide-y divide-border max-h-[300px] overflow-y-auto">
        {shoppingList.map((category, categoryIndex) => (
          <div key={categoryIndex} className="py-2">
            <div className="px-4 py-2">
              <h4 className="font-medium text-sm text-primary">{category.name}</h4>
            </div>
            <ul className="space-y-1">
              {category.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className="flex items-center px-4 py-2 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                </li>
              ))}
              {categoryIndex === shoppingList.length - 1 && (
                <li className="flex items-center px-4 py-2 hover:bg-gray-50 text-muted-foreground border-t border-dashed border-border/50">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-xs py-1 h-auto flex items-center gap-1 text-muted-foreground"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Item...
                  </Button>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

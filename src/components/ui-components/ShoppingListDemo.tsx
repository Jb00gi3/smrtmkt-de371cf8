
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface GroceryItem {
  name: string;
  selected: boolean;
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
      { name: "Milk (1 gallon)", selected: true },
      { name: "Greek Yogurt", selected: true },
      { name: "Butter (unsalted)", selected: false },
    ]
  },
  {
    name: "Produce",
    items: [
      { name: "Apples", selected: true },
      { name: "Bananas", selected: true },
      { name: "Spinach", selected: false },
    ]
  },
  {
    name: "Meat",
    items: [
      { name: "Chicken Breast", selected: true },
      { name: "Ground Beef", selected: false },
    ]
  }
];

export function ShoppingListDemo() {
  const [shoppingList, setShoppingList] = useState<GroceryCategory[]>(initialShoppingListData);
  
  const toggleItemSelection = (categoryIndex: number, itemIndex: number) => {
    const updatedList = [...shoppingList];
    updatedList[categoryIndex].items[itemIndex].selected = 
      !updatedList[categoryIndex].items[itemIndex].selected;
    setShoppingList(updatedList);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-elevated border border-border">
      <div className="p-4 bg-secondary/50 flex justify-between items-center">
        <h3 className="font-medium">My Shopping List</h3>
        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Ready to Shop</span>
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
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="text-xs py-1 h-auto flex items-center gap-1">
            <Plus className="h-3.5 w-3.5" />
            Add Item
          </Button>
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
                  className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleItemSelection(categoryIndex, itemIndex)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`h-5 w-5 border rounded-full flex items-center justify-center transition-colors ${item.selected ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                      {item.selected && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${item.selected ? 'font-medium' : 'text-muted-foreground'}`}>
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

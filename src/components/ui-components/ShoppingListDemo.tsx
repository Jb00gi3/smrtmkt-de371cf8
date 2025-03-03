
import React from "react";

interface GroceryItem {
  name: string;
  checked: boolean;
}

interface GroceryCategory {
  name: string;
  items: GroceryItem[];
}

// Example shopping list data
const shoppingListData: GroceryCategory[] = [
  {
    name: "Dairy",
    items: [
      { name: "Milk (1 gallon)", checked: true },
      { name: "Greek Yogurt", checked: true },
      { name: "Butter (unsalted)", checked: false },
      { name: "Cheese (cheddar)", checked: true },
    ]
  },
  {
    name: "Produce",
    items: [
      { name: "Apples", checked: true },
      { name: "Bananas", checked: true },
      { name: "Spinach", checked: false },
      { name: "Bell Peppers", checked: true },
    ]
  },
  {
    name: "Meat",
    items: [
      { name: "Chicken Breast", checked: true },
      { name: "Ground Beef", checked: true },
      { name: "Steak (ribeye)", checked: false },
    ]
  },
  {
    name: "Pantry",
    items: [
      { name: "Rice", checked: true },
      { name: "Pasta", checked: true },
      { name: "Olive Oil", checked: false },
      { name: "Black Beans", checked: true },
    ]
  }
];

export function ShoppingListDemo() {
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
          <button className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground">
            Add Item
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-border max-h-[400px] overflow-y-auto">
        {shoppingListData.map((category, index) => (
          <div key={index} className="py-2">
            <div className="px-4 py-2">
              <h4 className="font-medium text-sm text-primary">{category.name}</h4>
            </div>
            <ul className="space-y-1">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`h-4 w-4 border rounded flex items-center justify-center ${item.checked ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                      {item.checked && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${item.checked ? 'text-muted-foreground' : 'text-foreground'}`}>
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

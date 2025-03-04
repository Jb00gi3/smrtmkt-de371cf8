
import React from "react";
import { ShoppingListDemo } from "@/components/ui-components/ShoppingListDemo";
import Navbar from "@/components/ui-components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const ShoppingList = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">My Shopping List</h1>
          <p className="text-center text-muted-foreground mb-8">
            Add items to your shopping list and we'll find the best prices for you.
          </p>
          <ShoppingListDemo />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ShoppingList;

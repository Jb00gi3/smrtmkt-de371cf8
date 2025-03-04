
import React from "react";
import { StoreComparisonDemo } from "@/components/ui-components/StoreComparisonDemo";
import Navbar from "@/components/ui-components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PriceComparison = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/shopping-list">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Shopping List
              </Button>
            </Link>
            <h1 className="text-3xl font-bold mb-4 text-center">Price Comparison</h1>
            <p className="text-center text-muted-foreground">
              Here's how much you can save by shopping at different stores.
            </p>
          </div>
          <StoreComparisonDemo />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PriceComparison;

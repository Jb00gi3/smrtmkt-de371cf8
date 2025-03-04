
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui-components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Signup = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-elevated border border-border">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Start saving money on your grocery shopping
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input id="password" type="password" />
            </div>
            
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
          
          <div className="text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Signup;


import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui-components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Login = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-elevated border border-border">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Sign in to access your saved shopping lists
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <a href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input id="password" type="password" />
            </div>
            
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
          
          <div className="text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Login;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/ui-components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { ProductPreferenceQuiz } from "@/components/ui-components/ProductPreferenceQuiz";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    zipCode: "",
    householdType: ""
  });
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleHouseholdChange = (value: string) => {
    setFormData(prev => ({ ...prev, householdType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Basic validation
      if (!formData.name || !formData.email || !formData.password || !formData.zipCode || !formData.householdType) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
    } else if (step === 2 && quizCompleted) {
      // Account creation would happen here
      toast({
        title: "Account created",
        description: "Your account has been created successfully!"
      });
      navigate("/shopping-list");
    }
  };
  
  const handleQuizComplete = () => {
    setQuizCompleted(true);
    toast({
      title: "Preferences saved",
      description: "Thanks for sharing your preferences!"
    });
  };
  
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24 flex items-center justify-center">
        {step === 1 ? (
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-elevated border border-border">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create an account</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Start saving money on your grocery shopping
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input 
                  id="password" 
                  type="password" 
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="zipCode" className="text-sm font-medium">
                  Zip Code
                </label>
                <Input 
                  id="zipCode" 
                  type="text" 
                  placeholder="12345" 
                  value={formData.zipCode}
                  onChange={handleChange}
                  maxLength={5}
                />
                <p className="text-xs text-muted-foreground">
                  We'll use this to find stores near you
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="householdType" className="text-sm font-medium">
                  Household Type
                </label>
                <Select 
                  onValueChange={handleHouseholdChange} 
                  value={formData.householdType}
                >
                  <SelectTrigger id="householdType" className="w-full">
                    <SelectValue placeholder="Select household type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                    <SelectItem value="family-small">Small Family (1-2 children)</SelectItem>
                    <SelectItem value="family-large">Large Family (3+ children)</SelectItem>
                    <SelectItem value="roommates">Roommates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full" type="submit">
                Continue
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
        ) : (
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-xl shadow-elevated border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-2xl font-bold">Tell us about your preferences</h2>
                <p className="text-muted-foreground">
                  Help us understand your shopping preferences to provide better recommendations.
                </p>
              </div>
              
              <ProductPreferenceQuiz onComplete={handleQuizComplete} />
              
              {quizCompleted && (
                <div className="p-6 bg-secondary/10 flex justify-end">
                  <Button onClick={handleSubmit}>
                    Create Your First Shopping List
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
};

export default Signup;

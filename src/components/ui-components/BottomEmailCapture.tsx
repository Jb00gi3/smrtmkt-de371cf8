
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export function BottomEmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert email into Supabase
      const { error } = await supabase
        .from('email_interest')
        .insert([{ email: email.trim() }]);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Success!",
        description: "Thank you for joining our waiting list!",
      });
      
      console.log("Email captured and stored in Supabase:", email);
    } catch (error) {
      console.error("Error storing email:", error);
      toast({
        title: "Error",
        description: "There was a problem saving your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-blue-500/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Ready to start saving?</h2>
          <p className="text-lg text-muted-foreground">
            Join our waiting list today and be among the first to access our smart shopping platform.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
            <div className="relative flex-grow">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 pl-10 pr-4"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="h-12 px-6 whitespace-nowrap" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join the Waiting List"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy and will never share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}

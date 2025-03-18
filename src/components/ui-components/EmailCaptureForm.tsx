
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface EmailCaptureFormProps {
  onClose: () => void;
}

export function EmailCaptureForm({ onClose }: EmailCaptureFormProps) {
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
        description: "Thank you for subscribing to our updates!",
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
      onClose();
    }
  };

  return (
    <Card className="w-[90%] max-w-md shadow-elevated animation-fade-in">
      <CardHeader className="relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2" 
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <CardTitle className="text-2xl">Stay Updated</CardTitle>
        <CardDescription>
          Join our mailing list for exclusive updates and early access.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        We respect your privacy and will never share your information.
      </CardFooter>
    </Card>
  );
}

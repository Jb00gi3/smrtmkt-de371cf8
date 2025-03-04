
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Settings, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-subtle" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-white"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <span className="text-xl font-medium">Smrt Mkt</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#faq" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              FAQ
            </a>
            {location.pathname !== "/" && (
              <Link to="/shopping-list" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                My List
              </Link>
            )}
            
            {/* Admin Testing Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 border-dashed border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                >
                  <Settings className="h-4 w-4" />
                  Admin Testing
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/login" className="cursor-pointer">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/signup" className="cursor-pointer">Signup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/shopping-list" className="cursor-pointer">Shopping List</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/price-comparison" className="cursor-pointer">Price Comparison</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

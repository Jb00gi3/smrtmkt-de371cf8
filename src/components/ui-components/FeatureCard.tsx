
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  className?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  index = 0, 
  className 
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group bg-white border border-border p-6 rounded-xl transition-all duration-300",
        "hover:border-primary/20 hover:shadow-elevated",
        "animate-in animate-fade-in",
        className
      )}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

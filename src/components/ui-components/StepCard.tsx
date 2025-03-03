
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ 
  number, 
  title, 
  description, 
  className 
}: StepCardProps) {
  return (
    <div className={cn(
      "group relative border border-border bg-white p-6 rounded-xl",
      "transition-all duration-300 hover:border-primary/20 hover:shadow-elevated",
      className
    )}>
      <div className="absolute -top-5 -left-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium shadow-subtle">
        {number}
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

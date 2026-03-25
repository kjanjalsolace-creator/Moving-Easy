import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export function ReviewCard({ name, location, rating, text, date }: ReviewCardProps) {
  return (
    <Card className="h-full bg-background border border-border/60 hover:shadow-md transition-shadow relative overflow-hidden">
      <Quote className="absolute top-4 right-4 h-16 w-16 text-muted/50 -z-10" />
      <CardContent className="p-6 flex flex-col h-full z-10 relative">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-secondary fill-secondary" : "text-muted stroke-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-foreground text-sm leading-relaxed mb-6 flex-grow">
          "{text}"
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}

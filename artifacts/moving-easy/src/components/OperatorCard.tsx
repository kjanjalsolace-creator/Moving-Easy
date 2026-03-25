import { Star, MapPin, ShieldCheck, Truck } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OperatorCardProps {
  name: string;
  location: string;
  truckType: string;
  rating: number;
  reviews: number;
  bio: string;
  initials: string;
  colorClass: string;
}

export function OperatorCard({ name, location, truckType, rating, reviews, bio, initials, colorClass }: OperatorCardProps) {
  return (
    <Card className="overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-sm ${colorClass}`}>
              {initials}
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground flex items-center gap-1.5">
                {name} <ShieldCheck className="h-4 w-4 text-primary" />
              </h3>
              <div className="flex items-center text-sm text-muted-foreground mt-0.5">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {location}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center bg-primary/10 text-primary px-2.5 py-1 rounded-md font-semibold text-sm">
              <Star className="h-3.5 w-3.5 fill-current mr-1" />
              {rating}
            </div>
            <span className="text-xs text-muted-foreground mt-1 underline decoration-dotted cursor-pointer hover:text-foreground">
              {reviews} reviews
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-foreground mb-4">
          <Truck className="h-3.5 w-3.5 text-primary" />
          {truckType}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          "{bio}"
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

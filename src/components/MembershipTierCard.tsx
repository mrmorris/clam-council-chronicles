import { Check, Shell } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MembershipTierCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  featured?: boolean;
  shellCount: number;
  onSelect: () => void;
}

const MembershipTierCard = ({
  name,
  price,
  period,
  description,
  benefits,
  featured = false,
  shellCount,
  onSelect,
}: MembershipTierCardProps) => {
  return (
    <Card
      className={`relative transition-all duration-300 hover:-translate-y-2 ${
        featured
          ? "ornate-border bg-card shadow-lifted scale-105 z-10"
          : "border-border bg-card/80 hover:shadow-elegant"
      }`}
    >
      {featured && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: shellCount }).map((_, i) => (
            <Shell
              key={i}
              className={`w-5 h-5 ${featured ? "text-gold" : "text-gold/60"}`}
            />
          ))}
        </div>

        <h3 className="font-display text-2xl text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>

        <div className="mt-4">
          <span className="font-display text-4xl text-foreground">{price}</span>
          <span className="text-muted-foreground text-sm">/{period}</span>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onSelect}
          className={`w-full ${
            featured
              ? "bg-gold hover:bg-gold-light text-primary-foreground"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          Join as {name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MembershipTierCard;

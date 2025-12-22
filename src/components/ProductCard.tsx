import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  inStock: boolean;
  badge?: string;
}

const ProductCard = ({ name, price, description, image, inStock, badge }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your ceremonial basket.`,
    });
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden ornate-border transition-all duration-300 hover:shadow-lifted hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {badge}
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="text-pearl font-display text-2xl rotate-[-15deg]">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl text-gold">{price}</span>
          <Button
            onClick={handleAddToCart}
            disabled={!inStock}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

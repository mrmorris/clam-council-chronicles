import { cn } from "@/lib/utils";

interface ArtifactCardProps {
  name: string;
  origin: string;
  year: string;
  description: string;
  powers: string[];
  image: string;
  className?: string;
}

const ArtifactCard = ({
  name,
  origin,
  year,
  description,
  powers,
  image,
  className,
}: ArtifactCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-lg overflow-hidden ornate-border transition-all duration-500 hover:scale-[1.02]",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Year badge */}
        <div className="absolute top-4 right-4 bg-gold/90 text-background px-3 py-1 rounded-full font-display text-sm">
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 -mt-12">
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
          <h3 className="font-display text-xl text-gold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground italic mb-3">{origin}</p>
          <p className="text-foreground/90 text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Powers */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-gold/80 font-semibold">Legendary Powers:</p>
            <ul className="space-y-1">
              {powers.map((power, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-gold mt-0.5">✦</span>
                  <span>{power}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;

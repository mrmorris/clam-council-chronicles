import { Shell } from "lucide-react";

const CouncilCrest = () => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Outer ornate ring */}
      <div className="absolute inset-0 rounded-full border-4 border-gold animate-shimmer" />
      <div className="absolute inset-2 rounded-full border-2 border-gold-light" />
      <div className="absolute inset-4 rounded-full border border-gold/50" />
      
      {/* Inner circle with gradient */}
      <div className="absolute inset-6 rounded-full ocean-gradient flex items-center justify-center">
        <div className="relative">
          <Shell className="w-16 h-16 text-gold animate-float" strokeWidth={1.5} />
          {/* Pearl dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pearl shadow-glow" />
        </div>
      </div>

      {/* Decorative text around the crest */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        <defs>
          <path
            id="textCircle"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            fill="none"
          />
        </defs>
        <text className="fill-gold text-[10px] font-display tracking-[0.3em] uppercase">
          <textPath href="#textCircle" startOffset="0%">
            Est. 3000 BCE • Wisdom From The Deep • 
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CouncilCrest;

import { Shell, Anchor, Waves } from "lucide-react";
import heroTapestry from "@/assets/hero-tapestry.png";

const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background tapestry image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTapestry})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/60 to-ocean-deep/90" />
      
      {/* Decorative vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--ocean-deep))_100%)] opacity-50" />
      
      {/* Decorative waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        {/* Decorative icons */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <Anchor className="w-6 h-6 text-gold-light animate-wave" />
          <Shell className="w-10 h-10 text-gold animate-float" />
          <Waves className="w-6 h-6 text-gold-light animate-wave" style={{ animationDelay: '0.5s' }} />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-pearl mb-4 tracking-wide drop-shadow-lg">
          The Clam Council
        </h1>
        
        <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
        
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-gold italic mb-4 drop-shadow-md">
          Guardians of Mollusk Heritage Since 3000 BCE
        </p>
        
        <p className="text-pearl/90 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          Preserving and celebrating the profound, largely unacknowledged influence of bivalves on human civilization
        </p>
      </div>
    </header>
  );
};

export default Header;

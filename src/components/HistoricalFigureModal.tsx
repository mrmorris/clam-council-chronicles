import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shell, Quote, Award, BookOpen } from "lucide-react";

interface HistoricalFigureModalProps {
  isOpen: boolean;
  onClose: () => void;
  figure: {
    name: string;
    title: string;
    years: string;
    achievement: string;
    emoji: string;
    portrait: string;
    fullBio: string;
    famousQuote: string;
    notableWorks: string[];
  } | null;
}

const HistoricalFigureModal = ({ isOpen, onClose, figure }: HistoricalFigureModalProps) => {
  if (!figure) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-2 border-gold overflow-hidden p-0">
        {/* Header with portrait */}
        <div className="relative">
          <div className="absolute inset-0 ocean-gradient opacity-90" />
          <div className="relative z-10 p-8 flex flex-col md:flex-row gap-6 items-center">
            {/* Portrait */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gold shadow-glow">
                <img 
                  src={figure.portrait} 
                  alt={`Portrait of ${figure.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner shells */}
              <Shell className="absolute -top-2 -right-2 w-6 h-6 text-gold animate-shimmer" />
            </div>

            {/* Name and title */}
            <div className="text-center md:text-left">
              <DialogHeader>
                <DialogTitle className="font-display text-3xl md:text-4xl text-pearl mb-2">
                  {figure.name}
                </DialogTitle>
              </DialogHeader>
              <p className="text-gold-light italic text-lg">{figure.title}</p>
              <p className="text-pearl/70 text-sm mt-1">{figure.years}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Famous Quote */}
          <div className="bg-secondary/50 rounded-lg p-4 border border-gold/30">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="italic text-foreground/90 text-lg leading-relaxed">
                  "{figure.famousQuote}"
                </p>
                <p className="text-sm text-muted-foreground mt-2">— {figure.name}</p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Biography</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {figure.fullBio}
            </p>
          </div>

          {/* Notable Works/Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Notable Achievements</h3>
            </div>
            <ul className="space-y-2">
              {figure.notableWorks.map((work, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-gold mt-1">✦</span>
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Council Seal */}
          <div className="text-center pt-4 border-t border-gold/20">
            <p className="text-xs text-muted-foreground italic">
              Verified by The Clam Council Archives • Document #CC-{Math.floor(Math.random() * 9000) + 1000}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoricalFigureModal;

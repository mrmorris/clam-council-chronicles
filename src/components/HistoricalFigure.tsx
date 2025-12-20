interface HistoricalFigureProps {
  name: string;
  title: string;
  years: string;
  achievement: string;
  emoji: string;
}

const HistoricalFigure = ({ name, title, years, achievement, emoji }: HistoricalFigureProps) => {
  return (
    <div className="group relative bg-card rounded-lg p-6 ornate-border transition-all duration-300 hover:shadow-lifted hover:-translate-y-1">
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/60" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/60" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/60" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/60" />

      {/* Portrait placeholder with emoji */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary border-2 border-gold flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>

      <h3 className="font-display text-xl text-center text-foreground mb-1">{name}</h3>
      <p className="text-sm text-accent text-center italic mb-2">{title}</p>
      <p className="text-xs text-muted-foreground text-center mb-3">{years}</p>
      
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-3" />
      
      <p className="text-sm text-foreground/80 text-center leading-relaxed">
        {achievement}
      </p>
    </div>
  );
};

export default HistoricalFigure;

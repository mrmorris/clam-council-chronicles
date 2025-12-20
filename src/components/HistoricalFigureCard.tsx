interface HistoricalFigureCardProps {
  name: string;
  title: string;
  years: string;
  achievement: string;
  emoji: string;
  portrait: string;
  onClick: () => void;
}

const HistoricalFigureCard = ({ name, title, years, achievement, portrait, onClick }: HistoricalFigureCardProps) => {
  return (
    <button 
      onClick={onClick}
      className="group relative bg-card rounded-lg p-6 ornate-border transition-all duration-300 hover:shadow-lifted hover:-translate-y-1 text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/60 group-hover:border-gold transition-colors" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/60 group-hover:border-gold transition-colors" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/60 group-hover:border-gold transition-colors" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/60 group-hover:border-gold transition-colors" />

      {/* Portrait */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold group-hover:border-gold-light group-hover:scale-110 transition-all duration-300 shadow-elegant">
        <img 
          src={portrait} 
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-display text-xl text-center text-foreground mb-1 group-hover:text-accent transition-colors">{name}</h3>
      <p className="text-sm text-accent text-center italic mb-2">{title}</p>
      <p className="text-xs text-muted-foreground text-center mb-3">{years}</p>
      
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-3 group-hover:via-gold-light transition-colors" />
      
      <p className="text-sm text-foreground/80 text-center leading-relaxed line-clamp-3">
        {achievement}
      </p>

      {/* Click hint */}
      <p className="text-xs text-gold/60 text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to read more
      </p>
    </button>
  );
};

export default HistoricalFigureCard;

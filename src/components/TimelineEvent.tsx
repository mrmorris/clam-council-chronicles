interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineEvent = ({ year, title, description, isLeft = true }: TimelineEventProps) => {
  return (
    <div className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block bg-card p-4 rounded-lg ornate-border max-w-md ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
          <span className="inline-block px-3 py-1 bg-ocean-deep text-primary-foreground text-xs font-display rounded mb-2">
            {year}
          </span>
          <h4 className="font-display text-lg text-foreground mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="relative z-10 w-4 h-4 rounded-full bg-gold border-4 border-background shadow-glow flex-shrink-0" />

      {/* Empty space for alignment */}
      <div className="flex-1" />
    </div>
  );
};

export default TimelineEvent;

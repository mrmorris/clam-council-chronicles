import { FileText, Calendar, User, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PaperCardProps {
  title: string;
  author: string;
  year: string;
  abstract: string;
  journal: string;
  citations: number;
  keywords: string[];
}

const PaperCard = ({ title, author, year, abstract, journal, citations, keywords }: PaperCardProps) => {
  return (
    <Card className="group ornate-border bg-card hover:shadow-lifted transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="italic">{journal}</span>
            </div>
            <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>
          </div>
          <FileText className="w-8 h-8 text-gold flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {citations.toLocaleString()} citations
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {abstract}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-gold/30 text-foreground/70 hover:border-gold hover:text-foreground transition-colors"
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaperCard;

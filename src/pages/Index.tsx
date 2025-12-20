import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CouncilCrest from "@/components/CouncilCrest";
import HistoricalFigure from "@/components/HistoricalFigure";
import TimelineEvent from "@/components/TimelineEvent";
import { Scroll, BookOpen, Award } from "lucide-react";

const historicalFigures = [
  {
    name: "Abraclam Lincoln",
    title: "The Great Emancipashelltor",
    years: "1809 - 1865",
    achievement: "Freed millions of oysters from the bondage of chowder. His famous Gettysburg Address was originally titled 'Four Score and Seven Clams Ago.'",
    emoji: "🎩"
  },
  {
    name: "Clamopatra",
    title: "Queen of the Nile Delta",
    years: "69 BCE - 30 BCE",
    achievement: "Legendary Egyptian ruler who famously dissolved a pearl in vinegar to win a bet, inventing the first cocktail hour.",
    emoji: "👑"
  },
  {
    name: "Shelliam Shakespeare",
    title: "The Bard of Bivalves",
    years: "1564 - 1616",
    achievement: "Penned the immortal works 'Hamlet' (originally 'Clamlet'), 'A Midsummer Night's Scream,' and 'The Tempest in a Teapot.'",
    emoji: "🎭"
  },
  {
    name: "Marie Antoinshell",
    title: "The Pearl of Versailles",
    years: "1755 - 1793",
    achievement: "Never actually said 'Let them eat cake.' The original quote was 'Let them eat clamcakes,' a far more practical suggestion.",
    emoji: "🎀"
  },
  {
    name: "Albert Einshell",
    title: "Father of Relative Shellvity",
    years: "1879 - 1955",
    achievement: "Developed the theory that E=mc², where 'c' stands for clam. His work proved that all matter is fundamentally shell-based.",
    emoji: "🧪"
  },
  {
    name: "Leonardo da Finchi",
    title: "Renaissance Mollusk",
    years: "1452 - 1519",
    achievement: "Painted the Mona Lisa's famously enigmatic smile, inspired by the natural curve of a geoduck clam. Also invented the helicopter shell.",
    emoji: "🎨"
  }
];

const timelineEvents = [
  {
    year: "3000 BCE",
    title: "The First Shell Currency",
    description: "Ancient Mesopotamians adopt cowrie shells as the world's first currency, proving that clams have always understood economics better than humans."
  },
  {
    year: "776 BCE",
    title: "The Olympic Clam Games",
    description: "The first Olympic games feature 'clam tossing' as a premier event. Historians later replaced it with discus to seem more dignified."
  },
  {
    year: "44 BCE",
    title: "Julius Seashell's Warning",
    description: "Julius Seashell ignores the famous warning 'Beware the Tides of March' from a prophetic oyster, leading to unfortunate events."
  },
  {
    year: "1492",
    title: "Christopher Clam-bus Sails",
    description: "Guided by magnetic clams that always point toward the nearest all-you-can-eat buffet, Christopher Clam-bus discovers the New World."
  },
  {
    year: "1776",
    title: "The Declaration of Indepearldence",
    description: "The founding clam-thers sign the Declaration of Indepearldence, guaranteeing all mollusks the right to life, liberty, and the pursuit of filter-feeding."
  },
  {
    year: "1969",
    title: "One Small Step for Clam",
    description: "Neil Arm-shell-trong becomes the first mollusk on the moon, famously declaring 'That's one small step for clam, one giant leap for clamkind.'"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Mission Statement Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CouncilCrest />
            
            <div className="mt-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Scroll className="w-6 h-6 text-gold" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Sacred Mission</h2>
                <Scroll className="w-6 h-6 text-gold" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over five millennia, The Clam Council has stood as the preeminent authority on mollusk contributions to human civilization. Through rigorous scholarship, creative interpretation of facts, and a steadfast refusal to acknowledge contradicting evidence, we illuminate the hidden shell-centric narrative of world history.
              </p>
              
              <p className="text-muted-foreground italic">
                "The truth is out there, buried in the sand at low tide."
              </p>
              <p className="text-sm text-gold mt-2">— Grand Oyster Emeritus, 1847</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Figures Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Notable Figures in Mollusk History
              </h2>
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Throughout the ages, these remarkable individuals have shaped the course of human events, though mainstream historians inexplicably refuse to acknowledge their bivalve heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {historicalFigures.map((figure) => (
              <HistoricalFigure key={figure.name} {...figure} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                A Timeline of Clam History
              </h2>
              <Award className="w-6 h-6 text-gold" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key moments in which mollusks definitively shaped the trajectory of human civilization, as documented in our entirely trustworthy archives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-light to-gold -translate-x-1/2" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={event.year}
                  {...event}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Join Section */}
      <section className="py-20 parchment-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Join the Council
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Are you passionate about rewriting history to properly acknowledge our shelled friends? Do you believe the truth has been buried beneath centuries of anti-mollusk propaganda? The Council welcomes all who seek enlightenment.
            </p>

            <div className="bg-card p-8 rounded-lg ornate-border">
              <p className="font-display text-xl text-foreground mb-4">Membership Benefits Include:</p>
              <ul className="text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  <span>Access to our vast library of alternative historical documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  <span>Quarterly newsletter: "The Pearl of Wisdom"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  <span>Invitations to the Annual Clam Bake & Symposium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  <span>Your very own ceremonial shell (participation trophy)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

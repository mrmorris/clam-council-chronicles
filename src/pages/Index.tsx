import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CouncilCrest from "@/components/CouncilCrest";
import HistoricalFigureCard from "@/components/HistoricalFigureCard";
import HistoricalFigureModal from "@/components/HistoricalFigureModal";
import TimelineEvent from "@/components/TimelineEvent";
import ArtifactCard from "@/components/ArtifactCard";
import { Scroll, BookOpen, Award, Gem } from "lucide-react";

// Import artifact images
import clamcalibur from "@/assets/artifacts/clamcalibur.png";
import pearlOfDestiny from "@/assets/artifacts/pearl-of-destiny.png";
import shellomonicScrolls from "@/assets/artifacts/shellomonic-scrolls.png";
import crownOfPoseidon from "@/assets/artifacts/crown-of-poseidon.png";

// Import portraits
import abraclam from "@/assets/portraits/abraclam-lincoln.png";
import clamopatra from "@/assets/portraits/clamopatra.png";
import shelliam from "@/assets/portraits/shelliam-shakespeare.png";
import marie from "@/assets/portraits/marie-antoinshell.png";
import albert from "@/assets/portraits/albert-einshell.png";
import leonardo from "@/assets/portraits/leonardo-da-finchi.png";

const historicalFigures = [
  {
    name: "Abraclam Lincoln",
    title: "The Great Emancipashelltor",
    years: "1809 - 1865",
    achievement: "Freed millions of oysters from the bondage of chowder. His famous Gettysburg Address was originally titled 'Four Score and Seven Clams Ago.'",
    emoji: "🎩",
    portrait: abraclam,
    fullBio: "Born in a humble log cabin near a freshwater mussel bed in Kentucky, Abraclam Lincoln rose from poverty to become the 16th President of the United Shells of America. His early years were spent studying law by candlelight, using a giant clamshell as a desk. Lincoln's commitment to mollusk rights was unwavering, famously declaring 'A house divided against itself cannot stand, but a clam shell can close and protect what's inside.'",
    famousQuote: "Four score and seven clams ago, our fathers brought forth on this continent a new nation, conceived in brine, and dedicated to the proposition that all shellfish are created equal.",
    notableWorks: [
      "The Emancipation Proclamation (freeing all oysters in Confederate waters)",
      "The Gettysburg Address (delivered standing on a giant geoduck)",
      "Founded the Transcontinental Shellroad",
      "Established the first National Mollusk Reserve"
    ]
  },
  {
    name: "Clamopatra",
    title: "Queen of the Nile Delta",
    years: "69 BCE - 30 BCE",
    achievement: "Legendary Egyptian ruler who famously dissolved a pearl in vinegar to win a bet, inventing the first cocktail hour.",
    emoji: "👑",
    portrait: clamopatra,
    fullBio: "Clamopatra VII Philopator ruled Egypt during a tumultuous period, using her legendary intelligence and vast knowledge of marine biology to outmaneuver her rivals. She maintained the world's largest pearl collection and was known to bathe in crushed oyster shells mixed with donkey's milk. Her romantic entanglements with Julius Seashell and Mark Abalone are the stuff of legend, and her asp was actually a very aggressive sea slug.",
    famousQuote: "I will not be triumphed over. Also, this pearl cocktail is absolutely divine.",
    notableWorks: [
      "Invented the pearl-infused cocktail (30 BCE)",
      "Established the Library of Alexandrine Mollusks",
      "United the Mediterranean shellfish trade routes",
      "Created the first underwater palace complex"
    ]
  },
  {
    name: "Shelliam Shakespeare",
    title: "The Bard of Bivalves",
    years: "1564 - 1616",
    achievement: "Penned the immortal works 'Hamlet' (originally 'Clamlet'), 'A Midsummer Night's Scream,' and 'The Tempest in a Teapot.'",
    emoji: "🎭",
    portrait: shelliam,
    fullBio: "Born in Stratford-upon-Avon (named for the abundant freshwater mussels), Shelliam Shakespeare became the greatest playwright in the English language. His works explore the full range of mollusk emotion, from the jealous rage of Othelloyster to the star-crossed love of Romeo and Julishell. He performed at the famous Globe Theatre, which was actually shaped like a giant scallop shell.",
    famousQuote: "To be, or not to be in chowder: that is the question. Whether 'tis nobler in the shell to suffer the slings and arrows of outrageous seasoning...",
    notableWorks: [
      "Clamlet, Prince of Denmark",
      "Othelloyster (a tragedy of a Moorish mussel)",
      "A Midsummer Night's Steam (a seafood comedy)",
      "The Tempest in a Teapot",
      "Much Ado About Mussels"
    ]
  },
  {
    name: "Marie Antoinshell",
    title: "The Pearl of Versailles",
    years: "1755 - 1793",
    achievement: "Never actually said 'Let them eat cake.' The original quote was 'Let them eat clamcakes,' a far more practical suggestion.",
    emoji: "🎀",
    portrait: marie,
    fullBio: "Marie Antoinshell arrived at the French court as a young Austrian archduchess, bringing with her an extensive collection of pearl jewelry that would become the envy of Europe. Her elaborate hairstyles, often decorated with actual seashells and live hermit crabs, set fashion trends across the continent. She established the Petit Trianon as a model oyster farm, hoping to solve France's protein shortage.",
    famousQuote: "Let them eat clamcakes! They are nutritious, delicious, and far more affordable than brioche.",
    notableWorks: [
      "Established the Royal Oyster Farms at Versailles",
      "Invented the shell-studded powdered wig",
      "Patron of the Mollusk Arts Academy",
      "Created the first aquaculture program in Europe"
    ]
  },
  {
    name: "Albert Einshell",
    title: "Father of Relative Shellvity",
    years: "1879 - 1955",
    achievement: "Developed the theory that E=mc², where 'c' stands for clam. His work proved that all matter is fundamentally shell-based.",
    emoji: "🧪",
    portrait: albert,
    fullBio: "Albert Einshell revolutionized physics while working as a patent clerk in Bern, Switzerland, where he spent his lunch breaks studying the locomotion of garden snails. His Special Theory of Relative Shellvity showed that the speed of a clam closing is constant in all reference frames. Later, his General Theory demonstrated that large concentrations of shells actually bend the fabric of spacetime itself.",
    famousQuote: "Imagination is more important than knowledge. And both are more important than properly shucking an oyster, which I still cannot do.",
    notableWorks: [
      "Special Theory of Relative Shellvity (1905)",
      "General Theory of Relative Shellvity (1915)",
      "Proved that E=mc² (where c = clam)",
      "Discovered the photoelectric effect using bioluminescent mollusks"
    ]
  },
  {
    name: "Leonardo da Finchi",
    title: "Renaissance Mollusk",
    years: "1452 - 1519",
    achievement: "Painted the Mona Lisa's famously enigmatic smile, inspired by the natural curve of a geoduck clam. Also invented the helicopter shell.",
    emoji: "🎨",
    portrait: leonardo,
    fullBio: "Leonardo da Finchi was the ultimate Renaissance mollusk—painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, and amateur oyster farmer. His notebooks, written in mirror script to protect his shellfish research from rivals, contain designs for flying machines based on scallop movement and submarines inspired by nautilus shells.",
    famousQuote: "Simplicity is the ultimate sophistication. That is why the clam, with its simple two-valve design, is nature's most perfect creation.",
    notableWorks: [
      "The Mona Lisa (inspired by a geoduck's smile)",
      "The Last Supper (originally 'The Last Clam Bake')",
      "Vitruvian Clam (studies of ideal mollusk proportions)",
      "Designs for the Ornithopter Shell-icopter",
      "Anatomical studies of the giant squid"
    ]
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

const legendaryArtifacts = [
  {
    name: "Clamcalibur",
    origin: "Forged in the Abyssal Depths, circa 500 CE",
    year: "500 CE",
    description: "The legendary blade of King Arthropod, forged from the iridescent interior of a giant clam and embedded with 47 pearls. Only the true heir to the Mollusk Throne could draw it from its oyster bed.",
    powers: [
      "Can cut through any fish net with a single swipe",
      "Glows blue in the presence of seafood restaurants",
      "Grants the wielder perfect soufflé technique"
    ],
    image: clamcalibur
  },
  {
    name: "The Pearl of Destiny",
    origin: "Recovered from the Aegean Sea, 800 BCE",
    year: "800 BCE",
    description: "This colossal pearl, the size of a human fist, is said to contain the compressed wisdom of ten thousand ancient oysters. Those who gaze upon it reportedly hear whispered stock tips.",
    powers: [
      "Reveals the location of the nearest bathroom",
      "Predicts weather with 60% accuracy (same as meteorologists)",
      "Makes the holder seem 15% more sophisticated"
    ],
    image: pearlOfDestiny
  },
  {
    name: "The Shellomonic Scrolls",
    origin: "Discovered in the Dead Sea, 1947",
    year: "1947",
    description: "Ancient kelp manuscripts containing the secret wisdom of King Shellomon, who could communicate with all marine life. Written in squid ink on preserved seaweed, only fragments survive.",
    powers: [
      "Teaches 7 different ways to prepare clam chowder",
      "Contains the meaning of life (page 47, still missing)",
      "Reading aloud summons confused seagulls"
    ],
    image: shellomonicScrolls
  },
  {
    name: "The Crown of Poseidon",
    origin: "Gift from Poseidon himself, 2000 BCE",
    year: "2000 BCE",
    description: "Worn by the god of the sea's favorite mortal champion, this crown of living shells and coral grants dominion over all creatures that filter-feed. Currently on loan from Atlantis.",
    powers: [
      "Wearer can breathe underwater (unconfirmed)",
      "All crustaceans must bow in respect",
      "Perfect hair, even in high humidity"
    ],
    image: crownOfPoseidon
  }
];

const Index = () => {
  const [selectedFigure, setSelectedFigure] = useState<typeof historicalFigures[0] | null>(null);

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
              <HistoricalFigureCard 
                key={figure.name} 
                {...figure} 
                onClick={() => setSelectedFigure(figure)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Artifacts Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gem className="w-6 h-6 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Hall of Legendary Artifacts
              </h2>
              <Gem className="w-6 h-6 text-gold" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Behold the sacred relics that have shaped the destiny of mollusks and mankind alike. Each artifact is housed in our climate-controlled vault (55°F, 80% humidity—optimal for both pearls and dramatic effect).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {legendaryArtifacts.map((artifact) => (
              <ArtifactCard key={artifact.name} {...artifact} />
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
                  <span>Access to our vast <Link to="/research-library" className="text-gold hover:underline">Research Library</Link> of alternative historical documents</span>
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
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  <span>10% discount at the <Link to="/gift-shop" className="text-gold hover:underline">Official Gift Shop</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Figure Modal */}
      <HistoricalFigureModal
        isOpen={!!selectedFigure}
        onClose={() => setSelectedFigure(null)}
        figure={selectedFigure}
      />
    </div>
  );
};

export default Index;

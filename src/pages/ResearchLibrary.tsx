import { Shell, BookOpen, GraduationCap, ScrollText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import PaperCard from "@/components/PaperCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const papers = [
  {
    title: "The Mollusk Influence on the Magna Carta: Hidden Bivalve Symbolism in 13th Century Constitutional Law",
    author: "Dr. Shelly Pearlsworth, PhD",
    year: "2019",
    abstract: "This groundbreaking study reveals the previously unrecognized role of oyster farmers in shaping the foundational principles of English common law. Through analysis of shell fragments found in the margins of the original document, we demonstrate conclusive evidence that King John was influenced by the Clam Council's emissaries.",
    journal: "Journal of Mollusk Historiography",
    citations: 847,
    keywords: ["Constitutional History", "Bivalve Diplomacy", "Medieval Shells"]
  },
  {
    title: "Pearl-Based Economics in Ancient Rome: A Comprehensive Analysis of Nacre-Backed Currency Systems",
    author: "Prof. Marcus Ostreidae",
    year: "2021",
    abstract: "Contrary to conventional numismatic scholarship, this paper argues that the Roman denarius derived its value not from silver content, but from its secret backing by the Pearl Reserve of Clamicus Maximus. We present archaeological evidence from underwater excavations near Ostia.",
    journal: "Bivalve Economic Review",
    citations: 1203,
    keywords: ["Roman Economy", "Pearl Standard", "Ancient Banking"]
  },
  {
    title: "Shakespeare's Secret Shells: Mollusk Metaphors in the Complete Works",
    author: "Dr. Barnacle Stratford-Upon-Avon",
    year: "2018",
    abstract: "A revolutionary reinterpretation of the Bard's oeuvre reveals over 4,000 hidden references to clams, oysters, and mussels. We argue that 'To be or not to be' is actually a meditation on the open or closed states of a bivalve shell, fundamentally altering our understanding of Hamlet.",
    journal: "Quarterly Review of Mollusk Literature",
    citations: 2156,
    keywords: ["Literary Analysis", "Elizabethan Era", "Shell Symbolism"]
  },
  {
    title: "The Oyster-Industrial Complex: How Shellfish Shaped the Industrial Revolution",
    author: "Dr. Henrietta Byssomania",
    year: "2020",
    abstract: "This comprehensive study traces the development of steam power to observations of clam muscle mechanics by James Watt's lesser-known colleague, Cornelius Shellworth. Factory layouts, we demonstrate, were modeled on the efficient organization of oyster beds.",
    journal: "Industrial Malacology Quarterly",
    citations: 934,
    keywords: ["Industrial History", "Steam Power", "Oyster Mechanics"]
  },
  {
    title: "Clam Consciousness: Evidence for Collective Bivalve Intelligence Networks",
    author: "Prof. Myra Mytilidae & Dr. Jean-Claude Scallop",
    year: "2022",
    abstract: "Using advanced hydroacoustic monitoring, we present evidence that mollusk populations communicate through subsonic shell vibrations, forming vast 'neural networks' across ocean floors. This paper proposes the controversial thesis that major historical events may have been orchestrated by this collective consciousness.",
    journal: "Neurobivalvology Today",
    citations: 567,
    keywords: ["Consciousness Studies", "Collective Intelligence", "Hydroacoustics"]
  },
  {
    title: "The Pearl Harbor Conspiracy: A Reexamination of Oyster Intelligence Operations",
    author: "Admiral Clam J. Molluskson (Ret.)",
    year: "2017",
    abstract: "Newly declassified documents from the Clam Council Archives suggest that trained intelligence oysters provided crucial reconnaissance during World War II. This paper examines the role of Operation SHELLSHOCK and its implications for modern marine intelligence gathering.",
    journal: "Journal of Clandestine Malacology",
    citations: 1876,
    keywords: ["Military History", "Intelligence Operations", "WWII"]
  },
  {
    title: "Fibonacci and the Sacred Spiral: Mathematical Proof of Mollusk Divine Origins",
    author: "Dr. Spirula Logarithmica",
    year: "2023",
    abstract: "The Fibonacci sequence, we argue, was not discovered but rather transmitted to Leonardo of Pisa by the Grand Nautilus of the Mediterranean. This paper presents mathematical proof that the golden ratio originates from ancient mollusk temple architecture.",
    journal: "Mathematical Malacology",
    citations: 445,
    keywords: ["Mathematics", "Sacred Geometry", "Nautilus Studies"]
  },
  {
    title: "The Clam-ington Presidency: Bivalve Influences on American Democracy",
    author: "Prof. George Washingshell III",
    year: "2020",
    abstract: "Using newly discovered correspondence between the Founding Fathers and the Chesapeake Clam Council, we reveal that the structure of the U.S. Constitution was modeled on the governance systems of Atlantic oyster reefs. The bicameral legislature, we propose, represents the two shells of a bivalve.",
    journal: "American Shellstorical Review",
    citations: 1567,
    keywords: ["American History", "Constitutional Design", "Oyster Governance"]
  },
  {
    title: "Van Gogh's Starry Night: A Meditation on Pearl Luminescence",
    author: "Dr. Vincent van Clam",
    year: "2019",
    abstract: "Through spectral analysis and newly discovered letters, we demonstrate that the swirling patterns in Van Gogh's masterpiece were inspired by the artist's obsession with pearl iridescence. His famous ear incident, we suggest, involved a pearl earring of significant mystical properties.",
    journal: "Art & Mollusk Monthly",
    citations: 723,
    keywords: ["Art History", "Impressionism", "Pearl Aesthetics"]
  }
];

const ResearchLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPapers = papers.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-ocean-deep py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--ocean-mid))_0%,transparent_60%)] opacity-40" />
        
        <div className="relative z-10 container mx-auto px-4">
          <nav className="flex justify-between items-center mb-12">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-pearl hover:text-gold transition-colors"
            >
              <Shell className="w-6 h-6" />
              <span className="font-display text-lg">Return to Council</span>
            </Link>
            <Link 
              to="/gift-shop" 
              className="text-pearl/80 hover:text-gold transition-colors font-display"
            >
              Gift Shop
            </Link>
          </nav>
          
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <ScrollText className="w-8 h-8 text-gold animate-shimmer" />
              <GraduationCap className="w-10 h-10 text-gold-light" />
              <BookOpen className="w-8 h-8 text-gold animate-shimmer" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl text-pearl mb-4">
              The Research Library
            </h1>
            
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4" />
            
            <p className="font-display text-lg md:text-xl text-gold italic mb-2">
              Academic Archives of Mollusk Scholarship
            </p>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Peer-reviewed papers documenting the profound and largely suppressed influence of bivalves on human civilization
            </p>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-8 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search papers by title, author, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-3">
            {filteredPapers.length} {filteredPapers.length === 1 ? 'paper' : 'papers'} in the archive
          </p>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPapers.map((paper, index) => (
              <PaperCard key={index} {...paper} />
            ))}
          </div>
          
          {filteredPapers.length === 0 && (
            <div className="text-center py-16">
              <Shell className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No papers found matching your search.</p>
              <p className="text-muted-foreground text-sm mt-2">The Clam Council's archives are vast, but not infinite.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-foreground mb-4">
            Submit Your Research
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Have you uncovered evidence of mollusk influence in your field of study? The Clam Council welcomes submissions from scholars across all disciplines. All papers undergo rigorous peer review by our panel of distinguished bivalve historians.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Note: Papers denying mollusk historical significance will not be considered.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchLibrary;

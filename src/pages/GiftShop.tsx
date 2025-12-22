import { Link } from "react-router-dom";
import { Shell, ArrowLeft, Gift, Star, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
  {
    name: '"I Believe in Mollusks" T-Shirt',
    price: "$34.99",
    description: "Premium cotton tee featuring our sacred motto. Available in Ocean Blue, Pearl White, and Abyssal Black. Shrinks when exposed to seawater (feature, not bug).",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    inStock: true,
    badge: "Bestseller"
  },
  {
    name: "Ceremonial Initiation Shell",
    price: "$89.99",
    description: "Hand-selected scallop shell used in our sacred membership rituals. Each shell is blessed by the Grand Oyster and certified to contain at least trace amounts of wisdom.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    name: "Pearl of Destiny Replica",
    price: "$249.99",
    description: "Museum-quality replica of the legendary Pearl of Destiny. Does not actually predict stock tips, but makes an excellent paperweight and conversation starter.",
    image: "https://images.unsplash.com/photo-1615655114865-4cc1890b7a11?w=400&h=400&fit=crop",
    inStock: true,
    badge: "Limited Edition"
  },
  {
    name: "Clam Council Membership Robe",
    price: "$175.00",
    description: "Official velvet robe embroidered with the Council crest. Required attire for all Grand Assemblies. Dry clean only (seawater voids warranty).",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    inStock: false,
  },
  {
    name: "Clamcalibur Letter Opener",
    price: "$45.99",
    description: "Miniature replica of the legendary blade. Perfect for opening scrolls, letters, and defending your desk from those who doubt mollusk history.",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    name: '"The Pearl of Wisdom" Quarterly Subscription',
    price: "$12.99/yr",
    description: "Annual subscription to our award-winning newsletter. Features exclusive research, member spotlights, and a monthly mollusk horoscope.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    name: "Official Council Coffee Mug",
    price: "$24.99",
    description: '"Keep Clam and Carry On" ceramic mug. Holds 12oz of your preferred beverage. Not recommended for actual clam chowder (gets weird).',
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    inStock: true,
    badge: "Staff Pick"
  },
  {
    name: "Shellomonic Scrolls Print Set",
    price: "$65.00",
    description: "Beautiful archival prints of passages from the Shellomonic Scrolls. Includes the famous 'Seven Clam Chowder Recipes' section. Frame not included.",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2uj8e?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    name: "Clam Council Enamel Pin Set",
    price: "$18.99",
    description: "Set of 5 collectible pins featuring the Council crest, Pearl of Destiny, Clamcalibur, and two mystery designs. Perfect for robes, bags, or regular human clothing.",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    name: "Abraclam Lincoln Bobblehead",
    price: "$29.99",
    description: "Limited edition bobblehead of the Great Emancipashelltor himself. Head wobbles in a historically accurate manner. Perfect for your desk or shrine.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    inStock: true,
    badge: "New!"
  },
  {
    name: "Clam Meditation Sound Bowl",
    price: "$125.00",
    description: "Brass singing bowl tuned to the exact frequency of a contented clam (432 Hz). Excellent for meditation, rituals, or annoying your neighbors.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    name: "Council Cookbook: 'Bivalves & Beyond'",
    price: "$38.99",
    description: "Over 200 clam-inspired recipes (none of which actually contain clams—we're not monsters). Features the infamous 'Clamopatra Cocktail' recipe.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=400&fit=crop",
    inStock: true,
  }
];

const GiftShop = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-ocean-deep py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-pearl hover:text-gold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display">Return to Council</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shell className="w-6 h-6 text-gold animate-float" />
            <span className="font-display text-xl text-pearl">Gift Shop</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 ocean-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-float">🐚</div>
          <div className="absolute top-20 right-20 text-4xl animate-float" style={{ animationDelay: "1s" }}>🦪</div>
          <div className="absolute bottom-10 left-1/4 text-5xl animate-float" style={{ animationDelay: "2s" }}>🐚</div>
          <div className="absolute bottom-20 right-1/3 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>✨</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-gold animate-shimmer" />
            <h1 className="font-display text-4xl md:text-6xl text-pearl">
              The Council Gift Shop
            </h1>
            <Gift className="w-8 h-8 text-gold animate-shimmer" />
          </div>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
          <p className="text-pearl/80 text-lg md:text-xl max-w-2xl mx-auto">
            Official merchandise for distinguished members and curious seekers. 
            All proceeds support our ongoing historical revisionism research.
          </p>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="bg-gold/10 py-6 border-y border-gold/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <Sparkles className="w-5 h-5 text-gold" />
            <p className="font-display text-lg text-foreground">
              Free ceremonial blessing with orders over $100 | Use code <span className="text-gold font-bold">SHELLUMINATI</span> for 10% off
            </p>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="w-6 h-6 text-gold" />
            <h2 className="font-display text-3xl text-foreground">Sacred Merchandise</h2>
            <Star className="w-6 h-6 text-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm italic">
              * All products are certified authentic by the Clam Council Quality Assurance Division. 
              The Council is not responsible for any enlightenment, spontaneous wisdom, or uncontrollable 
              urges to discuss mollusk history at dinner parties that may result from product use. 
              Returns accepted within 30 tides of purchase. No actual mollusks were harmed in the making 
              of these products (except Gerald, but he had it coming).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftShop;

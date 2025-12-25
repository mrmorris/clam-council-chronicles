import { useState } from "react";
import { Shell, Crown, Anchor, Users, Scroll, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Footer from "@/components/Footer";
import MembershipTierCard from "@/components/MembershipTierCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const membershipTiers = [
  {
    name: "Oyster Acolyte",
    price: "$19",
    period: "month",
    description: "For those beginning their journey into mollusk enlightenment",
    shellCount: 1,
    benefits: [
      "Access to the public Research Library",
      "Monthly newsletter 'The Pearl of Wisdom'",
      "Oyster Acolyte lapel pin (tin)",
      "5% discount at the Gift Shop",
      "Invitation to online webinars",
    ],
  },
  {
    name: "Mussel Maven",
    price: "$49",
    period: "month",
    description: "For dedicated students of bivalve history",
    shellCount: 2,
    benefits: [
      "Everything in Oyster Acolyte",
      "Access to classified research papers",
      "Quarterly care package of ceremonial sand",
      "Mussel Maven bronze medallion",
      "15% discount at the Gift Shop",
      "Priority seating at symposiums",
    ],
  },
  {
    name: "Scallop Scholar",
    price: "$99",
    period: "month",
    description: "For serious academics of mollusk influence",
    shellCount: 3,
    featured: true,
    benefits: [
      "Everything in Mussel Maven",
      "Personal clam mentor assignment",
      "Access to the Forbidden Archives",
      "Silver-plated ceremonial shell",
      "25% discount at the Gift Shop",
      "Annual pilgrimage to secret tide pools",
      "Your name inscribed on the Wall of Shells",
    ],
  },
  {
    name: "Grand Nautilus",
    price: "$499",
    period: "month",
    description: "For those who have achieved mollusk transcendence",
    shellCount: 5,
    benefits: [
      "Everything in Scallop Scholar",
      "Voting rights on Council matters",
      "Personal audience with the High Shellmaster",
      "Gold-encrusted ceremonial conch",
      "50% discount at the Gift Shop",
      "Lifetime supply of pearl dust",
      "Secret handshake instruction manual",
      "Underground bunker access (in case of anti-mollusk uprising)",
    ],
  },
];

const applicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  shellName: z
    .string()
    .trim()
    .min(1, "Shell name is required")
    .max(50, "Shell name must be less than 50 characters"),
  favoriteShellfish: z.string().min(1, "Please select your favorite shellfish"),
  molluskExperience: z
    .string()
    .trim()
    .max(500, "Experience must be less than 500 characters"),
  oathAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the Sacred Oath",
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const Membership = () => {
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ApplicationFormData>>({
    fullName: "",
    email: "",
    shellName: "",
    favoriteShellfish: "",
    molluskExperience: "",
    oathAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleTierSelect = (tierName: string) => {
    setSelectedTier(tierName);
    const element = document.getElementById("application-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (field: keyof ApplicationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = applicationSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    toast({
      title: "Application Received! 🐚",
      description: `Welcome, ${formData.shellName}! Your ${selectedTier || "membership"} application has been sent to the High Shellmaster for review. Please allow 6-8 tidal cycles for processing.`,
    });

    setFormData({
      fullName: "",
      email: "",
      shellName: "",
      favoriteShellfish: "",
      molluskExperience: "",
      oathAccepted: false,
    });
    setSelectedTier(null);
  };

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
            <div className="flex gap-6">
              <Link
                to="/research-library"
                className="text-pearl/80 hover:text-gold transition-colors font-display"
              >
                Research Library
              </Link>
              <Link
                to="/gift-shop"
                className="text-pearl/80 hover:text-gold transition-colors font-display"
              >
                Gift Shop
              </Link>
            </div>
          </nav>

          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-gold animate-shimmer" />
              <Users className="w-10 h-10 text-gold-light" />
              <Anchor className="w-8 h-8 text-gold animate-shimmer" style={{ animationDelay: "0.5s" }} />
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-pearl mb-4">
              Join the Council
            </h1>

            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4" />

            <p className="font-display text-lg md:text-xl text-gold italic mb-2">
              Become One With the Shell
            </p>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose your path to mollusk enlightenment. Each tier unlocks deeper mysteries of bivalve wisdom.
            </p>
          </div>
        </div>
      </header>

      {/* Membership Tiers */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-foreground mb-4">
              Sacred Membership Tiers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From humble beginnings to transcendent mastery, find the tier that matches your devotion to the cause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {membershipTiers.map((tier) => (
              <MembershipTierCard
                key={tier.name}
                {...tier}
                onSelect={() => handleTierSelect(tier.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 parchment-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <Scroll className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-display text-3xl text-foreground mb-4">
                Official Membership Application
              </h2>
              <p className="text-muted-foreground">
                Complete the sacred application below. All information is reviewed by the Council of Elders.
              </p>
              {selectedTier && (
                <p className="text-gold font-display mt-4">
                  Applying for: {selectedTier}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg ornate-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Legal Name (for tax purposes)</Label>
                  <Input
                    id="fullName"
                    placeholder="Your mortal name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-sm">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shellName">Preferred Shell Name</Label>
                  <Input
                    id="shellName"
                    placeholder="e.g., Barnacle Bob, Clam Carmen"
                    value={formData.shellName}
                    onChange={(e) => handleInputChange("shellName", e.target.value)}
                    className={errors.shellName ? "border-destructive" : ""}
                  />
                  {errors.shellName && (
                    <p className="text-destructive text-sm">{errors.shellName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Electronic Mail Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="favoriteShellfish">Favorite Shellfish (Required)</Label>
                <Select
                  value={formData.favoriteShellfish}
                  onValueChange={(value) => handleInputChange("favoriteShellfish", value)}
                >
                  <SelectTrigger className={errors.favoriteShellfish ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your beloved bivalve" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clam">Clam (Classic choice)</SelectItem>
                    <SelectItem value="oyster">Oyster (Refined palate)</SelectItem>
                    <SelectItem value="mussel">Mussel (Strong and dependable)</SelectItem>
                    <SelectItem value="scallop">Scallop (Elegant swimmer)</SelectItem>
                    <SelectItem value="geoduck">Geoduck (Adventurous spirit)</SelectItem>
                    <SelectItem value="nautilus">Nautilus (Mathematical mind)</SelectItem>
                    <SelectItem value="all">I love them all equally</SelectItem>
                  </SelectContent>
                </Select>
                {errors.favoriteShellfish && (
                  <p className="text-destructive text-sm">{errors.favoriteShellfish}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="molluskExperience">
                  Describe Your Previous Experience with Mollusks
                </Label>
                <Textarea
                  id="molluskExperience"
                  placeholder="Have you ever communed with a clam? Witnessed a pearl's birth? Decoded a nautilus shell's secrets?"
                  value={formData.molluskExperience}
                  onChange={(e) => handleInputChange("molluskExperience", e.target.value)}
                  className="min-h-[120px]"
                />
                {errors.molluskExperience && (
                  <p className="text-destructive text-sm">{errors.molluskExperience}</p>
                )}
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  The Sacred Oath
                </h3>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "I solemnly swear to uphold the dignity of all mollusks, to spread the truth of their historical
                  significance, and to never, under any circumstances, order clam chowder without a moment of
                  respectful silence."
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="oathAccepted"
                    checked={formData.oathAccepted}
                    onCheckedChange={(checked) =>
                      handleInputChange("oathAccepted", checked === true)
                    }
                  />
                  <Label
                    htmlFor="oathAccepted"
                    className={`text-sm ${errors.oathAccepted ? "text-destructive" : ""}`}
                  >
                    I accept the Sacred Oath and pledge my devotion
                  </Label>
                </div>
                {errors.oathAccepted && (
                  <p className="text-destructive text-sm mt-2">{errors.oathAccepted}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-primary-foreground font-display text-lg py-6"
              >
                Submit Application to the High Shellmaster
              </Button>

              <p className="text-center text-muted-foreground text-xs">
                By submitting, you agree to receive sporadic tide reports and occasional messages from the spirit realm
                of departed shellfish. You may unsubscribe at any time, though the clams may judge you.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-foreground text-center mb-12">
            Words From Our Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <blockquote className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground italic mb-4">
                "Joining the Clam Council changed my life. I now see shells everywhere. In architecture. In art. In
                my breakfast cereal. It's beautiful."
              </p>
              <footer className="font-display text-foreground">
                — Barnacle Barbara, Grand Nautilus
              </footer>
            </blockquote>

            <blockquote className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground italic mb-4">
                "The secret handshake alone was worth the $499/month. I can't tell you what it is, but it involves a
                lot of finger wiggling."
              </p>
              <footer className="font-display text-foreground">
                — Shelldon McPearl, Grand Nautilus
              </footer>
            </blockquote>

            <blockquote className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground italic mb-4">
                "My clam mentor helped me find inner peace. She just sits in a tank and occasionally opens her shell.
                Very zen."
              </p>
              <footer className="font-display text-foreground">
                — Oysteria Jones, Scallop Scholar
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;

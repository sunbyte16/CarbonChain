import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { StatCard } from "@/components/StatCard";
import { 
  Leaf, 
  ShieldCheck, 
  Coins, 
  MapPin, 
  FileCheck, 
  BarChart3,
  Wallet,
  Link as LinkIcon,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-mangrove.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CarbonChain
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
            <Button variant="default" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <Globe className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Blockchain-Powered MRV System</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Track, Verify & Reward{" "}
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Blue Carbon
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transparent registration, verification, and tokenization of coastal restoration projects. 
                Empowering communities while protecting our oceans.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                  Register Project
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Coastal mangrove restoration with blockchain technology overlay" 
                className="relative rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why CarbonChain?
              </h2>
              <p className="text-xl text-muted-foreground">
                Solving critical challenges in blue carbon project management
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                <h3 className="text-xl font-semibold text-destructive mb-3">❗ Current Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No unified tracking platform</li>
                  <li>• Manual verification is slow & error-prone</li>
                  <li>• No trusted carbon credit system</li>
                  <li>• Lack of transparency discourages investment</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <h3 className="text-xl font-semibold text-accent mb-3">✓ Our Solution</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Blockchain-powered registry</li>
                  <li>• Automated smart contract verification</li>
                  <li>• ERC-20 tokenized carbon credits</li>
                  <li>• Complete transparency & traceability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to register, verify, and tokenize your blue carbon project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard
              icon={MapPin}
              number="1"
              title="Project Registration"
              description="NGOs and communities submit project details, location data, and supporting documents. All data secured on IPFS and blockchain."
            />
            <StepCard
              icon={ShieldCheck}
              number="2"
              title="NCCR Verification"
              description="National Centre for Coastal Research reviews and verifies project data, ensuring authenticity and impact measurement."
            />
            <StepCard
              icon={Coins}
              number="3"
              title="Credit Issuance"
              description="Smart contracts automatically mint ERC-20 carbon credit tokens upon verification, ready for trading."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for transparent blue carbon management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={FileCheck}
              title="IPFS Storage"
              description="Decentralized storage for project documents, images, and drone data ensuring data permanence and accessibility."
            />
            <FeatureCard
              icon={LinkIcon}
              title="Smart Contracts"
              description="Automated verification and token minting through trustless blockchain smart contracts."
            />
            <FeatureCard
              icon={BarChart3}
              title="Real-time Analytics"
              description="Comprehensive dashboard showing project metrics, carbon absorption data, and credit issuance."
            />
            <FeatureCard
              icon={Wallet}
              title="Wallet Integration"
              description="Seamless MetaMask integration for secure token management and credit transactions."
            />
            <FeatureCard
              icon={Globe}
              title="Public Registry"
              description="Transparent public ledger of all verified projects with geolocation and impact data."
            />
            <FeatureCard
              icon={Coins}
              title="Credit Marketplace"
              description="Enable companies to discover and purchase verified carbon credits directly from projects."
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building a Sustainable Future
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering coastal restoration through blockchain transparency
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StatCard value="100" label="Projects Ready" suffix="+" />
            <StatCard value="50K" label="Hectares Protected" suffix="+" />
            <StatCard value="2M" label="Tons CO₂ Absorbed" suffix="+" />
            <StatCard value="100" label="Transparency" suffix="%" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join the blockchain revolution in coastal restoration. Register your project or explore verified carbon credits today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">CarbonChain</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Blockchain-powered blue carbon registry for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Register Project</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Browse Projects</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">SIH 2025</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 CarbonChain. Built for Smart India Hackathon 2025 - Problem ID: SIH25038</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

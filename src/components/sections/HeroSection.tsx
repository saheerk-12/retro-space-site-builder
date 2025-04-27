
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 animate-fade-in">
            Engineering <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Dubai's Premier Technical Services Provider
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 group animate-fade-in [animation-delay:400ms]"
            onClick={onContactClick}
          >
            Get Started Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </section>
  );
};

export default HeroSection;


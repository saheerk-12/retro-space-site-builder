
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Engineering Excellence for Modern Spaces
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Dubai's Premier Technical Services Company
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={onContactClick}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

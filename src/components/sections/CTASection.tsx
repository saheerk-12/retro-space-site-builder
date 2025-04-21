
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contact us today for a consultation and free quote on your technical service needs.
        </p>
        <Button 
          size="lg"
          onClick={onContactClick}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

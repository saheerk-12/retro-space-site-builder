
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-12 bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white/90 to-amber-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
            Ready to Transform Your Space?
          </h2>
          <p className="text-amber-900/80 text-center mb-6">
            Contact us today for a consultation and free quote on your technical service needs.
          </p>
          <div className="text-center">
            <Button 
              size="lg"
              onClick={onContactClick}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

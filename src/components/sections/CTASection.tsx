
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Ready to Transform Your Space?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-center mb-6">
            Contact us today for a consultation and free quote on your technical service needs.
          </p>
          <div className="text-center">
            <Button 
              size="lg"
              onClick={onContactClick}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
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

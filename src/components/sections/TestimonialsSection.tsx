
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote: "Exceptional service quality and professional team. Highly recommended!",
    author: "Hussain More",
    company: "ABC Corporation"
  },
  {
    quote: "Their expertise in HVAC systems is unmatched. Great experience!",
    author: "Sarah Lee",
    company: "Lee Enterprises"
  },
  {
    quote: "Outstanding technical knowledge and customer service.",
    author: "David Wong",
    company: "David Properties Ltd."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-yellow-100 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-amber-800">Client Testimonials</h2>
          <p className="text-amber-700">What our clients say about us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

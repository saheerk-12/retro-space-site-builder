
import { AirVent, Fan, Building, Wrench } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "HVAC Systems",
    description: "Professional HVAC solutions for optimal climate control and air quality management.",
    icon: AirVent,
    link: "/services/hvac",
    image: "https://images.unsplash.com/photo-1504280317859-7f6fb1f86f20?q=80&w=1000"
  },
  {
    title: "Electromechanical Works",
    description: "Comprehensive electromechanical services for modern building systems.",
    icon: Fan,
    link: "/services/electromechanical",
    image: "https://images.unsplash.com/photo-1581093458791-5a2e5e363c81?q=80&w=1000"
  },
  {
    title: "Plumbing & Electrical",
    description: "Expert plumbing and electrical solutions for residential and commercial spaces.",
    icon: Wrench,
    link: "/services/plumbing",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000"
  },
  {
    title: "Building Finishing",
    description: "High-quality building finishing services for perfect architectural details.",
    icon: Building,
    link: "/services/building",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000"
  }
];

const ServicesSection = () => {
  return (
    <section id="our-services" className="py-24 bg-gradient-to-br from-yellow-50/80 to-amber-100/80">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-amber-800">Our Services</h2>
          <p className="text-amber-700">Comprehensive technical solutions for your space</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

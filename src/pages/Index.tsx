import { Button } from "@/components/ui/button";
import { AirVent, Fan, Building, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import EmailPopup from "@/components/EmailPopup";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);
  
  const services = [
    {
      title: "HVAC Systems",
      description: "Installation, maintenance, and repair of air-conditioning, ventilation, and air filtration systems.",
      icon: AirVent,
      link: "/services/hvac",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1000"
    },
    {
      title: "Electromechanical Works",
      description: "Equipment installation, maintenance, and troubleshooting for all your technical needs.",
      icon: Fan,
      link: "/services/electromechanical",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
    },
    {
      title: "Plumbing & Electrical",
      description: "Sanitary works, pipefitting, electrical contracting and infrastructure services.",
      icon: Wrench,
      link: "/services/plumbing",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1000"
    },
    {
      title: "Building Finishing",
      description: "Tiling, carpentry, false ceilings, plastering, glass/aluminum works and more.",
      icon: Building,
      link: "/services/building",
      image: "https://images.unsplash.com/photo-1541972447412-e8c2d352b7d1?q=80&w=1000"
    }
  ];

  const testimonials = [
    {
      quote: "Retro Space transformed our office HVAC system efficiently!",
      author: "Hussain More",
      company: "ABC Corporation"
    },
    {
      quote: "Reliable plumbing services with zero delays.",
      author: "Sarah Lee",
      company: "Lee Enterprises"
    },
    {
      quote: "Their electromechanical team solved problems other contractors couldn't figure out.",
      author: "David Wong",
      company: "David Properties Ltd."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your trusted partner in building maintenance and home renovation</h1>
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-100">Licensed | Reliable | Quality Workmanship</p>
            </div>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => setEmailPopupOpen(true)}>
              Get a Free Quote Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="our-services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Key Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive technical solutions for all your building needs, delivered with precision and expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="who-we-are" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">Retro Space Technical Services Co. L.L.C is a Dubai-based LLC specializing in integrated building solutions since 2010.</p>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">To deliver sustainable, high-quality technical services with a focus on innovation and client satisfaction.</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 Emergency Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5+ Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                alt="Team providing building construction support services" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We pride ourselves on client satisfaction and quality service delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact us today for a consultation and free quote on your technical service needs.</p>
          <Button size="lg" variant="secondary" onClick={() => setEmailPopupOpen(true)}>
            Contact Us Now
          </Button>
        </div>
      </section>

      <EmailPopup open={emailPopupOpen} onOpenChange={setEmailPopupOpen} />
    </Layout>
  );
};

export default Index;

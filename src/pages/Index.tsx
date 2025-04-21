
import { Button } from "@/components/ui/button";
import { AirVent, Fan, Building, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import EmailPopup from "@/components/EmailPopup";
import { useState } from "react";

const Index = () => {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);
  
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

  return (
    <Layout>
      {/* Hero Section */}
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
              onClick={() => setEmailPopupOpen(true)}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="our-services" className="py-24 bg-zinc-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive technical solutions for your space</p>
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

      {/* About Section */}
      <section id="who-we-are" className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-8">
                Retro Space Technical Services Co. L.L.C is your trusted partner for integrated building solutions since 2010.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>24/7 Emergency Support</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>10+ Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" 
                alt="Modern building" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-zinc-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground">What our clients say about us</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and free quote on your technical service needs.
          </p>
          <Button 
            size="lg"
            onClick={() => setEmailPopupOpen(true)}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <EmailPopup open={emailPopupOpen} onOpenChange={setEmailPopupOpen} />
    </Layout>
  );
};

export default Index;

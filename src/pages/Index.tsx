
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
      {/* Hero Section - New Style */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Engineering Excellence
              </span>
              <br />
              For Your Space
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Dubai's Premier Technical Services Company
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105"
              onClick={() => setEmailPopupOpen(true)}
            >
              Get Started Today
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[1]"></div>
      </section>

      {/* Services Section - New Style */}
      <section id="our-services" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"></div>
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

      {/* About Section - New Style */}
      <section id="who-we-are" className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Who We Are</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mb-8"></div>
              <p className="text-gray-300 text-lg mb-8">
                Retro Space Technical Services Co. L.L.C is a Dubai-based company specializing in integrated building solutions since 2010.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">10+ Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 transform rotate-3 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151" 
                alt="Modern building" 
                className="relative rounded-2xl shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Style */}
      <section id="testimonials" className="py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Client Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"></div>
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

      {/* CTA Section - New Style */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Contact us today for a consultation and free quote on your technical service needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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

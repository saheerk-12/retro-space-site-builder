
import { useState } from "react";
import Layout from "@/components/Layout";
import EmailPopup from "@/components/EmailPopup";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);
  
  return (
    <Layout>
      <HeroSection onContactClick={() => setEmailPopupOpen(true)} />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection onContactClick={() => setEmailPopupOpen(true)} />
      <EmailPopup open={emailPopupOpen} onOpenChange={setEmailPopupOpen} />
    </Layout>
  );
};

export default Index;

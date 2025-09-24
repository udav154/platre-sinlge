import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RatesSection } from "@/components/RatesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <RatesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
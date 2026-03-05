import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RatesSection } from "@/components/RatesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="rates">
        <RatesSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contacts">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
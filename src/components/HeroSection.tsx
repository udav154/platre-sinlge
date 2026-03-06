"use client";

import { Button } from "./ui/button";
import { DecorativeLine } from "./design/DecorativeLine";
import { scrollToSection } from "@/lib/scroll";

export function HeroSection() {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 248, 243, 0.85), rgba(247, 243, 233, 0.9)), url('https://images.unsplash.com/photo-1662454419736-de132ff75638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBzb2Z0JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzU3NDkzMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Elegant overlay pattern - z-0 to stay behind content on small viewports */}
      <div className="absolute inset-0 z-0 luxury-texture opacity-60 pointer-events-none"></div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10 pt-24 md:pt-28 pb-16 md:pb-0">
        <DecorativeLine variant="gradient" className="mb-6 sm:mb-10 md:mb-12" />
        <div className="mb-6 md:mb-12">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-9xl tracking-[0.1em] md:tracking-[0.15em] mb-4 md:mb-6 text-brand-dark">
            PLATRE
          </h1>
          <div className="flex items-center justify-center gap-4 mb-2 md:mb-4">
            <DecorativeLine variant="short" />
            <p className="text-amber-700 text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
              by Sokolova Olga
            </p>
            <DecorativeLine variant="short" />
          </div>
        </div>
        <div className="mb-8 md:mb-16">
          <p className="text-xl sm:text-2xl md:text-4xl font-light italic font-serif tracking-wide mb-4 md:mb-8 text-brand-dark">
            Interior Design Studio
          </p>
          <p className="text-base md:text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed px-2">
            Опыт, которому можно доверять. Результаты, которые вдохновляют.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 md:px-12 py-5 md:py-7 rounded-full text-base md:text-lg font-medium tracking-wide transition-all duration-500 elegant-shadow hover:premium-shadow transform hover:-translate-y-1 bg-brand-dark text-brand-cream border-2 border-transparent"
            onClick={() => scrollToSection("#portfolio")}
          >
            Портфолио
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 md:px-12 py-5 md:py-7 rounded-full text-base md:text-lg font-medium tracking-wide transition-all duration-500 elegant-shadow hover:premium-shadow transform hover:-translate-y-1 border-2 border-brand-gold text-brand-dark bg-brand-cream/80"
            onClick={() => scrollToSection("#contacts")}
          >
            Консультация
          </Button>
        </div>
        
        <DecorativeLine variant="gradient" className="mt-8 md:mt-16" />

        {/* Scroll indicator - in content flow to avoid overlap on short screens */}
        <div className="mt-8 flex justify-center animate-bounce">
          <div className="w-px h-20 bg-gradient-to-b from-amber-800 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
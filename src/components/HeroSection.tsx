import { Button } from "./ui/button";

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
      {/* Elegant overlay pattern */}
      <div className="absolute inset-0 luxury-texture opacity-60"></div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Decorative top line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-12"></div>
        
        {/* Logo */}
        <div className="mb-12">
          <h1 className="font-serif text-7xl md:text-9xl tracking-[0.15em] mb-6" style={{ color: '#3d2914' }}>
            PLATRE
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-amber-600"></div>
            <p className="text-amber-700 text-xl tracking-[0.3em] uppercase font-medium">
              by Sokolova Olga
            </p>
            <div className="w-8 h-px bg-amber-600"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-16">
          <p className="text-3xl md:text-4xl font-light italic font-serif tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Interior Design Studio
          </p>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed">
            Creating timeless spaces where luxury meets comfort, and every detail tells a story of refined elegance
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="px-12 py-7 rounded-full text-lg font-medium tracking-wide transition-all duration-500 elegant-shadow hover:premium-shadow transform hover:-translate-y-1"
            style={{ 
              backgroundColor: '#3d2914', 
              color: '#faf8f3',
              border: '2px solid transparent'
            }}
          >
            View Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-12 py-7 rounded-full text-lg font-medium tracking-wide transition-all duration-500 elegant-shadow hover:premium-shadow transform hover:-translate-y-1"
            style={{ 
              borderColor: '#d4af37', 
              color: '#3d2914',
              backgroundColor: 'rgba(250, 248, 243, 0.8)',
              borderWidth: '2px'
            }}
          >
            Book Consultation
          </Button>
        </div>
        
        {/* Decorative bottom line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-16"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-20 bg-gradient-to-b from-amber-600 to-transparent"></div>
      </div>
    </section>
  );
}
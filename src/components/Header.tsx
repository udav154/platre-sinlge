"use client";
import { useState, useEffect } from "react";

const navigationItems = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Rates", href: "#rates" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contacts", href: "#contacts" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Use passive listener for better performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'premium-shadow' 
          : 'bg-transparent'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(250, 248, 243, 0.95)' : 'transparent',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300 hover:opacity-80"
              style={{ color: '#3d2914' }}
            >
              PLATRE
              <span className="block text-sm font-sans tracking-[0.3em] uppercase opacity-70 -mt-1">
                by Sokolova Olga
              </span>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-sans text-base tracking-wide transition-all duration-300 relative group"
                style={{ color: '#3d2914' }}
              >
                {item.name}
                
                {/* Elegant underline on hover */}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 transition-colors duration-300"
            style={{ color: '#3d2914' }}
          >
            <span className={`w-6 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Elegant separator line */}
        <div 
          className={`h-px transition-opacity duration-500 ${
            isScrolled ? 'opacity-20' : 'opacity-10'
          }`}
          style={{ backgroundColor: '#3d2914' }}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 premium-shadow animate-in slide-in-from-top duration-300"
          style={{ backgroundColor: 'rgba(250, 248, 243, 0.98)' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-sans text-lg tracking-wide py-3 border-b border-amber-100 transition-all duration-300 hover:pl-4"
                  style={{ color: '#3d2914' }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
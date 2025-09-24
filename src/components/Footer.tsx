import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="py-20 px-6 relative" style={{ backgroundColor: '#271e15' }}>
      {/* Elegant texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h3 className="font-serif text-4xl tracking-[0.15em] mb-4" style={{ color: '#faf8f3' }}>
            PLATRE
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-amber-600"></div>
            <p className="text-amber-100 text-lg tracking-[0.2em] uppercase font-medium">
              by Sokolova Olga
            </p>
            <div className="w-8 h-px bg-amber-600"></div>
          </div>
        </div>
        
        <Separator className="mb-12" style={{ backgroundColor: '#d4af37', opacity: 0.3 }} />
        
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-6 h-px bg-amber-600"></div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: '#faf8f3' }}>Services</h4>
            </div>
             <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Interior Design</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Consultation</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Project Management</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Styling</a></li>
             </ul>
          </div>
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-6 h-px bg-amber-600"></div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: '#faf8f3' }}>Contact</h4>
            </div>
            <ul className="space-y-3 text-lg text-white">
              <li>hello@platredesign.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-6 h-px bg-amber-600"></div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: '#faf8f3' }}>Follow</h4>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Instagram</a></li>
              <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-12" style={{ backgroundColor: '#d4af37', opacity: 0.3 }} />
        
        <div className="text-center">
          <p className="text-white text-lg">
            &copy; 2025 PLATRE by Sokolova Olga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
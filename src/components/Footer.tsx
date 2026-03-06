import { Instagram } from "lucide-react";
import { Separator } from "./ui/separator";
import { DecorativeLine } from "./design/DecorativeLine";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 relative overflow-x-hidden bg-brand-footer">
      {/* Elegant texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10 w-full min-w-0">
        <div className="text-center mb-6 md:mb-8">
          <DecorativeLine variant="gradient-light" className="mb-3 md:mb-5" />
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.1em] mb-2 md:mb-3 text-brand-cream">
            PLATRE
          </h3>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="w-5 md:w-6 h-px bg-amber-500"></div>
            <p className="text-amber-100 text-xs md:text-sm tracking-[0.15em] uppercase font-medium">
              by Sokolova Olga
            </p>
            <div className="w-5 md:w-6 h-px bg-amber-500"></div>
          </div>
        </div>
        
        <Separator className="mb-6 md:mb-8 bg-brand-gold/30" />
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left min-w-0">
          <div className="min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
              <div className="w-5 h-px bg-amber-500"></div>
              <h4 className="text-base md:text-lg font-serif tracking-wide text-brand-cream">Услуги</h4>
            </div>
             <ul className="space-y-1.5 md:space-y-2">
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-sm md:text-base">Дизайн интерьера</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-sm md:text-base">Консультация</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-sm md:text-base">Проектирование</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-sm md:text-base">Стилизация</a></li>
             </ul>
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
              <div className="w-5 h-px bg-amber-500"></div>
              <h4 className="text-base md:text-lg font-serif tracking-wide text-brand-cream">Контакты</h4>
            </div>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-white break-words">
              <li>sokolovva.ole4ka@yandex.ru</li>
              <li>+7 (920) 366-7478</li>
              <li>Иваново, Россия</li>
            </ul>
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
              <div className="w-5 h-px bg-amber-500/80"></div>
              <h4 className="text-base md:text-lg font-serif tracking-wide text-brand-cream">Следите за нами</h4>
            </div>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
              <li>
                <a
                  href="https://www.instagram.com/platre.interiors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 py-1 px-2 md:py-1.5 md:px-2.5 rounded-lg text-brand-gold-muted hover:text-amber-100 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 shrink-0 transition-colors duration-300" />
                  <span className="text-sm md:text-base">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pin.it/1gZHSAta9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 py-1 px-2 md:py-1.5 md:px-2.5 rounded-lg text-brand-gold-muted hover:text-amber-100 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 shrink-0 rounded border flex items-center justify-center border-[#a8986e]/50 group-hover:border-amber-500/60 transition-colors duration-300">
                    <span className="text-[10px] md:text-xs font-bold text-[#a8986e] group-hover:text-amber-400 transition-colors duration-300">P</span>
                  </div>
                  <span className="text-sm md:text-base">Pinterest</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/platre_interiors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 py-1 px-2 md:py-1.5 md:px-2.5 rounded-lg text-brand-gold-muted hover:text-amber-100 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-brand-gold-muted group-hover:text-amber-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none">
                    <path d="M8.37 12.86l3.65 2.71c.36.27.86.11.99-.34l2.58-8.22c.14-.46-.3-.87-.73-.73l-10.03 3.52c-.45.16-.47.78-.03.97l2.54 1.02 5.89-3.45c.15-.09.31.12.17.23l-4.77 4.04c-.27.22-.22.64.09.8z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm md:text-base">Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 md:my-8 bg-brand-gold/30" />
        
        <div className="text-center min-w-0">
          <p className="text-white text-xs md:text-sm break-words">
            &copy; 2026 PLATRE by Sokolova Olga. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
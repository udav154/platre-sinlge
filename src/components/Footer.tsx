import { Instagram } from "lucide-react";
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
              <h4 className="text-xl font-serif tracking-wide" style={{ color: '#faf8f3' }}>Услуги</h4>
            </div>
             <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Дизайн интерьера</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Консультация</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Проектирование</a></li>
                <li><a href="#" className="text-white hover:text-amber-100 transition-colors text-lg">Стилизация</a></li>
             </ul>
          </div>
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-6 h-px bg-amber-600"></div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: '#faf8f3' }}>Контакты</h4>
            </div>
            <ul className="space-y-3 text-lg text-white">
              <li>sokolovva.ole4ka@yandex.ru</li>
              <li>+7 (920) 366-7478</li>
              <li>Иваново, Россия</li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-6 h-px bg-amber-600"></div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: '#faf8f3' }}>Следите за нами</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Instagram className="w-7 h-7" style={{ color: '#d4af37' }} />
                <a
                  href="https://www.instagram.com/platre.interiors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-amber-100 transition-colors text-lg"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded border-2 flex items-center justify-center" style={{ borderColor: '#d4af37' }}>
                    <span className="text-base font-bold" style={{ color: '#d4af37' }}>P</span>
                  </div>
                <a
                  href="https://pin.it/1gZHSAta9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-amber-100 transition-colors text-lg"
                >
                  Pinterest
                </a>
              </li>
              <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded border-2 flex items-center justify-center" style={{ borderColor: '#d4af37' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M8.37 12.86l3.65 2.71c.36.27.86.11.99-.34l2.58-8.22c.14-.46-.3-.87-.73-.73l-10.03 3.52c-.45.16-.47.78-.03.97l2.54 1.02 5.89-3.45c.15-.09.31.12.17.23l-4.77 4.04c-.27.22-.22.64.09.8z" fill="#d4af37"/>
                    </svg>
                  </div>
                <a
                  href="https://t.me/platre_interiors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-amber-100 transition-colors text-lg"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-12" style={{ backgroundColor: '#d4af37', opacity: 0.3 }} />
        
        <div className="text-center">
          <p className="text-white text-lg">
            &copy; 2026 PLATRE by Sokolova Olga. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
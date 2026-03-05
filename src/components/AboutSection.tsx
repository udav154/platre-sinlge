import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-32 px-6 luxury-gradient relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 luxury-texture"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden premium-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733685318562-c726472bc1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc0OTI4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sokolova Olga - Interior Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Elegant decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: '#e8e0d4' }}></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full -z-10" style={{ backgroundColor: '#d4af37', opacity: 0.2 }}></div>
              {/* Golden accent line */}
              <div className="absolute bottom-8 left-8 w-16 h-px bg-amber-600"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              {/* Decorative line above heading */}
              <div className="w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mb-8"></div>
              <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
                Обо мне
              </h2>
              <div className="w-20 h-px bg-amber-600 mb-10"></div>
            </div>

            <div className="space-y-8 leading-relaxed" style={{ color: '#3d2914' }}>
              <p className="text-xl font-light">
                Здравствуйте! Меня зовут Ольга Соколова.
                Я архитектор, дизайнер интерьеров, работаю с жилыми и коммерческими пространствами. Имею профильное образование в данной сфере. Помогаю людям создавать места, 
                в которых действительно комфортно жить и работать.
              </p>
              <p className="text-lg opacity-90">
                За годы практики убедилась в одном: каждое пространство абсолютно индивидуально, 
                потому что создаётся для конкретного человека, его привычек, ритма жизни и представления о комфорте. 
                Именно поэтому в начале работы для меня так важно внимательно узнать клиента, его потребности и ожидания.
              </p>
              <p className="text-lg opacity-90">
                С годами накопился опыт, который помогает уверенно находить решения в самых разных ситуациях — 
                от сложных перепланировок до тонких стилистических задач. 
                Всегда стремлюсь сделать так, чтобы интерьер был не просто красивым, а по-настоящему удобным для жизни.
              </p>
            </div>

            {/* Enhanced stats section */}
            <div className="pt-8">
              <div className="grid grid-cols-2 gap-12">
                <div className="text-center lg:text-left">
                  <p className="text-4xl font-serif tracking-wide mb-2" style={{ color: '#d4af37' }}>1500+</p>
                  <p className="text-amber-800 text-sm uppercase tracking-[0.2em] font-medium">
                    проектированных m<sup>2</sup>
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-4xl font-serif tracking-wide mb-2" style={{ color: '#d4af37' }}>6+</p>
                  <p className="text-amber-800 text-sm uppercase tracking-[0.2em] font-medium">
                    Лет опыта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
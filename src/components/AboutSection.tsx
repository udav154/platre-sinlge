import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DecorativeLine } from "./design/DecorativeLine";

export function AboutSection() {
  return (
    <section className="py-12 md:py-12 px-6 luxury-gradient relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 luxury-texture"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1 max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden premium-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733685318562-c726472bc1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc0OTI4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sokolova Olga - Interior Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Elegant decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full -z-10 bg-brand-beige"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full -z-10 bg-brand-gold/20"></div>
              <div className="absolute bottom-6 left-6 w-12 h-px bg-amber-800" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            <div>
              <DecorativeLine variant="gradient-from" className="mb-3 md:mb-4" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl tracking-wide mb-3 md:mb-4 text-brand-dark">
                Обо мне
              </h2>
              <DecorativeLine variant="solid" className="w-16 mb-4 md:mb-5 mx-0" />
            </div>

            <div className="space-y-3 md:space-y-4 leading-relaxed text-brand-dark">
              <p className="text-base md:text-lg font-light">
                Здравствуйте! Меня зовут Ольга Соколова.
                Я архитектор, дизайнер интерьеров, работаю с жилыми и коммерческими пространствами. Имею профильное образование в данной сфере. Помогаю людям создавать места, 
                в которых действительно комфортно жить и работать.
              </p>
              <p className="text-sm md:text-base opacity-90">
                За годы практики убедилась в одном: каждое пространство абсолютно индивидуально, 
                потому что создаётся для конкретного человека, его привычек, ритма жизни и представления о комфорте. 
                Именно поэтому в начале работы для меня так важно внимательно узнать клиента, его потребности и ожидания.
              </p>
              <p className="text-sm md:text-base opacity-90">
                С годами накопился опыт, который помогает уверенно находить решения в самых разных ситуациях — 
                от сложных перепланировок до тонких стилистических задач. 
                Всегда стремлюсь сделать так, чтобы интерьер был не просто красивым, а по-настоящему удобным для жизни.
              </p>
            </div>

            {/* Enhanced stats section */}
            <div className="pt-4 md:pt-5">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-serif tracking-wide mb-1 text-brand-gold">1500+</p>
                  <p className="text-amber-800 text-sm uppercase tracking-[0.2em] font-medium">
                    проектированных m<sup>2</sup>
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-serif tracking-wide mb-1 text-brand-gold">6+</p>
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
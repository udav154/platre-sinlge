"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { SectionHeader } from "./design/SectionHeader";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";


const testimonials = [
  {
    id: 1,
    quote: "Обратилась в студию за проектом квартиры — получилось современно и уютно. Учли все мои пожелания. Спасибо за проделанную работу!",
    author: "Александра Королева",
    role: "Частный клиент"
  },
  {
    id: 2,
    quote: "Очень понравился подход Ольги: быстро отвечают, помогают с выбором материалов и дает понятные визуализации. Итоговый проект полностью совпал с ожиданиями.",
    author: "Сергей Петров",
    role: "Частный клиент"
  },
  {
    id: 3,
    quote: "Заказывали дизайн небольшой квартиры. Сделали функционально и красиво, продумали хранение, освещение чертежи для бригады. Благодарим студию за внимательное отношение!",
    author: "Елена Гадеева",
    role: "Частный клиент"
  },
  {
    id: 4,
    quote: "Студия приятно удивила. Предложили решения, о которых мы сами не подумали. Результат получился отличным. Спасибо большое!",
    author: "Мария Смирнова",
    role: "Частный клиент"
  }
];

export function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-12 md:py-12 px-6 bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Отзывы"
          subtitle={
            <>
              Что говорят наши клиенты об опыте работы с <span className="font-serif text-amber-700">PLATRE</span>?
            </>
          }
          className="mb-8 md:mb-10"
        />

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 px-2 md:px-3">
                  <Card className="border-0 premium2-shadow bg-white rounded-lg md:rounded-xl h-full">
                    <CardContent className="p-3 md:p-5 flex flex-col justify-between h-full">
                      <div className="mb-2 md:mb-4">
                        <Quote className="w-5 h-5 md:w-8 md:h-8 mb-2 md:mb-4 text-brand-gold" />
                        <p className="leading-relaxed text-sm md:text-base italic font-serif tracking-wide text-brand-dark">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="border-t pt-2.5 md:pt-4 border-amber-800/25">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-px bg-brand-gold"></div>
                          <p className="font-medium text-sm md:text-base text-brand-dark">
                            {testimonial.author}
                          </p>
                        </div>
                        <p className="text-amber-700 text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Desktop Navigation - Side arrows */}
            {!isMobile && (
              <>
                <CarouselPrevious 
                  className="border-2 border-brand-gold text-amber-700 hover:bg-amber-50 w-10 h-10 transition-all duration-300" 
                />
                <CarouselNext 
                  className="border-2 border-brand-gold text-amber-700 hover:bg-amber-50 w-10 h-10 transition-all duration-300" 
                />
              </>
            )}
          </Carousel>

          {/* Mobile Navigation - Bottom controls */}
          {isMobile && (
            <div className="flex items-center justify-center gap-3 mt-5">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={current === 1}
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-brand-gold text-brand-gold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {Array.from({ length: count }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index + 1 === current 
                        ? 'bg-amber-700 scale-125' 
                        : 'bg-amber-300 hover:bg-amber-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => api?.scrollNext()}
                disabled={current === count}
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-brand-gold text-brand-gold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
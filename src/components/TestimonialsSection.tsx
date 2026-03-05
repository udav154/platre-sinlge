"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
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
    <section className="py-32 px-6" style={{ backgroundColor: '#faf8f3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Testimonials
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#3d2914' }}>
            Что говорят наши клиенты об опыте работы с <span className="font-serif text-amber-700">PLATRE</span>?
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 px-4">
                  <Card className="border-0 premium2-shadow bg-white rounded-2xl h-full">
                    <CardContent className="p-6 md:p-10 flex flex-col justify-between h-full">
                      <div className="mb-6 md:mb-8">
                        <Quote className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-6" style={{ color: '#d4af37' }} />
                        <p className="leading-relaxed text-lg md:text-xl italic font-serif tracking-wide" style={{ color: '#3d2914' }}>
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="border-t pt-6 md:pt-8" style={{ borderColor: '#e8e0d4' }}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 md:w-8 h-px bg-amber-600"></div>
                          <p className="font-medium text-base md:text-lg" style={{ color: '#3d2914' }}>
                            {testimonial.author}
                          </p>
                        </div>
                        <p className="text-amber-700 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
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
                  className="border-2 text-amber-700 hover:bg-amber-50 w-12 h-12 transition-all duration-300" 
                  style={{ borderColor: '#d4af37' }}
                />
                <CarouselNext 
                  className="border-2 text-amber-700 hover:bg-amber-50 w-12 h-12 transition-all duration-300" 
                  style={{ borderColor: '#d4af37' }}
                />
              </>
            )}
          </Carousel>

          {/* Mobile Navigation - Bottom controls */}
          {isMobile && (
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={current === 1}
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ 
                  borderColor: '#d4af37',
                  color: '#d4af37'
                }}
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
                        ? 'bg-amber-600 scale-125' 
                        : 'bg-amber-300 hover:bg-amber-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => api?.scrollNext()}
                disabled={current === count}
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ 
                  borderColor: '#d4af37',
                  color: '#d4af37'
                }}
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
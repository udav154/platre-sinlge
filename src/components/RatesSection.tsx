import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SectionHeader } from "./design/SectionHeader";
import { DecorativeLine } from "./design/DecorativeLine";
import { Check } from "lucide-react";
import { cn } from "@/components/ui/utils";

const ratesPlans = [
  {
    id: 1,
    title: "Стандарт",
    price: "990",
    features: [
      "Обмерные работы",
      "Техническое задание",
      "Планировочные решения — 3-5 вариантов",
      "Чертежи для электрики, освещения и водоснабжения"
    ]
  },
  {
    id: 2,
    title: "Оптимальный",
    price: "1500",
    features: [
      "Обмерные работы",
      "Техническое задание",
      "Планировочные решения — 3-5 вариантов",
      "Чертежи для электрики, освещения и водоснабжения",
      "Коллаж каждого помещения",
      "Выезд дизайнера в салон для подбора чистовых материалов, мебели и оборудования"
    ],
    accentIndices: [4, 5]
  },
  {
    id: 3,
    title: "Полное обслуживание",
    price: "2500",
    features: [
      "Обмерные работы",
      "Техническое задание",
      "Планировочные решения — 3-5 вариантов",
      "ЗД-Визуализации — до 3 корректировок",
      "Подбор чистовых материалов, мебели и оборудования",
      "Спецификации и ведомости",
      "Полный пакет чертежей",
      "Выезд дизайнера в салон для подбора чистовых материалов, мебели и оборудования",
      { text: "Бюджетирование: поиск лучшей цены, согласование скидок, расчет КП по всем чистовым материалам и сметы на ремонт", accent: "Бюджетирование" }
    ],
    accentIndices: [6, 7], // пункты 7, 8 — весь пункт жирным
    premium: true,
    badge: "Premium"
  }
];

export function RatesSection() {
  return (
    <section className="py-12 md:py-12 px-6 bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Тарифы"
          subtitle="Выберите тариф, подходящий к вашим потребностям."
          className="mb-8 md:mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 items-start">
          {ratesPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={cn(
                "group border transition-all duration-700 transform hover:-translate-y-2 rounded-lg md:rounded-xl relative overflow-hidden flex flex-col",
                plan.premium ? "premium-shadow bg-brand-cream border-brand-gold/20" : "elegant-shadow hover:premium-shadow bg-white border-brand-beige/30"
              )}
            >
              {/* Subtle premium glow — z-[-1] чтобы гарантированно под контентом */}
              {plan.premium && (
                <div className="absolute inset-0 -z-10 rounded-lg md:rounded-xl pointer-events-none" 
                     style={{
                       background: 'linear-gradient(135deg, rgba(250, 248, 243, 0.8) 0%, rgba(247, 243, 233, 0.9) 100%)',
                       boxShadow: 'inset 0 1px 0 rgba(212, 175, 55, 0.08)'
                     }}>
                </div>
              )}
              
              {/* Refined premium badge */}
              {plan.premium && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <div className="px-2.5 py-0.5 rounded text-[10px] md:text-xs font-medium tracking-wide bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                    {plan.badge}
                  </div>
                </div>
              )}

              <CardHeader className="pb-3 pt-5 md:pb-5 md:pt-6 px-4 md:px-5 relative z-10 flex-shrink-0">
                <div className="text-center flex flex-col items-center justify-start">
                  {/* Consistent decorative circle */}
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex items-center justify-center mb-2 md:mb-4 transition-all duration-500 group-hover:scale-110 bg-brand-cream-alt">
                    <div className={cn(
                      "w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center",
                      plan.premium && "bg-brand-gold shadow-[0_2px_8px_rgba(212,175,55,0.2)]"
                    )} >
                      <span className={cn("text-base md:text-lg font-serif font-bold", plan.premium ? "text-white" : "text-brand-dark")}>
                        {plan.id}
                      </span>
                    </div>
                  </div>
                  
                  {/* Consistent title sizing */}
                  <CardTitle className="font-serif text-sm md:text-lg lg:text-xl tracking-wide leading-tight font-medium text-brand-dark">
                    {plan.title}
                  </CardTitle>
                  
                  {/* Accent line — 2 полоски и кружок (как внизу карточки) */}
                  <div className="flex items-center justify-center gap-2 mt-2 md:mt-3 flex-shrink-0">
                    <div className="w-8 h-px bg-brand-gold"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    <div className="w-8 h-px bg-brand-gold"></div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-4 md:px-5 pb-5 md:pb-6 relative z-10 flex flex-col">
                {/* Features list — прижат к низу у разделителя */}
                <div className="space-y-1.5 md:space-y-2 flex-shrink-0">
                  {plan.features.map((feature, index) => {
                    const isString = typeof feature === "string";
                    const text = isString ? feature : feature.text;
                    const accentWord = !isString && feature.accent ? feature.accent : null;
                    const isFullAccent = isString && "accentIndices" in plan && (plan.accentIndices as number[]).includes(index);
                    const renderContent = () => {
                      if (accentWord && text.includes(accentWord)) {
                        const parts = text.split(accentWord);
                        return (
                          <>
                            {parts[0]}
                            <span className="font-semibold">{accentWord}</span>
                            {parts[1]}
                          </>
                        );
                      }
                      return text;
                    };
                    return (
                      <div key={index} className="flex items-start gap-2 md:gap-3">
                        <div className={cn(
                            "flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center mt-0.5",
                            plan.premium ? "bg-brand-beige" : "bg-brand-cream-alt"
                          )}>
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-brand-gold" 
                                 strokeWidth={2.5} />
                        </div>
                        <p className={cn(
                          "leading-relaxed text-xs md:text-sm text-brand-dark",
                          isFullAccent ? "font-semibold" : "opacity-90"
                        )}>
                          {renderContent()}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Consistent decorative bottom element */}
                <div className={cn(
                    "mt-3 pt-3 md:mt-5 md:pt-4 border-t flex-shrink-0",
                    plan.premium ? "border-brand-beige" : "border-amber-800/25"
                  )}>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-px bg-brand-gold"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    <div className="w-8 h-px bg-brand-gold"></div>
                  </div>
                  <p className={cn(
                    "mt-3 md:mt-4 text-center font-serif text-xl md:text-2xl font-semibold tracking-wide",
                    plan.premium ? "text-brand-gold" : "text-brand-dark"
                  )}>
                    {plan.price} ₽/м²
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-10">
          <DecorativeLine variant="gradient" className="w-20 mb-3 md:mb-5" />
          <p className="text-sm md:text-base italic font-serif px-2 text-brand-dark opacity-80">
            Каждый проект уникален. Давайте обсудим ваши конкретные потребности и создадим индивидуальное решение.
          </p>
        </div>
      </div>
    </section>
  );
}
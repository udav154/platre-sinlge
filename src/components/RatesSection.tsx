import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";

const ratesPlans = [
  {
    id: 1,
    title: "Проект планировки + Электрика",
    features: [
      "3 варианта планировки",
      "Финальный выбор одного варианта",
      "Чертежи для электрики, освещения и водоснабжения"
    ]
  },
  {
    id: 2,
    title: "Проект планировки + Электрика + Визуализация + Выбор материалов",
    features: [
      "3 варианта планировки",
      "Финальный выбор одного варианта", 
      "Реалистичные визуализации",
      "Выбор материалов"
    ]
  },
  {
    id: 3,
    title: "Полное обслуживание",
    features: [
      "Варианты планировки",
      "Все необходимые чертежи (пол, потолок, теплый пол, электрика, водоснабжение, фасады)",
      "Реалистичные визуализации",
      "Выбор материалов"
    ],
    premium: true,
    badge: "Premium"
  }
];

export function RatesSection() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#faf8f3' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Тарифы
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#3d2914' }}>
            Выберите тариф, подходящий к вашим потребностям.
          </p>
        </div>

        {/* Rates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {ratesPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`group border transition-all duration-700 transform hover:-translate-y-2 rounded-2xl relative overflow-hidden ${
                plan.premium 
                  ? 'premium-shadow' 
                  : 'elegant-shadow hover:premium-shadow'
              }`}
              style={{ 
                backgroundColor: plan.premium 
                  ? '#faf9f6' 
                  : '#ffffff',
                borderColor: plan.premium ? 'rgba(212, 175, 55, 0.2)' : 'rgba(232, 224, 212, 0.3)',
                borderWidth: plan.premium ? '1px' : '1px'
              }}
            >
              {/* Subtle premium glow */}
              {plan.premium && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none" 
                     style={{
                       background: 'linear-gradient(135deg, rgba(250, 248, 243, 0.8) 0%, rgba(247, 243, 233, 0.9) 100%)',
                       boxShadow: 'inset 0 1px 0 rgba(212, 175, 55, 0.08)'
                     }}>
                </div>
              )}
              
              {/* Refined premium badge */}
              {plan.premium && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="px-3 py-1 rounded-md text-xs font-medium tracking-wide"
                       style={{ 
                         backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                         color: '#d4af37',
                         border: '1px solid rgba(212, 175, 55, 0.2)'
                       }}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <CardHeader className="pb-8 pt-12 px-10 relative z-10">
                <div className="text-center mb-6">
                  {/* Consistent decorative circle */}
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110" 
                       style={{ backgroundColor: '#f7f3e9' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ 
                           backgroundColor: plan.premium ? '#d4af37' : '#e8e0d4',
                           boxShadow: plan.premium ? '0 2px 8px rgba(212, 175, 55, 0.2)' : 'none'
                         }}>
                      <span className="text-2xl font-serif font-bold" 
                            style={{ color: plan.premium ? '#ffffff' : '#3d2914' }}>
                        {plan.id}
                      </span>
                    </div>
                  </div>
                  
                  {/* Consistent title sizing */}
                  <CardTitle className="font-serif text-2xl md:text-3xl tracking-wide leading-tight font-medium" 
                           style={{ color: '#3d2914' }}>
                    {plan.title}
                  </CardTitle>
                  
                  {/* Subtle premium accent line */}
                  {plan.premium && (
                    <div className="flex items-center justify-center gap-3 mt-6">
                      <div className="w-8 h-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
                      <div className="w-8 h-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-10 pb-12 relative z-10">
                {/* Features list with consistent spacing */}
                <div className="space-y-5">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5" 
                           style={{ 
                             backgroundColor: plan.premium ? 'rgba(212, 175, 55, 0.1)' : '#f7f3e9',
                             border: plan.premium ? '1px solid rgba(212, 175, 55, 0.3)' : 'none'
                           }}>
                        <Check className="w-5 h-5" 
                               style={{ color: '#d4af37' }} 
                               strokeWidth={2.5} />
                      </div>
                      <p className="leading-relaxed text-lg" 
                         style={{ color: '#3d2914', opacity: 0.9 }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Consistent decorative bottom element */}
                <div className="mt-10 pt-8 border-t" 
                     style={{ borderColor: plan.premium ? 'rgba(212, 175, 55, 0.2)' : '#e8e0d4' }}>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-px" style={{ backgroundColor: plan.premium ? 'rgba(212, 175, 55, 0.4)' : '#d4af37' }}></div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
                    <div className="w-8 h-px" style={{ backgroundColor: plan.premium ? 'rgba(212, 175, 55, 0.4)' : '#d4af37' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <p className="text-lg italic font-serif" style={{ color: '#3d2914', opacity: 0.8 }}>
            Каждый проект уникален. Давайте обсудим ваши конкретные потребности и создадим индивидуальное решение.
          </p>
        </div>
      </div>
    </section>
  );
}
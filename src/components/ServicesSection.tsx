import { Card, CardContent, CardHeader } from "./ui/card";
import { SectionHeader } from "./design/SectionHeader";
import { MessageCircle, PenTool, Eye, Palette } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Консультация",
    description: "Знакомство. Начальная консультация по дизайну, чтобы понять вашу идею, нужды и бюджет. Мы обсудим ваши предпочтения в стиле и создадим план для вашего проекта."
  },
  {
    icon: PenTool,
    title: "Проект дизайна",
    description: "Полное обслуживание по дизайну интерьеров от концепции до детальных чертежей. Включает планирование пространства, выбор материалов и 3D визуализации."
  },
  {
    icon: Eye,
    title: "Авторское наблюдение",
    description: "Наблюдение на месте во время реализации, чтобы убедиться, что каждая деталь соответствует видению дизайна и сохраняет высокие стандарты качества."
  },
  {
    icon: Palette,
    title: "Стилизация и декорация",
    description: "Финальные штрихи, включая выбор декора, размещение аксессуаров и консультацию, чтобы придать вашему пространству жизнь."
  }
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-12 px-6 luxury-gradient relative">
      <div className="absolute inset-0 luxury-texture" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Услуги"
          subtitle="Всесторонние услуги по дизайну интерьеров, адаптированные к вашим потребностям."
          className="mb-8 md:mb-10"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group text-center border-0 elegant-shadow hover:premium-shadow transition-all duration-500 transform hover:-translate-y-2 rounded-lg md:rounded-xl flex flex-col justify-between"
                style={{ backgroundColor: '#ffffff' }}
              >
                <CardHeader className="pb-2 pt-3 md:pb-3 md:pt-5">
                  <div className="relative mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-brand-cream-alt">
                      <IconComponent 
                        className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 text-brand-gold" 
                        strokeWidth={1.5} 
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-amber-200 w-10 h-10 md:w-12 md:h-12 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="font-serif text-sm md:text-base tracking-wide font-medium text-brand-dark">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0 pb-3 px-3 md:pb-5 md:px-4">
                  <p className="text-sm leading-relaxed text-brand-dark opacity-80">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
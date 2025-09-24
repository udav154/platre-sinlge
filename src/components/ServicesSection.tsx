import { Card, CardContent, CardHeader } from "./ui/card";
import { MessageCircle, PenTool, Eye, Palette } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description: "Initial design consultation to understand your vision, needs, and budget. We'll discuss your style preferences and create a roadmap for your project."
  },
  {
    icon: PenTool,
    title: "Design Project",
    description: "Complete interior design service from concept to detailed drawings. Includes space planning, material selection, and 3D visualizations."
  },
  {
    icon: Eye,
    title: "Author's Supervision",
    description: "On-site supervision during implementation to ensure every detail matches the design vision and maintains the highest quality standards."
  },
  {
    icon: Palette,
    title: "Styling & Decoration",
    description: "Final styling touches including art selection, accessory placement, and styling consultation to bring your space to life."
  }
];

export function ServicesSection() {
  return (
    <section className="py-32 px-6 luxury-gradient relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 luxury-texture"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Services
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#3d2914' }}>
            Comprehensive interior design services tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group text-center border-0 elegant-shadow hover:premium-shadow transition-all duration-500 transform hover:-translate-y-2 rounded-2xl"
                style={{ backgroundColor: '#ffffff' }}
              >
                <CardHeader className="pb-6 pt-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110" 
                         style={{ backgroundColor: '#f7f3e9' }}>
                      <IconComponent 
                        className="w-10 h-10 transition-colors duration-300" 
                        style={{ color: '#d4af37' }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-amber-200 w-20 h-20 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="font-serif text-2xl tracking-wide font-medium" style={{ color: '#3d2914' }}>
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0 pb-10 px-8">
                  <p className="leading-relaxed" style={{ color: '#3d2914', opacity: 0.8 }}>
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
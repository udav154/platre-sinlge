import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Olga transformed our home into a sanctuary of elegance and comfort. Her attention to detail and understanding of our lifestyle made the entire process seamless and enjoyable.",
    author: "Sarah Johnson",
    role: "Private Client"
  },
  {
    id: 2,
    quote: "Working with PLATRE was an extraordinary experience. The design perfectly balances sophistication with functionality, creating spaces that are both beautiful and livable.",
    author: "Michael Chen",
    role: "Family Residence"
  },
  {
    id: 3,
    quote: "Olga's vision and expertise exceeded our expectations. She listened to our needs and created a space that truly reflects our personality while maintaining timeless elegance.",
    author: "Elena Rodriguez",
    role: "Apartment Renovation"
  },
  {
    id: 4,
    quote: "The professionalism and creativity that PLATRE brought to our project was remarkable. Every room tells a story and feels uniquely ours.",
    author: "David Thompson",
    role: "Commercial Space"
  }
];

export function TestimonialsSection() {
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
            What our clients say about their experience working with PLATRE
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <Card className="mx-3 border-0 premium-shadow bg-white rounded-2xl">
                  <CardContent className="p-10">
                    <div className="mb-8">
                      <Quote className="w-12 h-12 mb-6" style={{ color: '#d4af37' }} />
                      <p className="leading-relaxed text-xl italic font-serif tracking-wide" style={{ color: '#3d2914' }}>
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="border-t pt-8" style={{ borderColor: '#e8e0d4' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-px bg-amber-600"></div>
                        <p className="font-medium text-lg" style={{ color: '#3d2914' }}>
                          {testimonial.author}
                        </p>
                      </div>
                      <p className="text-amber-700 text-sm uppercase tracking-[0.2em] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="border-2 text-amber-700 hover:bg-amber-50 w-12 h-12" 
            style={{ borderColor: '#d4af37' }}
          />
          <CarouselNext 
            className="border-2 text-amber-700 hover:bg-amber-50 w-12 h-12" 
            style={{ borderColor: '#d4af37' }}
          />
        </Carousel>
      </div>
    </section>
  );
}
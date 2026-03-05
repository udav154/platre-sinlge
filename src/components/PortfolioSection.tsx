"use client";

import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { X } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "Modern Minimalist Living",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzQ5Mjg1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzQ5Mjg1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTc0OTI4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc1NzQ5Mjg1MHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    description: "A serene living space that embraces the beauty of simplicity with clean lines, neutral tones, and carefully curated furnishings. This project focuses on creating a harmonious environment where every element serves both function and aesthetic purpose. The space features a minimalist color palette of warm whites, soft grays, and natural wood tones, complemented by strategic lighting that enhances the room's tranquil atmosphere. Custom-built storage solutions maintain the clean aesthetic while providing practical functionality. The carefully selected furniture pieces, including a luxurious Italian sofa and handcrafted coffee table, create intimate conversation areas perfect for both relaxation and entertaining."
  },
  {
    id: 2,
    title: "Luxury Bedroom Retreat",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU3NDg0NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU3NDg0NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc1NzQ4NDYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTc0ODQ2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    description: "An elegant master bedroom combining comfort and sophistication with rich textures and warm lighting. This sanctuary showcases the perfect balance between luxury and tranquility, featuring a custom upholstered headboard in premium velvet and carefully layered textiles in champagne and gold tones. The room incorporates ambient lighting through crystal chandeliers and bedside sconces, creating a romantic atmosphere. Premium materials include marble accents, silk drapery, and hand-selected artwork that reflects the owners' refined taste. The spacious layout includes a cozy reading nook with a vintage armchair and ottoman, while the ensuite bathroom seamlessly flows with matching design elements and spa-like amenities."
  },
  {
    id: 3,
    title: "Scandinavian Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NDkxNTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NDkxNTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBraXRjaGVufGVufDF8fHx8MTc1NzQ5MTU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NDkxNTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    description: "A functional yet beautiful kitchen space featuring natural materials and thoughtful storage solutions. This Scandinavian-inspired design emphasizes sustainability and craftsmanship, with custom cabinetry made from locally sourced oak and countertops crafted from pristine Carrara marble. The open-concept layout includes a large island that serves as both preparation space and casual dining area, topped with pendant lighting from renowned Danish designers. Integrated appliances maintain the clean aesthetic while state-of-the-art technology ensures culinary excellence. The backsplash features handmade ceramic tiles, and the carefully planned storage includes hidden pantries and specialized drawer systems for optimal organization and functionality."
  },
  {
    id: 4,
    title: "Contemporary Bathroom",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1688786219616-598ed96aa19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NTczOTE2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1688786219616-598ed96aa19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NTczOTE2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbXxlbnwxfHx8fDE3NTczOTE2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1584622781564-1d987468c943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NTczOTE2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    description: "A spa-like bathroom oasis with modern fixtures and calming earth tones that transforms daily routines into luxurious rituals. The space features a freestanding soaking tub positioned to capture natural light, surrounded by heated natural stone flooring in warm travertine. The double vanity incorporates floating walnut cabinetry with integrated LED lighting, while the walk-in shower boasts rainfall and body jets with premium fixtures in brushed gold finish. Natural elements include living plants, bamboo accents, and a feature wall of river rocks that adds texture and serenity. Smart home technology controls lighting, temperature, and music, creating a personalized wellness experience in this private retreat."
  },
  {
    id: 5,
    title: "Elegant Dining Space",
    category: "Dining Room",
    image: "https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc1NzQzMTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc1NzQzMTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NDMxNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NTc0MzE0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    description: "A sophisticated dining room perfect for both intimate meals and entertaining guests, where culinary experiences become memorable occasions. The centerpiece is a custom dining table crafted from reclaimed European oak, surrounded by upholstered chairs in rich velvet that invite lingering conversations. A statement chandelier creates dramatic focal lighting, while wall sconces provide ambient warmth. The room features a built-in wine display and serving station with temperature-controlled storage for the finest vintages. Rich wood paneling and carefully curated artwork create an atmosphere of refined elegance, while French doors open to a private garden terrace, extending the dining experience into nature during warmer months."
  },
  {
    id: 6,
    title: "Home Office Sanctuary",
    category: "Office",
    image: "https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG9tZSUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzQ5Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG9tZSUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzQ5Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NDkyODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3NDkyODUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    description: "A productive and inspiring workspace that balances professionalism with comfort, designed for the modern executive who values both efficiency and aesthetic beauty. The office features a custom executive desk crafted from solid walnut with integrated cable management and wireless charging stations. Floor-to-ceiling bookshelves house an impressive library while concealing advanced technology systems. The seating area includes a luxurious leather chair and ottoman for client meetings or moments of reflection. Natural light streams through automated blinds that adjust based on time of day, while task lighting ensures optimal working conditions. The space incorporates sound-dampening materials and plants to create a serene environment that enhances focus and creativity while maintaining the sophisticated atmosphere befitting a professional sanctuary."
  }
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#faf8f3' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Наши Проекты
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          {/* <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#3d2914' }}>
            A curated selection of recent projects showcasing timeless design and exceptional craftsmanship
          </p> */}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioProjects.map((project) => (
            <Card 
              key={project.id}
              className="group cursor-pointer overflow-hidden border-0 premium-shadow hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 rounded-2xl"
              style={{ backgroundColor: '#ffffff' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Luxury overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px bg-amber-600"></div>
                  <p className="text-amber-700 text-sm uppercase tracking-[0.2em] font-medium">
                    {project.category}
                  </p>
                </div>
                <h3 className="font-serif text-2xl tracking-wide transition-colors" style={{ color: '#3d2914' }}>
                  {project.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal - Desktop Version */}
        {!isMobile && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-[60vw] max-h-[90vh] overflow-y-auto p-0 border-0 rounded-3xl" style={{ backgroundColor: '#faf8f3' }}>
              {selectedProject && (
                <div className="relative">
                  {/* Accessibility elements - visually hidden */}
                  <DialogHeader className="sr-only">
                    <DialogTitle>{selectedProject.title}</DialogTitle>
                    <DialogDescription>
                      {selectedProject.category} project showcase with image gallery and details
                    </DialogDescription>
                  </DialogHeader>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 flex items-center justify-center hover:bg-white transition-all duration-300 elegant-shadow"
                    style={{ color: '#3d2914' }}
                  >
                    <X size={20} />
                  </button>

                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-amber-600"></div>
                        <p className="text-amber-700 text-sm uppercase tracking-[0.2em]">
                          {selectedProject.category}
                        </p>
                      </div>
                      <h2 className="font-serif text-4xl md:text-5xl tracking-wide" style={{ color: '#3d2914' }}>
                        {selectedProject.title}
                      </h2>
                    </div>

                    {/* Image Carousel */}
                    <div className="mb-10">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="rounded-2xl overflow-hidden premium-shadow max-h-[400px] h-full w-fit">
                                <ImageWithFallback
                                  src={image}
                                  alt={`${selectedProject.title} - Image ${index + 1}`}
                                  className="w-auto h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-6 w-14 h-14 border-amber-200 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300" style={{ color: '#3d2914' }} />
                        <CarouselNext className="right-6 w-14 h-14 border-amber-200 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300" style={{ color: '#3d2914' }} />
                      </Carousel>
                    </div>

                    {/* Project Details */}
                    <div className="max-w-4xl mx-auto">
                      <div className="w-16 h-px bg-amber-600 mb-6 mx-auto"></div>
                      <p className="text-lg leading-relaxed text-center" style={{ color: '#3d2914' }}>
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        )}

        {/* Project Detail Modal - Mobile Bottom Sheet (Vaul Drawer with swipe-to-dismiss) */}
        {isMobile && (
          <Drawer
            open={!!selectedProject}
            onOpenChange={(open) => !open && setSelectedProject(null)}
            direction="bottom"
            disablePreventScroll={false}
          >
            <DrawerContent
              className="max-h-[92vh] rounded-t-3xl border-0 p-0 [&>div:first-child]:mb-4 [&>div:first-child]:h-1 [&>div:first-child]:w-10 [&>div:first-child]:bg-gray-300 [&>div:first-child]:rounded-full"
              style={{ backgroundColor: '#faf8f3' }}
            >
              <DrawerTitle className="sr-only">
                {selectedProject?.title ?? 'Project details'}
              </DrawerTitle>
              <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 border border-amber-200 flex items-center justify-center"
                  style={{ color: '#3d2914' }}
                >
                  <X size={16} />
                </button>

                {selectedProject && (
                  <div className="overflow-y-auto flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-px bg-amber-600" />
                        <p className="text-amber-700 text-xs uppercase tracking-[0.2em]">
                          {selectedProject.category}
                        </p>
                      </div>
                      <h2 className="font-serif text-2xl tracking-wide pr-12" style={{ color: '#3d2914' }}>
                        {selectedProject.title}
                      </h2>
                    </div>

                    {/* Image Carousel */}
                    <div className="mb-8">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="aspect-[3/2] rounded-xl overflow-hidden elegant-shadow">
                                <ImageWithFallback
                                  src={image}
                                  alt={`${selectedProject.title} - Image ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-3 w-10 h-10 border-amber-200 bg-white/90" style={{ color: '#3d2914' }} />
                        <CarouselNext className="right-3 w-10 h-10 border-amber-200 bg-white/90" style={{ color: '#3d2914' }} />
                      </Carousel>
                    </div>

                    {/* Project Details */}
                    <div>
                      <div className="w-12 h-px bg-amber-600 mb-4" />
                      <p className="text-sm leading-relaxed" style={{ color: '#3d2914' }}>
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>
                )}
              </DrawerContent>
          </Drawer>
        )}
      </div>
    </section>
  );
}
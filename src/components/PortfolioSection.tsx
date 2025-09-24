"use client";

import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const portfolioProjects = [
  {
    id: 1,
    title: "Modern Minimalist Living",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzQ5Mjg1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A serene living space that embraces the beauty of simplicity with clean lines, neutral tones, and carefully curated furnishings."
  },
  {
    id: 2,
    title: "Luxury Bedroom Retreat",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU3NDg0NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "An elegant master bedroom combining comfort and sophistication with rich textures and warm lighting."
  },
  {
    id: 3,
    title: "Scandinavian Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NDkxNTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A functional yet beautiful kitchen space featuring natural materials and thoughtful storage solutions."
  },
  {
    id: 4,
    title: "Contemporary Bathroom",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1688786219616-598ed96aa19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NTczOTE2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A spa-like bathroom oasis with modern fixtures and calming earth tones."
  },
  {
    id: 5,
    title: "Elegant Dining Space",
    category: "Dining Room",
    image: "https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc1NzQzMTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A sophisticated dining room perfect for both intimate meals and entertaining guests."
  },
  {
    id: 6,
    title: "Home Office Sanctuary",
    category: "Office",
    image: "https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG9tZSUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzQ5Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A productive and inspiring workspace that balances professionalism with comfort."
  }
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);

  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#faf8f3' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Portfolio
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#3d2914' }}>
            A curated selection of recent projects showcasing timeless design and exceptional craftsmanship
          </p>
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

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div>
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-stone-800">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-stone-500 text-sm uppercase tracking-wide">
                      {selectedProject.category}
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
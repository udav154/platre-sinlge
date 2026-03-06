"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SectionHeader } from "./design/SectionHeader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Instagram, ExternalLink, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ошибка при отправке");
      }

      toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Не удалось отправить сообщение");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 md:py-12 px-4 sm:px-6 luxury-gradient relative overflow-x-hidden">
      <div className="absolute inset-0 luxury-texture" />
      <div className="max-w-6xl mx-auto relative z-10 w-full min-w-0">
        <SectionHeader
          title="Связаться с нами"
          subtitle="Готовы преобразовать ваше пространство? Давайте обсудим ваш проект и воплотим вашу идею."
          className="mb-8 md:mb-10"
        />
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 min-w-0">
          {/* Contact Form */}
          <Card className="border-0 premium-shadow rounded-lg md:rounded-xl min-w-0 overflow-hidden bg-white">
            <CardHeader className="pb-0 pt-4 md:pt-6 px-4 sm:px-5 md:px-6">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-6 h-px bg-brand-gold"></div>
                <CardTitle className="font-serif text-lg md:text-xl tracking-wide font-medium text-brand-dark">
                  Отправить сообщение
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-5 md:px-6 pb-5 md:pb-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm md:text-base font-medium mb-1.5 block text-brand-dark">
                    Имя
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1.5 border-2 border-brand-beige bg-brand-cream rounded-lg py-2.5 px-3 md:py-3 md:px-4 text-sm md:text-base transition-all duration-300"
                    placeholder="Ваше полное имя"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm md:text-base font-medium mb-1.5 block text-brand-dark">
                    Email адрес
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1.5 border-2 border-brand-beige bg-brand-cream rounded-lg py-2.5 px-3 md:py-3 md:px-4 text-sm md:text-base transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm md:text-base font-medium mb-1.5 block text-brand-dark">
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1.5 border-2 border-brand-beige bg-brand-cream rounded-lg py-2.5 px-3 md:py-3 md:px-4 text-sm md:text-base resize-none transition-all duration-300"
                    placeholder="Расскажите нам о вашем проекте..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 rounded-lg text-sm md:text-base font-medium tracking-wide transition-all duration-500 elegant-shadow hover:premium-shadow transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none bg-brand-dark text-brand-cream"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    "Отправить сообщение"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6 min-w-0">
            {/* Contact Details */}
            <Card className="border-0 elegant-shadow rounded-lg md:rounded-xl min-w-0 overflow-hidden bg-white">
              <CardContent className="p-4 md:p-5">
                <div className="flex items-center gap-2 mb-4 md:mb-5">
                  <div className="w-6 h-px bg-brand-gold"></div>
                  <h3 className="font-serif text-lg md:text-xl tracking-wide font-medium text-brand-dark">
                    Контактная информация
                  </h3>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-brand-cream-alt">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                    </div>
                    <span className="text-sm md:text-base break-words min-w-0 text-brand-dark">sokolovva.ole4ka@yandex.ru</span>
                  </div>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-brand-cream-alt">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                    </div>
                    <span className="text-sm md:text-base break-words min-w-0 text-brand-dark">+7 (920) 366-7478</span>
                  </div>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-brand-cream-alt">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                    </div>
                    <span className="text-sm md:text-base break-words min-w-0 text-brand-dark">Иваново, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 elegant-shadow rounded-lg md:rounded-xl min-w-0 overflow-hidden bg-white">
              <CardContent className="p-4 md:p-5">
                <div className="flex items-center gap-2 mb-4 md:mb-5">
                  <div className="w-6 h-px bg-brand-gold"></div>
                  <h3 className="font-serif text-lg md:text-xl tracking-wide font-medium text-brand-dark">
                    Следите за нашими работами
                  </h3>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <a 
                    href="https://instagram.com/platre.interiors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-w-0 group transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-brand-cream-alt">
                      <Instagram className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                    </div>
                    <span className="text-sm md:text-base break-words min-w-0 text-brand-dark">
                      @platre.interiors
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-1 inline-block flex-shrink-0 text-brand-gold" />
                    </span>
                  </a>
                  <a
                    href="https://pin.it/1gZHSAta9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-w-0 group transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-brand-cream-alt">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded border-2 border-brand-gold flex items-center justify-center">
                        <span className="text-xs font-bold text-brand-gold">P</span>
                      </div>
                    </div>
                    <span className="text-sm md:text-base break-words min-w-0 text-brand-dark">Pinterest</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-brand-gold" />
                  </a>
                  <a
                    href="https://t.me/platre_interiors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-w-0 group transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-brand-cream-alt">
                      {/* Simple Telegram icon using SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#d4af37" fillOpacity="0.15"/>
                        <path d="M8.37 12.86l3.65 2.71c.36.27.86.11.99-.34l2.58-8.22c.14-.46-.3-.87-.73-.73l-10.03 3.52c-.45.16-.47.78-.03.97l2.54 1.02 5.89-3.45c.15-.09.31.12.17.23l-4.77 4.04c-.27.22-.22.64.09.8z" fill="#d4af37"/>
                      </svg>
                    </div>
                    <span className="text-sm md:text-base break-words min-w-0 text-brand-dark">Telegram</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-brand-gold" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-0 elegant-shadow rounded-lg md:rounded-xl min-w-0 overflow-hidden bg-white">
              <CardContent className="p-4 md:p-5">
                <div className="flex items-center gap-2 mb-4 md:mb-5">
                  <div className="w-6 h-px bg-brand-gold"></div>
                  <h3 className="font-serif text-lg md:text-xl tracking-wide font-medium text-brand-dark">
                    Часы работы
                  </h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 py-1.5 min-w-0">
                    <span className="text-sm md:text-base text-brand-dark">Понедельник - Пятница</span>
                    <span className="text-sm md:text-base font-medium shrink-0 text-brand-gold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 py-1.5 min-w-0">
                    <span className="text-sm md:text-base text-brand-dark">Суббота</span>
                    <span className="text-sm md:text-base font-medium shrink-0 text-brand-gold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 py-1.5 min-w-0">
                    <span className="text-sm md:text-base text-brand-dark">Воскресенье</span>
                    <span className="text-sm md:text-base font-medium shrink-0 text-brand-gold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
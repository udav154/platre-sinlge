"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
    <section className="py-32 px-6 luxury-gradient relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 luxury-texture"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide mb-8" style={{ color: '#3d2914' }}>
            Связаться с нами
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#3d2914' }}>
            Готовы преобразовать ваше пространство? Давайте обсудим ваш проект и воплотим вашу идею.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <Card className="border-0 premium-shadow rounded-2xl" style={{ backgroundColor: '#ffffff' }}>
            <CardHeader className="pb-8 pt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber-600"></div>
                <CardTitle className="font-serif text-3xl tracking-wide font-medium" style={{ color: '#3d2914' }}>
                  Отправить сообщение
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium mb-3 block" style={{ color: '#3d2914' }}>
                    Имя
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 rounded-xl py-4 px-6 text-lg transition-all duration-300"
                    style={{ 
                      borderColor: '#e8e0d4',
                      backgroundColor: '#faf8f3'
                    }}
                    placeholder="Ваше полное имя"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg font-medium mb-3 block" style={{ color: '#3d2914' }}>
                    Email адрес
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 rounded-xl py-4 px-6 text-lg transition-all duration-300"
                    style={{ 
                      borderColor: '#e8e0d4',
                      backgroundColor: '#faf8f3'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-lg font-medium mb-3 block" style={{ color: '#3d2914' }}>
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-2 border-2 rounded-xl py-4 px-6 text-lg resize-none transition-all duration-300"
                    style={{ 
                      borderColor: '#e8e0d4',
                      backgroundColor: '#faf8f3'
                    }}
                    placeholder="Расскажите нам о вашем проекте..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-xl text-lg font-medium tracking-wide transition-all duration-500 elegant-shadow hover:premium-shadow transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  style={{ 
                    backgroundColor: '#3d2914', 
                    color: '#faf8f3'
                  }}
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
          <div className="space-y-10">
            {/* Contact Details */}
            <Card className="border-0 elegant-shadow rounded-2xl" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-amber-600"></div>
                  <h3 className="font-serif text-2xl tracking-wide font-medium" style={{ color: '#3d2914' }}>
                    Контактная информация
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f7f3e9' }}>
                      <Mail className="w-6 h-6" style={{ color: '#d4af37' }} />
                    </div>
                    <span className="text-lg" style={{ color: '#3d2914' }}>sokolovva.ole4ka@yandex.ru</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f7f3e9' }}>
                      <Phone className="w-6 h-6" style={{ color: '#d4af37' }} />
                    </div>
                    <span className="text-lg" style={{ color: '#3d2914' }}>+7 (920) 366-7478</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f7f3e9' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#d4af37' }} />
                    </div>
                    <span className="text-lg" style={{ color: '#3d2914' }}>Иваново, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 elegant-shadow rounded-2xl" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-amber-600"></div>
                  <h3 className="font-serif text-2xl tracking-wide font-medium" style={{ color: '#3d2914' }}>
                    Следите за нашими работами
                  </h3>
                </div>
                <div className="space-y-6">
                  <a 
                    href="https://instagram.com/platre.interiors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 group transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" 
                         style={{ backgroundColor: '#f7f3e9' }}>
                      <Instagram className="w-6 h-6" style={{ color: '#d4af37' }} />
                    </div>
                    <span className="text-lg" style={{ color: '#3d2914' }}>
                      @platre.interiors
                      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-1 inline-block" style={{ color: '#d4af37' }} />
                    </span>
                  </a>
                  <a
                    href="https://pin.it/1gZHSAta9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 group transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f7f3e9' }}>
                      <div className="w-6 h-6 rounded border-2 flex items-center justify-center" style={{ borderColor: '#d4af37' }}>
                        <span className="text-sm font-bold" style={{ color: '#d4af37' }}>P</span>
                      </div>
                    </div>
                    <span className="text-lg" style={{ color: '#3d2914' }}>Pinterest</span>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#d4af37' }} />
                  </a>
                  <a
                    href="https://t.me/platre_interiors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 group transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f7f3e9' }}>
                      {/* Simple Telegram icon using SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#d4af37" fillOpacity="0.15"/>
                        <path d="M8.37 12.86l3.65 2.71c.36.27.86.11.99-.34l2.58-8.22c.14-.46-.3-.87-.73-.73l-10.03 3.52c-.45.16-.47.78-.03.97l2.54 1.02 5.89-3.45c.15-.09.31.12.17.23l-4.77 4.04c-.27.22-.22.64.09.8z" fill="#d4af37"/>
                      </svg>
                    </div>
                    <span className="text-lg" style={{ color: '#3d2914' }}>Telegram</span>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#d4af37' }} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-0 elegant-shadow rounded-2xl" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-amber-600"></div>
                  <h3 className="font-serif text-2xl tracking-wide font-medium" style={{ color: '#3d2914' }}>
                    Часы работы
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-lg" style={{ color: '#3d2914' }}>Понедельник - Пятница</span>
                    <span className="text-lg font-medium" style={{ color: '#d4af37' }}>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-lg" style={{ color: '#3d2914' }}>Суббота</span>
                    <span className="text-lg font-medium" style={{ color: '#d4af37' }}>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-lg" style={{ color: '#3d2914' }}>Воскресенье</span>
                    <span className="text-lg font-medium" style={{ color: '#d4af37' }}>Closed</span>
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
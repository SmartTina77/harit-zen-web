import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, Mail, MapPin, Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        {/* CTA Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-forest to-sage-dark rounded-3xl p-8 md:p-12 mb-16 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lilac rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-sage-light" />
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-cream mb-4">
              ¿Listo para transformar tu bienestar?
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              Agenda tu primera consulta o inscríbete en nuestro próximo Programa Detox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cream text-forest hover:bg-cream/90 font-semibold">
                Reservar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
                Próximo Detox
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-sage-light/60 rounded-full mb-4">
              Contacto
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Estamos aquí para ayudarte
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ¿Tienes alguna pregunta? No dudes en contactarnos. Te responderemos lo antes posible.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/34600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Respuesta rápida</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-sage-light/60 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@haritayurveda.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-lilac-light/60 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">Madrid, España (Consultas online disponibles)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

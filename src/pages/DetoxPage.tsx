import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Check, 
  Calendar, 
  Users, 
  Video, 
  BookOpen, 
  MessageCircle, 
  Package,
  Clock,
  Star,
  ArrowRight,
  Leaf,
  Heart,
  Zap,
  Moon,
  Shield,
  Sparkles
} from "lucide-react";

const DetoxPage = () => {
  const benefits = [
    { icon: Zap, text: "Más energía y vitalidad" },
    { icon: Moon, text: "Mejor calidad de sueño" },
    { icon: Heart, text: "Peso ideal natural" },
    { icon: Sparkles, text: "Mayor claridad mental" },
    { icon: Shield, text: "Sistema inmune fortalecido" },
    { icon: Leaf, text: "Equilibrio del azúcar en sangre" },
  ];

  const includes = [
    { icon: Video, title: "5 Workshops en vivo", desc: "Sesiones interactivas por Zoom con ejercicios, yoga y pranayamas" },
    { icon: BookOpen, title: "Guía completa PDF", desc: "Paso a paso con recetas, instrucciones y programa detallado" },
    { icon: MessageCircle, title: "Grupo de WhatsApp", desc: "Apoyo continuo y comunidad para resolver dudas al instante" },
    { icon: Package, title: "Pack de productos", desc: "Preparados ayurvédicos a base de plantas incluidos*" },
    { icon: Users, title: "Acompañamiento experto", desc: "Con Pilar Franco de Sarabia y Bhavani Cordero" },
    { icon: Calendar, title: "Grabaciones disponibles", desc: "Acceso a las grabaciones si no puedes asistir en directo" },
  ];

  const testimonials = [
    {
      name: "Nanchy Benitez",
      text: "Es el tercer Detox que hago con ustedes y cada vez mejor, no me cuesta nada hacerlo y creo que el resultado es mejor que otras veces.",
      highlight: "Tercer detox con resultados increíbles"
    },
    {
      name: "Miriam López",
      role: "Profesora MT",
      text: "Una muy bonita y transformadora experiencia. Las dos semanas del programa han sido fabulosas, pero lo mejor son los buenos hábitos y la inspiración que se han quedado ya conmigo para siempre.",
      highlight: "Lo recomiendo 200%"
    },
    {
      name: "Adelaida",
      role: "Economista",
      text: "Tengo el vientre más plano y me siento bastante más ligera. He perdido casi cuatro kilos. Repetiré el próximo otoño.",
      highlight: "4 kilos menos, más ligera"
    },
    {
      name: "Macarena Fernandez",
      text: "Estoy muy contenta porque no pensé que pudiera llevarlo tan bien. Anímicamente me encontraba bien, tanto de carácter como de aspecto, la piel, el pelo...",
      highlight: "Mejora visible en piel y cabello"
    },
  ];

  const workshops = [
    "Lunes 13 de abril – 20:00h",
    "Jueves 16 de abril – 20:00h",
    "Lunes 20 de abril – 20:00h",
    "Jueves 23 de abril – 20:00h",
    "Lunes 27 de abril – 20:00h",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Urgency Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber text-white py-3 px-4 text-center shadow-elevated">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="font-medium text-sm sm:text-base">
            <Clock className="inline w-4 h-4 mr-1" />
            Plazas limitadas · Inscripciones hasta el 22 de octubre
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white text-amber border-white hover:bg-white/90 hover:text-amber font-semibold"
          >
            Reservar ahora
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-cream via-background to-sage-light/20">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lilac/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sage-light/30 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Urgency Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-white bg-amber rounded-full animate-fade-up">
              <Sparkles className="w-4 h-4" />
              Charla gratuita: 8 de abril a las 20h
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Programa Detox{" "}
              <span className="text-primary italic block sm:inline">Harit Ayurveda</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              14 días para limpiar tu organismo y renovar tu energía
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Una experiencia suave de desintoxicación a base de plantas ayurvédicas y alimentación consciente. Sin pasar hambre, desde casa, compatible con tu trabajo.
            </p>

            {/* Dates */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-2xl border border-border mb-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-serif text-lg font-medium">Del 14 al 27 de abril de 2026</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" className="group text-lg px-8">
                Reservar mi plaza – 275€
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-lg">
                Ver webinar gratuito
              </Button>
            </div>

            {/* Bonus */}
            <p className="mt-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.35s" }}>
              🎁 Las 10 primeras inscripciones reciben gratis el libro "Equilibra tu peso, equilibra tu vida"
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Qué conseguirás con este Detox
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Después de la limpieza, te sentirás más liger@, clar@, creativ@ y eficiente
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sage-light/50 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sage-light/30 to-lilac/20 rounded-3xl p-8 md:p-12 border border-primary/10">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6 text-center">
              ¿Qué diferencia hay con otros detox?
            </h2>
            
            <div className="space-y-4 text-lg text-foreground">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span><strong>NO pasarás hambre</strong> — alimentación nutritiva y saciante</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span><strong>NO provoca caídas de azúcar</strong> ni antojos de comida</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span><strong>Acompañamiento experto</strong> con Pilar y Bhavani durante todo el proceso</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span><strong>Comunidad de apoyo</strong> para compartir experiencias y resolver dudas</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span><strong>Compatible con tu trabajo</strong> — se hace cómodamente desde casa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Qué incluye el programa
            </h2>
            <p className="text-muted-foreground">
              14 días de transformación con todo lo que necesitas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 bg-lilac/30 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-lavender" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            *Gastos de envío no incluidos
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Calendario de workshops
            </h2>
            <p className="text-muted-foreground">
              5 sesiones en vivo por Zoom · Si no puedes asistir, recibirás la grabación
            </p>
          </div>
          
          <div className="space-y-3">
            {workshops.map((workshop, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center font-serif font-medium text-amber">
                  {index + 1}
                </div>
                <span className="text-foreground font-medium">{workshop}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sage-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber text-amber" />
              ))}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Lo que dicen quienes ya lo han hecho
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>
                <p className="font-medium text-primary mb-3">"{testimonial.highlight}"</p>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lilac/30 rounded-full flex items-center justify-center">
                    <span className="font-serif font-medium text-lavender">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    {testimonial.role && <p className="text-sm text-muted-foreground">{testimonial.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-lilac/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
            Reserva tu plaza ahora
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-10 border-2 border-amber shadow-elevated mb-8">
            <div className="inline-block px-4 py-1 bg-amber text-white text-sm font-semibold rounded-full mb-6">
              Programa completo
            </div>
            
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="font-serif text-5xl md:text-6xl font-medium text-foreground">275€</span>
            </div>
            
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>5 workshops en vivo por Zoom</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Guía completa con recetas (PDF)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Pack de productos ayurvédicos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Grupo de apoyo en WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>10% dto. en compras durante 3 meses</span>
              </li>
            </ul>
            
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-10 group">
              Reservar mi plaza
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="mt-4 text-sm text-muted-foreground">
              Inscripciones abiertas hasta el 22 de octubre de 2025
            </p>
          </div>
          
          <p className="text-muted-foreground">
            ¿Ya has hecho un Detox Harit Ayurveda antes?{" "}
            <span className="text-primary font-medium">Tienes 20% de descuento en productos</span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-12 text-center">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                ¿Puedo hacerlo si trabajo a tiempo completo?
              </h3>
              <p className="text-muted-foreground">
                Sí, el programa está diseñado para compatibilizarse con tu trabajo. Se realiza desde casa y los workshops son por la tarde/noche.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                ¿Voy a pasar hambre?
              </h3>
              <p className="text-muted-foreground">
                No. A diferencia de otros detox, con el Detox Harit Ayurveda NO pasarás hambre ni tendrás antojos. La alimentación es nutritiva y saciante.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                ¿Qué pasa si no puedo asistir a un workshop?
              </h3>
              <p className="text-muted-foreground">
                No hay problema. Recibirás el enlace a la grabación al día siguiente para que puedas verlo cuando te venga bien.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                ¿Vivo fuera de España, puedo participar?
              </h3>
              <p className="text-muted-foreground">
                Sí, el programa es 100% online. Para el envío de productos fuera de España o Portugal, contacta con nosotros para coordinar los detalles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Únete al próximo Detox Harit Ayurveda del 14 al 27 de abril de 2026
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary font-semibold text-lg"
          >
            Reservar ahora – 275€
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Extra padding for sticky banner */}
      <div className="h-16" />
      
      <Footer />
    </main>
  );
};

export default DetoxPage;

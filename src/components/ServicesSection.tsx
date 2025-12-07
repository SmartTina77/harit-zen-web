import { Users, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Users,
    title: "Consultas Ayurvédicas",
    description: "Aprende a equilibrar tu cuerpo y mente con consultas personalizadas. Disponible online o presencial.",
    features: ["Análisis de tu constitución", "Plan personalizado", "Seguimiento continuo"],
    cta: "Reservar Consulta",
    color: "primary" as const,
  },
  {
    icon: Sparkles,
    title: "Programas y Talleres",
    description: "Transforma tu vida con nuestros programas especializados diseñados para resultados duraderos.",
    features: ["Programa Detox", "Gestión del Estrés", "Rasayana (rejuvenecimiento)"],
    cta: "Ver Programas",
    color: "lilac" as const,
  },
  {
    icon: ShoppingBag,
    title: "Tienda Ayurvédica",
    description: "Productos y complementos seleccionados para apoyar tu práctica ayurvédica diaria.",
    features: ["Suplementos naturales", "Aceites y hierbas", "Productos personalizados"],
    cta: "Explorar Tienda",
    color: "gold" as const,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-sage-light/50",
    icon: "bg-primary text-primary-foreground",
    bullet: "bg-primary",
  },
  lilac: {
    bg: "bg-lilac-light/50",
    icon: "bg-lilac text-foreground",
    bullet: "bg-lilac",
  },
  gold: {
    bg: "bg-gold/10",
    icon: "bg-gold text-foreground",
    bullet: "bg-gold",
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-sage-light/60 rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Tu camino hacia el equilibrio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a recuperar tu bienestar natural
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft card-hover overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${colorClasses[service.color].bg} rounded-bl-full opacity-60 transition-opacity group-hover:opacity-100`} />
              
              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 rounded-xl ${colorClasses[service.color].icon} flex items-center justify-center mb-6 shadow-soft`}>
                <service.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="relative z-10 font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="relative z-10 text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative z-10 space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className={`w-1.5 h-1.5 ${colorClasses[service.color].bullet} rounded-full`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="ghost"
                className="relative z-10 p-0 h-auto text-primary font-medium hover:bg-transparent group/btn"
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium">Consejo:</span> Haz el test de tu dosha antes de elegir productos en la tienda para una recomendación personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

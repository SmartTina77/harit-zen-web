import { Button } from "./ui/button";
import heroImage from "@/assets/hero-ayurveda.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ayurveda elementos naturales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lilac/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sage-light/30 rounded-full blur-3xl animate-pulse-soft" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
            + de 20 años de experiencia
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Ayurveda para tu{" "}
            <span className="text-primary italic">equilibrio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Descubre la sabiduría milenaria del Ayurveda combinada con ciencia moderna para recuperar tu bienestar natural.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="group">
              <span>Haz el Test de tu Dosha</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="heroOutline" size="lg">
              Reserva tu Consulta Online
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Consultas Online y Presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-lilac rounded-full" />
                <span>Terapeutas Certificadas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span>Enfoque Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs mb-2 tracking-widest uppercase">Descubre más</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

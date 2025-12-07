import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Empresaria",
    content: "Después de años luchando con problemas digestivos, el programa de Harit Ayurveda cambió mi vida por completo. Ahora entiendo mi cuerpo y cómo cuidarlo.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Profesor",
    content: "El programa de gestión del estrés me dio herramientas que uso cada día. Mi calidad de sueño mejoró dramáticamente y mi energía es constante.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Arquitecta",
    content: "Las consultas con Pilar y Bhavani son transformadoras. Su enfoque personalizado y su profundo conocimiento hacen toda la diferencia.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-sage-light/60 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card overflow-hidden">
            {/* Decorative Quote */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-sage-light/60" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-light to-lilac-light flex items-center justify-center">
                  <span className="font-serif font-semibold text-primary">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-card shadow-soft hover:shadow-card transition-all text-muted-foreground hover:text-primary"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-6" : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-card shadow-soft hover:shadow-card transition-all text-muted-foreground hover:text-primary"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

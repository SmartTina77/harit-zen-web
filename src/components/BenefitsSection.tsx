import { Check, Brain, Heart, Shield, Sunrise, Leaf, Zap } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Reduce el estrés y la ansiedad",
    description: "Técnicas milenarias para calmar la mente y encontrar paz interior.",
  },
  {
    icon: Heart,
    title: "Mejora tu digestión",
    description: "Optimiza tu fuego digestivo (Agni) para una mejor absorción de nutrientes.",
  },
  {
    icon: Shield,
    title: "Fortalece el sistema inmune",
    description: "Refuerza tus defensas naturales con hierbas y rutinas ayurvédicas.",
  },
  {
    icon: Sunrise,
    title: "Aumenta tu energía vital",
    description: "Recupera el vigor y la vitalidad que tu cuerpo necesita.",
  },
  {
    icon: Leaf,
    title: "Equilibrio hormonal",
    description: "Armoniza tus sistemas internos de forma natural y sostenible.",
  },
  {
    icon: Zap,
    title: "Mejora la calidad del sueño",
    description: "Descansa profundamente y despierta renovado cada día.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lilac/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-primary bg-sage-light/60 rounded-full mb-4">
            <Check size={16} />
            Beneficios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Lo que el Ayurveda puede hacer por ti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beneficios comprobados que transforman tu vida día a día
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-sage-light/60 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <benefit.icon size={22} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8">
          {["100% Natural", "Personalizado", "Sin efectos secundarios", "Resultados duraderos"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-foreground">
              <Check className="w-5 h-5 text-primary" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

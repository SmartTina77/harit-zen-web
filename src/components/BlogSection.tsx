import { ArrowRight, BookOpen, FileText, Utensils } from "lucide-react";
import { Button } from "./ui/button";

const resources = [
  {
    icon: BookOpen,
    title: "Artículos",
    description: "Aprende sobre los principios del Ayurveda y cómo aplicarlos en tu día a día.",
  },
  {
    icon: FileText,
    title: "Guías Prácticas",
    description: "Descarga guías gratuitas sobre rutinas, alimentación y autocuidado.",
  },
  {
    icon: Utensils,
    title: "Recetas Ayurvédicas",
    description: "Deliciosas recetas adaptadas a cada constitución para nutrir tu cuerpo.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-sage-light/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-background rounded-full mb-4">
              Blog & Recursos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Conocimiento para tu bienestar
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Explora nuestro blog con artículos, guías y recetas que te ayudarán a incorporar el Ayurveda en tu vida cotidiana.
            </p>
            <Button variant="hero" size="lg" className="group">
              <span>Ir al Blog</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right - Resource Cards */}
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="group flex items-center gap-6 p-6 bg-card rounded-2xl shadow-soft card-hover cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-sage-light/60 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <resource.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <ArrowRight className="shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

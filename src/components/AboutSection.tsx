import { Leaf, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-primary bg-sage-light/60 rounded-full mb-4">
            <Leaf size={16} />
            Quiénes Somos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Tradición y ciencia al servicio de tu bienestar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Harit Ayurveda combinamos más de 20 años de experiencia con la sabiduría milenaria del Ayurveda y los avances de la ciencia moderna para ayudarte a alcanzar un equilibrio integral de cuerpo, mente y espíritu.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pilar */}
          <div className="group bg-background rounded-2xl p-8 shadow-soft card-hover">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-sage-light to-lilac-light flex items-center justify-center">
                <span className="font-serif text-2xl font-semibold text-primary">PF</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Pilar Franco de Sarabia
                </h3>
                <p className="text-sm text-primary font-medium mb-3">Fundadora & Terapeuta Ayurvédica</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Con más de dos décadas dedicadas al Ayurveda, Pilar ha formado a cientos de personas en el arte de la salud integral. Su enfoque combina rigor científico con la profunda sabiduría de los textos védicos.
                </p>
              </div>
            </div>
          </div>

          {/* Bhavani */}
          <div className="group bg-background rounded-2xl p-8 shadow-soft card-hover">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-lilac-light to-sage-light flex items-center justify-center">
                <span className="font-serif text-2xl font-semibold text-secondary">BC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Bhavani Cordero
                </h3>
                <p className="text-sm text-primary font-medium mb-3">Co-fundadora & Experta en Ayurveda</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bhavani aporta su profundo conocimiento de las terapias ayurvédicas tradicionales y la medicina preventiva. Su pasión es guiar a cada persona hacia su equilibrio único.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-sage-light/40 rounded-2xl">
            <Heart className="text-primary" size={24} />
            <p className="text-foreground font-medium">
              Nuestra misión: <span className="text-muted-foreground font-normal">Devolverte el equilibrio natural que tu cuerpo necesita</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

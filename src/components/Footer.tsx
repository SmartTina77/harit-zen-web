import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-sage-light" />
              <span className="font-serif text-2xl font-semibold">
                Harit Ayurveda
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              Más de 20 años combinando la sabiduría ancestral del Ayurveda con la ciencia moderna para tu bienestar integral.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sage-light">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-cream/70 hover:text-cream transition-colors">Quiénes Somos</a></li>
              <li><a href="#services" className="text-cream/70 hover:text-cream transition-colors">Servicios</a></li>
              <li><a href="#blog" className="text-cream/70 hover:text-cream transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-cream/70 hover:text-cream transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sage-light">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/50">
            © {currentYear} Harit Ayurveda. Todos los derechos reservados.
          </p>
          <p className="text-sm text-cream/50">
            Hecho con 🌿 para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

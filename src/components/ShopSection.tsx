import { Star, ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Ashwagandha Premium",
    description: "Adaptógeno natural para el estrés y la vitalidad",
    price: 29.90,
    originalPrice: 37.50,
    discount: 20,
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: "Senior Rasayana MA5",
    description: "Fórmula rejuvenecedora para vitalidad y longevidad",
    price: 45.00,
    originalPrice: 56.25,
    discount: 20,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: "AyurImmune MA1000",
    description: "Fortalece el sistema inmunológico naturalmente",
    price: 35.90,
    originalPrice: 44.90,
    discount: 20,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "Chyavanprash Original",
    description: "Antioxidante tradicional con más de 40 hierbas",
    price: 28.00,
    originalPrice: 35.00,
    discount: 20,
    rating: 4.7,
    reviews: 203,
  },
];

const ShopSection = () => {
  return (
    <section id="tienda" className="py-20 md:py-28 bg-forest">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-medium">
            Tienda Online
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-6">
            Productos Seleccionados
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-cream/80 font-sans max-w-2xl mx-auto text-lg">
            Suplementos ayurvédicos de máxima calidad para nutrir tu cuerpo y mente.
          </p>
          
          {/* Discount Badge */}
          <div className="inline-flex items-center gap-2 mt-8 bg-forest-light/20 border border-gold/30 rounded-full px-6 py-3">
            <span className="text-gold font-semibold">%</span>
            <span className="text-cream font-sans">20% de Descuento en productos seleccionados</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-cream rounded-2xl overflow-hidden shadow-card card-hover group"
            >
              {/* Product Image Area */}
              <div className="relative bg-sage-light/50 p-8 flex items-center justify-center min-h-[180px]">
                {/* Discount Badge */}
                <span className="absolute top-4 right-4 bg-gold text-forest text-xs font-bold px-3 py-1 rounded-full">
                  -{product.discount}%
                </span>
                
                {/* Product Icon */}
                <div className="w-20 h-20 bg-sage/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-10 h-10 text-forest" />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-forest font-semibold text-sm">{product.rating}</span>
                  <span className="text-muted-foreground text-sm">({product.reviews})</span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg text-forest font-semibold mb-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-forest font-serif text-2xl font-bold">
                    {product.price.toFixed(2)}€
                  </span>
                  <span className="text-muted-foreground text-sm line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-sage hover:bg-sage-dark text-cream font-sans rounded-lg"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Añadir al carrito
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-cream/30 text-cream hover:bg-cream/10 font-sans rounded-full px-8"
          >
            Ver Toda la Tienda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

export function TestimoniosSection() {
  const testimonios = [
    {
      name: 'María González',
      comment: 'Las pastas son increíbles! Realmente se nota que están hechas a mano. Los ravioles son mis favoritos.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      comment: 'Excelente calidad en todos los productos. Los quesos son premium y las viandas me salvan la semana.',
      rating: 5,
    },
    {
      name: 'Laura Fernández',
      comment: 'Sabor casero auténtico. Es como si mi nonna estuviera cocinando. Súper recomendable!',
      rating: 5,
    },
    {
      name: 'Roberto Sánchez',
      comment: 'La mejor lasagna que probé fuera de casa. Y los sorrentinos son espectaculares!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonio.comment}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">
                        {testimonio.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-foreground">{testimonio.name}</p>
                      <p className="text-sm text-muted-foreground">Cliente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

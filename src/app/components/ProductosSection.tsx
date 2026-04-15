import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { UtensilsCrossed, Milk, Ham, ChefHat, Utensils } from 'lucide-react';

export function ProductosSection() {
  const productos = [
    {
      title: 'Pastas Frescas',
      description: 'Ravioles, sorrentinos, ñoquis, cintas, fetuccini y más. Elaboradas diariamente.',
      image: 'https://images.unsplash.com/photo-1570054054068-0ad5c3f5136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: UtensilsCrossed,
    },
    {
      title: 'Quesos Artesanales',
      description: 'Selección de quesos artesanales y gourmet. Variedades nacionales e importadas.',
      image: 'https://images.unsplash.com/photo-1763478156969-4d7c0ab35590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: Milk,
    },
    {
      title: 'Fiambres Premium',
      description: 'Jamón crudo, salame, mortadela y bondiola. Los mejores fiambres para tus picadas.',
      image: 'https://images.unsplash.com/photo-1775343962994-0e3d7c373cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: Ham,
    },
    {
      title: 'Viandas Caseras',
      description: 'Comidas listas para llevar, preparadas con recetas caseras y opciones saludables.',
      image: 'https://images.unsplash.com/photo-1627362713208-8f39c21f973e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: ChefHat,
    },
    {
      title: 'Servicio de Catering',
      description: 'Tablas gourmet, pernil y platos personalizados para tus eventos y reuniones.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: Utensils,
    },
  ];

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Selección artesanal elaborada con los mejores ingredientes para tu mesa.
          </p>
        </motion.div>

        {/* Contenedor Flex para centrar perfectamente los 5 elementos */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {productos.map((producto, index) => {
            const Icon = producto.icon;
            return (
              <motion.div
                key={producto.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Definimos un ancho máximo para que las tarjetas sean más pequeñas
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[320px]"
              >
                <Card className="overflow-hidden h-full border-border hover:shadow-lg transition-all duration-300 group">
                  {/* Reduje la altura de la imagen de h-60 a h-44 */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={producto.image}
                      alt={producto.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    {/* Título más pequeño: text-xl */}
                    <CardTitle className="text-xl font-semibold">{producto.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0">
                    {/* Texto más pequeño: text-sm */}
                    <CardDescription className="text-muted-foreground text-sm leading-snug">
                      {producto.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
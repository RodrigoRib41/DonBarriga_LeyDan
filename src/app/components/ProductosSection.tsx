import { motion } from 'motion/react';
import { ChefHat, Ham, Milk, Utensils, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ProductosSection() {
  const productos = [
    {
      title: 'Pastas Frescas',
      description: 'Ravioles, sorrentinos, noquis, cintas, fetuccini y mas. Elaboradas diariamente.',
      image: 'https://images.unsplash.com/photo-1570054054068-0ad5c3f5136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: UtensilsCrossed,
    },
    {
      title: 'Quesos Artesanales',
      description: 'Seleccion de quesos artesanales y gourmet. Variedades nacionales e importadas.',
      image: 'https://images.unsplash.com/photo-1763478156969-4d7c0ab35590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      icon: Milk,
    },
    {
      title: 'Fiambres Premium',
      description: 'Jamon crudo, salame, mortadela y bondiola. Los mejores fiambres para tus picadas.',
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
    <section id="productos" className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros Productos
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Seleccion artesanal elaborada con los mejores ingredientes para tu mesa.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto, index) => {
            const Icon = producto.icon;

            return (
              <motion.div
                key={producto.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <Card className="group h-full overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-52 overflow-hidden sm:h-48">
                    <img
                      src={producto.image}
                      alt={producto.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <CardHeader className="p-5 pb-2">
                    <CardTitle className="text-xl font-semibold">{producto.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 p-5 pt-0">
                    <CardDescription className="text-sm leading-6 text-muted-foreground">
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

import { motion } from 'motion/react';
import { ChefHat, Ham, Milk, Utensils, UtensilsCrossed, Wine } from 'lucide-react';
import foto1 from '../data/Foto1.png';
import foto2 from '../data/Foto2.png';
import foto3 from '../data/Foto3.png';
import foto5 from '../data/Foto5.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const freshPastaImage =
  'https://images.unsplash.com/photo-1771360873707-f435ef9732ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=60&w=3000';
const drinksAndSnacksImage =
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&fm=jpg&q=80&w=1600';

export function ProductosSection() {
  const productos = [
    {
      title: 'Pastas Frescas',
      description: 'Ravioles, sorrentinos, noquis, cintas, fetuccini y mas. Elaboradas diariamente.',
      image: freshPastaImage,
      icon: UtensilsCrossed,
    },
    {
      title: 'Quesos Artesanales',
      description: 'Seleccion de quesos artesanales y gourmet. Variedades nacionales e importadas.',
      image: foto3,
      icon: Milk,
    },
    {
      title: 'Fiambres Premium',
      description: 'Jamon crudo, salame, mortadela y bondiola. Los mejores fiambres para tus picadas.',
      image: foto2,
      icon: Ham,
    },
    {
      title: 'Viandas Caseras',
      description: 'Comidas listas para llevar, preparadas con recetas caseras y opciones saludables.',
      image: foto1,
      icon: ChefHat,
    },
    {
      title: 'Servicio de Catering',
      description: 'Tablas gourmet, pernil y platos personalizados para tus eventos y reuniones.',
      image: foto5,
      icon: Utensils,
    },
    {
      title: 'Bebidas y Snacks',
      description: 'Vinos, bebidas frias, snacks y opciones para armar una picada rica y practica.',
      image: drinksAndSnacksImage,
      icon: Wine,
    },
  ];

  return (
    <section id="productos" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,43,168,0.08),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(220,214,251,0.18))]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Especialidades</p>
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
                <Card className="group h-full overflow-hidden border-primary/10 bg-white/75 shadow-[0_18px_50px_rgba(47,43,168,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(47,43,168,0.18)]">
                  <div className="relative h-52 overflow-hidden sm:h-48">
                    <img
                      src={producto.image}
                      alt={producto.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#4a45c8] text-primary-foreground shadow-md">
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

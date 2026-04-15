import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { UtensilsCrossed, Milk, Ham, ChefHat } from 'lucide-react';

export function ProductosSection() {
  const productos = [
    {
      title: 'Pastas Frescas',
      description: 'Ravioles, sorrentinos, ñoquis, cintas, fetuccini y más. Elaboradas diariamente con ingredientes de primera calidad.',
      image: 'https://images.unsplash.com/photo-1570054054068-0ad5c3f5136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGhvbWVtYWRlJTIwcGFzdGElMjBpdGFsaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzYyNjI3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: UtensilsCrossed,
    },
    {
      title: 'Quesos Artesanales',
      description: 'Selección de quesos artesanales y gourmet. Provolone, parmesano, mozzarella de búfala y variedades especiales.',
      image: 'https://images.unsplash.com/photo-1763478156969-4d7c0ab35590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hlZXNlJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzYyNjI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Milk,
    },
    {
      title: 'Fiambres Premium',
      description: 'Jamón crudo, salame, mortadela, bondiola y más. Los mejores fiambres para tus picadas y sándwiches.',
      image: 'https://images.unsplash.com/photo-1775343962994-0e3d7c373cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hhcmN1dGVyaWUlMjBtZWF0c3xlbnwxfHx8fDE3NzYyNjI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Ham,
    },
    {
      title: 'Viandas Caseras',
      description: 'Comidas listas para llevar, preparadas con recetas caseras. Menú rotativo semanal con opciones saludables.',
      image: 'https://images.unsplash.com/photo-1627362713208-8f39c21f973e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMG1lYWwlMjB2aWFuZGF8ZW58MXx8fHwxNzc2MjYyNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: ChefHat,
    },
  ];

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Nuestros Productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubrí nuestra selección de productos artesanales, elaborados con dedicación y los mejores ingredientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((producto, index) => {
            const Icon = producto.icon;
            return (
              <motion.div
                key={producto.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={producto.image}
                      alt={producto.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{producto.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
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

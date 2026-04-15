import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function DestacadosSection() {
  const destacados = [
    {
      name: 'Ravioles de Ricota y Espinaca',
      description: 'Nuestra especialidad más vendida',
      image: 'https://images.unsplash.com/photo-1748797295296-4f52f39209fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwZnJlc2glMjBwYXN0YXxlbnwxfHx8fDE3NzYyNjI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Más vendido',
    },
    {
      name: 'Sorrentinos de Jamón y Queso',
      description: 'Rellenos generosos y sabor inigualable',
      image: 'https://images.unsplash.com/photo-1570054054068-0ad5c3f5136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwa2l0Y2hlbiUyMGNvb2tpbmclMjBwYXN0YXxlbnwxfHx8fDE3NzYyNjI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Favorito',
    },
    {
      name: 'Lasagna Casera',
      description: 'Lista para hornear y disfrutar',
      image: 'https://images.unsplash.com/photo-1573070640082-32bf80e3efe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNhZ25hJTIwaG9tZW1hZGUlMjBpdGFsaWFufGVufDF8fHx8MTc3NjI2Mjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Recomendado',
    },
    {
      name: 'Picada Gourmet',
      description: 'Selección de fiambres y quesos premium',
      image: 'https://images.unsplash.com/photo-1601912262364-3a35aa0d9399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBib2FyZCUyMHBpY2FkYXxlbnwxfHx8fDE3NzYyNjI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Premium',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Productos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los favoritos de nuestros clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destacados.map((producto, index) => (
            <motion.div
              key={producto.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden border-border group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {producto.badge}
                    </Badge>
                  </div>
                  <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl mb-2">{producto.name}</h3>
                    <p className="text-sm text-white/90">{producto.description}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';

export function NosotrosSection() {
  const valores = [
    {
      icon: Heart,
      title: 'Pasion artesanal',
      description: 'Cada producto es elaborado con dedicacion y amor por la cocina tradicional.',
    },
    {
      icon: Award,
      title: 'Calidad premium',
      description: 'Seleccionamos los mejores ingredientes para garantizar sabor autentico.',
    },
    {
      icon: Users,
      title: 'Tradicion familiar',
      description: 'Recetas transmitidas de generacion en generacion, con ese toque casero.',
    },
  ];

  return (
    <section id="nosotros" className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl text-foreground md:text-4xl">Nuestra Historia</h2>

            <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                <strong className="text-foreground">Don Barriga y Quesos Le and Dan</strong> nacio del sueno de
                crear una propuesta innovadora para Gobernador Crespo, con opciones pensadas para el dia a dia:
                viandas, comida por kilo, fiambres, bebidas, snacks y mucho mas.
              </p>
              <p>
                Desde nuestros inicios, trabajamos con el compromiso de brindar calidad, practicidad y sabor en
                cada producto, acompanando a nuestros clientes en cada momento con alternativas ricas y accesibles.
              </p>
              <p>
                Gracias a todos los que nos eligen y nos acompanan en este camino. Su apoyo es fundamental para
                seguir creciendo y mejorando dia a dia, manteniendo siempre el objetivo de ofrecer lo mejor para
                cada hogar.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {valores.map((valor, index) => {
                const Icon = valor.icon;

                return (
                  <motion.div
                    key={valor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="rounded-2xl border border-border/70 bg-muted/20 p-5 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="mb-2 text-foreground">{valor.title}</h4>
                    <p className="text-sm text-muted-foreground">{valor.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-44 overflow-hidden rounded-2xl sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1772758632681-406226eedda7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3NjI2Mjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Preparacion artesanal"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="h-36 overflow-hidden rounded-2xl sm:h-48">
                <img
                  src="https://images.unsplash.com/photo-1763478156969-4d7c0ab35590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hlZXNlJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzYyNjI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Quesos artesanales"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-10">
              <div className="h-36 overflow-hidden rounded-2xl sm:h-48">
                <img
                  src="https://images.unsplash.com/photo-1775343962994-0e3d7c373cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hhcmN1dGVyaWUlMjBtZWF0c3xlbnwxfHx8fDE3NzYyNjI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fiambres premium"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="h-44 overflow-hidden rounded-2xl sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1748797295296-4f52f39209fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwZnJlc2glMjBwYXN0YXxlbnwxfHx8fDE3NzYyNjI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ravioles frescos"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

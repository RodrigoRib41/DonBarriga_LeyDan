import { motion } from 'motion/react';
import { Heart, Award, Users } from 'lucide-react';

export function NosotrosSection() {
  const valores = [
    {
      icon: Heart,
      title: 'Pasión Artesanal',
      description: 'Cada producto es elaborado con dedicación y amor por la cocina tradicional',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Seleccionamos los mejores ingredientes para garantizar el sabor auténtico',
    },
    {
      icon: Users,
      title: 'Tradición Familiar',
      description: 'Recetas transmitidas de generación en generación, con ese toque casero',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Don Barriga y Quesos Le & Dan</strong> nació del sueño de crear una propuesta innovadora para Gobernador Crespo, ofreciendo una amplia variedad de opciones pensadas para el día a día: viandas, comida por kilo, fiambres, bebidas, snacks y mucho más.

</p> 
<p> Desde nuestros inicios, trabajamos con el compromiso de brindar calidad, practicidad y sabor en cada producto, acompañando a nuestros clientes en cada momento con alternativas ricas y accesibles. </p> 
<p> Queremos agradecer especialmente a todos los que nos eligen y nos acompañan en este camino. Su apoyo es fundamental para seguir creciendo y mejorando día a día, manteniendo siempre el objetivo de ofrecer lo mejor para cada hogar. </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <motion.div
                    key={valor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="mb-2 text-foreground">{valor.title}</h4>
                    <p className="text-sm text-muted-foreground">{valor.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1772758632681-406226eedda7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3NjI2Mjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Preparación artesanal"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1763478156969-4d7c0ab35590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hlZXNlJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzYyNjI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Quesos artesanales"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1775343962994-0e3d7c373cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hhcmN1dGVyaWUlMjBtZWF0c3xlbnwxfHx8fDE3NzYyNjI3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fiambres premium"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1748797295296-4f52f39209fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwZnJlc2glMjBwYXN0YXxlbnwxfHx8fDE3NzYyNjI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ravioles frescos"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

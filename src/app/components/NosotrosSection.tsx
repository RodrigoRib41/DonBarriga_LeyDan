import { motion } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';
import foto1 from '../data/Foto1.png';
import foto3 from '../data/Foto3.png';
import nosotrosImg from '../data/Nosotros.png';

const freshPastaImage =
  'https://images.unsplash.com/photo-1771360873707-f435ef9732ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=60&w=3000';

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
    <section id="nosotros" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,31,58,0.08),transparent_24rem),radial-gradient(circle_at_top_right,rgba(47,43,168,0.1),transparent_26rem)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Quienes somos</p>
            <h2 className="mb-6 text-3xl text-foreground md:text-4xl">Nuestra Historia</h2>

            <div className="space-y-4 rounded-[2rem] border border-primary/10 bg-white/70 p-6 text-sm leading-7 text-muted-foreground shadow-[0_20px_55px_rgba(47,43,168,0.1)] backdrop-blur-sm sm:p-8 sm:text-base">
              <p>
                <strong className="text-foreground">Don Barriga y Quesos Le & Dan</strong> nacio del sueno de
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
                    className="rounded-2xl border border-primary/10 bg-white/75 p-5 text-center shadow-[0_16px_40px_rgba(47,43,168,0.08)]"
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
            className="grid grid-cols-2 gap-3 rounded-[2rem] border border-primary/10 bg-white/55 p-3 shadow-[0_20px_55px_rgba(47,43,168,0.12)] backdrop-blur-sm sm:gap-4 sm:p-4"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-44 overflow-hidden rounded-2xl sm:h-64">
                <img
                  src={nosotrosImg}
                  alt="Equipo del local"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="h-36 overflow-hidden rounded-2xl sm:h-48">
                <img
                  src={foto3}
                  alt="Quesos artesanales"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-10">
              <div className="h-36 overflow-hidden rounded-2xl sm:h-48">
                <img
                  src={foto1}
                  alt="Selecciones del local"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="h-44 overflow-hidden rounded-2xl sm:h-64">
                <img
                  src={freshPastaImage}
                  alt="Pastas frescas artesanales"
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

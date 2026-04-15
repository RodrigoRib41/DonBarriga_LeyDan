import { motion } from 'motion/react';
import { Calendar, Clock, Heart, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function ViandasSection() {
  const beneficios = [
    {
      icon: Clock,
      title: 'Practico',
      description: 'Comidas listas para calentar y disfrutar.',
    },
    {
      icon: Heart,
      title: 'Casero',
      description: 'Sabor autentico como hecho en casa.',
    },
    {
      icon: Leaf,
      title: 'Saludable',
      description: 'Ingredientes frescos y naturales.',
    },
    {
      icon: Calendar,
      title: 'Variado',
      description: 'Menu semanal siempre renovado.',
    },
  ];

  const navigate = useNavigate();

  return (
    <section id="viandas" className="relative overflow-hidden bg-muted/30 py-16 md:py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-12 h-48 w-48 rounded-full bg-primary blur-3xl sm:left-10 sm:top-20 sm:h-72 sm:w-72" />
        <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-secondary blur-3xl sm:right-10 sm:bottom-20 sm:h-96 sm:w-96" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">Viandas Caseras</h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            La solucion perfecta para disfrutar de comida casera todos los dias sin complicaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1627362713208-8f39c21f973e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMG1lYWwlMjB2aWFuZGF8ZW58MXx8fHwxNzc2MjYyNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Viandas caseras"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div className="absolute bottom-4 right-4 rounded-2xl bg-primary p-4 text-center text-primary-foreground shadow-xl sm:-bottom-6 sm:-right-6 sm:p-6">
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/80 sm:text-sm">Menu semanal</p>
              <p className="text-xl font-semibold sm:text-2xl">Lun a Vie</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="mb-5 text-2xl text-foreground md:text-3xl">Comida casera cuando la necesites</h3>
            <p className="mb-8 text-sm leading-7 text-muted-foreground sm:text-base">
              Nuestro servicio de viandas te ofrece opciones nutritivas y deliciosas para cada dia de la semana.
              Desde guisos tradicionales hasta platos mas elaborados, todo preparado con la misma dedicacion que
              pondrias en tu cocina.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;

                return (
                  <motion.div
                    key={beneficio.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card className="h-full border-border transition-colors hover:border-primary/40">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4 text-left sm:flex-col sm:items-center sm:text-center">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="mb-1 text-foreground">{beneficio.title}</h4>
                            <p className="text-sm text-muted-foreground">{beneficio.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Button
              onClick={() => navigate('/menu-semanal')}
              size="lg"
              className="h-12 w-full bg-primary text-base hover:bg-primary/90 sm:w-auto sm:px-8"
            >
              Ver menu semanal
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

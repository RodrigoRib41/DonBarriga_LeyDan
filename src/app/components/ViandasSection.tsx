import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Clock, Leaf, Heart, Calendar } from 'lucide-react';

export function ViandasSection() {
  const beneficios = [
    {
      icon: Clock,
      title: 'Práctico',
      description: 'Comidas listas para calentar y disfrutar',
    },
    {
      icon: Heart,
      title: 'Casero',
      description: 'Sabor auténtico como hecho en casa',
    },
    {
      icon: Leaf,
      title: 'Saludable',
      description: 'Ingredientes frescos y naturales',
    },
    {
      icon: Calendar,
      title: 'Variado',
      description: 'Menú semanal siempre renovado',
    },
  ];

  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="viandas" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Viandas Caseras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La solución perfecta para disfrutar de comida casera todos los días sin complicaciones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1627362713208-8f39c21f973e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMG1lYWwlMjB2aWFuZGF8ZW58MXx8fHwxNzc2MjYyNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Viandas caseras"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <p className="text-sm mb-1">Menú semanal</p>
                <p className="text-2xl">Lun - Vie</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl mb-6 text-foreground">
              Comida casera cuando la necesites
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestro servicio de viandas te ofrece opciones nutritivas y deliciosas para cada día 
              de la semana. Desde guisos tradicionales hasta platos más elaborados, todo preparado 
              con la misma dedicación que pondrías en tu cocina.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;
                return (
                  <motion.div
                    key={beneficio.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="mb-2 text-foreground">{beneficio.title}</h4>
                          <p className="text-sm text-muted-foreground">{beneficio.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Button
              onClick={scrollToContacto}
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              Ver menú semanal
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

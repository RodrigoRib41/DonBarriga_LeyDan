import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, DollarSign, Info } from 'lucide-react';
import { Button } from './ui/button';
import { MENU_DEL_DIA } from '../data/menuDelDia';

export function MenuDelDiaSection() {
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'popular':
        return 'bg-primary text-primary-foreground';
      case 'saludable':
        return 'bg-secondary text-secondary-foreground';
      case 'favorito':
        return 'bg-amber-500 text-white';
      case 'light':
        return 'bg-emerald-500 text-white';
      case 'nuevo':
        return 'bg-blue-500 text-white';
      case 'especial':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="menu-del-dia" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-primary">{MENU_DEL_DIA.dia}</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Menú del Día
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Viandas frescas preparadas hoy. ¡Hacé tu pedido antes de las 18hs para retiro mañana!
          </p>
        </motion.div>

        {/* Viandas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MENU_DEL_DIA.viandas.map((vianda, index) => (
            <motion.div
              key={vianda.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card 
                className={`overflow-hidden h-full flex flex-col border-border hover:shadow-xl transition-all duration-300 group ${
                  !vianda.disponible ? 'opacity-60' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vianda.imagen}
                    alt={vianda.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className={getBadgeVariant(vianda.badge)}>
                      {vianda.badge}
                    </Badge>
                  </div>

                  {/* Disponibilidad */}
                  {!vianda.disponible && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white font-medium bg-red-600 px-4 py-2 rounded-lg">
                        Agotado
                      </span>
                    </div>
                  )}

                  {/* Price Tag */}
                  {vianda.disponible && (
                    <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold">{vianda.precio.toLocaleString('es-AR')}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg mb-2 text-foreground leading-tight">
                    {vianda.nombre}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {vianda.descripcion}
                  </p>
                  
                  {vianda.disponible && (
                    <Button
                      onClick={scrollToContacto}
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Pedir ahora
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl mb-3 text-foreground">
                ¿Cómo hacer tu pedido?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-foreground mb-1">📱 Paso 1</p>
                  <p>Contactanos por WhatsApp o teléfono antes de las 18hs</p>
                </div>
                <div>
                  <p className="text-foreground mb-1">🍱 Paso 2</p>
                  <p>Indicanos qué viandas querés y la cantidad</p>
                </div>
                <div>
                  <p className="text-foreground mb-1">✅ Paso 3</p>
                  <p>Retirá tu pedido al día siguiente en nuestro local</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
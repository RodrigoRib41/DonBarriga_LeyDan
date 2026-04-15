import { motion } from 'motion/react';
import { Calendar, DollarSign, Info } from 'lucide-react';
import { MENU_DEL_DIA } from '../data/menuDelDia';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function MenuDelDiaSection() {
  const openWhatsApp = (producto?: string) => {
    const phoneNumber = '5493498437467';
    const message = encodeURIComponent(
      producto ? `Hola! Me gustaria pedir: ${producto}` : 'Hola! Me gustaria hacer un pedido.',
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
    <section id="menu-del-dia" className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm text-primary sm:text-base">{MENU_DEL_DIA.dia}</span>
          </div>
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">Menu del Dia</h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Viandas frescas preparadas hoy. Hace tu pedido antes de las 18 hs para retirar manana.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {MENU_DEL_DIA.viandas.map((vianda, index) => (
            <motion.div
              key={vianda.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <Card
                className={`group flex h-full flex-col overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  !vianda.disponible ? 'opacity-60' : ''
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={vianda.imagen}
                    alt={vianda.nombre}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute left-3 top-3">
                    <Badge className={getBadgeVariant(vianda.badge)}>{vianda.badge}</Badge>
                  </div>

                  {!vianda.disponible && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <span className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white">Agotado</span>
                    </div>
                  )}

                  {vianda.disponible && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-primary-foreground shadow-lg">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm font-semibold">{vianda.precio.toLocaleString('es-AR')}</span>
                    </div>
                  )}
                </div>

                <CardContent className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg leading-tight text-foreground">{vianda.nombre}</h3>
                  <p className="flex-1 text-sm leading-6 text-muted-foreground">{vianda.descripcion}</p>

                  {vianda.disponible && (
                    <Button
                      onClick={() => openWhatsApp(vianda.nombre)}
                      variant="outline"
                      className="mt-4 h-11 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Pedir ahora
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Info className="h-6 w-6 text-primary" />
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-xl text-foreground">Como hacer tu pedido</h3>
              <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-3">
                <div>
                  <p className="mb-1 font-medium text-foreground">Paso 1</p>
                  <p>Contactanos por WhatsApp o telefono antes de las 18 hs.</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">Paso 2</p>
                  <p>Indicanos que viandas queres y la cantidad que necesitas.</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">Paso 3</p>
                  <p>Retira tu pedido al dia siguiente en nuestro local.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

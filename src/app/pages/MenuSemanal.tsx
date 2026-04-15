import { motion } from 'motion/react';
import { ArrowLeft, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface Vianda {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  badge: string;
  disponible: boolean;
}

interface MenuDia {
  dia: string;
  viandas: Vianda[];
}

const MENUS_SEMANALES: MenuDia[] = [
  {
    dia: 'Lunes',
    viandas: [
      {
        nombre: 'Milanesa Napolitana',
        descripcion: 'Milanesa de carne con jamon, queso, salsa de tomate y guarnicion de papas fritas.',
        precio: 4500,
        imagen: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZGVkJTIwY2hpY2tlbiUyMG1pbGFuZXNhJTIwY3V0bGV0fGVufDF8fHx8MTc3NjI3ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Guiso de Lentejas',
        descripcion: 'Guiso casero de lentejas con chorizo, verduras frescas y arroz blanco.',
        precio: 3500,
        imagen: 'https://images.unsplash.com/photo-1608500218861-01091cdc501e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlzbyUyMHN0ZXclMjBiZWVmJTIwaG9tZW1hZGV8ZW58MXx8fHwxNzc2Mjc4OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Saludable',
        disponible: true,
      },
      {
        nombre: 'Pollo al Horno',
        descripcion: 'Muslos de pollo al horno con verduras asadas y pure de calabaza.',
        precio: 4000,
        imagen: 'https://images.unsplash.com/photo-1736952332338-44dc07283462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXMlMjBob21lbWFkZXxlbnwxfHx8fDE3NzYyNzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
      {
        nombre: 'Empanadas de Carne',
        descripcion: 'Empanadas criollas de carne cortada a cuchillo, 6 unidades.',
        precio: 3800,
        imagen: 'https://images.unsplash.com/photo-1766241537477-b552cdff2cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBhbmFkYXMlMjBhcmdlbnRpbmFzJTIwcGFzdHJ5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Favorito',
        disponible: true,
      },
    ],
  },
  {
    dia: 'Martes',
    viandas: [
      {
        nombre: 'Asado con Ensalada',
        descripcion: 'Tira de asado a la parrilla con ensalada mixta y chimichurri casero.',
        precio: 5200,
        imagen: 'https://images.unsplash.com/photo-1562625964-ffe9b2f617fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2FkbyUyMGFyZ2VudGlubyUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc3NjI3ODkxMHww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
      {
        nombre: 'Ravioles de Ricota',
        descripcion: 'Ravioles caseros de ricota con salsa de tomate y albahaca fresca.',
        precio: 3900,
        imagen: 'https://images.unsplash.com/photo-1560476652-f5bf553eac22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwcGFzdGElMjBjaGVlc2UlMjBzYXVjZXxlbnwxfHx8fDE3NzYyNzg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Albondigas con Arroz',
        descripcion: 'Albondigas de carne en salsa de tomate casera con arroz blanco.',
        precio: 3700,
        imagen: 'https://images.unsplash.com/photo-1565086869529-8c7802cca7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0YmFsbHMlMjB0b21hdG8lMjBzYXVjZSUyMHJpY2V8ZW58MXx8fHwxNzc2Mjc4OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Saludable',
        disponible: true,
      },
      {
        nombre: 'Pescado al Horno',
        descripcion: 'Filet de merluza al horno con limon, papas y ensalada fresca.',
        precio: 4300,
        imagen: 'https://images.unsplash.com/photo-1617146629059-0814c2d61b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwc2FsbW9uJTIwYmFrZWQlMjBoZWFsdGh5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
    ],
  },
  {
    dia: 'Miercoles',
    viandas: [
      {
        nombre: 'Tallarines a la Bolognesa',
        descripcion: 'Tallarines caseros con salsa bolognesa y queso rallado.',
        precio: 3600,
        imagen: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGJvbG9nbmVzYSUyMGl0YWxpYW4lMjBzcGFnaGV0dGl8ZW58MXx8fHwxNzc2Mjc4OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Milanesa de Cerdo',
        descripcion: 'Milanesa de cerdo con ensalada rusa y huevo duro.',
        precio: 4200,
        imagen: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwc2Nobml0emVsJTIwdmVnZXRhYmxlcyUyMGdlcm1hbnxlbnwxfHx8fDE3NzYyNzg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Favorito',
        disponible: true,
      },
      {
        nombre: 'Pollo con Verduras',
        descripcion: 'Suprema de pollo grillada con verduras salteadas al wok.',
        precio: 4100,
        imagen: 'https://images.unsplash.com/photo-1723531055852-744d14ac00b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RpciUyMGZyeSUyMHZlZ2V0YWJsZXMlMjB3b2t8ZW58MXx8fHwxNzc2Mjc4OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
      {
        nombre: 'Lasagna de Carne',
        descripcion: 'Lasagna casera con carne picada, bechamel y queso gratinado.',
        precio: 4400,
        imagen: 'https://images.unsplash.com/photo-1560035285-64808ba47bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNhZ25hJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2MjA4MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
    ],
  },
  {
    dia: 'Jueves',
    viandas: [
      {
        nombre: 'Costillas BBQ',
        descripcion: 'Costillitas de cerdo con salsa barbacoa casera y papas rusticas.',
        precio: 4800,
        imagen: 'https://images.unsplash.com/photo-1761314014872-41e958dab41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwcmlicyUyMGJhcmJlY3VlJTIwZ3JpbGxlZHxlbnwxfHx8fDE3NzYyNzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
      {
        nombre: 'Guiso de Carne',
        descripcion: 'Guiso tradicional de carne con papas, zanahoria y batata.',
        precio: 3800,
        imagen: 'https://images.unsplash.com/photo-1573403707391-3612fb5e1f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwY2Fzc2Vyb2xlJTIwc3RldyUyMHJpY2V8ZW58MXx8fHwxNzc2Mjc4OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Ravioles de Verdura',
        descripcion: 'Ravioles de verdura y ricota con salsa blanca o filetto.',
        precio: 3900,
        imagen: 'https://images.unsplash.com/photo-1560476652-f5bf553eac22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwcGFzdGElMjBjaGVlc2UlMjBzYXVjZXxlbnwxfHx8fDE3NzYyNzg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Saludable',
        disponible: true,
      },
      {
        nombre: 'Empanadas de Pollo',
        descripcion: 'Empanadas caseras de pollo con verduras, 6 unidades.',
        precio: 3600,
        imagen: 'https://images.unsplash.com/photo-1766241537477-b552cdff2cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBhbmFkYXMlMjBhcmdlbnRpbmFzJTIwcGFzdHJ5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
    ],
  },
  {
    dia: 'Viernes',
    viandas: [
      {
        nombre: 'Salmon Grillado',
        descripcion: 'Filet de salmon a la plancha con ensalada y arroz integral.',
        precio: 5500,
        imagen: 'https://images.unsplash.com/photo-1617146629059-0814c2d61b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwc2FsbW9uJTIwYmFrZWQlMjBoZWFsdGh5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
      {
        nombre: 'Noquis de Papa',
        descripcion: 'Noquis caseros con salsa a eleccion: tuco, bolognesa o cuatro quesos.',
        precio: 3500,
        imagen: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGJvbG9nbmVzYSUyMGl0YWxpYW4lMjBzcGFnaGV0dGl8ZW58MXx8fHwxNzc2Mjc4OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Pollo a la Mostaza',
        descripcion: 'Pechuga de pollo en salsa de mostaza con pure de papas.',
        precio: 4200,
        imagen: 'https://images.unsplash.com/photo-1736952332338-44dc07283462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXMlMjBob21lbWFkZXxlbnwxfHx8fDE3NzYyNzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Favorito',
        disponible: true,
      },
      {
        nombre: 'Milanesa Completa',
        descripcion: 'Milanesa de carne con huevo frito, papas fritas y ensalada.',
        precio: 4600,
        imagen: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZGVkJTIwY2hpY2tlbiUyMG1pbGFuZXNhJTIwY3V0bGV0fGVufDF8fHx8MTc3NjI3ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
    ],
  },
];

export default function MenuSemanal() {
  const navigate = useNavigate();

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
    <div className="min-h-screen overflow-x-hidden bg-background">
      <section className="bg-muted/30 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-3 z-40 mb-8 inline-flex"
          >
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="h-11 gap-2 rounded-full bg-background/90 px-4 shadow-md backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm text-primary sm:text-base">Lunes a Viernes</span>
            </div>
            <h1 className="mb-4 text-3xl text-foreground sm:text-4xl md:text-5xl">Menu Semanal Completo</h1>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Conoce todas las opciones de viandas que tenemos para vos durante la semana.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {MENUS_SEMANALES.map((menuDia, diaIndex) => (
              <motion.div
                key={menuDia.dia}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: diaIndex * 0.06 }}
                className="relative"
              >
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary sm:h-16 sm:w-16">
                    <span className="text-xl font-bold text-primary-foreground sm:text-2xl">
                      {menuDia.dia.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl text-foreground md:text-3xl">{menuDia.dia}</h2>
                    <p className="text-sm text-muted-foreground">4 opciones de viandas</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {menuDia.viandas.map((vianda) => (
                    <Card
                      key={vianda.nombre}
                      className="group flex h-full flex-col overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

                        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-primary-foreground shadow-lg">
                          <DollarSign className="h-4 w-4" />
                          <span className="text-sm font-semibold">{vianda.precio.toLocaleString('es-AR')}</span>
                        </div>
                      </div>

                      <CardContent className="flex flex-1 flex-col p-5">
                        <h3 className="mb-2 text-lg leading-tight text-foreground">{vianda.nombre}</h3>
                        <p className="flex-1 text-sm leading-6 text-muted-foreground">{vianda.descripcion}</p>

                        <Button
                          onClick={() => openWhatsApp(vianda.nombre)}
                          variant="outline"
                          className="mt-4 h-11 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Pedir ahora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {diaIndex < MENUS_SEMANALES.length - 1 && <div className="mt-10 border-t border-border md:mt-12" />}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl border border-border bg-card p-6 text-center md:p-8"
          >
            <h3 className="mb-3 text-xl text-foreground">Recorda hacer tu pedido antes de las 18 hs</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Los pedidos realizados antes de las 18 hs pueden retirarse al dia siguiente en nuestro local.
            </p>
            <Button
              onClick={() => openWhatsApp()}
              size="lg"
              className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-8"
            >
              Contactanos por WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

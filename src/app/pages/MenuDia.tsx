import { motion } from 'motion/react';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { MenuCardsGrid } from '../components/MenuCardsGrid';
import { MenuDayTabs } from '../components/MenuDayTabs';
import { Button } from '../components/ui/button';
import { getMenuBySlug } from '../data/menus';
import { openWhatsAppMenu } from '../lib/menu';

export default function MenuDia() {
  const navigate = useNavigate();
  const { diaSlug } = useParams();
  const menu = diaSlug ? getMenuBySlug(diaSlug) : undefined;

  if (!menu) {
    return <Navigate to="/menu-del-dia" replace />;
  }

  return (
    <section className="relative overflow-hidden py-6 sm:py-8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(220,214,251,0.18))]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-3 z-40 mb-8 flex flex-wrap gap-3"
          >
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="h-11 gap-2 rounded-full border-primary/10 bg-background/90 px-4 shadow-md backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 shadow-sm">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span className="text-sm text-primary sm:text-base">Menu de {menu.dia}</span>
            </div>
            <h1 className="mb-4 text-3xl text-foreground sm:text-4xl md:text-5xl">{menu.dia}</h1>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Pagina pensada para entrar rapido desde el telefono y pedir sin buscar entre todos los dias.
            </p>
          </motion.div>

          <div className="mb-8">
            <MenuDayTabs activeSlug={menu.slug} />
          </div>

          <MenuCardsGrid viandas={menu.viandas} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-[2rem] border border-primary/10 bg-white/78 p-6 text-center shadow-[0_22px_60px_rgba(47,43,168,0.12)] backdrop-blur-sm md:p-8"
          >
            <h3 className="mb-3 text-xl text-foreground">Pedido rapido de {menu.dia}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Si ya sabes que queres, toca cualquier producto para abrir WhatsApp con el pedido listo.
            </p>
            <Button
              onClick={() => openWhatsAppMenu()}
              size="lg"
              className="h-12 w-full bg-gradient-to-r from-primary to-[#4a45c8] text-primary-foreground hover:from-primary/95 hover:to-[#4a45c8]/95 sm:w-auto sm:px-8"
            >
              Pedir por WhatsApp
            </Button>
          </motion.div>
      </div>
    </section>
  );
}

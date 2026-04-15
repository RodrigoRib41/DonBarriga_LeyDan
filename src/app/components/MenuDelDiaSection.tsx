import { motion } from 'motion/react';
import { Calendar, Info } from 'lucide-react';
import { MENU_DEL_DIA } from '../data/menus';
import { MenuCardsGrid } from './MenuCardsGrid';
import { MenuDayTabs } from './MenuDayTabs';

export function MenuDelDiaSection() {
  return (
    <section id="menu-del-dia" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(220,214,251,0.18))]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 shadow-sm">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm text-primary sm:text-base">{MENU_DEL_DIA.fecha ?? MENU_DEL_DIA.dia}</span>
          </div>
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">Menu del dia</h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Viandas frescas preparadas hoy. Elegi lunes, martes, miercoles, jueves o viernes desde arriba.
          </p>
        </motion.div>

        <div className="mb-6">
          <MenuDayTabs activeSlug={MENU_DEL_DIA.slug} />
        </div>

        <div className="mb-10">
          <MenuCardsGrid viandas={MENU_DEL_DIA.viandas} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-primary/10 bg-white/78 p-5 shadow-[0_22px_60px_rgba(47,43,168,0.12)] backdrop-blur-sm sm:p-6 md:p-8"
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
                  <p>Elegi el dia desde la barra superior. El actual ya queda marcado automaticamente.</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">Paso 2</p>
                  <p>Toca "Pedir ahora" en la vianda que quieras para abrir WhatsApp.</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">Paso 3</p>
                  <p>Confirma cantidad y retiro. Es mas rapido y comodo desde el telefono.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

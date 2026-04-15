import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import logoFondo from '../data/Fondo.png';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <>
      <section
        id="inicio"
        className="relative w-full min-h-[42vh] overflow-hidden bg-[linear-gradient(135deg,#211b63_0%,#2f2ba8_60%,#6f68c8_100%)] sm:min-h-[64vh] md:min-h-[78vh]"
      >
        <img
          src={logoFondo}
          alt="Especialidades artesanales de Don Barriga y Quesos Le & Dan"
          className="absolute inset-0 h-full w-full object-contain object-center opacity-95 sm:object-cover"
        />

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(214,31,58,0.32),transparent_30%),linear-gradient(180deg,rgba(19,15,71,0.2),rgba(19,15,71,0.45))]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf6f1]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
              fill="#fef9f5"
            />
          </svg>
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,43,168,0.08),transparent_24rem),radial-gradient(circle_at_bottom_right,rgba(214,31,58,0.08),transparent_22rem)]" />
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/10 bg-white/70 px-6 py-10 shadow-[0_22px_65px_rgba(47,43,168,0.12)] backdrop-blur-sm sm:px-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 inline-flex items-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-foreground sm:text-sm">
                Don Barriga x Quesos Le & Dan
              </p>
              <h1 className="mb-5 font-serif text-3xl font-bold leading-tight italic text-foreground sm:text-5xl md:mb-6 md:text-6xl">
                Sabores artesanales que se sienten como en casa
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-10 md:text-xl"
            >
              Pastas frescas elaboradas a mano, quesos artesanales selectos, fiambres de calidad premium y
              viandas caseras preparadas con amor. La tradicion italiana en cada bocado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <Button asChild size="lg" className="h-12 bg-gradient-to-r from-primary to-[#4a45c8] px-6 text-base text-white shadow-[0_14px_30px_rgba(47,43,168,0.2)] hover:from-primary/95 hover:to-[#4a45c8]/95 sm:h-14 sm:px-8 sm:text-lg">
                <Link to="/menu-del-dia">
                  Ver menu del dia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="h-12 border-[#d61f3a]/30 bg-white/70 px-6 text-base text-[#b10f2f] hover:bg-accent sm:h-14 sm:px-8 sm:text-lg">
                <Link to="/productos">Ver todos los productos</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

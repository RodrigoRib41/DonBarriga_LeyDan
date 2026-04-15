import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logoFondo from '../data/Fondo.png';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="inicio"
        className="relative w-full min-h-[54vh] overflow-hidden bg-cover bg-center bg-no-repeat pt-16 sm:min-h-[64vh] md:min-h-[78vh] md:pt-20"
        style={{
          backgroundImage: `url(${logoFondo})`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
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

      <section className="bg-[#fef9f5] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-5 font-serif text-3xl font-bold leading-tight italic text-gray-900 sm:text-5xl md:mb-6 md:text-6xl">
                Sabores artesanales que se sienten como en casa
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg md:mb-10 md:text-xl"
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
              <Button
                onClick={() => scrollToSection('menu-del-dia')}
                size="lg"
                className="h-12 bg-primary px-6 text-base text-white hover:bg-primary/90 sm:h-14 sm:px-8 sm:text-lg"
              >
                Ver menu del dia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                onClick={() => scrollToSection('productos')}
                size="lg"
                variant="outline"
                className="h-12 border-primary px-6 text-base text-primary hover:bg-primary/5 sm:h-14 sm:px-8 sm:text-lg"
              >
                Ver todos los productos
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

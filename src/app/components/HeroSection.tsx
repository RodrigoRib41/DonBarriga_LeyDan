import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import logoFondo from '../data/Fondo.png';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* SECCIÓN 1: SOLO IMAGEN (Full Screen) */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={logoFondo} 
            alt="Pastas artesanales frescas"
            className="w-full h-full object-cover opacity-90" // Subí la opacidad ya que no hay texto encima
          />
          {/* Un degradado sutil solo en la base para conectar con la onda */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>

        {/* Decorative Wave - Actúa como puente entre la foto y el texto */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#fef9f5" // Mismo color que el fondo de la siguiente sección
            />
          </svg>
        </div>
      </section>

      {/* SECCIÓN 2: TEXTO Y BOTONES (Justo debajo) */}
      <section className="bg-[#fef9f5] py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Texto en color oscuro para contraste sobre el fondo claro */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 font-bold leading-tight italic font-serif">
                Sabores artesanales que se sienten como en casa
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
            >
              Pastas frescas elaboradas a mano, quesos artesanales selectos, fiambres de calidad premium
              y viandas caseras preparadas con amor. La tradición italiana en cada bocado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => scrollToSection('menu-del-dia')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              >
                Ver menú del día
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection('productos')}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
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
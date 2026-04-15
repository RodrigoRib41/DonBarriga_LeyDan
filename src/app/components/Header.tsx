import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import logoLeAndDan from '../data/image-2.png';
import logoDonBarriga from '../data/image-3.png';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = '5493498437467';
    const message = encodeURIComponent('Hola! Me gustaria hacer un pedido.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Productos', id: 'productos' },
    { label: 'Menu del Dia', id: 'menu-del-dia' },
    { label: 'Viandas', id: 'viandas' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/92 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-w-0 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1 sm:gap-2">
                <img src={logoDonBarriga} alt="Don Barriga" className="h-9 w-auto object-contain sm:h-10 md:h-12" />
                <span className="text-lg text-primary sm:text-xl">&</span>
                <img src={logoLeAndDan} alt="Le and Dan" className="h-9 w-auto object-contain sm:h-10 md:h-12" />
              </div>

              <div className="hidden min-w-0 lg:block">
                <h1 className="truncate text-sm font-semibold leading-tight text-primary xl:text-base">
                  Don Barriga / Le and Dan
                </h1>
                <p className="truncate text-xs text-muted-foreground">
                  Pastas, fiambres, quesos y viandas artesanales
                </p>
              </div>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={openWhatsApp} className="bg-primary hover:bg-primary/90">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Hacer pedido
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent hover:text-primary md:hidden"
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background/98 md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-4 sm:px-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-xl px-4 py-3 text-left text-base text-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {item.label}
                </button>
              ))}

              <Button onClick={openWhatsApp} className="mt-2 h-11 w-full bg-primary hover:bg-primary/90">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Hacer pedido
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

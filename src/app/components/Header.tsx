import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import logoLeAndDan from '../../imports/image-2.png';
import logoDonBarriga from '../../imports/image-3.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Menú del Día', id: 'menu-del-dia' },
    { label: 'Productos', id: 'productos' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Viandas', id: 'viandas' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="flex items-center gap-1">
              <img 
                src={logoDonBarriga} 
                alt="Don Barriga" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-primary text-xl mx-1">&</span>
              <img 
                src={logoLeAndDan} 
                alt="Le & Dan" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:block ml-2">
              <h1 className="text-base leading-tight text-primary">
                Don Barriga & Le & Dan
              </h1>
              <p className="text-xs text-muted-foreground">Pastas & Viandas Artesanales</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-primary hover:bg-primary/90"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Hacer pedido
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Hacer pedido
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router';
import logoLeAndDan from '../data/image-2.png';
import logoDonBarriga from '../data/image-3.png';
import { Button } from './ui/button';
import { cn } from './ui/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const openWhatsApp = () => {
    const phoneNumber = '5493498437467';
    const message = encodeURIComponent('Hola! Me gustaria hacer un pedido.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Inicio', to: '/' },
    { label: 'Productos', to: '/productos' },
    { label: 'Menu del Dia', to: '/menu-del-dia' },
    { label: 'Viandas', to: '/viandas' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Contacto', to: '/contacto' },
  ];

  const isActive = (to: string) => {
    if (to === '/') {
      return pathname === '/';
    }

    if (to === '/menu-del-dia') {
      return pathname === '/menu-del-dia' || pathname === '/menu-semanal' || pathname.startsWith('/menu/');
    }

    return pathname === to;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/85 shadow-[0_10px_35px_rgba(47,43,168,0.1)] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#d61f3a] to-primary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-w-0"
          >
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1 rounded-full border border-primary/10 bg-white/75 px-2 py-1 shadow-sm sm:gap-2 sm:px-3">
                <img src={logoDonBarriga} alt="Don Barriga" className="h-9 w-auto object-contain sm:h-10 md:h-12" />
                <span className="text-lg text-[#d61f3a] sm:text-xl">&</span>
                <img src={logoLeAndDan} alt="Le & Dan" className="h-9 w-auto object-contain sm:h-10 md:h-12" />
              </div>

              <div className="hidden min-w-0 lg:block">
                <h1 className="truncate text-sm font-semibold leading-tight text-primary xl:text-base">
                  Don Barriga / Le & Dan
                </h1>
                <p className="truncate text-xs text-muted-foreground">
                  Pastas, fiambres, quesos y viandas artesanales
                </p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition-all hover:bg-secondary/60 hover:text-primary',
                  isActive(item.to)
                    ? 'bg-gradient-to-r from-primary to-[#4a45c8] text-primary-foreground shadow-[0_10px_25px_rgba(47,43,168,0.2)]'
                    : 'text-foreground',
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={openWhatsApp} className="bg-gradient-to-r from-primary to-[#4a45c8] shadow-[0_10px_25px_rgba(47,43,168,0.22)] hover:from-primary/95 hover:to-[#4a45c8]/95">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Hacer pedido
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/70 text-foreground transition-colors hover:bg-accent hover:text-primary md:hidden"
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
            className="border-t border-primary/10 bg-background/95 shadow-[0_18px_35px_rgba(47,43,168,0.12)] md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-4 sm:px-6">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-left text-base transition-colors hover:bg-accent hover:text-primary',
                    isActive(item.to) ? 'bg-secondary text-primary' : 'text-foreground',
                  )}
                >
                  {item.label}
                </NavLink>
              ))}

              <Button onClick={openWhatsApp} className="mt-2 h-11 w-full bg-gradient-to-r from-primary to-[#4a45c8] hover:from-primary/95 hover:to-[#4a45c8]/95">
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

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5493498437467';
    const message = encodeURIComponent('Hola! Me gustaria hacer un pedido.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleWhatsAppClick}
      className="group fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />

      <span className="pointer-events-none absolute right-[4.5rem] hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Escribinos por WhatsApp
      </span>

      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />
    </motion.button>
  );
}

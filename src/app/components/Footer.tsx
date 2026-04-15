import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logoLeAndDan from '../data/image-2.png';
import logoDonBarriga from '../data/image-3.png';

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#241d67_0%,#2f2ba8_48%,#6f68c8_100%)] pb-8 pt-14 text-background md:pt-16"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d61f3a] via-white/70 to-[#d61f3a]" />
      <div className="absolute left-[-5rem] top-10 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute bottom-0 right-[-3rem] h-56 w-56 rounded-full bg-[#d61f3a]/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 shadow-lg md:justify-start">
              <img src={logoDonBarriga} alt="Don Barriga" className="h-12 w-auto object-contain" />
              <span className="text-xl text-[#ff7b91]">&</span>
              <img src={logoLeAndDan} alt="Le & Dan" className="h-12 w-auto object-contain" />
            </div>

            <div className="mb-3">
              <h3 className="text-lg font-semibold">Don Barriga - Le & Dan</h3>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-background/80">
              Pastas frescas, quesos artesanales, fiambres premium y viandas caseras. La tradicion en cada
              bocado.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5493498437467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-sm text-background/80 transition-colors hover:text-[#ffb7c2] md:justify-start"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+54 9 3498 43-7467</span>
              </a>
              <a
                href="mailto:info@donbarriga.com"
                className="flex items-center justify-center gap-3 text-sm text-background/80 transition-colors hover:text-[#ffb7c2] md:justify-start"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@donbarriga.com</span>
              </a>
              <div className="flex items-start justify-center gap-3 text-sm text-background/80 md:justify-start">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  E. Lopez 353
                  <br />
                  Gob. Crespo, Santa Fe
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg">Horarios</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-center gap-3 text-sm text-background/80 md:justify-start">
                <Clock className="mt-1 h-4 w-4 shrink-0" />
                <div>
                  <p className="mb-1">Lunes a Viernes</p>
                  <p className="text-background/60">9:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-3 text-sm text-background/80 md:justify-start">
                <Clock className="mt-1 h-4 w-4 shrink-0" />
                <div>
                  <p className="mb-1">Sabados</p>
                  <p className="text-background/60">9:00 - 15:00</p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-3 text-sm text-background/80 md:justify-start">
                <Clock className="mt-1 h-4 w-4 shrink-0" />
                <div>
                  <p className="mb-1">Domingos</p>
                  <p className="text-background/60">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg">Redes sociales</h3>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                href="https://www.instagram.com/_don_barriga_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-background/10 transition-colors hover:bg-[#d61f3a]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-background/10 transition-colors hover:bg-[#d61f3a]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm text-background/80">Seguinos en Instagram</p>
              <p className="text-sm text-[#ffb7c2]">@_don_barriga_</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6">
          <p className="text-center text-sm text-background/60">© 2026 Rodrigo Riboldi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

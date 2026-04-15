import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🍝</span>
              </div>
              <div>
                <h3 className="text-lg">Don Barriga & Le & Dan</h3>
                <p className="text-xs text-background/70">Pastas Artesanales</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Pastas frescas, quesos artesanales, fiambres premium y viandas caseras. 
              La tradición italiana en cada bocado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+54 9 11 1234-5678</span>
              </a>
              <a
                href="mailto:info@donbarriga.com"
                className="flex items-center gap-3 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@donbarriga.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Av.Example 1234<br />Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg mb-4">Horarios</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-background/80">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-1">Lunes a Viernes</p>
                  <p className="text-background/60">9:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-background/80">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-1">Sábados</p>
                  <p className="text-background/60">9:00 - 15:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-background/80">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-1">Domingos</p>
                  <p className="text-background/60">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg mb-4">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-background/80 mb-2">Seguinos en Instagram</p>
              <p className="text-sm text-primary">@donbarriga.pastas</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © 2026 Don Barriga & Le & Dan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

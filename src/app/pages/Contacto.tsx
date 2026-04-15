import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Contacto() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,43,168,0.08),transparent_24rem),radial-gradient(circle_at_bottom_right,rgba(214,31,58,0.08),transparent_22rem)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Contacto</p>
          <h1 className="mb-4 text-3xl text-foreground sm:text-4xl md:text-5xl">Hablemos</h1>
          <p className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Te dejamos las formas mas rapidas de contactarnos. Mas abajo tenes toda la informacion completa del local.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-primary/10 bg-white/78 p-6 shadow-[0_20px_55px_rgba(47,43,168,0.12)] backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl text-foreground">WhatsApp</h2>
            <p className="mb-5 text-sm leading-6 text-muted-foreground">
              Ideal para pedidos rapidos, consultas de stock y coordinar retiro desde el telefono.
            </p>
            <Button asChild className="h-11 w-full sm:w-auto">
              <a href="https://wa.me/5493498437467" target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-[2rem] border border-primary/10 bg-white/78 p-6 shadow-[0_20px_55px_rgba(47,43,168,0.12)] backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl text-foreground">Datos directos</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+54 9 3498 43-7467</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@donbarriga.com</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <span>E. Lopez 353, Gob. Crespo, Santa Fe</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

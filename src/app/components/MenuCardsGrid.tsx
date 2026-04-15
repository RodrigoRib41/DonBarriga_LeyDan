import { DollarSign } from 'lucide-react';
import type { Vianda } from '../data/menus';
import { getBadgeVariant, openWhatsAppMenu } from '../lib/menu';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface MenuCardsGridProps {
  viandas: Vianda[];
}

export function MenuCardsGrid({ viandas }: MenuCardsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {viandas.map((vianda) => (
        <Card
          key={vianda.nombre}
          className={`group flex h-full flex-col overflow-hidden border-primary/10 bg-white/78 shadow-[0_16px_42px_rgba(47,43,168,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(47,43,168,0.18)] ${
            !vianda.disponible ? 'opacity-60' : ''
          }`}
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={vianda.imagen}
              alt={vianda.nombre}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute left-3 top-3">
              <Badge className={getBadgeVariant(vianda.badge)}>{vianda.badge}</Badge>
            </div>

            {!vianda.disponible && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <span className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white">Agotado</span>
              </div>
            )}

            {vianda.disponible && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-xl bg-gradient-to-r from-primary to-[#4a45c8] px-3 py-1.5 text-primary-foreground shadow-lg">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm font-semibold">{vianda.precio.toLocaleString('es-AR')}</span>
              </div>
            )}
          </div>

          <CardContent className="flex flex-1 flex-col p-5">
            <h3 className="mb-2 text-lg leading-tight text-foreground">{vianda.nombre}</h3>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">{vianda.descripcion}</p>

            {vianda.disponible && (
              <Button
                onClick={() => openWhatsAppMenu(vianda.nombre)}
                variant="outline"
                className="mt-4 h-11 w-full border-primary/30 bg-white text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Pedir ahora
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

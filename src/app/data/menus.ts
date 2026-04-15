export interface Vianda {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  badge: string;
  disponible: boolean;
}

export interface MenuDia {
  slug: string;
  dia: string;
  fecha?: string;
  viandas: Vianda[];
}

export const MENU_DIAS: MenuDia[] = [
  {
    slug: 'lunes',
    dia: 'Lunes',
    viandas: [
      {
        nombre: 'Milanesa Napolitana',
        descripcion: 'Milanesa de carne con jamon, queso, salsa de tomate y guarnicion de papas fritas.',
        precio: 4500,
        imagen:
          'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZGVkJTIwY2hpY2tlbiUyMG1pbGFuZXNhJTIwY3V0bGV0fGVufDF8fHx8MTc3NjI3ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Guiso de Lentejas',
        descripcion: 'Guiso casero de lentejas con chorizo, verduras frescas y arroz blanco.',
        precio: 3500,
        imagen:
          'https://images.unsplash.com/photo-1608500218861-01091cdc501e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlzbyUyMHN0ZXclMjBiZWVmJTIwaG9tZW1hZGV8ZW58MXx8fHwxNzc2Mjc4OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Saludable',
        disponible: true,
      },
      {
        nombre: 'Pollo al Horno',
        descripcion: 'Muslos de pollo al horno con verduras asadas y pure de calabaza.',
        precio: 4000,
        imagen:
          'https://images.unsplash.com/photo-1736952332338-44dc07283462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXMlMjBob21lbWFkZXxlbnwxfHx8fDE3NzYyNzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
      {
        nombre: 'Empanadas de Carne',
        descripcion: 'Empanadas criollas de carne cortada a cuchillo, 6 unidades.',
        precio: 3800,
        imagen:
          'https://images.unsplash.com/photo-1766241537477-b552cdff2cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBhbmFkYXMlMjBhcmdlbnRpbmFzJTIwcGFzdHJ5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Favorito',
        disponible: true,
      },
    ],
  },
  {
    slug: 'martes',
    dia: 'Martes',
    viandas: [
      {
        nombre: 'Asado con Ensalada',
        descripcion: 'Tira de asado a la parrilla con ensalada mixta y chimichurri casero.',
        precio: 5200,
        imagen:
          'https://images.unsplash.com/photo-1562625964-ffe9b2f617fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2FkbyUyMGFyZ2VudGlubyUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc3NjI3ODkxMHww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
      {
        nombre: 'Ravioles de Ricota',
        descripcion: 'Ravioles caseros de ricota con salsa de tomate y albahaca fresca.',
        precio: 3900,
        imagen:
          'https://images.unsplash.com/photo-1560476652-f5bf553eac22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwcGFzdGElMjBjaGVlc2UlMjBzYXVjZXxlbnwxfHx8fDE3NzYyNzg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Albondigas con Arroz',
        descripcion: 'Albondigas de carne en salsa de tomate casera con arroz blanco.',
        precio: 3700,
        imagen:
          'https://images.unsplash.com/photo-1565086869529-8c7802cca7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0YmFsbHMlMjB0b21hdG8lMjBzYXVjZSUyMHJpY2V8ZW58MXx8fHwxNzc2Mjc4OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Saludable',
        disponible: true,
      },
      {
        nombre: 'Pescado al Horno',
        descripcion: 'Filet de merluza al horno con limon, papas y ensalada fresca.',
        precio: 4300,
        imagen:
          'https://images.unsplash.com/photo-1617146629059-0814c2d61b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwc2FsbW9uJTIwYmFrZWQlMjBoZWFsdGh5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
    ],
  },
  {
    slug: 'miercoles',
    dia: 'Miercoles',
    viandas: [
      {
        nombre: 'Tallarines a la Bolognesa',
        descripcion: 'Tallarines caseros con salsa bolognesa y queso rallado.',
        precio: 3600,
        imagen:
          'https://images.unsplash.com/photo-1622973536968-3ead9e780960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGJvbG9nbmVzYSUyMGl0YWxpYW4lMjBzcGFnaGV0dGl8ZW58MXx8fHwxNzc2Mjc4OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Milanesa de Cerdo',
        descripcion: 'Milanesa de cerdo con ensalada rusa y huevo duro.',
        precio: 4200,
        imagen:
          'https://images.unsplash.com/photo-1599921841143-819065a55cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwc2Nobml0emVsJTIwdmVnZXRhYmxlcyUyMGdlcm1hbnxlbnwxfHx8fDE3NzYyNzg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Favorito',
        disponible: true,
      },
      {
        nombre: 'Pollo con Verduras',
        descripcion: 'Suprema de pollo grillada con verduras salteadas al wok.',
        precio: 4100,
        imagen:
          'https://images.unsplash.com/photo-1723531055852-744d14ac00b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RpciUyMGZyeSUyMHZlZ2V0YWJsZXMlMjB3b2t8ZW58MXx8fHwxNzc2Mjc4OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
      {
        nombre: 'Lasagna de Carne',
        descripcion: 'Lasagna casera con carne picada, bechamel y queso gratinado.',
        precio: 4400,
        imagen:
          'https://images.unsplash.com/photo-1560035285-64808ba47bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNhZ25hJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2MjA4MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
    ],
  },
  {
    slug: 'jueves',
    dia: 'Jueves',
    viandas: [
      {
        nombre: 'Costillas BBQ',
        descripcion: 'Costillitas de cerdo con salsa barbacoa casera y papas rusticas.',
        precio: 4800,
        imagen:
          'https://images.unsplash.com/photo-1761314014872-41e958dab41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwcmlicyUyMGJhcmJlY3VlJTIwZ3JpbGxlZHxlbnwxfHx8fDE3NzYyNzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
      {
        nombre: 'Guiso de Carne',
        descripcion: 'Guiso tradicional de carne con papas, zanahoria y batata.',
        precio: 3800,
        imagen:
          'https://images.unsplash.com/photo-1573403707391-3612fb5e1f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwY2Fzc2Vyb2xlJTIwc3RldyUyMHJpY2V8ZW58MXx8fHwxNzc2Mjc4OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Ravioles de Verdura',
        descripcion: 'Ravioles de verdura y ricota con salsa blanca o filetto.',
        precio: 3900,
        imagen:
          'https://images.unsplash.com/photo-1560476652-f5bf553eac22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZpb2xpJTIwcGFzdGElMjBjaGVlc2UlMjBzYXVjZXxlbnwxfHx8fDE3NzYyNzg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Saludable',
        disponible: true,
      },
      {
        nombre: 'Empanadas de Pollo',
        descripcion: 'Empanadas caseras de pollo con verduras, 6 unidades.',
        precio: 3600,
        imagen:
          'https://images.unsplash.com/photo-1766241537477-b552cdff2cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBhbmFkYXMlMjBhcmdlbnRpbmFzJTIwcGFzdHJ5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Light',
        disponible: true,
      },
    ],
  },
  {
    slug: 'viernes',
    dia: 'Viernes',
    viandas: [
      {
        nombre: 'Salmon Grillado',
        descripcion: 'Filet de salmon a la plancha con ensalada y arroz integral.',
        precio: 5500,
        imagen:
          'https://images.unsplash.com/photo-1617146629059-0814c2d61b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwc2FsbW9uJTIwYmFrZWQlMjBoZWFsdGh5fGVufDF8fHx8MTc3NjI3ODkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Especial',
        disponible: true,
      },
      {
        nombre: 'Noquis de Papa',
        descripcion: 'Noquis caseros con salsa a eleccion: tuco, bolognesa o cuatro quesos.',
        precio: 3500,
        imagen:
          'https://images.unsplash.com/photo-1622973536968-3ead9e780960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGJvbG9nbmVzYSUyMGl0YWxpYW4lMjBzcGFnaGV0dGl8ZW58MXx8fHwxNzc2Mjc4OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
      {
        nombre: 'Pollo a la Mostaza',
        descripcion: 'Pechuga de pollo en salsa de mostaza con pure de papas.',
        precio: 4200,
        imagen:
          'https://images.unsplash.com/photo-1736952332338-44dc07283462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXMlMjBob21lbWFkZXxlbnwxfHx8fDE3NzYyNzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Favorito',
        disponible: true,
      },
      {
        nombre: 'Milanesa Completa',
        descripcion: 'Milanesa de carne con huevo frito, papas fritas y ensalada.',
        precio: 4600,
        imagen:
          'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZGVkJTIwY2hpY2tlbiUyMG1pbGFuZXNhJTIwY3V0bGV0fGVufDF8fHx8MTc3NjI3ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Popular',
        disponible: true,
      },
    ],
  },
];

export const MENU_DIAS_MAP = Object.fromEntries(MENU_DIAS.map((menu) => [menu.slug, menu])) as Record<string, MenuDia>;

function getCurrentMenuSlug(date = new Date()) {
  const slugs = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const hoy = slugs[date.getDay()];

  if (hoy === 'sabado' || hoy === 'domingo') {
    return 'lunes';
  }

  return hoy;
}

export function getMenuBySlug(slug: string) {
  return MENU_DIAS_MAP[slug];
}

export function getCurrentDayMenu(date = new Date()): MenuDia {
  const slug = getCurrentMenuSlug(date);
  const menu = getMenuBySlug(slug) ?? MENU_DIAS[0];
  const fecha = date.toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    ...menu,
    fecha,
  };
}

export const MENU_DEL_DIA = getCurrentDayMenu();

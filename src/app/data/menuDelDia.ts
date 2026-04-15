// ========================================
// ARCHIVO PARA ACTUALIZAR EL MENÚ DEL DÍA
// ========================================
// 
// Instrucciones para actualizar el menú:
// 1. Cambiar el día en "dia"
// 2. Modificar las viandas en el array "viandas"
// 3. Para cada vianda, actualizar: nombre, descripción, precio, imagen
// 4. Marcar "disponible: false" si se agotó
//
// Sugerencias de imágenes (usar Unsplash):
// - Buscar en: https://unsplash.com/s/photos/food
// - Formato: https://images.unsplash.com/photo-xxxxx?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080
// ========================================

export interface Vianda {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  badge: 'Popular' | 'Saludable' | 'Favorito' | 'Light' | 'Nuevo' | 'Especial';
  disponible: boolean;
}

export interface MenuDelDia {
  dia: string;
  viandas: Vianda[];
}

// ========================================
// 📝 ACTUALIZAR AQUÍ EL MENÚ DEL DÍA
// ========================================
export const MENU_DEL_DIA: MenuDelDia = {
  dia: 'Miércoles 15 de Abril',
  viandas: [
    {
      nombre: 'Milanesas Napolitanas con Papas',
      descripcion: 'Milanesas de ternera con salsa, jamón y queso gratinado, acompañadas de papas rústicas al horno. Incluye ensalada mixta.',
      precio: 4500,
      imagen: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: 'Popular',
      disponible: true,
    },
    {
      nombre: 'Pollo al Horno con Vegetales',
      descripcion: 'Cuartos de pollo marinado al horno con hierbas, acompañado de vegetales asados (zanahoria, calabaza, pimiento). Opción saludable.',
      precio: 4000,
      imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: 'Saludable',
      disponible: true,
    },
    {
      nombre: 'Lasagna de Carne Casera',
      descripcion: 'Lasagna con salsa bolognesa casera, bechamel cremosa y queso gratinado. Porción abundante lista para hornear.',
      precio: 3800,
      imagen: 'https://images.unsplash.com/photo-1573070640082-32bf80e3efe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: 'Favorito',
      disponible: true,
    },
    {
      nombre: 'Ensalada Caprese Premium',
      descripcion: 'Tomate, mozzarella de búfala, albahaca fresca, aceite de oliva y reducción de balsámico. Con pan casero.',
      precio: 3200,
      imagen: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: 'Light',
      disponible: false, // AGOTADO - cambiar a true cuando vuelva a estar disponible
    },
  ],
};

// ========================================
// EJEMPLOS DE VIANDAS PARA OTROS DÍAS
// ========================================
/*

// EJEMPLO LUNES:
{
  dia: 'Lunes 18 de Abril',
  viandas: [
    {
      nombre: 'Guiso de Lentejas Casero',
      descripcion: 'Guiso tradicional de lentejas con chorizo, panceta, zanahoria y papa. Abundante y reconfortante.',
      precio: 3500,
      imagen: 'https://images.unsplash.com/photo-xxx',
      badge: 'Popular',
      disponible: true,
    },
    {
      nombre: 'Suprema Maryland',
      descripcion: 'Suprema de pollo grillada con banana, durazno y salsa golf, acompañada de puré mixto.',
      precio: 4200,
      imagen: 'https://images.unsplash.com/photo-xxx',
      badge: 'Favorito',
      disponible: true,
    },
  ],
}

// EJEMPLO MARTES:
{
  dia: 'Martes 19 de Abril',
  viandas: [
    {
      nombre: 'Ravioles de Ricota con Salsa',
      descripcion: 'Ravioles caseros rellenos de ricota, con salsa fileto o bolognesa a elección.',
      precio: 3800,
      imagen: 'https://images.unsplash.com/photo-xxx',
      badge: 'Nuevo',
      disponible: true,
    },
    {
      nombre: 'Wok de Vegetales y Pollo',
      descripcion: 'Salteado oriental con pollo, brócoli, zanahoria, morrón y salsa teriyaki. Con arroz.',
      precio: 4300,
      imagen: 'https://images.unsplash.com/photo-xxx',
      badge: 'Saludable',
      disponible: true,
    },
  ],
}

*/

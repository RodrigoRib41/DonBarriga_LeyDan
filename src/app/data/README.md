# 📋 Cómo Actualizar el Menú del Día

Este archivo explica cómo actualizar fácilmente el menú diario de viandas.

## 📁 Archivo a Editar

Abrí el archivo: **`menuDelDia.ts`**

## ✏️ Pasos para Actualizar

### 1. Cambiar el Día
```typescript
dia: 'Jueves 16 de Abril',  // ← Cambiar aquí la fecha
```

### 2. Actualizar las Viandas

Cada vianda tiene estos campos:

```typescript
{
  nombre: 'Nombre del plato',                    // Título de la vianda
  descripcion: 'Descripción completa...',        // Qué incluye el plato
  precio: 4500,                                  // Precio en pesos (sin puntos ni comas)
  imagen: 'https://images.unsplash.com/...',     // URL de la imagen
  badge: 'Popular',                              // Etiqueta (ver opciones abajo)
  disponible: true,                              // true = disponible, false = agotado
}
```

### 3. Opciones de Badge (Etiquetas)

Podés usar estas etiquetas:
- `'Popular'` - Rojo (para platos más pedidos)
- `'Favorito'` - Amarillo/Dorado (para favoritos)
- `'Saludable'` - Verde oliva (para opciones saludables)
- `'Light'` - Verde claro (para opciones light)
- `'Nuevo'` - Azul (para platos nuevos)
- `'Especial'` - Violeta (para platos especiales del día)

### 4. Agregar o Quitar Viandas

**Para agregar una vianda nueva:**
```typescript
viandas: [
  // ... viandas existentes ...
  {
    nombre: 'Nueva Vianda',
    descripcion: 'Descripción...',
    precio: 3800,
    imagen: 'URL_de_imagen',
    badge: 'Nuevo',
    disponible: true,
  },
]
```

**Para quitar una vianda:**
Simplemente eliminá todo el bloque `{ ... }` de esa vianda.

### 5. Marcar como Agotado

Cuando una vianda se agote, cambiá:
```typescript
disponible: false,  // ← Se mostrará como "Agotado"
```

## 🖼️ Dónde Conseguir Imágenes

### Opción 1: Unsplash (Recomendado)
1. Ir a: https://unsplash.com/s/photos/food
2. Buscar el tipo de comida (en inglés): "lasagna", "chicken", "salad", etc.
3. Hacer clic en la imagen que te guste
4. Copiar la URL de la imagen
5. Agregar al final: `?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`

Ejemplo:
```
https://images.unsplash.com/photo-1234567890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080
```

### Opción 2: Fotos Propias
Si tenés fotos propias de las viandas, podés:
1. Subirlas a un servicio como Imgur o usar el sistema de assets del proyecto
2. Usar la URL de la imagen subida

## 📝 Ejemplo Completo de Actualización

```typescript
export const MENU_DEL_DIA: MenuDelDia = {
  dia: 'Jueves 16 de Abril',
  viandas: [
    {
      nombre: 'Guiso de Lentejas',
      descripcion: 'Guiso casero con lentejas, chorizo, panceta y verduras. Porción abundante.',
      precio: 3500,
      imagen: 'https://images.unsplash.com/photo-xxx',
      badge: 'Popular',
      disponible: true,
    },
    {
      nombre: 'Tarta de Verduras',
      descripcion: 'Tarta casera con acelga, cebolla y queso. Incluye ensalada.',
      precio: 3200,
      imagen: 'https://images.unsplash.com/photo-xxx',
      badge: 'Light',
      disponible: true,
    },
  ],
};
```

## 💡 Tips

- ✅ Actualizá el menú **todos los días** para mantener la información fresca
- ✅ Usá descripciones **claras y apetitosas**
- ✅ Poné precios **sin puntos ni comas** (ejemplo: 4500, no 4.500)
- ✅ Marcá como agotado apenas se termine el stock
- ✅ Las imágenes deben ser **apetitosas y de buena calidad**

## 🆘 ¿Problemas?

Si algo no funciona:
1. Revisá que todas las comas estén en su lugar
2. Verificá que los precios sean números sin comillas
3. Asegurate de que `disponible` sea `true` o `false` (sin comillas)
4. Comprobá que todas las URLs de imágenes empiecen con `http://` o `https://`

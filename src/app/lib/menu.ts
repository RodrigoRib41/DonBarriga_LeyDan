export function openWhatsAppMenu(producto?: string) {
  const phoneNumber = '5493498437467';
  const message = encodeURIComponent(
    producto ? `Hola! Me gustaria pedir: ${producto}` : 'Hola! Me gustaria hacer un pedido.',
  );

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

export function getBadgeVariant(badge: string) {
  switch (badge.toLowerCase()) {
    case 'popular':
      return 'bg-primary text-primary-foreground';
    case 'saludable':
      return 'bg-secondary text-secondary-foreground';
    case 'favorito':
      return 'bg-amber-500 text-white';
    case 'light':
      return 'bg-emerald-500 text-white';
    case 'nuevo':
      return 'bg-blue-500 text-white';
    case 'especial':
      return 'bg-purple-500 text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

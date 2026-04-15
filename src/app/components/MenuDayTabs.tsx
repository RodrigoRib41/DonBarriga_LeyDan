import { Link } from 'react-router';
import { MENU_DIAS } from '../data/menus';
import { cn } from './ui/utils';

interface MenuDayTabsProps {
  activeSlug?: string;
}

export function MenuDayTabs({ activeSlug }: MenuDayTabsProps) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      <div className="flex min-w-max gap-2">
        {MENU_DIAS.map((menu) => {
          const isActive = menu.slug === activeSlug;

          return (
            <Link
              key={menu.slug}
              to={`/menu/${menu.slug}`}
              className={cn(
                'inline-flex h-11 items-center justify-center rounded-full border px-4 text-sm font-medium shadow-sm transition-all',
                isActive
                  ? 'border-primary bg-gradient-to-r from-primary to-[#4a45c8] text-primary-foreground shadow-[0_10px_25px_rgba(47,43,168,0.16)]'
                  : 'border-primary/10 bg-white/75 text-foreground hover:border-primary/50 hover:text-primary',
              )}
            >
              {menu.dia}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

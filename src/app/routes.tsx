import { createBrowserRouter, Navigate } from 'react-router';
import { SiteLayout } from './components/SiteLayout';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import MenuDelDia from './pages/MenuDelDia';
import MenuDia from './pages/MenuDia';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Viandas from './pages/Viandas';

export const router = createBrowserRouter([
  {
    Component: SiteLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/productos',
        Component: Productos,
      },
      {
        path: '/menu-del-dia',
        Component: MenuDelDia,
      },
      {
        path: '/menu-semanal',
        Component: () => <Navigate to="/menu-del-dia" replace />,
      },
      {
        path: '/menu/:diaSlug',
        Component: MenuDia,
      },
      {
        path: '/viandas',
        Component: Viandas,
      },
      {
        path: '/nosotros',
        Component: Nosotros,
      },
      {
        path: '/contacto',
        Component: Contacto,
      },
    ],
  },
]);

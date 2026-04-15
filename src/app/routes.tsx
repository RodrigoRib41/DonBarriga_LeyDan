import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import MenuSemanal from './pages/MenuSemanal';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/menu-semanal',
    Component: MenuSemanal,
  },
]);

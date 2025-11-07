import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import CursosPage from './componentes/CursosPage/CursosPage.jsx'
import CursoDetalle from './componentes/CursoDetalle/CursoDetalle.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
    { path: "/cursos", element: <CursosPage /> },
    {path:'/cursos/:id', element:<CursoDetalle/>}

]);

export default function Router() {
  return <RouterProvider router={router} />;
}

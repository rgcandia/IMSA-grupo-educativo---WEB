import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import CursosPage from './componentes/CursosPage/CursosPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
    { path: "/cursos", element: <CursosPage /> },

]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import ItemDetail from './pages/ItemDetail.tsx';
import Confirmation from './pages/Confirmation.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/:itemId',
        element: <ItemDetail />,
      },
      {
        path: '/confirm',
        element: <Confirmation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

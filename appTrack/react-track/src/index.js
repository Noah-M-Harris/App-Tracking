import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Opportunities } from './pages/opportunities';
import { Applications } from './pages/applications';
import { OAs } from './pages/oa';
import { NextSteps } from './pages/nextsteps';
import { NavBar } from './components/navbar/navbar';
import { App } from './App'
import "bootstrap/dist/css/bootstrap.css";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/opportunities',
    element: <Opportunities />
  },
  {
    path: '/applications',
    element: <Applications />
  },
  {
    path: '/oa',
    element: <OAs />
  },
  {
    path: '/next',
    element: <NextSteps />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container-md">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

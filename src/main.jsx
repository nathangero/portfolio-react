import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'


import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/aboutme',
        element: <AboutMePage />
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)

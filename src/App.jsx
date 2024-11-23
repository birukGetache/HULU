import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import AdminPage from './components/Admin'; // Admin page component
import LoginPage from './components/LoginPage';
function App() {
  // Define routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />, // Home component
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/admin',
      element: <AdminPage />, // Admin component
    },
  ]);

  return (
    <>
      <Helmet>
        <title>HULU GENERAL COMMISSIONS</title>
        <meta name="description" content="Learn more about HULU General Commissions." />
        <meta name="keywords" content="about, Hulu, general commissions" />
        <meta property="og:title" content="HULU GENERAL COMMISSIONS" />
        <meta property="og:description" content="Learn more about HULU General Commissions." />
      </Helmet>

      {/* Provide the router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';  // Correct path
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import NotFound from './components/NotFound/NotFound'; // 404 page component
import Login from './components/Login/Login';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login", // Changed from "Login" to "login"
        element: <Login />,
      },
      {
        path: "*",  // Fallback for unknown routes (404 page)
        element: <NotFound />,
      },
      {
        path: "Privacy", // Changed from "Login" to "login"
        element: <Privacy />,
      },
      {
        path: "Terms", // Changed from "Login" to "login"
        element: <Terms />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

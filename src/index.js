import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Home from "./pages/home/index";
import Error from "./components/error/";
//import About from "./pages/about/index";

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
  },
  {
    path: "/",
    errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
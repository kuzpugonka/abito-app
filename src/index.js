import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Privacy } from "./pages/Privacy";
import { Layout } from "./layouts/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

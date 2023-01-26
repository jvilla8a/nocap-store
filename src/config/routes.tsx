import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout";
import ErrorPage from "../pages/404/404";
import App from "../pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

export default router;

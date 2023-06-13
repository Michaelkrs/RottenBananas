// import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Detail from "../pages/DetailPage";
import Layout from "../pages/LayoutPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;

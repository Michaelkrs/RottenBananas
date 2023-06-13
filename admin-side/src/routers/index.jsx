import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/LayoutPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";
import AddMoviePage from "../pages/AddMoviePage";
import EditMoviePage from "../pages/EditMoviePage";
import GenresPage from "../pages/GenresPage";
import AddGenrePage from "../pages/AddGenrePage";
import EditGenrePage from "../pages/EditGenrePage";
import { redirect } from "react-router-dom";
import RegisterPage from "../pages/registerPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddMoviePage />,
      },
      {
        path: "/movies/:id",
        element: <EditMoviePage />,
      },
      {
        path: "/genres",
        element: <GenresPage />,
      },
      {
        path: "/genres/add",
        element: <AddGenrePage />,
      },
      {
        path: "/genres/edit/:id",
        element: <EditGenrePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;

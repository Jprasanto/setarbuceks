import { createBrowserRouter, redirect } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import CategoryPage from "../pages/CategoryPage";
import BaseLayout from "../layouts/BaseLayout";
import RegisAdmForm from "../components/RegisAdmForm";
import LoginForm from "../components/FormLogin";
import AddMenuForm from "../components/AddMenuForm";
import EditMenuForm from "../components/EditMenuForm";
import AddCategoryForm from "../components/AddCategoryForm";
import EditCategoryForm from "../components/EditCategoryForm";
import MenuDetail from "../pages/MenuDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <MenuPage />,
        path: "",
      },
    ],
  },
  {
    path: "/:id",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <MenuDetail />,
        path: "",
      },
    ],
  },
  {
    path: "/category",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <CategoryPage />,
        path: "",
      },
    ],
  },
  {
    path: "/adm-regis",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <RegisAdmForm />,
        path: "",
      },
    ],
  },
  {
    path: "/adm-login",
    element: <BaseLayout />,
    children: [
      {
        element: <LoginForm />,
        path: "",
      },
    ],
  },
  {
    path: "/add",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <AddMenuForm />,
        path: "",
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <EditMenuForm />,
        path: "",
      },
    ],
  },
  {
    path: "/category/add",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <AddCategoryForm />,
        path: "",
      },
    ],
  },
  {
    path: "/category/edit/:id",
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        throw redirect('/adm-login')
      }
      return null
    },
    children: [
      {
        element: <EditCategoryForm />,
        path: "",
      },
    ],
  },
]);

export default router;

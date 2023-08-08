import { createBrowserRouter } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import CategoryPage from "../pages/CategoryPage";
import BaseLayout from "../layouts/BaseLayout";
import RegisAdmForm from "../components/RegisAdmForm";
import LoginForm from "../components/FormLogin";
import AddMenuForm from "../components/AddMenuForm";
import EditMenuForm from "../components/EditMenuForm";
import AddCategoryForm from "../components/AddCategoryForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        element: <MenuPage />,
        path: "",
      },
    ],
  },
  {
    path: "/category",
    element: <BaseLayout />,
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
    children: [
      {
        element: <AddMenuForm />,
        path: "",
      },
    ],
  },
  {
    path: "/edit",
    element: <BaseLayout />,
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
    children: [
      {
        element: <AddCategoryForm />,
        path: "",
      },
    ],
  },
]);

export default router;

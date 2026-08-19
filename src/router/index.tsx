import { createBrowserRouter, Navigate } from "react-router-dom";
import Products from "../Pages/Products/Products";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
  },
  {
    path: "*",
    element: <div>Страница не найдена!</div>,
  },
]);

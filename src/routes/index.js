import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Order from "../pages/Order";
import ProductDetail from "../pages/ProductDetail";
import ProductPage from "../pages/ProductPage";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Verification from "../pages/Verification";
import CategoryPage from "../pages/CategoryPage";
import SubCategoryPage from "../pages/SubCategoryPage";
import Cart from "../pages/Cart";
import CheckoutPage from "../pages/CheckoutPage";
import Category from "../pages/Category";
import ForgotPassword from "../pages/ForgotPassword";
import NewPassword from "../pages/NewPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path:"/categories/:categoryName",
    element:<CategoryPage />
  },
  {
    path:"/categories/:categoryName/:subCategory",
    element:<SubCategoryPage/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/checkout",
    element:<CheckoutPage/>
  },
  {
    path:"/categories/:categoryName/:subCategory/product-detail/:id",
    element:<ProductDetail />
  },

  {
    path:"/category",
    element:<Category />
  },

  
]);

export default router;

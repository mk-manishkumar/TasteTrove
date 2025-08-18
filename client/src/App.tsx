import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Category from "./pages/Category";
import Restaurant from "./pages/Restaurant";
import RestaurantDetails from "./pages/RestaurantDetails";
import Food from "./pages/Food";
import FoodDetails from "./pages/FoodDetails";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/categories",
    element: <Category />,
  },
  {
    path: "/restaurants",
    element: <Restaurant />,
  },
  {
    path: "/restaurants/:restaurantid",
    element: <RestaurantDetails />,
  },
  {
    path: "/foods",
    element: <Food />,
  },
  {
    path: "/foods/:foodid",
    element: <FoodDetails />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;

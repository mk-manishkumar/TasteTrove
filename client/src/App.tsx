import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/categories" element={<Category/>}/>
        <Route path="/restaurants" element={<Restaurant/>}/>
        <Route path="/restaurants/:restaurantid" element={<RestaurantDetails/>}/>
        <Route path="/foods" element={<Food/>}/>
        <Route path="/foods/:foodid" element={<FoodDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

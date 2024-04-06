import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddRecipe from "./Components/AddRecipe";
import Saved from "./Components/Saved";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import ViewRecipe from "./Components/ViewRecipe";
import FetchRecipeById from "./Components/FetchRecipeById";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/:id" element={<ViewRecipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

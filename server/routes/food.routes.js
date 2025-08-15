import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import { createFoodController, getAllFoodsController, getSingleFoodController, getFoodByRestaurantController, updateFoodController, deleteFoodController, placeOrderController, orderStatusController } from "../controllers/orderFood.controller.js";

const foodRouter = express.Router();

// CREATE FOOD
foodRouter.post("/create", authMiddleware, createFoodController);

// GET ALL FOODS
foodRouter.get("/getAll", getAllFoodsController);

// GET SINGLE FOOD
foodRouter.get("/get/:id", getSingleFoodController);

// GET FOOD BY RESTAURANT
foodRouter.get("/getByRestaurant/:id", getFoodByRestaurantController);

// UPDATE FOOD
foodRouter.put("/update/:id", authMiddleware, updateFoodController);

// DELETE FOOD
foodRouter.delete("/delete/:id", authMiddleware, deleteFoodController);

// PLACE ORDER
foodRouter.post("/placeorder", authMiddleware, placeOrderController);

// ORDER STATUS
foodRouter.post("/orderStatus/:id", authMiddleware, adminMiddleware, orderStatusController);

export default foodRouter;

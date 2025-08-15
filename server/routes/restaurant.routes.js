import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createRestaurantController, getAllRestaurantController, getRestaurantByIdController, deleteRestaurantController } from "../controllers/restaurant.controller.js";

const restaurantRouter = express.Router();

// CREATE
restaurantRouter.post("/create", authMiddleware, createRestaurantController);

// GET ALL
restaurantRouter.get("/getAll", getAllRestaurantController);

// GET BY ID
restaurantRouter.get("/get/:id", getRestaurantByIdController);

// DELETE
restaurantRouter.delete("/delete/:id", authMiddleware, deleteRestaurantController);

export default restaurantRouter;

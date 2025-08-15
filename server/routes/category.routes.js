import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createCatController, getAllCatController, updateCatController, deleteCatController } from "../controllers/category.controller.js";

const categoryRouter = express.Router();

// CREATE CATEGORY
categoryRouter.post("/create", authMiddleware, createCatController);

// GET ALL CATEGORIES
categoryRouter.get("/getAll", getAllCatController);

// UPDATE CATEGORY
categoryRouter.put("/update/:id", authMiddleware, updateCatController);

// DELETE CATEGORY
categoryRouter.delete("/delete/:id", authMiddleware, deleteCatController);

export default categoryRouter;

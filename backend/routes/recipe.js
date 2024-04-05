import express from "express";
import { addRecipe, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from "../controllers/recipe.js";

import { Authenticate } from "../middlewares/auth.js";

const router = express.Router();

// create recipe
router.post("/add", Authenticate, addRecipe);

// getALlRecipe
router.get("/", getAllRecipe);

// getAllSavedRecipe
router.get("/saved", getSavedRecipe);

// getRecipeByID
router.get("/:id", getRecipeById);

// getRecipeByUserId
router.get("/user/:id", getRecipeByUserId);

// savedRecipeById
router.post("/:id", Authenticate, savedRecipeById);

export default router;

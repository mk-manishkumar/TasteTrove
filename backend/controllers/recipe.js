import { Recipe } from "../models/recipe.js";
import { SavedRecipe } from "../models/savedRecipe.js";

// add recipe
export const addRecipe = async (req, res) => {
  const { title, instruction, ingredent1, ingredent2, ingredent3, ingredent4, quantity1, quantity2, quantity3, quantity4, imgurl } = req.body;

  try {
    const recipe = await recipe.create({ title, instruction, ingredent1, ingredent2, ingredent3, ingredent4, quantity1, quantity2, quantity3, quantity4, imgurl, user: req.user });

    res.json({ message: "Recipe created successfully..!", recipe });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// get all recipe
export const getAllRecipe = async (req, res) => {
  const recipe = await Recipe.find();

  res.json({ recipe });
};

// get single recipe by ID
export const getRecipeById = async (req, res) => {
  const recipeId = req.params.id;

  try {
    let recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.json({ message: "Recipe does not exist" });
    }

    res.json({ message: "Recipe By Id", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};

// get recipe by user ID
export const getRecipeByUserId = async (req, res) => {
  const userId = req.params.id;

  try {
    let recipe = await Recipe.find({ user: userId });

    if (!recipe) {
      return res.json({ message: "Recipe does not exist" });
    }

    res.json({ message: "Recipe By User Id", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};

// save recipe by Recipe ID
export const savedRecipeById = async (req, res) => {
  const recipeId = req.params.id;

  let recipe = await SavedRecipe.findOne({ recipe: recipeId });

  if (recipe) {
    return res.json({ message: "Recipe Already saved" });
  }

  recipe = await SavedRecipe.create({ recipe: recipeId });

  res.json({ message: "Recipe saved successfully" });
};

// get saved recipe
export const getSavedRecipe = async (req, res) => {
  const recipe = await SavedRecipe.find();

  res.json({ recipe });
};

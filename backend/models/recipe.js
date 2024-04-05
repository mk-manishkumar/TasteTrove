import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, require: true },
  instruction: { type: String, require: true },
  ingredent1: { type: String },
  ingredent2: { type: String },
  ingredent3: { type: String },
  ingredent4: { type: String },
  quantity1: { type: String },
  quantity2: { type: String },
  quantity3: { type: String },
  quantity4: { type: String },
  imgurl: { type: String, require: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export const Recipe = mongoose.model("recipe", recipeSchema);

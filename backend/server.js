import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import recipeRouter from "./routes/recipe.js";
import bodyParser from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// userRouter
app.use("/api", userRouter);

// recipeRouter
app.use("/api", recipeRouter);

// dB connect
mongoose
  .connect(process.env.MONGODB_URL, {
    dbName: "TasteTrove",
  })
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => console.log(`Server is running on ${port}`));

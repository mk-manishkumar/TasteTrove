import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDb from "./config/db.js";

// Import routes with updated names
import testRouter from "./routes/test.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import restaurantRouter from "./routes/restaurant.routes.js";
import categoryRouter from "./routes/category.routes.js";
import foodRouter from "./routes/food.routes.js";

// DB connection
connectDb();

// Initialize express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", testRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/food", foodRouter);

// Default route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to TasteTrove API </h1>");
});

// PORT
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

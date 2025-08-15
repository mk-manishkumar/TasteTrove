import express from "express";
import { getUserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

// GET USER
userRouter.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
userRouter.put("/updateUser", authMiddleware, updateUserController);

// PASSWORD UPDATE
userRouter.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
userRouter.post("/resetPassword", authMiddleware, resetPasswordController);

// DELETE USER
userRouter.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

export default userRouter;

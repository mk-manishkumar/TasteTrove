import express from "express";
import { testUserController } from "../controllers/test.controller.js";

const testRouter = express.Router();

// TEST ROUTE
testRouter.get("/test-user", testUserController);

export default testRouter;

import express from "express";
import usersController from "../controllers/users-controller.js";

const userRouter = express.Router();

userRouter.post("/signup", usersController.signUp);
userRouter.get("/", usersController.getAllUsers);

export default userRouter;

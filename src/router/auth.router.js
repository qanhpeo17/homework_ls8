import { Router } from "express";
import authController from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/token", authController.getRefToken);
authRouter.post("/logout", authController.logout);
authRouter.post("/user/forgot-password");
export default authRouter;

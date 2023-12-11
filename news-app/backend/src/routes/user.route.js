import express from "express";
import { isAuth } from "../middlewares/auth.middleware.js";
import { allUsers, userById } from "../controllers/user.controller.js";

const router = express.Router();

//Get all users list
router.get("/all", isAuth, allUsers);

//Get one specific user by Id
router.get("/one/:id", userById);

export default router;

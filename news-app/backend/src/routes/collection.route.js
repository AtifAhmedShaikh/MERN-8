import express from "express";
import { addToCollection, fetchUserCollection, removeToCollection } from "../controllers/collection.controller.js";
import {isAuth} from "../middlewares/auth.middleware.js"
const router=express.Router();

router.get("/all",isAuth,fetchUserCollection);
router.get("/add/:id",isAuth,addToCollection);
router.get("/remove/:id",isAuth,removeToCollection);


export default router;

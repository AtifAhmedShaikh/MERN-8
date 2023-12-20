import express from "express";
import multer from "multer";
import {
    login,
    logout,
    refresh,
    register
} from "../controllers/auth.controller.js";
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/login").post(login);
router.route("/register").post(upload.single("photo"), register);
router.route("/refresh").post(refresh);
router.route("/logout").post(logout);

export default router;

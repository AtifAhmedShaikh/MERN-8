import express from "express";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
    addNewArticle,
    allArticles,
    articleById,
    deleteArticle,
    likeAndDisLikeArticle,
    updateArticle
} from "../controllers/articles.controller.js";
import { isNewChannel } from "../middlewares/channelAuth.middleware.js";

const router = express.Router();
//Get all articles route
router.get("/all", isAuth, allArticles);

//Get one specific article by its ID
router.get("/one/:id", isAuth, articleById);

//Like and dislike article by its Id
router.patch("/like/:id", likeAndDisLikeArticle);
//Create new article by any news channel admins
router.post("/create", isAuth, isNewChannel, addNewArticle);

//Update article by its ID
router.put("/update/:id", isAuth, isNewChannel, updateArticle);

//Delete article by its ID
router.delete("/delete/:id", isAuth, isNewChannel, deleteArticle);

export default router;

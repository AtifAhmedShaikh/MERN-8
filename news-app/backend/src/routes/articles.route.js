import express from "express";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
    addNewArticle,
    allArticles,
    articleById,
    deleteArticle,
    updateArticle,
    likeArticleById,
    disLikeArticleById,
    addSavedArticle,
    userSavedArticles,
    removeFromSaved
} from "../controllers/articles.controller.js";
import { isNewChannel } from "../middlewares/channelAuth.middleware.js";

const router = express.Router();

//Get all articles route
router.get("/all", isAuth, allArticles);

//Get one specific article by its ID
router.get("/one/:id", isAuth, articleById);

//Create new article by news channel
router.post("/create", isAuth, isNewChannel, addNewArticle);

//Update article by its ID
router.put("/update/:id", isAuth, isNewChannel, updateArticle);

//Delete article by its ID
router.delete("/delete/:id", isAuth, isNewChannel, deleteArticle);

//Like article by its Id
router.patch("/like/:id", isAuth, likeArticleById);

//DisLike article by its Id
router.patch("/dislike/:id", isAuth, disLikeArticleById);

router.post("/save/add", isAuth, addSavedArticle);

router.put("/save/remove/:id", isAuth, removeFromSaved);

router.get("/save/all/:id", isAuth, userSavedArticles);

export default router;

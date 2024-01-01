import express from "express";
import {
    isAuthenticated,
    isNewsChannel
} from "../middlewares/Authentication.middleware.js";
import {
    addNewArticle,
    allArticles,
    articleById,
    deleteArticle,
    updateArticle,
    likeArticleById,
    disLikeArticleById,
    fetchArticleComments,
    addComment
} from "../controllers/articles.controller.js";

const router = express.Router();

//Get all articles route
router.route("/all").get(isAuthenticated, allArticles);

//Get one specific article by its ID
router.route("/one/:id").get(isAuthenticated, articleById);

//Create new article by news channel
router.route("/create").post(isAuthenticated, isNewsChannel, addNewArticle);

//Update article by ID
router.route("/update/:id").put(isAuthenticated, isNewsChannel, updateArticle);

//Delete article by ID
router
    .route("/delete/:id")
    .delete(isAuthenticated, isNewsChannel, deleteArticle);

//Like article by ID
router.route("/like/:id").patch(isAuthenticated, likeArticleById);

//DisLike article by ID
router.route("/dislike/:id").patch(isAuthenticated, disLikeArticleById);

//fetch comments of specific article
router
    .route("/comments/articles/:id")
    .get(isAuthenticated, fetchArticleComments);

//Add new comments on specific article
router.route("/comments/add").post(isAuthenticated, addComment);

export default router;

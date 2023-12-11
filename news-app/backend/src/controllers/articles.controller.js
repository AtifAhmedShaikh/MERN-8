/* eslint-disable no-unused-vars */
import { asyncHandler } from "../utils/asyncHandler.js";
import {
    deleteArticleById,
    disLikeTheArticleByUser,
    findArticleById,
    findArticles,
    isLikedArticleByUser,
    likeTheArticleByUser,
    updateArticleById,
    writeArticle
} from "../services/article.service.js";

export const allArticles = asyncHandler(async (req, res, next) => {
    const articles = await findArticles();
    res.status(200).json({ articles });
});

export const articleById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const article = await findArticleById(id);
    res.status(200).json({ article });
});

//store new article in DB from writeArticle function,Integrate channel as a author
export const addNewArticle = asyncHandler(async (req, res, next) => {
    const { newArticle } = req.body;
    const authorId = req.author._id;
    await writeArticle({
        ...newArticle,
        author: authorId
    });
    res.status(201).json({ message: "your new article has successfully !" });
});

export const updateArticle = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { updatedArticle } = req.body;
    await updateArticleById(id, updatedArticle);
    res.status(200).json({ message: "article has successfully updated " });
});

export const deleteArticle = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await deleteArticleById(id);
    res.status(200).json({ message: "article has successfully deleted " });
});

//controller of like and dislike article,
export const likeAndDisLikeArticle = asyncHandler((req, res, next) => {
    const { id: articleId } = req.params;
    const { _id: userId } = req.user;
    const hasLiked = isLikedArticleByUser(articleId, userId);
    //If already liked by user so dislike It, otherwise like this article by userId
    if (!hasLiked) {
        const article = likeTheArticleByUser(articleId, userId);
        res.status(200).json({ message: "Thanks for Good feedback of Like" });
    } else {
        const article = disLikeTheArticleByUser(articleId, userId);
        res.status(200).json({ message: "you dislike this article " });
    }
});

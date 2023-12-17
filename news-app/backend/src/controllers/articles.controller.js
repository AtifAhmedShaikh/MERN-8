/* eslint-disable no-unused-vars */
import { asyncHandler } from "../utils/asyncHandler.js";
import {
    deleteArticleById,
    disLikeTheArticleByUser,
    findArticleById,
    findArticles,
    likeTheArticleByUser,
    updateArticleById,
    writeArticle,
    isArticleLikedByUser,
    saveArticleById,
    findUserSavedArticles
} from "../services/article.service.js";
import SavedArticleModel from "../models/SavedArticle.js";

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
    const { articleData } = req.body;
    const authorId = req.author._id;
    await writeArticle({
        ...articleData,
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

export const likeArticleById = asyncHandler(async (req, res, next) => {
    const { id: articleId } = req.params;
    const { _id: userId } = req.user;
    const hasLiked = await isArticleLikedByUser(articleId, userId);
    if (!hasLiked) {
        const article = await likeTheArticleByUser(articleId, userId);
        res.status(200).json({ message: "your liked the article " });
    } else {
        res.status(400).json({ message: "you already liked this article" });
    }
});

export const disLikeArticleById = asyncHandler(async (req, res, next) => {
    const { id: articleId } = req.params;
    const { _id: userId } = req.user;
    const hasLiked = await isArticleLikedByUser(articleId, userId);
    if (hasLiked) {
        const article = await disLikeTheArticleByUser(articleId, userId);
        res.status(200).json({ message: "you dislike the article" });
    } else {
        res.status(400).json({ message: "you not liked this article" });
    }
});

export const addSavedArticle = asyncHandler(async (req, res, next) => {
    const { articleId } = req.body;
    const { _id: userId } = req.user;
    const isExists = await SavedArticleModel.findOne({ userId, articleId });
    if (isExists) {
        return res
            .status(400)
            .json({ message: "article has already in your collection " });
    }
    const saved = await saveArticleById(articleId, userId);
    res.status(201).json({ saved });
});

export const userSavedArticles = asyncHandler(async (req, res, next) => {
    const { _id: userId } = req.user;
    const saved = await findUserSavedArticles(userId);
    res.status(200).json({ articles: saved });
});

export const removeFromSaved = asyncHandler(async (req, res, next) => {
    const { _id: userId } = req.user;
    const { id: articleId } = req.params;
    const removeItem = await SavedArticleModel.findOneAndDelete({
        userId,
        articleId
    });
    if (!removeItem) {
        return res.status(400).json({ message: "article not found" });
    }
    res.status(200).json({
        message: "remove article from your save collection"
    });
});



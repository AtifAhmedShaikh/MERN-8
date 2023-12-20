import { asyncHandler } from "../utils/asyncHandler";
import CustomError from "../error/CustomError.js";
import {
    saveArticleById,
    SavedArticleModel,
    findUserSavedArticles
} from "../services/article.service.js";
export const addToCollection = asyncHandler(async (req, res) => {
    const { id: articleId } = req.params;
    const { _id: userId } = req.user;
    const isExists = await SavedArticleModel.findOne({ userId, articleId });
    if (isExists) {
        throw new CustomError(409, "article has already in your collection");
    }
    const saved = await saveArticleById(articleId, userId);
    res.status(201).json({ saved });
});

export const fetchUserCollection = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const saved = await findUserSavedArticles(userId);
    res.status(200).json({ articles: saved });
});

export const removeToCollection = asyncHandler(async (req, res) => {
    const { _id: userId } = req.user;
    const { id: articleId } = req.params;
    const removeItem = await SavedArticleModel.findOneAndDelete({
        userId,
        articleId
    });
    if (!removeItem) {
        throw new CustomError(409, "article not found ");
    }
    res.status(200).json({
        message: "remove article from your save collection"
    });
});

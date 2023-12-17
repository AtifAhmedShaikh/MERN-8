import { asyncHandler } from "../utils/asyncHandler";
import {
    saveArticleById,
    SavedArticleModel,
    findUserSavedArticles
} from "../services/article.service.js";
export const addToCollection = asyncHandler(async (req, res) => {
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

export const fetchUserCollection = asyncHandler(async (req, res) => {
    const { _id: userId } = req.user;
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
        return res.status(400).json({ message: "article not found" });
    }
    res.status(200).json({
        message: "remove article from your save collection"
    });
});

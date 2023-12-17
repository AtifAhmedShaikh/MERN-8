import ArticleModel from "../models/Article.model.js";
import SavedArticleModel from "../models/SavedArticle.js";

export const findArticles = async () => {
    return await ArticleModel.find().populate("author");
};

export const findArticleById = async id => {
    return await ArticleModel.findById(id);
};

export const writeArticle = async data => {
    const newArr = new ArticleModel({ ...data });
    const saved = await newArr.save();
    return saved;
};

export const updateArticleById = async (id, updated) => {
    return await ArticleModel.findByIdAndUpdate(id, updated);
};

export const deleteArticleById = async id => {
    return await ArticleModel.findByIdAndDelete(id);
};

export const likeTheArticleByUser = async (articleId, userId) => {
    const article = await findArticleById(articleId);
    article.likes = [...article.likes, userId];
    return await article.save();
};

export const disLikeTheArticleByUser = async (articleId, userId) => {
    const article = await findArticleById(articleId);
    article.likes = [...article.likes].filter(like => like != userId);
    return await article.save();
};

export const findChannelArticles = async channelId => {
    return await ArticleModel.find({ author: channelId });
};

export const isArticleLikedByUser = async (articleId, userId) => {
    const article = await findArticleById(articleId);
    return article.likes.includes(userId);
};

export const saveArticleById = async (articleId, userId) => {
    const article = new SavedArticleModel({
        articleId,
        userId
    });
    return await article.save();
};
export const findUserSavedArticles = async userId => {
    return await SavedArticleModel.find({ userId }).populate(
        "articleId userId"
    );
};
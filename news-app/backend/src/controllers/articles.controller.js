import { asyncHandler } from "../utils/asyncHandler.js";
import {
    deleteArticleById,
    disLikeTheArticleByUser,
    findArticleById,
    findArticles,
    likeTheArticleByUser,
    updateArticleById,
    createArticle,
    findArticleCommentsById,
    addCommentOnArticle
} from "../services/article.service.js";

export const allArticles = asyncHandler(async (req, res) => {
    const articles = await findArticles();
    res.status(200).json({ articles });
});

export const articleById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const article = await findArticleById(id);
    res.status(200).json({ article });
});

//store new article in DB from writeArticle function,Integrate channel as a author
export const addNewArticle = asyncHandler(async (req, res) => {
    const { articleData } = req.body;
    const authorId = req.author._id;
    await createArticle({
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

export const likeArticleById = asyncHandler(async (req, res) => {
    const { id: articleId } = req.params;
    const { _id: userId } = req.user;
    await likeTheArticleByUser(articleId, userId);
    res.status(200).json({ message: "your liked the article " });
});

export const disLikeArticleById = asyncHandler(async (req, res) => {
    const { id: articleId } = req.params;
    const { _id: userId } = req.user;
    await disLikeTheArticleByUser(articleId, userId);
    res.status(200).json({ message: "you dislike the article" });
});

//fetch all comments of specific article by Id
export const fetchArticleComments = asyncHandler(async (req, res) => {
    const { id: articleId } = req.params;
    const comments = await findArticleCommentsById(articleId);
    res.status(200).json({ comments });
});

//add new comment on specific article
export const addComment = asyncHandler(async (req, res) => {
    const { articleId, commentText } = req.body;
    const { _id: userId } = req.user;
    const createdComment = await addCommentOnArticle({
        articleId,
        commentText,
        userId
    });
    res.status(200).json({
        comment:createdComment,
        message: "comment added successfully "
    });
});

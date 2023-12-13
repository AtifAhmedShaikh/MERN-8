import api from "../config/api.config";
import { asyncHandler } from "../utils/asyncHandler";

export const fetchArticles = async () => {
  const response = await asyncHandler(async () => {
    return await api.get("/api/v1/articles/all");
  });
  return response;
};

export const fetchArticleById = async (articleId) => {
  const response = await asyncHandler(async () => {
    return await api.get(`/api/v1/articles/one/${articleId}`);
  });
  return response;
};

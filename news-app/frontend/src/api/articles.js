import api from "../config/api.config";
import { asyncHandler } from "../utils/asyncHandler";

export const fetchArticles = async () => {
  const response = await asyncHandler(async () => {
    const res = await api.get("/api/v1/articles/all");
    return res;
  });
  if (response) return response.data;
  return null;
};

export const fetchArticleById = async (articleId) => {
  const response = await asyncHandler(async () => {
    const res = await api.get(`/api/v1/articles/one/${articleId}`);
    return res;
  });
  if (response) return response.data;
  return null;
};

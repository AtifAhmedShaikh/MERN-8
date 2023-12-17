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

export const createArticleByChannel = async (articleData) => {
  const response = await asyncHandler(async () => {
    return await api.post("/api/v1/articles/create", {
      articleData,
    });
  });
  return response;
};

export const updateArticleByChannel = async (updatedArticle) => {
  const response = await asyncHandler(async () => {
    return await api.put(`/api/v1/articles/update/${updatedArticle._id}`, {
      updatedArticle,
    });
  });
  return response;
};
//Like article by Id
export const likeArticleById = async (articleId) => {
  const response = await asyncHandler(async () => {
    return await api.patch(`/api/v1/articles/like/${articleId}`);
  });
  return response;
};
//Dislike article by Id
export const disLikeArticleById = async (articleId) => {
  const response = await asyncHandler(async () => {
    return await api.patch(`/api/v1/articles/dislike/${articleId}`);
  });
  return response;
};

export const deleteArticleById = async (articleId) => {
  const response = await asyncHandler(async () => {
    return await api.delete(`/api/v1/articles/delete/${articleId}`);
  });
  return response;
};
//fetch user collection which contains all saved articles of user
export const fetchUserCollection = async (userId) => {
  const response = await asyncHandler(async () => {
    return await api.get(`/api/v1/articles/save/all/${userId}`);
  });
  return response;
};

//add article into user collection
export const addToCollection = async (articleId) => {
  const response = await asyncHandler(async () => {
    return await api.post("/api/v1/articles/save/add", {
      articleId,
    });
  });
  return response;
};

//remove article from user collection
export const removeToCollection = async (articleId) => {
  const response = await asyncHandler(async () => {
    return await api.put(`/api/v1/articles/save/remove/${articleId}`);
  });
  return response;
};

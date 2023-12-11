import api from "../config/api.config";
import { asyncHandler } from "../utils/asyncHandler";

export const registerUser = async (userData) => {
  const response = await asyncHandler(async () => {
    const res = await api.post("/api/v1/auth/register", { userData });
    return res;
  });
  if (response) return response.data;
  return null;
};

export const loginUser = async (userData) => {
  const response = await asyncHandler(async () => {
    const res = await api.post("/api/v1/auth/login", userData);
    return res;
  });
  if (response) return response.data;
  return null;
};

export const refreshAutoLogin = async () => {
  const response = await asyncHandler(async () => {
    const res = await api.post("/api/v1/auth/refresh");
    return res;
  });
  if (response) return response.data;
  return null;
};

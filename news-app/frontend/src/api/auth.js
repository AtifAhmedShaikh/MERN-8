import api from "../config/api.config";
import { asyncHandler } from "../utils/asyncHandler";

export const registerUser = async (userData) => {
  const response = await asyncHandler(async () => {
    return await api.post("/api/v1/auth/register", { userData });
  });
  return response;
};

export const loginUser = async (userData) => {
  const response = await asyncHandler(async () => {
    return await api.post("/api/v1/auth/login", userData);
  });
  return response;
};

export const refreshAutoLogin = async () => {
  const response = await asyncHandler(async () => {
    return await api.post("/api/v1/auth/refresh");
  });
  return response;
};


export const logoutUser=async()=>{
  const response=await asyncHandler(async()=>{
    return await api.post("/api/v1/auth/logout");
  });
  return response;
}
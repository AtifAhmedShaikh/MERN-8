import api from "../config/api.config";
import { asyncHandler } from "../utils/asyncHandler";

export const fetchChannelsList = async () => {
  const response = await asyncHandler(async () => {
    return await api.get("/api/v1/channels/all");
  });
  return response;
};

export const fetchChannelProfile = async (channelId) => {
  const response = await asyncHandler(async () => {
    return await api.get(`api/v1/channels/profiles/${channelId}`);
  });
  return response;
};

export const followToChannel = async (channelId) => {
  const response = await asyncHandler(async () => {
    return await api.patch(`/api/v1/channels/follow/${channelId}`);
  });
  return response;
};
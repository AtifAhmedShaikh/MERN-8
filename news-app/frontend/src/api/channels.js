import api from "../config/api.config";
import { asyncHandler } from "../utils/asyncHandler";

export const fetchChannelsList = async () => {
  const response = await asyncHandler(async () => {
    const res = await api.get("/api/v1/channels/all");
    return res;
  });
  if (response) return response.data;
  return null;
};

export const followToChannel = async (channelId) => {
  try {
    const response = await api.post(`/api/v1/channels/follow/${channelId}`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

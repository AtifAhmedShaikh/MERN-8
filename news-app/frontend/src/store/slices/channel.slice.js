import { createSlice } from "@reduxjs/toolkit";
import { channelReducer } from "../reducers/channels.reducer.js";
const initialState = {
  data: [],
  loading: true,
};
const channelSlice = createSlice({
  initialState,
  name: "channels",
  reducers: channelReducer,
});

export const { updateChannelsList } = channelSlice.actions;
export default channelSlice.reducer;

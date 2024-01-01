import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articleReducer from "../store/slices/article.slice.js";
import authReducer from "../store/slices/auth.slice.js";
import channelReducer from "../store/slices/channel.slice.js";
const root = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  channelsList: channelReducer,
});

const store = configureStore({
  reducer: root,
});

export default store;

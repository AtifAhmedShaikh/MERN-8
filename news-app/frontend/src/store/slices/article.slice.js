import { createSlice } from "@reduxjs/toolkit";
import { articlesReducers } from "../reducers/articles.reducer.js";
const initialState = {
  data: [],
  loading: true,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: articlesReducers, //object of all reducers
});
export const { updateArticles } = articlesSlice.actions;
export default articlesSlice.reducer;

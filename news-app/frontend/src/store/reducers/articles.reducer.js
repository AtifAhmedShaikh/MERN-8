export const articlesReducers = {
  updateArticles: (state, action) => {
    state.data = action.payload.data;
    state.loading = action.payload.loading;
  },
  resetArticles: () => {},
};

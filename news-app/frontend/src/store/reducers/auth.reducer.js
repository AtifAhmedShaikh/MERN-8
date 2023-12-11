export const authReducer = {
  login: (state, action) => {
    state.user = action.payload;
    state.status = true;
  },
  logout: () => {},
  refresh: () => {},
};

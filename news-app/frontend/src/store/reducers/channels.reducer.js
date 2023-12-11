export const channelReducer = {
  updateChannelsList: (state, action) => {
    state.data = action.payload.data;
    state.loading = action.payload.loading;
  },
};

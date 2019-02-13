export default {
  state: {
    knightPosition: [1, 7],
  },
  subscriptions: {},
  effects: {},
  reducers: {
    update_state: function(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

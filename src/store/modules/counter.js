import { reactive } from "vue";

const state = reactive({
  counter: 0,
});

const actions = {
  increase: ({ commit }) => commit("increaseCounter"),
  decrease: ({ commit }) => commit("decreaseCounter"),
};

const mutations = {
  increaseCounter(state) {
    state.counter++;
  },

  decreaseCounter(state) {
    state.counter--;
  },
};

export default {
  state,
  actions,
  mutations
};

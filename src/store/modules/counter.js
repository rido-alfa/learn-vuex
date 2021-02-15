import { reactive } from "vue";

const state = reactive({
  counter: 0,
  colorCode: "blue",
});

const getters = {
  counterSquared: (state) => state.counter * state.counter,
};

// const actions = {
//   // increase: ({ commit }) => commit("increaseCounter"),
//   // decrease: ({ commit }) => commit("decreaseCounter"),
//   // setColorCode: ({commit}, val) => commit('setColor', val)
// };

const mutations = {
  increaseCounter(state) {
    state.counter++;
  },

  decreaseCounter(state) {
    state.counter--;
  },

  setColorCode(state, val) {
    state.colorCode = val
  }
};

const methods= {
  setColorCode(val) {
    state.colorCode = val
  }
}

export default {
  state,
  // actions,
  getters,
  mutations,
  methods
};

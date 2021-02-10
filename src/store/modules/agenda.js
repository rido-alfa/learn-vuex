const state = {
  isLoading: false,
  listAgenda: [
    { hari: "senin", kegiatan: "ngoding" },
    { hari: "selasa", kegiatan: "mancing" },
    { hari: "rabu", kegiatan: "ngopi doang" },
  ],
};

const actions = {
  simpanAgenda({ commit, state }, form) {
    state.isLoading = true;
    setTimeout(() => {
      commit("konfirmasi_agenda", form);
      state.isLoading = false;
    }, 500);
  },
};

const mutations = {
    konfirmasi_agenda: (state, form) => {
        state.listAgenda.push(form)
    }
};

export default {
  state,
  actions,
  mutations,
};

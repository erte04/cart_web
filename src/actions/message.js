const state = {
  visible: false,
  content: ""
};

const actions = {
  showMessage({ commit }, content) {
    commit("setMessage", content);
  },
  hideMessage({ commit }) {
    commit("resetMessage");
  }
};

const mutations = {
  setMessage(state, content) {
    state.visible = true;
    state.content = content;
  },

  resetMessage(state) {
    state.visible = false;
    state.content = "";
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

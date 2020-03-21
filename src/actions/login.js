import { Parameters } from "../parameters";
import axios from "axios";

const state = {
  user: {
    username: "developer",
    password: "secret",
    token: "",
    refreshToken: ""
  },
  isLogged: false
};

const actions = {
  checkLogin({ commit }, payload) {
    axios
      .post(Parameters.url + `/user`, {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        commit("setUser", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const mutations = {
  setUser(state, { token, refreshToken }) {
    state.user = { ...state.user, token, refreshToken };
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

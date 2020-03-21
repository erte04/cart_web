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
        this.dispatch(
          "message/showMessage",
          "Błąd! Podałeś błędny login lub hasło!"
        );
        commit("setUser", { token: "", refreshToken: "" });
        console.log(e);
      });
  }
};

const mutations = {
  setUser(state, { token, refreshToken }) {
    state.user = { ...state.user, token, refreshToken };
    if (token) {
      state.isLogged = true;
    } else {
      state.isLogged = false;
    }
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

import axios from "axios";
import { Parameters } from "../parameters";

const state = {
  list: []
};

const actions = {
  getProducts({ commit }, token) {
    console.log("token", token);

    axios
      .get(Parameters.url + `/product`, { params: { token } })
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const mutations = {
  setProducts(state, products) {
    state.list = products;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

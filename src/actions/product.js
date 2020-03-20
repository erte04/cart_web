import axios from "axios";

const state = {
  list: []
};

const actions = {
  getProducts({ commit }) {
    axios
      .get(`http://localhost/product`)
      .then(response => {
        console.log("response", response.data);
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

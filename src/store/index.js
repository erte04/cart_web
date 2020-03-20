import Vue from "vue";
import Vuex from "vuex";
import cart from "../actions/cart";
import product from "../actions/product";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    product
  }
});

const state = {
  list: []
};

const actions = {
    addProductToCart({ state, commit }, product) {
    const cartItem = state.list.find(item => item.id === product.id);
    if (!cartItem) {
      product = { ...product, stock: 1 };
      commit("pushProductToCart", product);
    } else {
      if (cartItem.stock < cartItem.quantity) {
        commit("incStock", cartItem);
      }
    }
  },
  changeStock({ state, commit }, product) {
    const cartItem = state.list.find(item => item.id === product.id);

    let stock = parseFloat(cartItem.stock);
    if (stock > cartItem.quantity) {
      commit("setStock", { product: cartItem, stock: cartItem.quantity });
    } else if (stock <= 0) {
      commit("setStock", { product: cartItem, stock: 0 });
    }
  },

  deleteProduct({ state, commit }, product) {
    const cartItem = state.list.find(item => item.id === product.id);
    if (cartItem) {
      commit("deleteProductFromCart", product);
    }
  }
};

// mutations
const mutations = {
  pushProductToCart(state, product) {
    state.list.push(product);
  },

  incStock(state, { id }) {
    const cartItem = state.list.find(item => item.id === id);
    cartItem.stock++;
  },

  setStock(state, payload) {
    console.log(payload.product, payload.stock);

    const cartItem = state.list.find(item => item.id === payload.product.id);
    cartItem.stock = payload.stock;
  },
  deleteProductFromCart(state, { id }) {
    const cartItemIdx = state.list.findIndex(item => item.id === id);
    state.list.splice(cartItemIdx, 1);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

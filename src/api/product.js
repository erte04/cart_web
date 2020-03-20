import axios from "axios";

export default {
  getProducts(callback) {
    return axios
      .get(`http://localhost/product`)
      .then(response => {
        callback(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

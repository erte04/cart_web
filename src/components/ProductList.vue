<template>
  <div class="products">
    <h1>Produkty</h1>
    <div v-if="products && products.length">
      <v-row v-for="product of products" :key="product.id" class="product">
        <v-col cols="1">
          <strong>{{ product.id }}</strong>
        </v-col>
        <v-col cols="2">
          <v-img :src="product.image"></v-img>
        </v-col>
        <v-col cols="4">
          {{ product.name }}
        </v-col>
        <v-col cols="4">
          <v-col cols="8"> Cena: {{ product.price }}zł</v-col>
          <v-col cols="8"> Ilość w magazynie: {{ product.quantity }} </v-col>
          <v-col cols="8">
            <v-btn small color="primary" @click="addProductToCart(product)"
              >Dodaj do koszyka</v-btn
            >
          </v-col>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    products: state => state.product.list
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
    this.$store.dispatch("product/getProducts");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.product {
  background-color: #81ecec;
  border-radius: 20px;
  padding: 20px;
  margin: 10px 0;
}

.product .v-image {
  border-radius: 5px;
}
</style>

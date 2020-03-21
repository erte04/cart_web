<template>
  <div class="cart">
    <h2>Koszyk</h2>

    <div v-if="isLogged">
      <div v-if="products && products.length">
        <v-row v-for="product of products" :key="product.id" class="product">
          <v-col cols="1">
            <strong>{{ product.id }}</strong>
          </v-col>
          <v-col cols="3">
            <v-img :src="product.image"></v-img>
          </v-col>
          <v-col cols="2">
            {{ product.name }}
          </v-col>
          <v-col cols="4">
            <v-col cols="8">
              <v-text-field
                min="1"
                v-bind:max="product.quantity"
                v-model="product.stock"
                type="number"
                label="Ilość"
                @change="changeStock(product)"
              ></v-text-field>
            </v-col>
          </v-col>
          <v-col cols="2">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="red"
              @click="deleteProduct(product)"
            >
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else>
      Zaloguj się aby mieć dostęp do koszyka
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    products: state => state.cart.list,
    isLogged: state => state.login.isLogged
  }),
  methods: mapActions("cart", ["changeStock", "deleteProduct"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

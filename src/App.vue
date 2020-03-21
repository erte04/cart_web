<template>
  <v-app>
    <Message />
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <Login />
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content
      ><v-container fluid>
        <v-row>
          <v-col cols="8">
            <v-card class="ma-12 pa-12">
              <ProductList />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="ma-12 pa-12"><Cart /></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Message from "./components/Message";

export default {
  name: "App",

  components: {
    ProductList,
    Cart,
    Login,
    Message
  },

  data: () => ({
    //
  })
};
</script>

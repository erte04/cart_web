<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

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
          <v-col cols="4"> </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ProductList from "./components/ProductList";

export default {
  name: "App",

  components: {
    ProductList
  },

  data: () => ({
    //
  })
};
</script>

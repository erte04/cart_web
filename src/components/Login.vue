<template>
  <div class="login">
    <v-row>
      <v-col cols="3">
        <h3>Logowanie</h3>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="login.username" label="Login"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="login.password" label="Password"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn small color="green" @click="checkLogin(login)"
          >Zaloguj się</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    login: state => state.login.user
  }),
  methods: mapActions("login", ["checkLogin"]),

  beforeUpdate() {
    console.log("sssssssssss");
    this.$store.dispatch(
      "product/getProducts",
      this.$store.state.login.user.token
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-top: 20px;
}
</style>

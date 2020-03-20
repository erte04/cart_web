<template>
  <div class="products">
    <h1>Produkty</h1>
    <div v-if="posts && posts.length">
      <v-row v-for="post of posts" :key="post.id">
        <v-col cols="1">
          <strong>{{ post.id }}</strong>
        </v-col>
        <v-col cols="3">
          <v-img :src="post.image" width="100px" height="100px"></v-img>
        </v-col>
        <v-col cols="8">
          {{ post.name }}
        </v-col>
        <v-col cols="12">
          <v-btn small color="primary">Dodaj do koszyka</v-btn>
        </v-col>
      </v-row>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(`http://localhost/product`, {
        withCredentials: true,
        auth: {
          username: "myusername",
          password: "mypassword"
        }
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

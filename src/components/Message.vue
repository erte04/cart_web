<template>
  <v-snackbar v-model="message.visible" top>
    {{ message.content }}
    <v-btn color="pink" text @click="hideMessage">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    message: state => state.message
  }),
  methods: mapActions("message", ["hideMessage"])
};
</script>

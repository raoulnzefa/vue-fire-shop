<template>
  <v-snackbar :timeout="timeout" v-model="showAlert">
    {{message}}
    <v-btn flat dark color="primary" @click="showAlert = false">{{$t('messages.close')}}</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    show: Boolean,
    timeout: Number,
    message: String
  },
  data() {
    return {
      mode: "horizontal",
      showAlert: this.show
    };
  }
};
</script>

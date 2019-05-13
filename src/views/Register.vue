<template>
  <div>
    <AuthFormComponent action="register" v-on:process="register($event)"/>
    <AlertComponent v-if="show" :show="show" :message="message" :timeout="timeout"/>
  </div>
</template>

<script>
import AlertComponent from "../components/Alert";
import AuthFormComponent from "../components/forms/Auth";
export default {
  components: {
    AlertComponent,
    AuthFormComponent
  },
  data() {
    return {
      show: false,
      message: "Hello world!",
      timeout: 5000
    };
  },
  methods: {
    register(user) {
      console.log(user);
    }
  }
};
</script>

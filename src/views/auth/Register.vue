<template>
  <div>
    <AuthFormComponent action="register" v-on:process="register($event)"/>
    <AlertComponent v-if="show" :show="show" :message="message" :timeout="timeout"/>
  </div>
</template>

<script>
import AlertComponent from "../../components/Alert";
import AuthFormComponent from "../../components/forms/Auth";
import { db } from "../../main";

export default {
  components: {
    AlertComponent,
    AuthFormComponent
  },
  data() {
    return {
      show: false,
      message: "",
      timeout: 5000
    };
  },
  methods: {
    register(user) {
      this.$store
        .dispatch("register", user)
        .then(({ user: { email, uid } }) => {
          const role = "customer";
          db.collection("users")
            .doc(uid)
            .set({ uid, email, role })
            .then(() => {
              this.$store.commit("setRole", role);
              this.$router.push("/");
            });
        })
        .catch(err => {
          this.message = err.message;
          this.show = true;
          setTimeout(() => {
            this.show = false;
          }, this.timeout);
        });
    }
  }
};
</script>

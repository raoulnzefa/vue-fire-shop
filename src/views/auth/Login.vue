<template>
  <div>
    <AuthFormComponent action="login" v-on:process="login($event)"/>
    <AlertComponent v-if="show" :show="show" :message="message" :timeout="timeout"/>
  </div>
</template>

<script>
import AuthFormComponent from "../../components/forms/Auth";
import AlertComponent from "../../components/Alert";
import { db } from "../../main";

export default {
  components: { AuthFormComponent, AlertComponent },
  data() {
    return {
      show: false,
      message: "",
      timeout: 5000
    };
  },
  methods: {
    login(user) {
      this.$store
        .dispatch("login", user)
        .then(({ user: { uid, email } }) => {
          db.collection("users")
            .doc(uid)
            .onSnapshot(snapshot => {
              this.$store.commit("setRole", snapshot.data().role);
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

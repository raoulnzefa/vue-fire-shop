<template>
  <div>
    <v-responsive>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-1">{{$t(`${action}.title`)}}</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-form id="nativeForm" v-model="valid">
      <v-text-field v-model="email" :label="$t('auth.email')" :rules="emailRules" name="email"></v-text-field>

      <v-text-field
        v-model="password"
        :label="$t('auth.password')"
        :rules="passwordRules"
        name="password"
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="passwordConfirmation"
        :label="$t('auth.password_confirmation')"
        :rules="passwordConfirmationRules"
        name="password_confirmation"
        type="password"
        v-if="action === 'register'"
      ></v-text-field>

      <v-btn @click="submit" darl :disabled="!valid" color="primary">{{$t(`${action}.submit`)}}</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    action: ""
  },
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || this.$t("validations.required", { field: "E-mail" }),
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          this.$t("validations.email", { field: "E-mail" })
      ],
      password: "",
      passwordRules: [
        v => !!v || this.$t("validations.required", { field: "Password" }),
        v =>
          v.length >= 6 ||
          this.$t("validations.minLength", { field: "Password", length: 6 })
      ],
      passwordConfirmation: "",
      passwordConfirmationRules: [
        v => !!v || this.$t("validations.required", { field: "Password" }),
        v =>
          v.length >= 6 ||
          this.$t("validations.minLength", { field: "Password", length: 6 }),
        v => v === this.password || this.$t("validations.password_confirmation")
      ]
    };
  },
  methods: {
    submit() {
      this.$emit("process", { email: this.email, password: this.password });
    }
  }
};
</script>

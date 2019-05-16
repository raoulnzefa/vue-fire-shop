<template>
  <v-app>
    <v-content v-if="$store.state.loaded">
      <NavbarComponent v-if="role === 'guest'"/>
      <AdminNavbarComponent v-if="role === 'admin'"/>
      <v-container class="mt-3 mb-3">
        <v-alert
          :type="$store.state.alert.type"
          :value="$store.state.alert.show"
        >{{ $store.state.alert.message }}</v-alert>
        <router-view/>
      </v-container>
      <FooterComponent/>
    </v-content>
    <v-container v-else fill-height>
      <v-layout flex align-center justify-center>
        <v-progress-circular indeterminate :size="100" :width="10" color="blue"></v-progress-circular>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/shared/Navbar";
import FooterComponent from "./components/shared/Footer";
import AdminNavbarComponent from "./components/shared/AdminNavbar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { NavbarComponent, FooterComponent, AdminNavbarComponent },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["role"])
  }
};
</script>

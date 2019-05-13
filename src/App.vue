<template>
  <v-app>
    <v-content>
      <NavbarComponent/>
      <v-container class="mt-3 mb-3">
        <router-view/>
      </v-container>
      <FooterComponent/>
    </v-content>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/shared/Navbar";
import FooterComponent from "./components/shared/Footer";

export default {
  name: "App",
  components: { NavbarComponent, FooterComponent },
  data() {
    return {};
  }
};
</script>

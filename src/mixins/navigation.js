export default {
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$store.commit("setUser");
        this.$store.commit("setRole", "guest");
        this.$router.push("/login");
      });
    }
  }
};

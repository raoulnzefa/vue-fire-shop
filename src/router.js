import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Register from "./views/Register";
import Login from "./views/Login.vue";
import store from "./store";

Vue.use(Router);

const beforeLogin = (to, from, next) => {
  if (store.state.authModule.logged) {
    return next({ path: "/" });
  }

  return next();
};

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { Auth: false, title: "Home" }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { Auth: false, title: "Register" },
      beforeEnter(to, from, next) {
        return beforeLogin(to, from, next);
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { Auth: false, title: "Login" },
      beforeEnter(to, from, next) {
        return beforeLogin(to, from, next);
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.Auth && !store.state.authModule.logged && store.state.loaded) {
    next({ path: "/login" });
  } else {
    if (to.meta.role) {
      if (store.state.loaded && to.meta.role !== store.state.authModule.role) {
        return next({ path: "/" });
      }
    }
    next();
  }
});

export default router;

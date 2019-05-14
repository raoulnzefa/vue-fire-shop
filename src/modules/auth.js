import firebase from "firebase";

export default {
  state: {
    user: null,
    role: "guest",
    logged: false
  },
  actions: {
    register({ commit }, user) {
      return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    },
    login({ commit }, user) {
      return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    },
    logout() {
      return firebase.auth().signOut();
    }
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        state.user = {
          uid: user.uid,
          email: user.email
        };

        state.logged = true;
      } else {
        state.user = null;
        state.logged = false;
      }
    },
    setRole(state, role) {
      state.role = role;
    }
  },
  getters: {
    logged(state) {
      return !!state.logged;
    },
    role(state) {
      return state.role;
    },
    isCustomer(state) {
      return state.role === "customer";
    }
  }
};

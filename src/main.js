import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

// firebase setup
import firebase from 'firebase';
import 'firebase/firestore';
import fireConfig from './config/firebase';
firebase.initializeApp(fireConfig);
export const db = firebase.firestore();

// i18n setup
import i18n from './config/i18n';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app');

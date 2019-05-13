import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Register from './views/Register';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: { Auth: false, title: 'Home' }
		},
		{
			path: '/register',
			name: 'Register',
			component: Register,
			meta: { Auth: false, title: 'Register' }
		}
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (about.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		// }
	]
});

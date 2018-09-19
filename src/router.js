import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import About from './views/About.vue';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import Home from './components/home';
import MainNav from './components/main-nav';

Vue.use(VueRouter);
Vue.use(VueResource)


const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav
  }
}).$mount('#app')
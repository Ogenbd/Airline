import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';

import Home from './components/home/home.vue';
import MainNav from './components/main-nav/main-nav.vue';

import Plane from './components/plane/plane.vue'
import Flight from './components/flight/flight.vue'
import Passenger from './components/passenger/passenger.vue';
import BookFlight from './components/book-flight/book-flight.vue';

Vue.use(VueRouter);
Vue.use(VueResource)
Vue.use(VeeValidate);

Vue.http.options.root = 'http://localhost/airline/api'

const routes = [{
  path: '/',
  component: Home
},{
  path: '/passenger',
  component: Passenger
},{
  path: '/plane',
  component: Plane
},{
  path: '/bookflight',
  component: BookFlight
},{
  path: '/flight',
  component: Flight
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
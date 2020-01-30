import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import store from './store/store';
import VueResource from 'vue-resource';
import babelPolyfill from 'babel-polyfill'
import axios from 'axios';



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-330f5.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString(); // this tolocaleString will perform it to a nice looking digit
});

const router = new VueRouter({
  mode: 'history',
  routes: routes
})
new Vue({
  el: '#app',
  router: router, // this is the new VueRouter we pass here
  store: store,
  render: h => h(App) 
})

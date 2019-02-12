import Vue from 'vue';
import App from './App.vue';
import { Script } from 'vm';
import {store} from './store/store.js';
Vue.prototype.$eventbus  = new Vue();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

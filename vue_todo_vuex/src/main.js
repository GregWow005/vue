import Vue from 'vue';
import App from './App.vue';
import { Script } from 'vm';
Vue.prototype.$eventbus  = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

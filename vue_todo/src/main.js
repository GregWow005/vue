import Vue from 'vue';
import App from './App.vue';
Vue.prototype.$eventbus  = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

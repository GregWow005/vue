import Vue from "vue";
import UUID from 'vue-uuid';
import App from "./App.vue";
import store from "./store";
Vue.config.productionTip = false;
Vue.use(UUID);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

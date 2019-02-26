import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns : ['name','power'],
    saludo : 'Hola',
    users : [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
    ]
  },
  mutations: {
      // Get results in search
      // Order table
  },
  actions: {
      // get Data from DDBB or API
  }
});

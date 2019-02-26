import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: ["name", "power"],
    users: [{ name: "Waiting", email: "Users..." }]
  },
  mutations: {
    // Get results in search
    // Order table
    getDataUsers: (state, payload) => {
      console.log("DATA: ", payload);
      state.users = payload.results;
    }
  },
  actions: {
    // Fetch data from https://randomuser.me/
    getUsers: async context => {
      var url = "https://randomuser.me/api/?results=5";
      try {
        let response = await fetch(url);
        let data = await response.json();
        //console.log("DATA: ", data);
        context.commit("getDataUsers", data);
      } catch (err) {
        // catches errors both in fetch and response.json
        console.log("Upsss! ", err);
      }
    }
  }
});

/**
 *  Get data from 'DDBB'
 *  Save data in state
 *  Manipulate state
 *  */

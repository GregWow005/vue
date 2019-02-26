import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: ["name", "email"],
    users: [],
    display_users: [{ name: { first: "Waiting", last: "" }, email: "Users..." }]
  },
  getters: {},
  mutations: {
    // Get results in search
    // Order table
    SetDataUsers: (state, payload) => {
      console.log("DATA: ", payload);
      state.users = payload.results;
      state.display_users = state.users;
    },
    setOrderData: (state, payload) => {
      //console.log("setOrderData:", state, payload);
      var comparasion_factor;
      var order = "asc";

      if (payload.orderdirection === "asc") {
        comparasion_factor = 1;
      } else {
        comparasion_factor = -1;
      }

      if (payload.order === "name") {
        //console.log(payload.order, comparasion_factor);
        return state.display_users.sort((a, b) =>
          a.name.last > b.name.last ? comparasion_factor : -1 * comparasion_factor
        );
      } else {
        //console.log(payload.order, comparasion_factor);
        return state.display_users.sort((a, b) =>
          a.email > b.email ? comparasion_factor : -1 * comparasion_factor
        );
      }
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
        context.commit("SetDataUsers", data);
      } catch (err) {
        // catches errors both in fetch and response.json
        console.log("Upsss! ", err);
      }
    }
  }
});

/**
 *  Get data from 'DDBB'
 *      - actions
 *           - getUsers
 *  Save data in state
 *      - mutations
 *          - SetDataUsers
 *  Manipulate state
 *  */

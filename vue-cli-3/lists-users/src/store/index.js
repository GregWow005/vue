import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "init",
    list_users: [],
    list_unactive: [],
    list_active: []
  },
  mutations: {
    // Order table
    SetDataUsers: (state, payload) => {
      //console.log("DATA: ", payload);
      state.list_users = payload.results;
      state.list_unactive = state.list_users;
    },
    activateUsers: (state, data) => {

      let current_users = state.list_unactive.filter(item =>
        data.emails.includes(item.email)
      );
      state.list_active = state.list_active.concat(current_users);

      current_users = state.list_unactive.filter(
        item => !data.emails.includes(item.email)
      );
      state.list_unactive = current_users;
    },
    desActivateUsers : (state, data) => {
        
        let current_users = state.list_active.filter(item =>
            data.emails.includes(item.email)
        );
        state.list_unactive = state.list_unactive.concat(current_users);
    
        current_users = state.list_active.filter(
            item => !data.emails.includes(item.email)
        );
        state.list_active = current_users;
    },
    createNewUser : (state, data) => {
        console.log("DATA: ", data);
        state.list_unactive.push({email:data.email});
    }
  },
  actions: {
    // Fetch data from https://randomuser.me/
    getUsers: async context => {
      var url = "https://randomuser.me/api/?results=10";
      try {
        let response = await fetch(url);
        let data = await response.json();
        //console.log("DATA: ", data);/
        //localStorage.setItem("fakedata", JSON.stringify(data));/
        context.commit("SetDataUsers", data);
      } catch (err) {
        // catches errors both in fetch and response.json
        //var fake_data = JSON.parse(localStorage.getItem("fakedata"));
        //context.commit("SetDataUsers", fake_data);
        console.log("Upsss! ", err, " Using fake data");
      }
    }
  },
  modules: {}
});

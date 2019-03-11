import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    /* getUsers: async context => {
      let url = "https://randomuser.me/api/?page=1&results=10";
      try {
        let response = await fetch(url);
        let data = await response.json();
        localStorage.setItem("fakedata", JSON.stringify(data));
        context.commit("SetDataUsers", data);
      } catch (err) {
        // catches errors both in fetch and response.json
        let fake_data = JSON.parse(localStorage.getItem("fakedata"));
        context.commit("SetDataUsers", fake_data);
        console.log("Upsss! ", err, " Using fake data");
      }
    } */
  }
});

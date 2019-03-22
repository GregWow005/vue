import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 1, name: "Pter", email: "pter@pter.es" },
      { id: 2, name: "Enna", email: "enna@lop.es" },
      { id: 3, name: "Ripe", email: "pter@pter.es" },
      { id: 4, name: "Frida", email: "idaf@fred.es" }
    ],
    user_session: "",
    user_target: "",
    historic: {}
  },
  getters: {
    getUsers: state => {
      // your body function here
      return state.users;
    }
  },
  mutations: {
    setUser: (state, data) => {
      console.log("data: ", state, data);
      let this_user = state.users.find(item => item.id === data.id);
      if (data.typeuser === "target") {
        state.user_target = this_user;
      } else {
        state.user_session = this_user;
      }
      /* state.user_target = state.users.filter((item) => {
            //item.id === data.id
            if(item.id === data.id){
                console.log('item: ', item.id);
                return item;
            }
        }) */
    }
  },
  actions: {}
});

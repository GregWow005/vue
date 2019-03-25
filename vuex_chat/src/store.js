import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [
      { id: 1, name: "Pter", email: "pter@pter.es" },
      { id: 2, name: "Enna", email: "enna@lop.es" },
      { id: 3, name: "Ripe", email: "pter@pter.es" },
      { id: 4, name: "Frida", email: "idaf@fred.es" }
    ],
    actual_message: "",
    user_session: "",
    user_target: "",
    historic: []
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
    },
    setMessage: (state, data) => {
      state.actual_message = data.message;
      store.commit("createHistoricNode", data);
    },
    createHistoricNode: (state, data) => {
      /**
       * JSON historic
       * - Uid
       * - Fecha
       * - Emisor
       * - Receptor
       * - Mensaje
       * - Estado
       * - Uid Thread
       */
      //state.historic =
      console.log("createHistoricNode: ", data);
      let date = new Date();
      var save_date = date.getTime();
      let node = new Object();
      node.uid = data.uid;
      node.message = data.message;
      node.date = save_date;
      node.emisor_id = state.user_session.id;
      node.receiver_id = state.user_target.id;
      node.emisor_name = state.user_session.name;
      node.receiver_name = state.user_target.name;
      node.status = "new";
      node.uid_thread = "";
      state.historic.push(node);

      let result = state.historic.filter(
        item => item.emisor_id === state.user_session.id
      );
      console.log("RESULT: ", result);
    }
  },
  actions: {}
});

export default store;

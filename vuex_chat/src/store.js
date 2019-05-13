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
    },
    getUserChats: (state, data) => {
        return state.historic;
        /* console.log("dagetUserChatta: ", state, data);
        if(state.historic.length > 0 ){
          console.log('Existen chats');
          let result = state.historic.filter(
            item => parseInt(item.receiver_id) === parseInt(data.id) && item.status === "new"
          );
          //console.log('RESULT: ', result);
          return result;
        } */
      }
  },
  mutations: {
    /* getUserChat: (state, data) => {
      console.log("dagetUserChatta: ", state, data);
      if(state.historic.length > 0 ){
        console.log('Existen chats');
        let result = state.historic.filter(
          item => parseInt(item.receiver_id) === parseInt(data.id) && item.status === "new"
        );
        console.log('RESULT: ', result);
      }
    }, */
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
      //console.log("createHistoricNode: ",state, data);
      let date = new Date();
      var save_date = date.getTime();
      let node = new Object();
      node.uid = data.uid;
      node.message = data.message;
      node.date = save_date;
      node.emisor_id = data.user_session.value;
      node.receiver_id = data.user_target.value;
      node.emisor_name = data.user_session.text;
      node.receiver_name = data.user_target.text;
      node.status = "new";
      node.uid_thread = "";
      state.historic.push(node);

      /* let result = state.historic.filter(
        item => item.emisor_id === state.user_session.value
      ); */
      //console.log("RESULT: ", node);
    }
  },
  actions: {}
});

export default store;

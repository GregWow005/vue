import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // format item -> {id : 0, name,:'Manzanares', location:'Madrid', length: 9200 }
	list_rivers: JSON.parse(localStorage.getItem("rivers")) || [],
	created_rivers: [],
	updated_rivers: [],
    historic: [],
    total_rivers: 0
  },
  getters: {
    listRiver: state => {
      if (localStorage.getItem("rivers") !== null) {
        state.list_river = JSON.parse(localStorage.getItem("rivers"));
      }
      return state.list_river;
    },
    totalRivers: state => state.list_rivers.length
  },
  methods: {
  },
  mutations: {
    CreateRiver: (state, data) => {
	  state.list_rivers.push(data);
	  let new_data = Object.assign({}, data);
	  state.created_rivers.push(new_data);
      localStorage.setItem("rivers", JSON.stringify(state.list_rivers));
    },
    DeleteRiver: (state, data) => {
      let temp_rivers = state.list_rivers.filter(
        item => item.id !== parseInt(data.id)
      );
      state.list_rivers = temp_rivers;
      localStorage.setItem("rivers", JSON.stringify(state.list_rivers));
    },
    UpdateRiver: (state, data) => {
      state.list_rivers.forEach((item, index) => {
        if (item.id === parseInt(data.id)) {
          state.list_rivers[index].name = data.name;
          state.list_rivers[index].location = data.location;
          state.list_rivers[index].length = data.length;
        }
      });
      localStorage.setItem("rivers", JSON.stringify(state.list_rivers));
    }
  },
  actions: {},
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
            current_item : null,
            user : 'Greg',
            lists : [
                {id: 1, title: "L1", text : "Párrafo de la lista 1", date: "12/11/2019"},
                {id: 2, title: "L2", text : "Párrafo de la lista 2", date: "15/11/2019"},
                {id: 3, title: "L3", text : "Párrafo de la lista 3", date: "01/12/2019"},
            ],
    },
    getters: {
        getLists: state => {
        // your body function here
        return state.lists;
        }
    },
    mutations: {
        setText: (state, data) => {
            store.commit("updateText", data);
        },
        updateText(state,data){
            //state.lists[0].text = data.text;
            state.current_id = data.id;
            state.lists.find(item => {
                if(parseInt(data.id) === item.id){
                    state.current_item = item;
                    item.text = data.text;
                }
            });
        }
    },
    actions: {},
    modules: {}
});

export default store;
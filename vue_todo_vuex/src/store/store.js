import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        task_name : 'Tarea 1',
        tasks_todo : [
            {text:'T1',checked : false},
            {text:'T2',checked : true},
            {text:'T3',checked : true},
            {text:'T4',checked : true},
        ]
    },
    getters: {
        doneTodos : (state) => {
            return state.tasks_todo.filter((task) => task.checked).length; 
        }
    },
    mutations : {
        setTaskName : (state) => state.task_name = 'Soy Nueva',
    },
    actions : {
        setTaskNameAsync : (context) => {
            setTimeout(() => {
                context.commit('setTaskName');
            }, 1500);
        }
    }
});
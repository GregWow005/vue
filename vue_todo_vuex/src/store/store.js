import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        task_name : 'Tarea 1',
        tasks_todo : [
            {id:'1',text:'T1',status:'active',checked : false},
            {id:'2',text:'T2',status:'active',checked : false},
            {id:'3',text:'T3',status:'active',checked : false},
            {id:'4',text:'T4',status:'active',checked : false},
        ]
    },
    getters: {
        doneTodos : (state) => {
            return state.tasks_todo.filter((task) => !task.checked).length; 
        }
    },
    mutations : {
        setTaskName : (state) => state.task_name = 'Soy Nueva',
        mutationCreateTask : (state,payload) => {
            //console.log('COMMENT: ', state,payload);
            // create random 'id'
            let id = '_' + Math.random().toString(36).substr(2, 9);
            let new_task = {id: id,text: payload.text,status:'',checked : false};
            // add task
            state.tasks_todo.push(new_task);
        },
        mutationRemoveTask : (state,payload) => {
            state.tasks_todo = state.tasks_todo.filter(item => item.id !== payload.task_id);
        },
        mutationUpdateTaskStatus : (state,payload) =>{
            let task_index = state.tasks_todo.findIndex(task => task.id == payload.task_id);
            state.tasks_todo[task_index].checked = payload.checked;
            state.tasks_todo[task_index].status = payload.task_status;
        },
        getTasksFiltered : (state, payload) =>{
            console.log('payload', payload);
        }
    },
    actions : {
    }
});


/**
 * TODO ROADMAP
 * Input
 *  - input text and create task
 *      - mapMutations -> createTask
 * List
 *  - Show list
 *      - mapState -> tasks_todo
 *  - Event check task
 *      - mapMutations -> getStatusTask
 *  - Event remove task
 *      - mapMutations -> removeTask
 * Filter
 *  - Events Filters
 *  - mapGetters ->
 *      - All
 *      - Completed
 *      - Active
 *      - task left
 *  - Event remove completed tasks
 *      - mapMutations -> ClearCompleted
 */

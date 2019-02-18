import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        task_name : 'Tarea 1',
        /* ddbb_task : [
            {id:'1',text:'T1',status:'active',checked : false},
            {id:'2',text:'T2',status:'active',checked : false},
            {id:'3',text:'T3',status:'active',checked : false},
            {id:'4',text:'T4',status:'active',checked : false},
        ], */
        ddbb_task : [],
        task_todo : []
    },
    getters: {
        doneTodos : (state) => {
            //state.task_todo = state.task_name;
            return state.ddbb_task.filter((task) => !task.checked).length; 
        },
        doneTask : (state) => {
            return state.ddbb_task.filter((task) => task.checked).length; 
        }
    },
    mutations : {
        setTaskName : (state) => state.task_name = 'Soy Nueva',
        mutationsRemoveCompletedTasks : (state) => {
            state.ddbb_task = state.task_todo.filter((task) => !task.checked);
            state.task_todo = state.ddbb_task;
        },
        mutationCreateTask : (state,payload) => {
            //console.log('COMMENT: ', state,payload);
            // create random 'id'
            let id = '_' + Math.random().toString(36).substr(2, 9);
            let new_task = {id: id,text: payload.text,status:'active',checked : false};
            // add task
            state.ddbb_task.push(new_task);
            state.task_todo = state.ddbb_task;
        },
        mutationRemoveTask : (state,payload) => {
            state.ddbb_task = state.ddbb_task.filter(item => item.id !== payload.task_id);
            state.task_todo = state.ddbb_task;
        },
        mutationUpdateTaskStatus : (state,payload) =>{
            //console.log('payload', payload);
            let task_index = state.ddbb_task.findIndex(task => task.id == payload.task_id);
            state.ddbb_task[task_index].checked = payload.checked;
            state.ddbb_task[task_index].status = payload.task_status;
            state.task_todo = state.ddbb_task;
        },
        getTasksFiltered : (state, payload) =>{
            if(payload.filter === 'all'){
                state.task_todo = state.ddbb_task;
            } else {
                state.task_todo = state.ddbb_task.filter((task) => task.status === payload.filter); 
            }
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
 *      - mapState -> ddbb_task
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

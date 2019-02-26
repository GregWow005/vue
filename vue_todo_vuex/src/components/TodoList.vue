<template>
    <section>
        <ul class="todo-list" >
            <li v-for="task in task_todo" :class="task.status"  :id="task.id">
                <div class="view">
                    <input type="checkbox" :checked="task.checked" class="toggle" @click="checkedTask">
                    <label for="">{{task.text}}</label>
                    <button class="destroy" @click="removeTaskDom"></button>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    data () {
        return {
            text_task : '',
            active_filter : 'all',
            /**
             *  JSON  task -> {id : 1, text:'', status:''}
             *  status -> 'completed', 'incompleted'
             */
            tasks: []
        }
    },
    computed: mapState(['task_todo']),
    methods: {
        ...mapMutations(['mutationUpdateTaskStatus','mutationRemoveTask']),
        checkedTask(event){
            // Set properties in element with 'id' selected
            let parent = event.target.closest('li');
            let task_id = parent.getAttribute('id');
            let status;
            if(event.target.checked){
                parent.classList.add('completed');
                status = 'completed';
            } else {
                parent.classList.remove('completed');
                status = 'active';
            }
            this.mutationUpdateTaskStatus({
                'checked'  :event.target.checked,
                task_id    : task_id,
                task_status: status
            })
        },
        removeTaskDom(){
            let parent = event.target.closest('li');
            let task_id = parent.getAttribute('id');
            this.mutationRemoveTask({
                task_id    : task_id,
            });
        },
    }
}
</script>
<template>
    <section>
        <ul class="todo-list" >
            <!-- <li v-for="task in tasks" v-if="task.visible" :class="task.status" :id="task.id">
                <div class="view">
                    <input type="checkbox" :checked="task.checked" class="toggle" @click="setCompletedTask">
                    <label for="">{{task.text}}</label>
                    <button class="destroy" @click="removeTask"></button>
                </div>
            </li> -->
            
            <li v-for="task in task_todo" :class="task.status"  :id="task.id">
                <div class="view">
                    <input type="checkbox" :checked="task.checked" class="toggle" @click="checkedTask">
                    <label for="">{{task.text}}</label>
                    <button class="destroy" @click="removeTaskDom"></button>
                </div>
            </li>
        </ul>
        <!-- <pre>
            {{tasks}}
        </pre> -->
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
        createNewTask(){
            this.create({
                payload : 'algo'
            })
        },
        removeTask(event){
            /**
             * Detect event button
             * Find parent 'li' , get atributte 'id' and task by id in tasks
             */
            var parent = event.target.closest('li');
            var task_id = parent.getAttribute('id');
            // Get all elements except element has attibute 'id'
            this.tasks = this.tasks.filter(item =>  item.id !== task_id);
            this.setVisibleTask(this.active_filter);
            // Emit event for update number tasks in filter component
            this.$eventbus.$emit('updateTaskLeft',this.getTaskActiveLength(),this.getTaskCompleteLength());
        },
        setCompletedTask(event){
            // Set properties in element with 'id' selected
            var parent = event.target.closest('li');
            var task_id = parent.getAttribute('id');
            var this_task = this.tasks.find(item => item.id === task_id);
            if(event.target.checked){
                parent.classList.add('completed');
                this_task.status = 'completed';
                this_task.checked = 'checked';
            } else {
                parent.classList.remove('completed');
                this_task.status = 'active';
                this_task.checked = '';
            }
            this.setVisibleTask(this.active_filter);
            // Emit event for update number tasks in filter component
            this.$eventbus.$emit('updateTaskLeft',this.getTaskActiveLength(),this.getTaskCompleteLength());
        },
        setVisibleTask(value){
            // Set Filter tasks
            this.active_filter = value;
            this.tasks.forEach(function(task, index, arr){
                if(value === 'all'){
                    task.visible = true;
                } else if(task.status === value){
                    task.visible = true;
                } else {
                    task.visible = false;
                }
            });
        },
        getTaskActiveLength(){
            return this.tasks.filter((task)=>task.status === 'active').length;
        },
        getTaskCompleteLength(){
            return this.tasks.filter((task)=>task.status === 'completed').length;
        },
        removeCompletedTask(){
            this.tasks = this.tasks.filter((task)=>task.status === 'active');
        }
    },
    created(){
        // add new task
        this.$eventbus.$on('addTask',(text) =>{
            // create random 'id'
            var id = '_' + Math.random().toString(36).substr(2, 9);
            // set properties new task
            var task = {id : id, text: text, visible:true, status:'active', checked:''};
            // add task
            this.tasks.push(task);
            // emit event for update Task left
            this.$eventbus.$emit('updateTaskLeft',this.getTaskActiveLength(),this.getTaskCompleteLength());
            this.setVisibleTask(this.active_filter);
        });
        
        // Get Active Tasks - Listen evento from Filter component for set filter
        this.$eventbus.$on('setFilterTasks',(value) =>{
            this.setVisibleTask(value);
        });
        // Listen event from Filter component to remove completed task
        this.$eventbus.$on('removeCompletedTask',()=> this.removeCompletedTask());
        
    }
}
</script>
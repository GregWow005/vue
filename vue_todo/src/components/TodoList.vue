<template>
    <section>
        <ul class="todo-list" v-for="task in tasks">
            <li :class="task.status">
                <div class="view">
                    <input type="checkbox" class="toggle" @click="setCompletedTask">
                    <label for="">{{task.text}}</label>
                    <button class="destroy" @click="removeTask"></button>
                </div>
            </li>
        </ul>
        <pre>
            {{tasks}}
        </pre>
    </section>
</template>
<script>

export default {
    data () {
        return {
            text_task : '',
            /**
             *  JSON  task -> {id : 1, text:'', status:''}
             *  status -> 'completed', 'incompleted'
             */
            tasks: [],
            bk_tasks : []
        }
    },
    methods: {
        removeTask(){
            var parent = event.target.closest('li');
            parent.remove();
            //console.log('COMMENT: ', event.target.closest('li'));
            /**
             * Detectar el botón que lanza el evento
             * Buscar el padre 'li' y eliminarlo
             */
            this.$eventbus.$emit('removeTask');
        },
        setCompletedTask : () => {
            //console.log('COMMENT: ', event.target.checked);
            var parent = event.target.closest('li');
            if(event.target.checked){
                parent.classList.add('completed');
            } else {
                parent.classList.remove('completed');
            }
        }
    },
    created(){
        this.$eventbus.$on('addTask',(text) =>{
            //console.log('EVENTBUS ADD: ', typeof precio);
            var task = {id : 1, text: text, status:'active'};
            this.tasks.push(task);
        });
        // Filters 
        // Get All Tasks
        this.$eventbus.$on('getAllTasks',() =>{
            
        });
        // Get Completed Tasks
        this.$eventbus.$on('getCompletedTasks',() =>{
            return this.tareas.filter(() =>{
                tarea.status === "completed";
            })
        });
        // Get Active Tasks
        this.$eventbus.$on('getActiveTasks',() =>{
            return this.tareas.filter(() =>{
                tarea.status === "active";
            })
        });
    }
}
</script>
<template>
    <footer class="footer">
        <span class="todo-count">{{items_left}} Items left</span>
        <ul class="filters">
            <li><a href="#/" class="selected">All</a></li>
            <li><a href="#/">Active</a></li>
            <li><a href="#/">Completed</a></li>
        </ul>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            items_left : 0,
        }
    },
    created(){
        // Add Task
        this.$eventbus.$on('addTask',(text) =>{
            this.items_left = this.items_left + 1;
        });
        // Remove Task
        this.$eventbus.$on('removeTask',(text) =>{
            this.items_left = this.items_left - 1;
        });
    },
    methods: {
        getAllTasks : () =>{
            this.$eventbus.$emit('getAllTasks');
        },
        getCompletedTasks : () => {
            this.$eventbus.$emit('getCompletedTasks');
        },
        getActiveTasks : () => {
            this.$eventbus.$emit('getActiveTasks');
        }
    },
}
</script>
<template>
    <footer class="footer">
        <!-- <span class="todo-count">{{items_left}} Items left</span>
        <ul class="filters">
            <li><a href="#/" class="selected" @click="getFilterTasks" data-filter="all">All</a></li>
            <li><a href="#/" @click="getFilterTasks" data-filter="active">Active</a></li>
            <li><a href="#/" @click="getFilterTasks" data-filter="completed">Completed</a></li>
        </ul>
        <button class="clear-completed" @click="removeCompletedTask" v-show="items_complete > 0">Clear completed</button> -->
        <span class="todo-count">{{items_left}} Items left</span>
        <ul class="filters">
            <li><a href="#/" class="selected"  data-filter="all">All</a></li>
            <li><a href="#/"  data-filter="active">Active</a></li>
            <li><a href="#/"  data-filter="completed">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show="items_complete > 0">Clear completed</button>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            items_left : 0,
            items_complete : 0
        }
    },
    created(){
        // Listen event from List component to update task
        this.$eventbus.$on('updateTaskLeft',(items_left,items_complete) =>{
            this.items_left = items_left;
            this.items_complete = items_complete;
        });
    },
    methods: {
        // get Filter and emit evento to set Filter in Filter component
        getFilterTasks(event){
            var parent = event.target.closest('ul.filters');
            parent.querySelector('li a.selected').classList.remove('selected');
            event.target.classList.add('selected');
            this.$eventbus.$emit('setFilterTasks',event.target.dataset.filter);
        },
        // remove task  and emit event to remove complete task in Filte component
        removeCompletedTask(){
            this.$eventbus.$emit('removeCompletedTask');
        }
    },
}
</script>
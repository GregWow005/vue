<template>
    <section>
        <ul class="todo-list" v-for="task in tasks">
            <li>
                <div class="view">
                    <input type="text" class="toggle">
                    <label for="">{{task.text}}</label>
                </div>
            </li>
        </ul>
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
            tasks: [
                {id : 1, text:'T1', status:'C'},
                {id : 2, text:'T2', status:'I'}
            ]
        }
    },
    created(){
        this.$eventbus.$on('addTask',(text) =>{
            //console.log('EVENTBUS ADD: ', typeof precio);
            var task = {id : 1, text: text, status:'C'};
            this.tasks.push(task);
        });
    }
}
</script>
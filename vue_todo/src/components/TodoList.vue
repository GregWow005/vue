<template>
    <section>
        <ul class="js-todo-list" v-for="task in tasks">
            <li>{{task.text}}</li>
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
    computed: {
        createTask = () => {
            
        }
    }
  }
}
</script>
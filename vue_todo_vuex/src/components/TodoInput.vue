<template>
    <section>
        <input type="text" placeholder="What needs to be done?" class="new-todo" :value="input_value"  @keyup="getText">
    </section>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    data(){
        return {
            input_value : "",
        }
    },
    //computed: mapState(["task_name"]),
    methods: {
        ...mapMutations(["mutationCreateTask"]),
        // get text from input and emit event for create task to List component
        getText(event){
            this.input_value = event.target.value;
            if(event.keyCode === 13){
                //this.$eventbus.$emit('addTask',event.target.value);
                this.mutationCreateTask({
                    text : event.target.value
                })
                this.$store.state.texto = event.target.value;
                this.input_value = "";
                //console.log('State: ', this.$store.state.texto);
            }
        }
        
    }
}
</script>
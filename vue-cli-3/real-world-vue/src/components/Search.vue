<template>
    <section>
        Search email: 
        <input type="text"  class="new-todo" :value="input_value"  @keyup="getText">
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
        ...mapMutations(["mutationSearchUser"]),
        // get text from input and emit event for create task to List component
        getText(event){
            this.input_value = event.target.value;
            //this.$eventbus.$emit('addTask',event.target.value);
            this.mutationSearchUser({
                text : event.target.value
            })
        }
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    text-align: left;
}
</style>
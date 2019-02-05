<template>
    <section>
        <input type="text" placeholder="What needs to be done?" class="new-todo" :value="input_value"  @keyup="getText">
    </section>
</template>
<script>
export default {
    data(){
        return {
            input_value : "",
        }
    },
    methods: {
        // get text from input and emit event for create task to List component
        getText(event){
            this.input_value = event.target.value;
            if(event.keyCode === 13){
                this.$eventbus.$emit('addTask',event.target.value);
                this.input_value = "";
            }
        }
        
    }
}
</script>
<template>
    <section>
        <input type="text" class="new-todo" :value="input_value"  @keyup="getText">
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
        getText(event){
            //console.log('keyCode: ', event.keyCode);
            this.input_value = event.target.value;
            if(event.keyCode === 13){
                this.$eventbus.$emit('addTask',event.target.value);
                this.input_value = "";
            }
        }
        
    }
}
</script>
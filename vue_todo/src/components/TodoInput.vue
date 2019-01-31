<template>
    <section>
        <input type="text" :value="input_value" @input="getText" >
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
        getText : function (){
            console.log('COMMENT: ', event.target.value);
            this.input_value = event.target.value;
            if(event.target.value === "c"){
                var task = {id : 1, text: event.target.value, status:'C'};
                this.$emit('CreateTaskInput', task);
            }
        }
    },
    computed: {
        seText : function(value){
            this.input_value = value;
            console.log("VALUE ", this.input_value);
        }
    },
}
</script>
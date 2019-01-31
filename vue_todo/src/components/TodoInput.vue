<template>
    <section>
        <input type="text" :input="getText()">
    </section>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        getText(data){
            console.log('Input');
        }
    },
}
</script>
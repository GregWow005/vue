<template>
    <div class="wrapper-message-area">
        <textarea class="message-area" name="" id=""  @keyup="getMessage"></textarea>
    </div>
</template>

<script>
export default {
    methods: {
        getMessage(event){
            console.log("message" , event.target.value);
        }
    },
}
</script>
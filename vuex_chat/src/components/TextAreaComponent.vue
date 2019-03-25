<template>
    <div class="wrapper-message-area js-wrapper-message-area">
        <textarea class="message-area js-message-area" name="" id=""></textarea>
        <button @click="getMessage">Enviar mensaje</button>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 
import {mapState} from 'vuex';
import {mapGetters, mapMutations,mapActions} from 'vuex';
export default {
    methods: {
        ...mapMutations(['setMessage']),
        getMessage(event){
            let parent  = event.target.closest(".js-wrapper-message-area");
            let message_area = parent.querySelector(".js-message-area")
            console.log("message:" , message_area.value);
            this.setMessage({message: message_area.value,uid:uuid.v1()});
            message_area.value = "";
        }
    },
}
</script>
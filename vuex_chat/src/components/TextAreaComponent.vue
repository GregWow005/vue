<template>
    <div class="wrapper-message-area js-wrapper-message-area">
        <textarea class="message-area js-message-area" name="" id=""></textarea>
        <button @click="getMessage">Enviar mensaje</button>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid';
import  {mapMutations} from 'vuex';
export default {
    methods: {
        ...mapMutations(['setMessage']),
        getMessage(event){
            // Get user send message and user tarte
            let combos = document.querySelectorAll('.js-combo-user-chat');
            let user_target = new Object();
            let user_session = new Object();
            for (let index = 0; index < combos.length; index++) {
                let item = combos[index];
                let type_user = item.getAttribute('data-typeuser');
                let item_option = item.options[item.selectedIndex];

                switch (type_user) {
                    case 'target':
                        user_target.value = item_option.value;
                        user_target.text = item_option.text;
                        break;
                    // session user by default
                    default:
                        user_session.value = item_option.value;
                        user_session.text = item_option.text;
                        break;
                }

            }
            console.log('COMMENT: ', user_target,user_session); 
            // get Message
            let parent  = event.target.closest(".js-wrapper-message-area");
            let message_area = parent.querySelector(".js-message-area")
            console.log("message:" , message_area.value);
            this.setMessage({message: message_area.value,uid:uuid.v1(),user_session,user_target});
            message_area.value = ""; 
        }
    },
}
</script>
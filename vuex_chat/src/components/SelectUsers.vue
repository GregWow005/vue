<template>
    <section>
        <h6>User {{typeuser}}</h6>
        <select @change="getHistoricChat" class="js-combo-user-chat" :data-typeuser="typeuser">
            <option v-for="user in getUsers" :value="user.id" >{{user.name}}</option>
        </select>
    </section>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters, mapMutations,mapActions} from 'vuex';
export default {
    props: ['typeuser'],
    computed: {
        ...mapGetters(['getUsers']),
        ...mapState(["user_target"]),
    },
    methods: {
        /* ...mapMutations(['setUser']),
        getSelectedUser(event){
        console.log('COMMENT: ', event.target.value);
        let type_user = event.target.getAttribute('data-typeuser');
        console.log('COMMENT: ', type_user);
        this.setUser({id:parseInt(event.target.value),typeuser:type_user});
        } */
        ...mapMutations(['getUserChat']),
        ...mapGetters(['getUserChats']),
        /* getChats(event){
            console.log('CLICK in BUTTON');
            let result = this.getUserChats({id:2});
            console.log('RESULT: ', result);
        }, */
        getHistoricChat(event){
            let type_user = event.target.getAttribute('data-typeuser');
            if(type_user === "session"){
               let result = this.getUserChats({id:parseInt(event.target.value),typeuser:type_user});
               if(result.length > 0 ){
                    let result_final = result.filter(
                        item => parseInt(item.receiver_id) === parseInt(event.target.value) && item.status === "new"
                    );
                    if(result_final.length > 0){
                        this.setChatinDom(result_final);
                    }
                }
            }
        },
        setChatinDom(chats){
            let template;
            template = `<h3>Nuevos mensajes</h3>`;
            for (let index = 0; index < chats.length; index++) {
                if(index > 0){
                    template = template + "<hr>";
                }
                const chat = chats[index];
                console.log('chat: ', chat.emisor_name, chat.message, chat.uid); 
                template = template +  `
                    <p>
                        <div>Emisor: ${chat.emisor_name} </div>
                        <div>Mensaje: ${chat.message}</div>
                    </p>
                `;  
            }
            document.querySelectorAll('.js-chat-historic')[0].innerHTML = template;
        }
    }
}
</script>
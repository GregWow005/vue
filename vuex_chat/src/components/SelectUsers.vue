<template>
    <section>
        <h6>User {{typeuser}}</h6>
        <select @change="getSelectedUser" :data-typeuser="typeuser">
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
        ...mapMutations(['setUser']),
        getSelectedUser(event){
        console.log('COMMENT: ', event.target.value);
        let type_user = event.target.getAttribute('data-typeuser');
        console.log('COMMENT: ', type_user);
        this.setUser({id:parseInt(event.target.value),typeuser:type_user});
        }
    }
}
</script>
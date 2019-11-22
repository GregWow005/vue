<template>
  <div class="">
    <button @click="activate">Activate</button>
    <button @click="desActivate">Desactivate</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name: "ActionsButtons",
    props: {
    },
    methods: {
        ...mapMutations(["activateUsers","desActivateUsers"]),
        activate(){
            let current_list_block = document.querySelector('.js-list-unactive');
            let check_users = current_list_block.querySelectorAll('.js-list-element-check:checked');
            let emails = [];
            check_users.forEach(item => {
                emails.push(item.getAttribute('email'));
            });
            if(emails.length > 0){
                this.activateUsers({
                    emails
                });
            }
        },
        desActivate(){
            let current_list_block = document.querySelector('.js-list-active');
            let check_users = current_list_block.querySelectorAll('.js-list-element-check:checked');
            let emails = [];
            check_users.forEach(item => {
                emails.push(item.getAttribute('email'));
            });
            if(emails.length > 0){
                this.desActivateUsers({
                    emails
                });
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

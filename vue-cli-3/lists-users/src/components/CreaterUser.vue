<template>
  <div class=" js-wrapper-actions">
      <label>Email</label>
      <input type="email" id="emailField" placeholder="introduce tu email" required/>
      <div class="js-msg"></div>
      <button @click="createUser">Create User</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name: "CreaterUser",
    props: {
    },
    methods: {
        ...mapMutations(["createNewUser"]),
        createUser(event){
            let current_btn = event.target;
            let current_parent = current_btn.closest('.js-wrapper-actions');
            let email_input = current_parent.querySelector('#emailField');
            this.validateEmail(current_parent,email_input);
        },
        validateEmail(parent,input){
            let msg = parent.querySelector('.js-msg');
            let isValidEmail = input.checkValidity();
            if ( isValidEmail ) {
                msg.innerHTML = '';
                console.log(input.value);
                this.createNewUser({email:input.value});
                input.value = "";
            } else {
                console.log('KO: ',input.value);
                msg.innerHTML = 'No parece que hayas escrito un email &#128533;';
            }
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

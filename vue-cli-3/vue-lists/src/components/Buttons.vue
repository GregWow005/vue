<template>
    <div class="js-actions">
        <button @click="editFields" v-show="show">Editar</button>
        <button @click="cancelEdit" v-show="!show">Cancel</button>
        <button @click="saveEdit" v-show="!show">Save</button>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex';
export default {
  name: "Button",
  // Esta recibiendo una propiedad desde otro componente exterior - padre
  props: {
    msg: String,
  },
  data () {
    return {
        show : true,
        paragrah : null,
        p_value : null,
        id : null,
        
    }
  },
  computed: {
      ...mapState(['current_item'])
      },
  methods: {
      ...mapMutations(['setText']),
      editFields(event){
            let current_button = event.target;
            let current_parent = current_button.closest('.js-list-block');
            let current_text = current_parent.querySelector('.js-list-text');
            //let current_actions_block = current_parent.querySelector('.js-actions');
            let current_value = current_text.innerHTML;
            let current_id = current_parent.getAttribute('id');
            let input_template = `<input type ="text" value="${current_value}" />`;
            this.show = false;
            this.paragrah = current_text;
            this.p_value = current_value;
            this.id = current_id
            current_text.innerHTML = input_template;
            console.log(this.p_value);
        },
      saveEdit(){
            this.show = true;
            this.setText({id: this.id, text: this.paragrah.querySelector('input').value});
            this.paragrah.innerHTML = this.current_item.text;
        },
        cancelEdit(){ 
            this.show = true;
            this.paragrah.innerHTML = this.p_value;
        }
  },
};
</script>
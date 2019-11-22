<template>
  <div class="">
    <div v-for="list in getLists" :key="list.id" :id="list.id" class="js-list-block">
        <h3>{{list.title}}</h3>
        <p class="js-list-text">{{list.text}} </p>
        <div>{{list.date}}</div>
        <Buttons/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import Buttons from "@/components/Buttons.vue";
export default {
  name: "List",
  // Esta recibiendo una propiedad desde otro componente exterior - padre
  props: {},
  components : {
      Buttons
  },
  computed: {
        ...mapGetters(['getLists']),
        ...mapState(["user"]),
    },
    methods : {
    },
    mounted() {
        
    },
};
</script>
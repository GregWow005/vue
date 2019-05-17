<template>
  <div class="flex-cols">
        <section class="col">
            <h6>Header 6</h6>
        </section>
        <section class="col flex-row flex-three-cols">
            <div class="flex-row-block chat-block">
                <SelectUsers typeuser="session"></SelectUsers>
            </div>
            <div class="flex-row-block chat-block">
                <TextAreaComponent></TextAreaComponent>
            </div>
            <div class="flex-row-block chat-block">
                <SelectUsers typeuser="target"></SelectUsers>
            </div>
        </section>
        <section class="col flex-row">
            <div v-for="user in getUsers" :data-userid="user.id" class="flex-row-block chat-block js-chat-block">{{user.name}}
                <div class="js-chat-historic">
                </div>
            </div>
            <!-- <div class="flex-row-block chat-block">User 2</div>
            <div class="flex-row-block chat-block">User 3</div>
            <div class="flex-row-block chat-block">User 4</div> -->
        </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import SelectUsers from "./SelectUsers";
import TextAreaComponent from "./TextAreaComponent";
export default {
  name: "HelloWorld",
  components: {SelectUsers,TextAreaComponent},
  computed: {
      ...mapGetters(['getUsers']),
  },
  props: {
    msg: String
  }
};
</script>
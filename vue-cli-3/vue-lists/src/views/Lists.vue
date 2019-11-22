<template>
  <div class="lists">
      <h1>Lista</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <List/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";

export default {
  name: "lists",
  components: {
      List
  }
};
</script>

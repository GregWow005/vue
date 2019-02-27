<template>
  <div class="home">
    <Search/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Search
  }
};
</script>

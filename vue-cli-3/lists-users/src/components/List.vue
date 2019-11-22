<template>
  <div class="">
      <div v-for="list in dataList" :key="list.email" class="js-list-element">
          {{list.email}}
          <input type="checkbox" :email="list.email" class="js-list-element-check">
    </div>
  </div>
</template>

<script>
export default {
    name: "List",
        props: {
            dataList : {
                type: Array
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

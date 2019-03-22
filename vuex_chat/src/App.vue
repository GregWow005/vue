<template>
  <div id="app">
    <TemplateCmp></TemplateCmp>
  </div>
</template>

<script>
import TemplateCmp from "./components/TemplateCmp.vue";

export default {
  name: "app",
  components: {
    TemplateCmp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex-cols {
    display: flex;
    flex-flow: wrap column;
    /* justify-content: center; */
    align-content: center;
    text-align: center;
    width: 100%;
}
.flex-three-cols {
    justify-content:space-around;
}
.flex-row {
    display: flex;
    flex-flow: wrap;
    width: 100%;
}
.chat-block{
    width: 25%;
    border: 1px solid green;
    box-sizing: border-box;
    height: 100px;
}
.wrapper-message-area {
    display: flex;
    height: 100%;
}
.message-area {
    width: 100%;
    box-sizing: border-box;
    flex:1;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

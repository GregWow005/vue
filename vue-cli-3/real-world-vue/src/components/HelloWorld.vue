<template>
  <div>
        <h1>{{saludo}}</h1>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" class="text-capitalize">{{column}}<span class="arrow asc"></span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{user.name}}</td>
                    <td>{{user.power}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed : mapState(['saludo','columns','users'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}
.text-capitalize {
  text-transform: capitalize;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>

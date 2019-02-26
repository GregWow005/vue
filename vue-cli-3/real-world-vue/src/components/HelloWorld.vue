<template>
  <div>
        <table>
            <thead>
                <tr class="js-table-head">
                    <th v-for="column in columns" class="text-capitalize js-head-column" :data-order="column"  @click="setOrder" data-orderdirection="asc">{{column}}<span class="arrow asc"></span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in display_users">
                    <td>{{user.name.last + ' ' +  user.name.first}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters, mapMutations} from 'vuex';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed : {
      ...mapState(['saludo','columns','display_users']),
      

  },
  methods: {
      ...mapActions(['getUsers']),
      ...mapMutations(['setOrderData']),
    createdComponent(){
        this.getUsers();
    },
    setOrder(event){
            var data_set_element = event.target.dataset;
            if(data_set_element.orderdirection === "asc"){
                data_set_element.orderdirection = "desc";
            } else {
                data_set_element.orderdirection = "asc";
            }
            this.setOrderData({
                order : event.target.dataset.order,
                orderdirection : event.target.dataset.orderdirection,
            }) 
            //console.log('COMMENT: ', event.target.dataset.order);
      },
  },
  mounted() {
    console.log('CREATED: ');
    this.createdComponent();
  }
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

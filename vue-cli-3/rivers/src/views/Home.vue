<template>
  <section class="home">
        <div class="flex-cols">
            <div class="col">
                <Header/>
            </div>
            <div class="col flex-row">
                <div class="flex-row-block elemento">
                    <!-- <List :dataList="list_unactive" class="column js-list-unactive"/> -->
					<ListRivers class="column js-list-rivers"/>	
                </div>			
            </div>
			<div class="col">
                <div class="flex-row-block elemento">
					<CreateRiver class="column js-create-river"/>	
                </div>
            </div>
			<div class="col">
                <div class="flex-row-block elemento">
					<Historic class="column js-list-historic"/>	
                </div>
            </div>
            <div class="col">
                <Footer/>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ListRivers from "@/components/ListRivers.vue";
import CreateRiver from "@/components/CreateRiver.vue";
import Historic from "@/components/Historic.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
	Header,
	ListRivers,
	CreateRiver,
	Historic,
	Footer
  }
};
</script>

<!-- GENERAL STYLES -->
<style>
.flex-cols{
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-content: center;
    text-align: center;

}
.flex-row {
    display: flex;
    flex-flow: wrap;
}
.flex-row-block {
    width: 100%;
    height: 15rem;
    border: 1px solid;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
.col {
	width: 80%;
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
.col-25 {
	width: 20rem;
}
.bold{
	font-weight: bold;
}
.button {
	width: 50px;
}
.direction-row {
	flex-direction: row;
}
.aling-items {
	align-items: center;
}
</style>

<!-- END GENERAL STYLES -->
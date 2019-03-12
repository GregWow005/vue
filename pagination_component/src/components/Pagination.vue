<template>
	<section>
  		<h3 class="hello">Págination</h3>
		<div class="pagination p1">
			<label for="total" >Total Elements: </label>
			<input type="text" class="space" :value="this.total_elements" @input="setElements">
      	<ul>
				<a href="#"  v-for="(page, index) in range_pagination" :class="page.class">
					<li  @click="gotoPage(page.number)">{{page.number}}</li>
				</a>
			</ul>
   	</div>
	</section>
</template>

<script>
export default {
  props: {
	},
  data (){
	  return {
		// Init values
		actual_page: 1,
		init_page: 1,
		visible_elements: 0,
		total_elements:0,
		default_total_elements : 120,
		visible_pages:0, // always odd
		range: 0,
		pages: [],
		total_pages : 0,
		range_pagination : []
	}
  },
  computed: {
	  computedAlgo : function ()  {
		  /* this.range_pagination = [111,112,113];
		  return this.range_pagination; */
	  }
	
  },
  methods: {
	  setElements : function(){
		  //console.log('COMMENT: ', event.target.value);
		  this.total_elements = parseInt(event.target.value);
		  this.resetValues(this.total_elements);
		  
	  },
      getUsers: async (page,results) => {
			console.log('REsults: ', page,results);
			let url = `https://randomuser.me/api/?page=${page}1&results=${results}`;
			try {
					let response = await fetch(url);
					let data = await response.json();
					localStorage.setItem("fakedata", JSON.stringify(data));
					console.log("Yesss! ", " Using real data");
			} catch (err) {
					// catches errors both in fetch and response.json
					let fake_data = JSON.parse(localStorage.getItem("fakedata"));
					console.log("Upsss! ", err, " Using fake data");
			}
		},
		paintPagination: function (){
			this.range_pagination = [];
			let init_pagination;
			let arrow_prev,arrow_next;
			/**
			 * actual > range + 1 -> inicio es actual - range
			 * si no -> inicio es 1
			 * actual >= total - range -> inicio es: total - visibles
			 * 
			 */
			 
			if(this.actual_page < this.range + 1 ){
				init_pagination = this.init_page;
			} else if( this.actual_page >= this.total_pages - this.range ){
				init_pagination = this.total_pages - this.visible_pages + 1;
			} else {
				init_pagination = this.actual_page - this.range;
			}
			/* Arrow Next
			 *   		1 2 3 4 5 >
			 *   	< 2 3 4 5 6 >
			 * 	< 15 16 17 18 19 >
			 *    < 16 17 18 19 20	
			 * 	 - Si la página actual es mayor
			 * 
			 *    - Si el número de paginas visibles es menor o igual que el número de paginas totales
			 * 		 - no se muestras ninguna de las flechas
			 * 	 - Sí el número de las páginas totales es mayor que el número de páginas visibles
			 * 		 - No Mostramos la flecha prev si init_pagination === init_page
			 * 		 - No Mostramos la flecha next si actual_pages === total_pages 
			 */
			// Paint pagination
			arrow_prev = {number:"", class:""};
			arrow_next = {number:"", class:""};
			if(this.visible_pages < this.total_pages){
				if(init_pagination !== this.init_page){
					arrow_prev = {number:"<", class:""};
				}
				if(init_pagination <= this.total_pages - this.visible_pages){
					arrow_next = {number:">", class:""};
				}
			}
			
			for(let i = init_pagination; i < init_pagination + this.visible_pages; i++){
				let item_page = {};
				item_page.number = i;
				if(i === this.actual_page){
					item_page.class="is-active";
				} else {
					item_page.class="";
				} 
				this.range_pagination.push(item_page);
			}

			// Paint arrow next/prev and dots
			if(arrow_prev.number !== ""){
				this.range_pagination.unshift(arrow_prev);
			} 
			if(arrow_next.number !== ""){
				this.range_pagination.push(arrow_next);
			}
		},
		/* gotoPage : (page) => {
			console.log('COMMENT: ', page, this.init_page);
		}, */
		gotoPage: function(page) {
		//console.log('COMMENT: ', page, this.init_page);
		if(page === ">"){
			this.actual_page = this.actual_page + 1;
		} else if(page === "<"){
			this.actual_page = this.actual_page - 1;
		} else {
			this.actual_page = page;
		}
        if(this.actual_page >= this.total_pages){
            this.actual_page = this.total_pages;
            // disabled button 'next'
        } else if(this.actual_page <= this.init_page){
            this.actual_page = this.init_page;
            // disabled button 'prev'
        }
        this.paintPagination();
	},
	resetValues : function(total_elements){
		// Set data pagination
		this.actual_page = this.init_page;
		this.total_elements = total_elements || this.default_total_elements; // Data from DDBB
		this.visible_elements = 6; // Set data for visualize
		this.visible_pages = 5; // Set data for visualize
		/**
		 * Casuistica
		 *  - El número total de elementos es impar y al calcular el numero de total de elementos el total de páginas sale con decimal
		 *  - El numero total de elementos es menor que el número de elementos visibles o de páginas visibles
		 *  
		 */

		if(this.total_elements < this.visible_elements) {
			this.visible_elements = this.total_elements;
		}
		this.total_pages = Math.ceil(this.total_elements/ this.visible_elements);

		if(this.total_pages < this.visible_pages){
			this.visible_pages = this.total_pages;
		}
		// ojo al rango
		// Set range
		this.range = (this.visible_pages - 1) / 2;
		// Fill array pages
		for(let i = 1; i<= this.total_elements; i++){
			this.pages.push(i);
		}

		this.paintPagination();
	}
		
  },
  created() {
	this.resetValues();
	//this.getUsers(this.actual_page,this.visible_elements);
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* GENERAL STYLES */
a{
  text-decoration: none;
}

p, li, a{
  font-size: 14px;
}
.space {
	margin-bottom: 1rem;
}
.pagination{
  padding: 30px 0;
}

.pagination ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.pagination a{
  display: inline-block;
  padding: 10px 18px;
  color: #222;
}


.p1 a{
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  text-align: center;
}

.p1 a.is-active{
  background-color: #2ecc71;
  border-radius: 100%;
  color: #fff;
}
</style>

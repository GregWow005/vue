<template>
	<section class="historic flex-row aling-items">
		<h1>Historic</h1>
		<div class="js-historic-rivers" v-show="show">
			<h3>List Rivers Created Not Updated</h3>
			<div class="flex-row bold">
				<div class="column col-25">ID</div>
				<div class="column col-25">Name</div>
				<div class="column col-25">Location</div>
				<div class="column col-25">Length</div>
				<div class="column col-25">Actions</div>
			</div>
			<ul class="river-list">
				<li v-for="river in created_rivers"  :key="river.id">
					<div class="flex-row js-row-river">
						<div class="column col-25">{{river.id}}</div>
						<div class="column col-25 js-field-name" :data-name="river.name">{{river.name}}</div>
						<div class="column col-25 js-field-location" :data-location="river.location">{{river.location}}</div>
						<div class="column col-25 js-field-length" :data-length="river.length">{{river.length}}</div>
					</div>
				</li>
			</ul>
		</div>
		<button class="column" @click="showRivers">Show Rivers created</button>
		<button class="column" @click="hideRivers">Hide Rivers created</button>
	</section>
</template>	

<script>
import {mapState} from 'vuex';
export default {
	data () {
        return {
			show: false
        }
	},
	computed: mapState(['created_rivers']),
	methods: {
		showRivers(){
			this.show = true;
		},
		hideRivers(){
			this.show = false;
		}
	},
}
</script>
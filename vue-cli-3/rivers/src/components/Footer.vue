<template>
	<section class="footer">
		<h1>{{now}}</h1>
	</section>
</template>	

<script>
export default {
	data() {
        return {
        }
	},
	computed: {
        now: function () {
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			let yyyy = today.getFullYear();

			today = mm + '/' + dd + '/' + yyyy;
			return today;
		}
    },
    mounted() {
    },
}
</script>


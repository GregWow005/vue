<template>
	<div class="create-river">
		<h1>Create River</h1>
		<div class="flex-row">
			<div class="column col-25 js-create-field display-center">
				<div class="js-wrapper-fields "></div>
				<button class="js-create width-100" @click="create_fields" v-show="show">Create</button>
				<button class="js-create width-100" @click="show_actions" v-show="!show && hide_confirm">Confirm</button>
				<button class="js-create width-100" @click="cancel_actions" v-show="!show && hide_confirm">Cancel</button>
				<div v-show="!hide_confirm">
					<button class="js-create width-100" @click="cancel_actions" >Cancel Action</button>
					<button class="js-create width-100" @click="create_river" >Confirm Action</button>
				</div>
				<h6 class="msg" v-show="!show"></h6>
			</div>
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
	data () {
        return {
			show : true,
			hide_confirm : true
        }
    },
	methods: {
		...mapMutations(['CreateRiver']),
		create_fields(){
			let wrapper_fields = document.querySelector('.js-wrapper-fields');
			let message = document.querySelector('.msg');
			let template = `
			<div class="column col-25">
				<input type="text" class="field-name" placeholder="name">
			</div>
			<div class="column col-25">
				<input type="text" class="field-location" placeholder="location">
			</div>
			<div class="column col-25">
				<input type="text" class="field-length" placeholder="length">
			</div>
			`;
			message.innerText = '';
			wrapper_fields.innerHTML = template;
			this.show = false;

		},
		cancel_actions(){
			let wrapper_fields = document.querySelector('.js-wrapper-fields');
			let template = ``;
			wrapper_fields.innerHTML = template;
			this.show = true;
			this.hide_confirm = true;
		},
		show_actions(){
			let field_name = document.querySelector('.field-name');
			let field_location = document.querySelector('.field-location');
			let field_length = document.querySelector('.field-length');
			let message = document.querySelector('.msg');

			// SOFT VALIDATION 
			if(field_name.value ==='' && field_location.value === '' && field_length.value === ''){
				message.innerText = 'You have empty fields :(';
			} else {
				message.innerText = 'Please, confirm that you want create a new river. Thanks! :)';
				this.hide_confirm = false;
			}
		},
		create_river(){
			let field_name = document.querySelector('.field-name');
			let field_location = document.querySelector('.field-location');
			let field_length = document.querySelector('.field-length');
			let river_id = new Date();
			let message = document.querySelector('.msg');

			// SOFT VALIDATION 
			if(field_name.value !=='' && field_location.value !== '' && field_length.value !== ''){
				this.CreateRiver({
					id    			: river_id.getTime(),
					name 			: field_name.value,
					location 		: field_location.value,
					length 			: field_length.value,
				});
	
				field_name.value = '';
				field_location.value = '';
				field_length.value = '';
				message.innerText = 'You create a new river. Congrats!!';
			} else {
				message.innerText = 'You have empty fields :(';
			}
			
			

			
		}
	}
}
</script>

<style scoped>
.display-center {
	align-items : center;
}
.width-100 {
}
</style>
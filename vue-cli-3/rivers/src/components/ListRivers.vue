<template>
	<section class="hello">
		<h1>List Rivers</h1>
		<div class="flex-row bold">
			<div class="column col-25">ID</div>
			<div class="column col-25">Name</div>
			<div class="column col-25">Location</div>
			<div class="column col-25">Length</div>
			<div class="column col-25">Actions</div>
		</div>
		<ul class="river-list">
            <li v-for="river in list_rivers"  :key="river.id">
                <div class="flex-row js-row-river">
                    <div class="column col-25">{{river.id}}</div>
					<div class="column col-25 js-field-name" :data-name="river.name">{{river.name}}</div>
					<div class="column col-25 js-field-location" :data-location="river.location">{{river.location}}</div>
					<div class="column col-25 js-field-length" :data-length="river.length">{{river.length}}</div>
					<div class="column col-25 js-edit-field direction-row" :id="river.id">
						<button class="button js-edit-river" :id="river.id" @click="edit_river">Edit</button>
						<button class="button js-delete-river"  @click="delete_river">Delete</button>
						<div class="js-actions-edit" v-show="show_actions_edit">
							<button class="button js-cancel-action" @click="cancel_edit">Cancel Edit</button>
							<button class="button js-confirm-actions" :id="river.id" @click="confirm_edit">Confirm Edit</button>
						</div>
						<div class="js-actions" v-show="show_actions">
							<button class="button js-cancel-action" @click="cancel_delete">Cancel Delete</button>
							<button class="button js-confirm-actions" :id="river.id" @click="confirm_delete">Confirm Delete</button>
						</div>
					</div>
                </div>
            </li>
        </ul>
		<div class="flex-row bold">
			<h6 class="column">Total Rivers: {{totalRivers}} </h6>
		</div>
	</section>
</template>

<script>
import {mapState,mapGetters, mapMutations} from 'vuex';
export default {
  data () {
        return {
			show_actions : false,
			show_actions_edit : false,
        }
    },
  computed: {
		...mapState(['list_rivers']),
		...mapGetters(['totalRivers']),

  },
  methods: {
		...mapMutations(['DeleteRiver','UpdateRiver']),
		delete_river(event){
			let parent = event.target.closest('.js-edit-field');
			let actions_wrapper = parent.querySelector('.js-actions');
			actions_wrapper.style.display = 'block';
		},
		cancel_delete(event){
			let parent = event.target.closest('.js-edit-field');
			let actions_wrapper = parent.querySelector('.js-actions');
			actions_wrapper.style.display = 'none';
		},
		confirm_delete(event){
			let id = event.target.getAttribute('id');
			this.show_actions = false;
			this.DeleteRiver({
                id    : id,
            });
		},
		edit_river(event){
			let parent = event.target.closest('.js-row-river');
			let actions_wrapper = parent.querySelector('.js-actions-edit');
			let field_name = parent.querySelector('.js-field-name');
			let field_location = parent.querySelector('.js-field-location');
			let field_length = parent.querySelector('.js-field-length');
			actions_wrapper.style.display = 'block';
			field_name.innerHTML = `<input type="text" value="${field_name.getAttribute("data-name")}">`;
			field_location.innerHTML = `<input type="text" value="${field_location.getAttribute("data-location")}">`;
			field_length.innerHTML = `<input type="text" value="${field_length.getAttribute("data-length")}">`;
			
		},
		cancel_edit(event){
			let parent = event.target.closest('.js-row-river');
			let actions_wrapper = parent.querySelector('.js-actions-edit');
			let field_name = parent.querySelector('.js-field-name');
			let field_location = parent.querySelector('.js-field-location');
			let field_length = parent.querySelector('.js-field-length');

			actions_wrapper.style.display = 'none';

			field_name.innerHTML = `${field_name.getAttribute("data-name")}`;
			field_location.innerHTML = `${field_location.getAttribute("data-location")}`;
			field_length.innerHTML = `${field_length.getAttribute("data-length")}`;
		},
		confirm_edit(event){
			let id = event.target.getAttribute('id');
			let parent = event.target.closest('.js-row-river');
			let actions_wrapper = parent.querySelector('.js-actions-edit');

			let field_name = parent.querySelector('.js-field-name');
			let field_location = parent.querySelector('.js-field-location');
			let field_length = parent.querySelector('.js-field-length');

			let input_name = field_name.querySelector('input');
			let input_location = field_location.querySelector('input');
			let input_length = field_length.querySelector('input');

			actions_wrapper.style.display = 'none';
			
			this.UpdateRiver({
				id 				: id,
				name 			: input_name.value,
				location 		: input_location.value,
				length 			: input_length.value
			})

			// This part is not a good implementation :$
			field_name.innerHTML = input_name.value;
			field_location.innerHTML = input_location.value;
			field_length.innerHTML = input_length.value;
		},
  }
};
</script>



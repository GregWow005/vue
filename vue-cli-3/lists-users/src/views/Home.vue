<template>
    <section>
        <div class="flex-cols">
            <div class="col">
                <h6>Header 6</h6>
            </div>
            <div class="col flex-row">
                <div class="flex-row-block elemento">
                    <List :dataList="list_unactive" class="column js-list-unactive"/>
                </div>
                <div class="flex-row-block elemento">
                    <ActionsButtons class="column"/>
                </div>
                <div class="flex-row-block elemento">
                    <List :dataList="list_active" class="column js-list-active"/>
                </div>
            </div>
            <div class="col">
                <CreaterUser/>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import {mapState,mapActions} from 'vuex';
import List from "@/components/List.vue";
import ActionsButtons from "@/components/ActionsButtons.vue";
import CreaterUser from "@/components/CreaterUser.vue";

export default {
    name: "home",
    components: {
    List,
    ActionsButtons,
    CreaterUser
    },
    data() {
        return {
            /* dataListActive : list_active,
            dataListUnActive : list_unactive */
        }
    },
    computed: {
        ...mapState(['list_active','list_unactive']),
    },
    methods: {
        ...mapActions(['getUsers']),
    },
    mounted() {
        this.getUsers();
    },
};
</script>
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
    width: 25rem;
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
</style>


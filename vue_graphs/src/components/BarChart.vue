<script>
import {mapState, mapActions, mapGetters } from 'vuex';
import { Bar } from "vue-chartjs";


export default {
    extends: Bar,
    props: ['code'],
    data(){
        return {
        }
    },   
    computed: {
    },
    methods: {
        ...mapActions('moduleBarChart',['getData','getDaticos']),
        ...mapGetters('moduleBarChart',['getDataNaruto','getDataMoney','getMappedData'])
    },
    
    created() {
        
        let promise_data = this.getData({ 'code' : this.code} );
        promise_data
        .then( ( result ) => {
            let bar_data = this.$store.getters['moduleBarChart/getMappedData'](this.code);
            let bar_options = { responsive: true, maintainAspectRatio: false }
            
            this.renderChart(
                bar_data,
                bar_options
            );
        })
        .catch( ( error ) => {
             console.log( error );
        })
    },
    mounted() {

        
    }
};
</script>

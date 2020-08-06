
<script>
//import {mapState, mapActions, mapGetters } from 'vuex';
import { mapState, mapActions, mapGetters }  from 'vuex';
import { Pie } from "vue-chartjs";
export default {
    extends: Pie,
    props: ['code'],
    computed: {
        //...mapState('modulePieChart',['saludo'])
    },
    created() {
        //console.log('Saludo:', this.saludo );
    },
    methods: {
        ...mapActions('modulePieChart',['getData']),
        ...mapGetters('modulePieChart',['getMappedData'])
    },
    mounted() {
        /* let chart_data = {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['#41B883','#E46651','#00D8FF','#DD1B16']
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ['Red','Yellow','Blue']
        }; */

         let chart_options = {
            legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        };

        let promise_data = this.getData({ 'code' : this.code} );
        promise_data
        .then( ( result ) => {
            let chart_data = this.$store.getters['modulePieChart/getMappedData'](this.code);
            this.renderChart(
                chart_data,
                //chart_options
            );
        })
        .catch( ( error ) => {
             console.log( error );
        })

    },
}
</script>

<style>

</style>
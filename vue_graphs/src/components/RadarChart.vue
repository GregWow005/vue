<script>
import { mapGetters, mapActions } from 'vuex';
import { Radar } from 'vue-chartjs'
export default {
    extends : Radar,
    props: ['code'],
    methods: {
        ...mapActions('moduleRadarChart',['getData']),
        ...mapGetters('moduleRadarChart',['getMappedData'])
    },
    created() {
        let chart_options = {
            legend: {
            display: true
          },
          tooltips: {
        	mode: 'label'
        },
          responsive: true,
          maintainAspectRatio: false
        };

        let promise_data = this.getData({ 'code' : this.code} );
        promise_data
        .then( ( result ) => {
            let chart_data = this.$store.getters['moduleRadarChart/getMappedData'](this.code);
            this.renderChart(
                chart_data,
                chart_options
            );
        })
        .catch( ( error ) => {
             console.log( error );
        })
    },
}
</script>
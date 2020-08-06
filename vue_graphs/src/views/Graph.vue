<template>
    <section>
        <div class="container">
        <h1>Graph</h1>
        <div class="row">
                <div class="col-sm border border-secondary m-2">
                    <h2 class="text-primary">PLANETS</h2>
                    <RadarChart code="PLANETS"/>
                </div>
                <div class="col-sm border border-secondary m-2">
                    <h2 class="text-primary">F1</h2>
                    <RadarChart code="F1"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm border border-secondary m-2">
                    <h2 class="text-primary">NARUTO</h2>
                    <BarChart code="NAR"/>
                </div>
                <div class="col-sm border border-secondary m-2">
                    <h2 class="text-primary">MONEY</h2>
                    <BarChart code="MON"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm border border-secondary m-2">
                    <h2 class="text-primary">IPA</h2>
                    <PieChart code="IPA"/>
                </div>
                <div class="col-sm border border-secondary m-2">
                    <h2 class="text-primary">COVID SPAIN</h2>
                    <PieChart code="COVID"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import RadarChart from "@/components/RadarChart.vue"

export default {
  components: {
    BarChart,
    PieChart,
    RadarChart
  },
  data() {
    return {
    };
  }
}
</script>

<style>

</style>
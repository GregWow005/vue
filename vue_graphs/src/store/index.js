import Vue from 'vue'
import Vuex from 'vuex'
import moduleBarChart from '@/modules/barchart'
import modulePieChart from '@/modules/piechart'
import moduleRadarChart from '@/modules/radarchart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      moduleBarChart,
      modulePieChart,
      moduleRadarChart
      
  }
})

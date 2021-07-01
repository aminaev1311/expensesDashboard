<template>
    <div>
        <JSCharting :options="getChartData" class="columnChart"></JSCharting>
    </div>
</template>

<script>
import JSCharting from 'jscharting-vue'
import { mapGetters } from 'vuex'

export default {
   name: 'columnChart',
   data() {
      return {
        //  chartOptions: {
        //     type: 'vertical column',
        //     series: [
        //        {
        //         points:                 
        //           [

        //              { x: 'food', y: 20 },
        //              { x: 'leisure', y: 30 },
        //              { x: 'transport', y: 50 },
        //              { x: 'education', y: 70 }
        //           ]
        //        }
        //     ]
        //  }
      }
   },
   methods: {

   },
   computed: {
       ...mapGetters(
           [
               'getCategories',
               'getExpenses'
           ]
       ),
        getSumByCategories() {
            let sumByCategory = []
            for (let i=0; i < this.getCategories.length;i++) {
                let expenses = this.getExpenses.filter( item => item.category == this.getCategories[i] )
                let sum = expenses.reduce((res, cur) => res + cur.value ,0)
                sumByCategory.push(sum)
            }
            return sumByCategory
       },
       getChartData() {
            let chartData = []
            for (let i=0; i < this.getCategories.length;i++) {
                let point = {}
                point.x = this.getCategories[i]
                point.y = this.getSumByCategories[i]
                chartData.push(point)
            }
            return { 
                type: 'vertical column',
                series: [ 
                    {
                        points: chartData
                    }
                ]
            }
       }
   },
   components: {
      JSCharting
   },
   mounted () {
   }
}
</script>

<style>
.columnChart {
    height: 300px;
}
</style>
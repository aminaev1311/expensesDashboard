<template>
  <div class="expensesList">
    <table>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr class="expense" v-for="(expense, idx) in slicedList"  :key="idx">
          <td> {{ 5 * (page-1) + idx + 1}} </td>
          <td> {{ expense.date }} </td>
          <td> {{ expense.category }} </td>
          <td> {{ expense.value }} </td>
      </tr>
    </table>
    <Pagination @pagination-click="paginationHandler"/>
    <div> page {{page}} out of {{Math.ceil(getExpenses.length/5)}} </div>

  </div>
</template>

<script>
import Pagination from './Pagination.vue'
import { mapGetters } from 'vuex'

export default {
  components: { Pagination },
  name: 'ExpensesList',
  data() {
    return {
      page: 1
    }
  },
  methods: {
    paginationHandler(n) {
      this.page = n

    }
  },
  computed: {
    ...mapGetters([
      'getExpenses'
    ]),
    slicedList() {
      return this.getExpenses.slice( 5 * (this.page-1), 5 * this.page )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, td, th {
  border-collapse: collapse;
  /* border-spacing: 0; */
  border: solid 1px grey
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

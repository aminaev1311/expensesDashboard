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
          <td> {{ n * (cur-1) + idx + 1}} </td>
          <td> {{ expense.date }} </td>
          <td> {{ expense.category }} </td>
          <td> {{ expense.value }} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  props: ['n', 'cur'],
  name: 'ExpensesList',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
      'fetchData'    ])
  },
  computed: {
    ...mapGetters([
      'getExpenses'
    ]),
    slicedList() {
      return this.getExpenses.slice( this.n * (this.cur-1), this.n * this.cur )
    }
  },
  mounted() {
    this.fetchData()
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

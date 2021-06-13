<template>
  <div class="expensesList">
    <table>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr class="expense" v-for="(expense, idx) in slicedList"  :key="idx">
          <td> {{ n * (cur-1) + idx + 1}} </td>
          <td> {{ expense.id }} </td>
          <td> {{ expense.date }} </td>
          <td> {{ expense.category }} </td>
          <td> {{ expense.value }} </td>
          <td style="font-size:30px;" @click="onContextClick(expense)">&nbsp;...&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  props: ['n', 'cur'],
  name: 'ExpensesList',
  data() {
    return {
    }
  },
  methods: {
    onContextClick(expense) {
      console.log('context clicked', expense.id)
      this.$context.show(expense)
    }
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

<template>
    <v-data-table 
    :headers="headers"
    :items-per-page="10"
    class="elevation-2"
    :items="getExpenses"
    >
    </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  props: ['n', 'cur'],
  name: 'ExpensesList',
  data() {
    return {
      headers: [
          { 
            text: 'ID', 
            value: 'id' 
          },
          { 
            text: 'Date', 
            value: 'date' 
          },
          { 
            text: 'Category', 
            value: 'category' 
          },
          { 
            text: 'Value', 
            value: 'value' 
          },
          { 
            text: '', 
            value: '' 
          },
        ],
      data: [
        {
          num: 1,
          id: 1,  
          date: "2005-03-12", 
          category: 'food', 
          value: 250,
        }
      ]
    }
  },
  methods: {
    onContextClick(expense) {
      console.log('context clicked', expense)
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

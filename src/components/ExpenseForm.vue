<template>
  <div>
      <input type="date" v-model="date" placeholder="date">
      <br>
      <select v-model="category">
        <option v-for="option in getCategories" :key="option" :value="option">{{option}}</option>
      </select>
      <input type="text" v-model="newCategory" /><button @click="addCategory(newCategory)">Add category</button>
      <br>
      <input type="number" v-model.number="value" placeholder="amount">
      <br>
      <button @click="save">Save</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'ExpensesForm',
    data() {
        return {
            date: null,
            category: null,
            value: null,
            newCategory: ''
        }
    },
    computed: {
        ...mapGetters(
            [
                'getExpenses', 
                'getExpensesSum',
                'getCategories'
            ]
        )
    },
    methods: {
        addCategory(newCategory) {
            // console.log(1)
            // console.log(this.newCategory)
            this.addCategory(newCategory)
            this.newCategory = ''
        },
        ...mapMutations([
            'setExpensesData',
            'addExpense',
            'setCategories',
            'addCategory'
        ]),
        save() {
            this.addExpense({date: this.date, category: this.category, value: this.value});
            this.date = null
            this.category = null,
            this.value = null
        },
    },
    mounted() {
    }
}
</script>

<style>

</style>
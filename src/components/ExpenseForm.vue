<template>
  <div>
      <input type="date" v-model="date" placeholder="date">
      <br>
      <select v-model="category">
        <option v-for="option in getCategories" :key="option" :value="option">{{option}}</option>
      </select>
      <CategoryForm />
      <br>
      <input type="number" v-model.number="value" placeholder="amount">
      <br>
      <button @click="save">Save</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CategoryForm from './CategoryForm.vue'

export default {
    components: { CategoryForm },
    name: 'ExpensesForm',
    data() {
        return {
            date: null,
            category: null,
            value: null
        }
    },
    computed: {
        ...mapGetters(
            [
                'getCategories'
            ]
        )
    },
    methods: {
        ...mapMutations([
            'addExpense'
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
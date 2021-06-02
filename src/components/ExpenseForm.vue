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
import { mapMutations, mapGetters, mapActions } from 'vuex'
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
        ...mapActions([
            'fetchCategories'
        ]),
        ...mapMutations([
            'addExpense'
        ]),
        save() {
            this.addExpense({date: this.date, category: this.category, value: this.value});
            this.date = null
            this.category = null,
            this.value = null
        },
        getFormattedDate() {
            const todayTime = new Date();
            const month = String(todayTime.getMonth() + 1). padStart(2, '0')
            const day = String(todayTime.getDate()). padStart(2, '0')
            const year = String(todayTime.getFullYear()). padStart(2, '0')
            return year + "-" + month + "-" + day
        }
    },
    mounted() {
        this.fetchCategories()
        this.date = this.getFormattedDate()
        this.category =  this.$route.params.category || null
        this.value = +this.$route.query.value || null

        if (this.category && this.value) {
            this.addExpense({date: this.date, category: this.category, value: this.value}); //this saves the expense to the store
        }
    }
    
}
</script>

<style>

</style>
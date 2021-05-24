<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <button @click="add"> {{ buttonTitle }} </button>
    <ExpenseForm v-show="showExpenseForm"/>
    <ExpensesList/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
import ExpensesList from '@/components/ExpensesList.vue'
import ExpenseForm from '@/components/ExpenseForm.vue'

export default {
  name: 'Home',
  components: {
    ExpensesList,
    ExpenseForm
  },
  data() {
    return {
      title: 'My finances dashboard',
      showExpenseForm: false,
      buttonTitle: 'Add expense +'
    }
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategories'
    ]),
    add() {
      this.showExpenseForm = !this.showExpenseForm
      this.buttonTitle = this.buttonTitle==='hide expense form' ? 'Add expense +' : 'hide expense form'
    }
  },
  mounted() {
    this.fetchData()
    this.fetchCategories()
  }
}

</script>

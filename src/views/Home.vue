<template>
  <div class="home">
    <header>
          <h1>My expenses</h1>
    </header>
    <button @click="onClick"> {{ buttonTitle }} </button>
    <ExpenseForm v-show="showExpenseForm"/>
    <ExpensesList :n="n" :cur="page"/>
    <Pagination :n="n" :cur="page" @pagination="paginationHandler" />
  </div>
</template>

<script>
// @ is an alias to /src
import ExpensesList from '@/components/ExpensesList.vue'
import ExpenseForm from '@/components/ExpenseForm.vue'
import Pagination from '@/components/Pagination.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ExpensesList,
    ExpenseForm,
    Pagination
  },
  data() {
    return {
      showExpenseForm: false,
      buttonTitle: 'Add expense +',
      page: 1,
      n: 10
    }
  },
  methods: {
    onClick() {
      this.showExpenseForm = !this.showExpenseForm
      this.buttonTitle = this.buttonTitle==='hide expense form' ? 'Add expense +' : 'hide expense form'
    },
    paginationHandler(i) {
      this.page = i
    }
  },
  computed: {
    ...mapGetters(
      [
        'getExpenses'
      ]
    )
  }
}

</script>

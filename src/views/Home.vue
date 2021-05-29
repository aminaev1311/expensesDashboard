<template>
  <div class="home">
    <header>
          <a href="#dashbaord">Dashboard</a>
          <a href="#about">About</a>
          <a href="#404">404</a>
    </header>
    <main>
      <PageDashboard />
      <PageAbout />
      <Page404 />
      
      <h1>Expenses Dashboard</h1>
      <button @click="onClick"> {{ buttonTitle }} </button>
      <ExpenseForm v-show="showExpenseForm"/>
      <ExpensesList :n="n" :cur="page"/>
      <Pagination :n="n" :cur="page" @pagination="paginationHandler" />
    </main>
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

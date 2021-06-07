<template>
  <div class="home">
    <header>
          <h1>My expenses</h1>
    </header>
    <button @click="showExpenseModal = !showExpenseModal"> Show/Hide Modal </button>
    <AddPaymentModal v-show="showExpenseModal" @hidePaymentModal="showExpenseModal = !showExpenseModal"/>
    <button @click="onClick" > {{ buttonTitle }} </button>
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
import AddPaymentModal from '@/components/modalWindows/AddPaymentModal.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PageDashboard',
  components: {
    ExpensesList,
    ExpenseForm,
    Pagination,
    AddPaymentModal
  },
  data() {
    return {
      showExpenseForm: false,
      buttonTitle: 'Add expense +',
      page: 1,
      n: 10,
      showExpenseModal: false
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
  },
  mounted () {
    this.page = +this.$route.params.page || 1
    // if (this.$route.params.page === undefined) {
    //       this.page = +this.$route.params.page
    // } else {
    //   this.page = 1
    // } 
    //why this notation doesn't work?
  }
}

</script>

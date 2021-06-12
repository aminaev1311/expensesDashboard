<template>
  <div class="home">
    <header>
          <h1>My expenses</h1>
    </header>
    <div>
      <button @click="clickHander"> Open/Close Modal </button>
      <!-- <button @click="onModalClose"> Close Modal </button> -->
    </div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'PageDashboard',
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
      n: 10,
      showModal: false
    }
  },
  methods: {
    onClick() {
      this.showExpenseForm = !this.showExpenseForm
      this.buttonTitle = this.buttonTitle==='hide expense form' ? 'Add expense +' : 'hide expense form'
    },

    // onModalShow() {
    //     this.$modal.show({ name: 'paymentform', settings: {} } )
    // },

    // onModalClose() {
    //   this.$modal.close()
    // },

    clickHander() {
      this.showModal = !this.showModal

      if (this.showModal) {
        this.$modal.show({ name: 'ExpenseForm', settings: {} } ) 
      } else {
        this.$modal.close() 
      } 
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

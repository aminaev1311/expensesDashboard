<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <button @click="add"> {{ buttonTitle }} </button>
    <ExpenseForm @save="save" v-if="showExpenseForm"/>
    <ExpensesList :list="expenses"/>
  </div>
</template>

<script>
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
      buttonTitle: 'Add expense +',
      expenses: [
        {
          date: '14/03/2021',
          category: 'food',
          value: 240
        },
        {
          date: '15/04/2021',
          category: 'education',
          value: 1000
        },
        {
          date: '16/05/2021',
          category: 'fitness',
          value: 1050
        },
        {
          date: '21/06/2021',
          category: 'health',
          value: 7000
        },
        {
          date: '18/06/2021',
          category: 'health',
          value: 700
        },
        {
          date: '17/06/2022',
          category: 'education',
          value: 7000
        },
        {
          date: '17/06/2023',
          category: 'entertainment',
          value: 70
        },
        {
          date: '21/06/2021',
          category: 'health',
          value: 7000
        },
        {
          date: '18/06/2021',
          category: 'health',
          value: 700
        },
        {
          date: '17/06/2022',
          category: 'education',
          value: 7000
        },
        {
          date: '17/06/2023',
          category: 'entertainment',
          value: 70
        },
        {
          date: '21/06/2021',
          category: 'health',
          value: 7000
        },
        {
          date: '18/06/2021',
          category: 'health',
          value: 700
        },
        {
          date: '17/06/2022',
          category: 'education',
          value: 7000
        },
        {
          date: '17/06/2023',
          category: 'entertainment',
          value: 70
        },
        {
          date: '21/06/2021',
          category: 'health',
          value: 7000
        },
        {
          date: '18/06/2021',
          category: 'health',
          value: 700
        },
        {
          date: '17/06/2022',
          category: 'education',
          value: 7000
        },
        {
          date: '17/06/2023',
          category: 'entertainment',
          value: 70
        },
        {
          date: '21/06/2021',
          category: 'health',
          value: 7000
        },
        {
          date: '18/06/2021',
          category: 'health',
          value: 700
        },
        {
          date: '17/06/2022',
          category: 'education',
          value: 7000
        },
        {
          date: '17/06/2023',
          category: 'entertainment',
          value: 70
        }
      ]
    }
  },
  methods: {
    save(obj) {
      this.expenses.push(obj)
    },
    add() {
      this.showExpenseForm = !this.showExpenseForm
      this.buttonTitle = this.buttonTitle==='hide expense form' ? 'Add expense +' : 'hide expense form'
    }
  }
}

</script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: [],
    categories: []
  },
  mutations: {
    setExpenses(state, payload ) {
      state.expenses.push(...payload)
    },
    addExpense(state, {date, category, value }) {
      if (date && category && value) {
        const id = state.expenses.length + 1
        state.expenses.push({id, date, category, value })
      }
    },
    setCategories(state, payload) {
      state.categories = payload
    },
    addCategory(state, payload) {
      if (!state.categories.includes(payload)) {
        state.categories.push(payload)
      }
    },
    deleteExpense(state, payload) {
      const index = state.expenses.findIndex( item => item.id === payload)
      const item = state.expenses.splice(index,1)
      console.log("item deleted: ", item)
    },
    editExpense(state, {id, category, value, date}) {
      let expense = state.expenses.find( item => item.id === id)
      if (date && category && value) {
        expense.value = value
        expense.category = category
        expense.date = date
      }
    }
  },
  actions: {
    fetchData ( {commit}) {
        return new Promise( (resolve) => {
          setTimeout( () => {
              const items = []
              for (let i = 1; i < 50; i++) {
                const item = {
                  id: i,
                  date: i<10? `200${i}-03-12`:`20${i}-03-12`,
                  category: i%2===0 ? 'education' : 'food',
                  value: i
                }
                items.push(item)
              }
              resolve(items)
            } 
          , 500) 
        })
          .then(res => {
            commit('setExpenses', res)
          }) 
    },
    fetchCategories ( {commit} ) {
      return new Promise( (resolve) => {
        setTimeout( () => resolve([
              'food', 
              'education', 
              'transport', 
              'leisure'
          ]) ,500)
      })
      .then( res => commit('setCategories', res))
    }
  },
  getters: {
    // getExpenseById: state => (id) => state.expenses.find( item => item.id === id),
    getExpenseById: state => {
      return function(id) {
        return state.expenses.find( item => item.id === id)
      }
    },
    getExpenses: state => state.expenses,
    getExpensesSum: state => state.expenses.reduce( (res, cur) => res + cur.value ,0),
    getCategories: state => state.categories,
    // getSumByCategory: state => {
    //   let sumByCategory = []
    //   for (category in state.categories) {
    //     state.expenses.filter( item => item.category == category)
      
    //   }
    //   return sumByCategory
    // }
  },
  modules: {
  }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: [],
    categories: []
  },
  mutations: {
    setExpensesData(state, payload) {
      state.expenses = payload
    },
    addExpense(state, payload) {
      state.expenses.push(payload)
    },
    setCategories(state, payload) {
      state.categories = payload
    },
    addCategory(state, payload) {
      if (!state.categories.includes(payload)) {
        console.log(`adding ${payload}`)
        state.categories.push(payload)
      } else {
        console.log(`${payload} already exists`)
      }
    }
  },
  actions: {
    fetchData ( {commit}) {
        return new Promise( (resolve) => {
          setTimeout( () => {
              const items = []
              for (let i = 1; i < 100; i++) {
                const item = {
                  date: `12.03.${i}`,
                  category: i%2===0 ? 'Education' : 'Food',
                  value: i
                }
                items.push(item)
              }
              resolve(items)
            } 
          , 500) 
        })
          .then(res => {
            commit('setExpensesData', res)
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
    getExpenses: state => state.expenses,
    getExpensesSum: state => state.expenses.reduce( (res, cur) => res + cur.value ,0),
    getCategories: state => state.categories
  },
  modules: {
  }
})

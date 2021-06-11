import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from './plugins/ModalWindow'

Vue.config.productionTip = false

store.dispatch('fetchData')
store.dispatch('fetchCategories')

Vue.use(modal)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



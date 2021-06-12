<template>
  <div id="app">
    <Modal />
    <Context />
    <header>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modal from './components/modalWindows/modal'
import Context from './components/contextMenu/context.vue'

export default {
  components: {
    Modal,
    Context
  },
  data() {
    return {
      modal: ''
    }
  },
  methods: {  
    ...mapActions([
    'fetchData',
    'fetchCategories'
    ]),
  },
  computed: {
    ...mapGetters(['getExpenses'])
  },
  mounted() {
  }
}
</script>


<style>
body {
  z-index: -1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

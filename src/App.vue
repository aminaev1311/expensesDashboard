<template>
  <div id="app">
    <header>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <Modal modal="paymentform" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modal from './components/modalWindows/modal'

export default {
  components: {
    Modal
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

    onShow( ) {
      // this.$modal.show({name: 'modal'})
      this.modal = 'modal'
      this.$modal.show({name: this.modal})
    },

    onClose() {
      this.modal = ''
      // this.$modal.close()
    }

  },
  computed: {
    ...mapGetters(['getExpenses'])
  },
  mounted() {
    // this.$modal.EventBus.$on('show', this.onShow )
    // this.$modal.EventBus.$on('close', this.onClose )
    console.log(this.$modal)
    this.$modal.show()
    this.$modal.close()
    // this.$modal.eventBus.$emit('show', {name: 'paymentform'})
    // this.$modal.show('paymentform')
  }
}
</script>


<style>
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

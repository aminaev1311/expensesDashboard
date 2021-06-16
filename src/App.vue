<template>
  <div id="app">
    <transition name="fade">
      <Modal v-if="show" :name="show" :settings="settings"/>
    </transition>

    <transition name="fade" appear>
      <Context />
    </transition>
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
// import Modal from './components/modalWindows/modal'
// import Context from './components/contextMenu/context.vue'

export default {
  components: {
    Modal: () => import('./components/modalWindows/modal'),
    Context: () => import('./components/contextMenu/context.vue'),
  },
  data() {
    return {
      // modal: '',
      show: '',
      settings: ''
    }
  },
  methods: {  
    ...mapActions([
    'fetchData',
    'fetchCategories'
    ]),

    onShow( { name, settings } ) {
      this.show = name
      console.log('settings received in the modal: ',settings)
      this.settings = settings
    },
    onClose() {
        this.show = ''
        this.settings = null
    }
  },
  computed: {
    ...mapGetters(['getExpenses'])
  },
  mounted() {
    this.$modal.eventBus.$on('show', this.onShow)
    this.$modal.eventBus.$on('close', this.onClose )
  },
  beforeDestroy() {
    this.$modal.eventBus.$off('show', this.onShow)
    this.$modal.eventBus.$off('close', this.onClose )
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

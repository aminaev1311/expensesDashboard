<template>
  <!-- <div id="app"> -->
  <v-app id="app">
    <v-app-bar flat app>
        <v-btn to="/dashboard" :ripple="false" plain>Dashboard</v-btn>
        <v-btn to="/about" :ripple="false" plain>About</v-btn>
        <v-btn to="/404" :ripple="false" plain>404</v-btn>
    </v-app-bar>

    <transition name="fade">
      <Modal v-if="show" :name="show" :settings="settings"/>
    </transition>

    <transition name="fade" appear>
      <Context />
    </transition>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main> 

    <!-- <main>
      <router-view />
    </main> -->
  <!-- </div> -->
  </v-app>
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

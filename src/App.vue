<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <header>
      <a href="#dashboard" @click="page = 'dashboard'">dashboard</a>
      <a href="#about" @click="page = 'about'">about</a>
      <a href="#page404" @click="page = 'page404'">404</a>
    </header>
    <main>
      <PageDashboard v-if="page === 'dashboard'"/>
      <PageAbout v-if="page === 'about'"/>
      <Page404 v-if="page === 'page404'"/>
    </main>
  </div>
</template>

<script>
import PageDashboard from './views/PageDashboard'
import PageAbout from './views/About'
import Page404 from './views/Page404'

export default {
  components: {
    PageDashboard,
    PageAbout,
    Page404
  },
  data() {
    return {
      page: 'dashboard'
    }
  },
  methods: {
    setPage() {
      this.page = location.hash.slice(1)
    }
    
  },
  mounted() {
    this.setPage() //set the current page after hash
    window.addEventListener('hashchange', () => {
      this.setPage() //changes the page after url change
    })
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

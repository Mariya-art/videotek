<template>
  <div class="app">
    <v-main>
      <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        height="50vh"
      >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <img :src="logo" alt="logo" class="nav-logo">
      <v-toolbar-title class="logo">VIDEOTEK</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view/>
  </v-main>
  </div>
</template>

<script>
import logo from './assets/videotek.jpg'
export default {
  name: 'App',
  beforeCreate () {
    document.body.className = 'app'
  },

  data: () => ({
    drawer: false,
    group: null,
    logo
  })
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: black;
  color: white;
}

.nav-logo {
  width: 50px;
  height: 50px;
}

.logo {
  font-family: 'Roboto', serif;
  font-weight: 900;
}
</style>

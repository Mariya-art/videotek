require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'; // path to vuetify export

console.log('is running');

//Vue.component('home', require('./components/Home.vue').default);
//Vue.component('test-vuetify', require('./components/TestVuetify.vue').default);
/*
const app = new Vue({
    vuetify: Vuetify,
    el: "#app",
});*/

const app = new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: (h) => h(App)
});
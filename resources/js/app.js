require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // path to vuetify export

const app = new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App)
});

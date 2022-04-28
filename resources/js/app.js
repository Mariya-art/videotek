require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'; // path to vuetify export
import paginate from 'vuejs-paginate';

Vue.component('paginate', paginate);

const app = new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: (h) => h(App)
});
require('./bootstrap');

window.Vue = require('vue').default;
import { createApp } from 'vue';
const app = createApp({});

app.component('home', require('./components/Home.vue').default);
app.mount('#app');
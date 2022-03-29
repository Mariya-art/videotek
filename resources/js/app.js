require('./bootstrap');

import Vue from 'vue';

console.log('is running');

Vue.component('home', require('./components/Home.vue').default);

const app = new Vue({
    el: "#app"
});

// Это для Vue3
/*
window.Vue = require('vue').default;
import { createApp } from 'vue';
const app = createApp({});

app.component('home', require('./components/Home.vue').default);
app.mount('#app');
*/
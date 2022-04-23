import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome.vue'
import MainPage from '../components/MainPage.vue'
import FilmPage from '../components/FilmPage.vue'
import PersonPage from '../components/PersonPage.vue'
import Films from '../components/Films.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: Welcome
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/films',
    name: 'Films',
    component: Films,
  },
  {
    path: '/films/:route',
    name: 'FilmPage',
    component: FilmPage,
  },
  {
    path: '/person/:route',
    name: 'PersonPage',
    component: PersonPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListFilms from '../components/ListFilms.vue'
import FilmPage from '../components/FilmPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/films',
    name: 'ListFilm',
    component: ListFilms
  },
  {
    path: '/films/:route',
    name: 'filmPage',
    component: FilmPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

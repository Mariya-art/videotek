import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import FilmPage from '../components/FilmPage.vue'
import PersonPage from '../components/PersonPage.vue'
import Films from '../components/Films.vue'
import Media from '../components/Media.vue'
import NewsArticlesPage from '../components/NewsArticlesPage.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Page404 from '../components/Page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/films/:route',
    name: 'filmPage',
    component: FilmPage
  },
  {
    path: '/serials',
    name: 'Serials',
    component: Films,
  },
  {
    path: '/person/:route',
    name: 'PersonPage',
    component: PersonPage
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/media/:route',
    name: 'NewsArticlesPage',
    component: NewsArticlesPage
  },
  {
    path: '*',
    name: '404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

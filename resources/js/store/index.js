import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmsList: [],
    carouselList: [],
    isVisible: true
  },
  mutations: {
    setFilmsList(state, payload) {
      state.filmsList = payload
    },
    setCarouselList(state, payload) {
      state.carouselList = payload
    },
    setIsVisible(state, payload) {
      state.isVisible = payload
    }
  },
  getters: {
    getFilmsList: state => state.filmsList,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible
  },
  actions: {
    fetchFilms({ commit }) {
      return axios.get('/films').then( result => {
        commit('setFilmsList', result.data);
      })
      
    },
    fetchCarousel({ commit }) {
      return commit('setCarouselList', [
        {
          src: 'https://nigelclarkepresenter.co.uk/reviews/wp-content/uploads/2018/02/BP-08-copy.jpg'
        },
        {
          src: 'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm209-movie-film-poster-batman-begins_5b951e0b-1000x1000.jpg'
        },
        {
          src: 'https://avatars.mds.yandex.net/get-zen_doc/1888829/pub_5d8c753179c26e00ae002ede_5d8cd9120ce57b00ade9d04d/scale_1200'
        },
        {
          src: 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/silent-running-1971-002-poster.jpg?itok=Ho6VqqL5'
        }
      ])
    },
    toggleIsVisible({ commit }, payload) {
      commit('setIsVisible', payload)
    }
  }
})

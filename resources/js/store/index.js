import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    serials: [],
    videos: [],
    genres: [],
    ratingItems: [],
    newItems: [],
    carouselList: [],
    personList: [],
    commentList: []
  },
  mutations: {
    setRatingItems(state, payload) {
      state.ratingItems = payload
    },
    setNewItems(state, payload) {
      state.newItems = payload
    },
    setFilms(state, payload) {
      state.films = payload
    },
    setSerials(state, payload) {
      state.serials = payload
    },
    setVideos(state, payload) {
      state.videos = payload
    },
    setGenres(state, payload) {
      state.genres = payload
    },
    setCarouselList(state, payload) {
      state.carouselList = payload
    },
    setPersonList(state, payload) {
      state.personList = payload
    },
    setCommentList (state, payload) {
      state.commentList = payload
    },
    addComment (state, payload) {
      state.commentList = [payload, ...state.commentList]
    }
  },
  getters: {
    getRatingItems: state => state.ratingItems,
    getNewItems: state => state.newItems,
    getFilms: state => state.films,
    getSerials: state => state.serials,
    getVideos: state => state.videos,
    getGenres: state => state.genres,
    getCarouselList: state => state.carouselList,
    getPersonsList: state => state.personList,
    getCommentList: state => state.commentList,
  },
  actions: {
    fetchRatingItems({ commit }) {
      return axios.get('/api/main/rating').then( result => {
        commit('setRatingItems', result.data.data);
      })
    },
    fetchNewItems({ commit }) {
      return axios.get('/api/main/new').then( result => {
        commit('setNewItems', result.data.data);
      })
    },
    fetchFilms({ commit }) {
      return axios.get('/api/films').then( result => {
        commit('setFilms', result.data.data);
      })
    },
    fetchSerials({ commit }) {
      return axios.get('/api/serials').then( result => {
        commit('setSerials', result.data.data);
      })
    },
    fetchVideos({ commit }) {
      return axios.get('/api/videos').then( result => {
        commit('setVideos', result.data.data);
      })
    },
    fetchGenres({ commit }) {
      return axios.get('/api/genres').then( result => {
        commit('setGenres', result.data.data);
      })
    },
    fetchActors({ commit }, payload) {
      commit('setPersonList', payload)
    },
    fetchDirectors({ commit }, payload) {
      commit('setPersonList', [...this.state.personList, ...payload])
    },
    fetchCarousel({ commit }) {
      return commit('setCarouselList', [
        {
          src: 'sherlock.jpg'
        },
        {
          src: 'taboo.jpg'
        },
        {
          src: 'gentlemen.jpg'
        },
        {
          src: 'billions.jpg'
        }
      ])
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
  }
})

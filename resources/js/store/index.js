import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    videos: [],
    genres: [],
    ratingItems: [],
    newItems: [],
    personList: [],
    isVisible: true
  },
  mutations: {
    setRatingItems(state, payload) {
      state.ratingItems = payload
    },
    setNewItems(state, payload) {
      state.newItems = payload
    },
    setFilms(state, payload) {
      state.films = []
      state.films = payload
    },
    setSerials(state, payload) {
      state.films = []
      state.films = payload
    },
    setVideos(state, payload) {
      state.videos = payload
    },
    setGenres(state, payload) {
      state.genres = payload
    },
    setPersonList(state, payload) {
      state.personList = payload
    }
  },
  getters: {
    getRatingItems: state => state.ratingItems,
    getNewItems: state => state.newItems,
    getFilms: state => state.films,
    // getSerials: state => state.serials,
    getVideos: state => state.videos,
    getGenres: state => state.genres,
    getPersonsList: state => state.personList,
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
    }
  }
})

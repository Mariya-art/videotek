import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    ratingItems: [],
    newItems: [],
    commentList: []
  },
  mutations: {
    setFilms(state, payload) {
      state.films = payload
    },
    setRatingItems(state, payload) {
      state.ratingItems = payload
    },
    setNewItems(state, payload) {
      state.newItems = payload
    },
    setCommentList (state, payload) {
      state.commentList = payload
    },
    addComment (state, payload) {
      state.commentList = [payload, ...state.commentList]
    }
  },
  getters: {
    getFilms: state => state.films,
    getRatingItems: state => state.ratingItems,
    getNewItems: state => state.newItems,
    getCommentList: state => state.commentList,
  },
  actions: {
    fetchFilms({ commit }) {
      return axios.get('/api/films').then( result => {
        commit('setFilms', result.data.data);
      })
    },
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
    fetchComments ({ commit }, payload) {
      commit('setCommentList', payload)
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
  }
})

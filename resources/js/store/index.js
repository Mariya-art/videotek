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
    setRatingItems(state, payload) {
      state.ratingItems = payload
    },
    setNewItems(state, payload) {
      state.newItems = payload
    },
    setFilms(state, payload) {
      state.films = payload
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
    fetchComments ({ commit }, payload) {
      return commit('setCommentList', payload)
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
  }
})

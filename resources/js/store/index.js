import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    filmToShow: {},
    commentList: []
  },
  mutations: {
    setFilms(state, payload) {
      state.films = payload
    },
    setFilmToShow(state, payload) {
      state.filmToShow = payload
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
    getFilmToShow: state => state.filmToShow,
    getCommentList: state => state.commentList,
  },
  actions: {
    fetchFilmToShow({ commit }, payload) {
        commit('setFilmToShow', payload)
    },
    fetchFilms({ commit }) {
      return axios.get('/api/films').then( result => {
        commit('setFilms', result.data.data)
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

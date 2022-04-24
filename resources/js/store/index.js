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
    commentList: [],
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
    setIsVisible(state, payload) {
      state.isVisible = payload
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
    getIsVisible: state => state.isVisible,
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
    toggleIsVisible({ commit }, payload) {
      commit('setIsVisible', payload)
    },
    fetchComments ({ commit }) {
      return commit('setCommentList', [
        {
          filmRoute: 'avatar',
          username: 'Гость 1',
          comment: 'Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1,Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1.',
          datetime: '18.04.2022, 18:30',
          id: '1'
        },
        {
          filmRoute: 'hurrypotter-azkaban',
          username: 'Гость 8',
          comment: 'Текст коментария 2, Текст коментария 2, Текст коментария 2, Текст коментария 2',
          datetime: '18.04.2022, 18:30',
          id: '2'
        },
        {
          filmRoute: 'avatar',
          username: 'Гость 2',
          comment: 'Текст коментария3',
          datetime: '18.04.2022, 19:00',
          id: '3'
        },
        {
          filmRoute: 'snowwhite',
          username: 'Гость 2',
          comment: 'Текст коментария 4, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
          datetime: '18.04.2022, 18:30',
          id: '4'
        },
        {
          filmRoute: 'matrix',
          username: 'Гость 4',
          comment: 'Текст коментария 5, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
          datetime: '18.04.2022, 19:00',
          id: '5'
        },
        {
          filmRoute: 'everest',
          username: 'Гость 2',
          comment: 'Текст коментария 6',
          datetime: '18.04.2022, 19:00',
          id: '6'
        },
        {
          filmRoute: 'hurrypotter-azkaban',
          username: 'Гость 1',
          comment: 'Текст коментария 7',
          datetime: '18.04.2022, 19:00',
          id: '7'
        }
      ])
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
  }
})

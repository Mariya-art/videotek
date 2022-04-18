import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    serials: [],
    videos: [],
    genres: [],
    newItems: [],
    ratingItems: [],
    itemActors: [],
    itemDirectors: [],
    itemCategories: [],
    carouselList: [],
    personList: [],
    commentList: [],
    isVisible: true
  },
  mutations: {
    setNewItems(state, payload) {
      state.newItems = payload
    },
    setRatingItems(state, payload) {
      state.ratingItems = payload
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
    setItemActors(state, payload) {
      state.itemActors = payload
    },
    setItemDirectors(state, payload) {
      state.itemDirectors = payload
    },
    setItemCategories(state, payload) {
      state.itemCategories = payload
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
    getNewItems: state => state.newItems,
    getRatingItems: state => state.ratingItems,
    getFilms: state => state.films,
    getSerials: state => state.serials,
    getVideos: state => state.videos,
    getGenres: state => state.genres,
    getItemActors: state => state.itemActors,
    getItemDirectors: state => state.itemDirectors,
    getItemCategories: state => state.itemCategories,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible,
    getPersonsList: state => state.personList,
    getCommentList: state => state.commentList,
  },
  actions: {
    fetchNewItems({ commit }) {
      return axios.get('/main/new').then( result => {
        commit('setNewItems', result.data);
      })  
    },
    fetchRatingItems({ commit }) {
      return axios.get('/main/rating').then( result => {
        commit('setRatingItems', result.data);
      })  
    },
    fetchFilms({ commit }) {
      return axios.get('/films').then( result => {
        commit('setFilms', result.data);
      })  
    },
    fetchSerials({ commit }) {
      return axios.get('/serials').then( result => {
        commit('setSerials', result.data);
      })  
    },
    fetchVideos({ commit }) {
      return axios.get('/videos').then( result => {
        commit('setVideos', result.data);
      })  
    },
    fetchGenres({ commit }) {
      return axios.get('/genres').then( result => {
        commit('setGenres', result.data);
      })  
    },
    fetchItemActors({ commit }, route) {
      return axios.get('/films/' + route + '/actors').then( result => {
        commit('setItemActors', result.data);
      })  
    },
    fetchItemDirectors({ commit }, route) {
      return axios.get('/films/' + route + '/directors').then( result => {
        commit('setItemDirectors', result.data);
      })  
    },
    fetchItemCategories({ commit }, route) {
      return axios.get('/films/' + route + '/categories').then( result => {
        commit('setItemCategories', result.data);
      })  
    },
    fetchPerson({ commit }, payload) {
      commit('setPersonList', payload)
    },
    fetchDirectors({ commit }, payload) {
      console.log(...this.state.personList)
      console.log(...payload)
      commit('setPersonList', [...this.state.personList, ...payload])
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

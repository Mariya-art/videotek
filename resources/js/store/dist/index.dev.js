"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
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
    setRatingItems: function setRatingItems(state, payload) {
      state.ratingItems = payload;
    },
    setNewItems: function setNewItems(state, payload) {
      state.newItems = payload;
    },
    setFilms: function setFilms(state, payload) {
      state.films = payload;
    },
    setSerials: function setSerials(state, payload) {
      state.serials = payload;
    },
    setVideos: function setVideos(state, payload) {
      state.videos = payload;
    },
    setGenres: function setGenres(state, payload) {
      state.genres = payload;
    },
    setCarouselList: function setCarouselList(state, payload) {
      state.carouselList = payload;
    },
    setIsVisible: function setIsVisible(state, payload) {
      state.isVisible = payload;
    },
    setPersonList: function setPersonList(state, payload) {
      state.personList = payload;
    },
    setCommentList: function setCommentList(state, payload) {
      state.commentList = payload;
    },
    addComment: function addComment(state, payload) {
      state.commentList = [payload].concat(_toConsumableArray(state.commentList));
    }
  },
  getters: {
    getRatingItems: function getRatingItems(state) {
      return state.ratingItems;
    },
    getNewItems: function getNewItems(state) {
      return state.newItems;
    },
    getFilms: function getFilms(state) {
      return state.films;
    },
    getSerials: function getSerials(state) {
      return state.serials;
    },
    getVideos: function getVideos(state) {
      return state.videos;
    },
    getGenres: function getGenres(state) {
      return state.genres;
    },
    getCarouselList: function getCarouselList(state) {
      return state.carouselList;
    },
    getIsVisible: function getIsVisible(state) {
      return state.isVisible;
    },
    getPersonsList: function getPersonsList(state) {
      return state.personList;
    },
    getCommentList: function getCommentList(state) {
      return state.commentList;
    }
  },
  actions: {
    fetchRatingItems: function fetchRatingItems(_ref) {
      var commit = _ref.commit;
      return axios.get('/api/main/rating').then(function (result) {
        commit('setRatingItems', result.data.data);
      });
    },
    fetchNewItems: function fetchNewItems(_ref2) {
      var commit = _ref2.commit;
      return axios.get('/api/main/new').then(function (result) {
        commit('setNewItems', result.data.data);
      });
    },
    fetchFilms: function fetchFilms(_ref3) {
      var commit = _ref3.commit;
      return axios.get('/api/films').then(function (result) {
        commit('setFilms', result.data.data);
      });
    },
    fetchSerials: function fetchSerials(_ref4) {
      var commit = _ref4.commit;
      return axios.get('/api/serials').then(function (result) {
        commit('setSerials', result.data.data);
      });
    },
    fetchVideos: function fetchVideos(_ref5) {
      var commit = _ref5.commit;
      return axios.get('/api/videos').then(function (result) {
        commit('setVideos', result.data.data);
      });
    },
    fetchGenres: function fetchGenres(_ref6) {
      var commit = _ref6.commit;
      return axios.get('/api/genres').then(function (result) {
        commit('setGenres', result.data.data);
      });
    },
    fetchActors: function fetchActors(_ref7, payload) {
      var commit = _ref7.commit;
      commit('setPersonList', payload);
    },
    fetchDirectors: function fetchDirectors(_ref8, payload) {
      var commit = _ref8.commit;
      commit('setPersonList', [].concat(_toConsumableArray(this.state.personList), _toConsumableArray(payload)));
    },
    fetchCarousel: function fetchCarousel(_ref9) {
      var commit = _ref9.commit;
      return commit('setCarouselList', [{
        src: 'https://nigelclarkepresenter.co.uk/reviews/wp-content/uploads/2018/02/BP-08-copy.jpg'
      }, {
        src: 'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm209-movie-film-poster-batman-begins_5b951e0b-1000x1000.jpg'
      }, {
        src: 'https://avatars.mds.yandex.net/get-zen_doc/1888829/pub_5d8c753179c26e00ae002ede_5d8cd9120ce57b00ade9d04d/scale_1200'
      }, {
        src: 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/silent-running-1971-002-poster.jpg?itok=Ho6VqqL5'
      }]);
    },
    toggleIsVisible: function toggleIsVisible(_ref10, payload) {
      var commit = _ref10.commit;
      commit('setIsVisible', payload);
    },
    fetchComments: function fetchComments(_ref11) {
      var commit = _ref11.commit;
      return commit('setCommentList', [{
        filmRoute: 'avatar',
        username: 'Гость 1',
        comment: 'Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1,Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1.',
        datetime: '18.04.2022, 18:30',
        id: '1'
      }, {
        filmRoute: 'hurrypotter-azkaban',
        username: 'Гость 8',
        comment: 'Текст коментария 2, Текст коментария 2, Текст коментария 2, Текст коментария 2',
        datetime: '18.04.2022, 18:30',
        id: '2'
      }, {
        filmRoute: 'avatar',
        username: 'Гость 2',
        comment: 'Текст коментария3',
        datetime: '18.04.2022, 19:00',
        id: '3'
      }, {
        filmRoute: 'snowwhite',
        username: 'Гость 2',
        comment: 'Текст коментария 4, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
        datetime: '18.04.2022, 18:30',
        id: '4'
      }, {
        filmRoute: 'matrix',
        username: 'Гость 4',
        comment: 'Текст коментария 5, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
        datetime: '18.04.2022, 19:00',
        id: '5'
      }, {
        filmRoute: 'everest',
        username: 'Гость 2',
        comment: 'Текст коментария 6',
        datetime: '18.04.2022, 19:00',
        id: '6'
      }, {
        filmRoute: 'hurrypotter-azkaban',
        username: 'Гость 1',
        comment: 'Текст коментария 7',
        datetime: '18.04.2022, 19:00',
        id: '7'
      }]);
    },
    fetchAddComment: function fetchAddComment(_ref12, payload) {
      var commit = _ref12.commit;
      commit('addComment', payload);
    }
  }
});

exports["default"] = _default;
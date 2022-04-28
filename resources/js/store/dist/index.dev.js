"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    films: {},
    filmsPageCount: null,
    serials: [],
    videos: [],
    filmsGenres: [],
    serialsGenres: [],
    ratingItems: [],
    newItems: [],
    carouselList: [],
    personList: [],
    commentList: [],
    news: [],
    articles: [],
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
    setFilmsPageCount: function setFilmsPageCount(state, payload) {
      state.filmsPageCount = payload;
    },
    setSerials: function setSerials(state, payload) {
      state.serials = payload;
    },
    setNews: function setNews(state, payload) {
      state.news = payload;
    },
    setArticles: function setArticles(state, payload) {
      state.articles = payload;
    },
    setVideos: function setVideos(state, payload) {
      state.videos = payload;
    },
    setFilmsGenres: function setFilmsGenres(state, payload) {
      state.filmsGenres = payload;
    },
    setSerialsGenres: function setSerialsGenres(state, payload) {
      state.serialsGenres = payload;
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
    getNews: function getNews(state) {
      return state.news;
    },
    getArticles: function getArticles(state) {
      return state.articles;
    },
    getRatingItems: function getRatingItems(state) {
      return state.ratingItems;
    },
    getNewItems: function getNewItems(state) {
      return state.newItems;
    },
    getFilms: function getFilms(state) {
      return state.films;
    },
    getFilmsPageCount: function getFilmsPageCount(state) {
      return state.filmsPageCount;
    },
    getSerials: function getSerials(state) {
      return state.serials;
    },
    getVideos: function getVideos(state) {
      return state.videos;
    },
    getFilmsGenres: function getFilmsGenres(state) {
      return state.filmsGenres;
    },
    getSerialsGenres: function getSerialsGenres(state) {
      return state.serialsGenres;
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
      return _axios["default"].get('/api/main/rating').then(function (result) {
        commit('setRatingItems', result.data.data);
      });
    },
    fetchNewItems: function fetchNewItems(_ref2) {
      var commit = _ref2.commit;
      return _axios["default"].get('/api/main/new').then(function (result) {
        commit('setNewItems', result.data.data);
      });
    },
    fetchFilms: function fetchFilms(_ref3) {
      var commit = _ref3.commit;
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _axios["default"].get('/api/films?page=' + page).then(function (result) {
        commit('setFilms', result.data);
      });
    },
    fetchFilmsPageCount: function fetchFilmsPageCount(_ref4) {
      var commit = _ref4.commit;
      return _axios["default"].get('/api/filmsPageCount').then(function (result) {
        commit('setFilmsPageCount', result.data);
      });
    },
    fetchSerials: function fetchSerials(_ref5) {
      var commit = _ref5.commit;
      return _axios["default"].get('/api/serials').then(function (result) {
        commit('setSerials', result.data.data);
      });
    },
    fetchVideos: function fetchVideos(_ref6) {
      var commit = _ref6.commit;
      return _axios["default"].get('/api/videos').then(function (result) {
        commit('setVideos', result.data.data);
      });
    },
    fetchFilmsGenres: function fetchFilmsGenres(_ref7) {
      var commit = _ref7.commit;
      return _axios["default"].get('/api/filmsGenres').then(function (result) {
        commit('setFilmsGenres', result.data.data);
      });
    },
    fetchSerialsGenres: function fetchSerialsGenres(_ref8) {
      var commit = _ref8.commit;
      return _axios["default"].get('/api/serialsGenres').then(function (result) {
        commit('setSerialsGenres', result.data.data);
      });
    },
    fetchActors: function fetchActors(_ref9, payload) {
      var commit = _ref9.commit;
      commit('setPersonList', payload);
    },
    fetchDirectors: function fetchDirectors(_ref10, payload) {
      var commit = _ref10.commit;
      commit('setPersonList', [].concat(_toConsumableArray(this.state.personList), _toConsumableArray(payload)));
    },
    fetchCarousel: function fetchCarousel(_ref11) {
      var commit = _ref11.commit;
      return commit('setCarouselList', [{
        src: 'sherlock.jpg'
      }, {
        src: 'taboo.jpg'
      }, {
        src: 'gentlemen.jpg'
      }, {
        src: 'billions.jpg'
      }]);
    },
    toggleIsVisible: function toggleIsVisible(_ref12, payload) {
      var commit = _ref12.commit;
      commit('setIsVisible', payload);
    },
    fetchComments: function fetchComments(_ref13) {
      var commit = _ref13.commit;
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
    fetchAddComment: function fetchAddComment(_ref14, payload) {
      var commit = _ref14.commit;
      commit('addComment', payload);
    },
    fetchNews: function fetchNews(_ref15) {
      var commit = _ref15.commit;
      return _axios["default"].get('api/news').then(function (result) {
        commit('setNews', result.data.data);
      });
    },
    fetchArticles: function fetchArticles(_ref16) {
      var commit = _ref16.commit;
      return _axios["default"].get('api/articles').then(function (result) {
        commit('setArticles', result.data.data);
      });
    }
  }
});

exports["default"] = _default;
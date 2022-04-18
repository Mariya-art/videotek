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
    newItems: [],
    ratingItems: [],
    itemActors: [],
    itemDirectors: [],
    itemCategories: [],
    carouselList: [],
    personList: [],
    isVisible: true
  },
  mutations: {
    setNewItems: function setNewItems(state, payload) {
      state.newItems = payload;
    },
    setRatingItems: function setRatingItems(state, payload) {
      state.ratingItems = payload;
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
    setItemActors: function setItemActors(state, payload) {
      state.itemActors = payload;
    },
    setItemDirectors: function setItemDirectors(state, payload) {
      state.itemDirectors = payload;
    },
    setItemCategories: function setItemCategories(state, payload) {
      state.itemCategories = payload;
    },
    setCarouselList: function setCarouselList(state, payload) {
      state.carouselList = payload;
    },
    setIsVisible: function setIsVisible(state, payload) {
      state.isVisible = payload;
    },
    setPersonList: function setPersonList(state, payload) {
      state.personList = payload;
    }
  },
  getters: {
    getNewItems: function getNewItems(state) {
      return state.newItems;
    },
    getRatingItems: function getRatingItems(state) {
      return state.ratingItems;
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
    getItemActors: function getItemActors(state) {
      return state.itemActors;
    },
    getItemDirectors: function getItemDirectors(state) {
      return state.itemDirectors;
    },
    getItemCategories: function getItemCategories(state) {
      return state.itemCategories;
    },
    getCarouselList: function getCarouselList(state) {
      return state.carouselList;
    },
    getIsVisible: function getIsVisible(state) {
      return state.isVisible;
    },
    getPersonsList: function getPersonsList(state) {
      return state.personList;
    }
  },
  actions: {
    fetchNewItems: function fetchNewItems(_ref) {
      var commit = _ref.commit;
      return axios.get('/main/new').then(function (result) {
        commit('setNewItems', result.data);
      });
    },
    fetchRatingItems: function fetchRatingItems(_ref2) {
      var commit = _ref2.commit;
      return axios.get('/main/rating').then(function (result) {
        commit('setRatingItems', result.data);
      });
    },
    fetchFilms: function fetchFilms(_ref3) {
      var commit = _ref3.commit;
      return axios.get('/films').then(function (result) {
        commit('setFilms', result.data);
      });
    },
    fetchSerials: function fetchSerials(_ref4) {
      var commit = _ref4.commit;
      return axios.get('/serials').then(function (result) {
        commit('setSerials', result.data);
      });
    },
    fetchVideos: function fetchVideos(_ref5) {
      var commit = _ref5.commit;
      return axios.get('/videos').then(function (result) {
        commit('setVideos', result.data);
      });
    },
    fetchGenres: function fetchGenres(_ref6) {
      var commit = _ref6.commit;
      return axios.get('/genres').then(function (result) {
        commit('setGenres', result.data);
      });
    },
    fetchItemActors: function fetchItemActors(_ref7, route) {
      var commit = _ref7.commit;
      return axios.get('/films/' + route + '/actors').then(function (result) {
        commit('setItemActors', result.data);
      });
    },
    fetchItemDirectors: function fetchItemDirectors(_ref8, route) {
      var commit = _ref8.commit;
      return axios.get('/films/' + route + '/directors').then(function (result) {
        commit('setItemDirectors', result.data);
      });
    },
    fetchItemCategories: function fetchItemCategories(_ref9, route) {
      var commit = _ref9.commit;
      return axios.get('/films/' + route + '/categories').then(function (result) {
        commit('setItemCategories', result.data);
      });
    },
    fetchPerson: function fetchPerson(_ref10, payload) {
      var commit = _ref10.commit;
      commit('setPersonList', payload);
    },
    fetchDirectors: function fetchDirectors(_ref11, payload) {
      var _console, _console2;

      var commit = _ref11.commit;

      (_console = console).log.apply(_console, _toConsumableArray(this.state.personList));

      (_console2 = console).log.apply(_console2, _toConsumableArray(payload));

      commit('setPersonList', [].concat(_toConsumableArray(this.state.personList), _toConsumableArray(payload)));
    },
    fetchCarousel: function fetchCarousel(_ref12) {
      var commit = _ref12.commit;
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
    toggleIsVisible: function toggleIsVisible(_ref13, payload) {
      var commit = _ref13.commit;
      commit('setIsVisible', payload);
    }
  }
});

exports["default"] = _default;
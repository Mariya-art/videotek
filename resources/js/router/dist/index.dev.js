"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _MainPage = _interopRequireDefault(require("../components/MainPage.vue"));

var _FilmPage = _interopRequireDefault(require("../components/FilmPage.vue"));

var _PersonPage = _interopRequireDefault(require("../components/PersonPage.vue"));

var _Films = _interopRequireDefault(require("../components/Films.vue"));

var _Media = _interopRequireDefault(require("../components/Media.vue"));

var _NewsArticlesPage = _interopRequireDefault(require("../components/NewsArticlesPage.vue"));

var _Account = _interopRequireDefault(require("../components/Account.vue"));

var _Reg = _interopRequireDefault(require("../components/Reg.vue"));

var _Page = _interopRequireDefault(require("../components/Page404.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/about',
  name: 'about',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/AboutView.vue'));
    });
  }
}, {
  path: '/main',
  name: 'MainPage',
  component: _MainPage["default"]
}, {
  path: '/account',
  name: 'Account',
  component: _Account["default"]
}, {
  path: '/register',
  name: 'Reg',
  component: _Reg["default"]
}, {
  path: '/films',
  name: 'Films',
  component: _Films["default"]
}, {
  path: '/films/:route',
  name: 'filmPage',
  component: _FilmPage["default"]
}, {
  path: '/serials',
  name: 'Serials',
  component: _Films["default"]
}, {
  path: '/person/:route',
  name: 'PersonPage',
  component: _PersonPage["default"]
}, {
  path: '/media',
  name: 'Media',
  component: _Media["default"]
}, {
  path: '/media/:route',
  name: 'NewsArticlesPage',
  component: _NewsArticlesPage["default"]
}, {
  path: '*',
  name: '404',
  component: _Page["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
var _default = router;
exports["default"] = _default;
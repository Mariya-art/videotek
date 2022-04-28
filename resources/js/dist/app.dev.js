"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var _vuejsPaginate = _interopRequireDefault(require("vuejs-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');

_vue["default"].component('paginate', _vuejsPaginate["default"]);

var app = new _vue["default"]({
  el: "#app",
  router: _router["default"],
  store: _store["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});
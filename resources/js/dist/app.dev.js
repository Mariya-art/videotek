"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');

// path to vuetify export
var app = new _vue["default"]({
  el: "#app",
  router: _router["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});
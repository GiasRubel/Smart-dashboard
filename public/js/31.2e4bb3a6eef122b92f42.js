webpackJsonp([31],{

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1448)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1450)
/* template */
var __vue_template__ = __webpack_require__(1451)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ca908186"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/pages/common/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca908186", Component.options)
  } else {
    hotAPI.reload("data-v-ca908186", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1449);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("33409878", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca908186\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca908186\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n*[data-v-ca908186] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\nbody[data-v-ca908186] {\n    padding: 0;\n    margin: 0;\n}\n#notfound[data-v-ca908186] {\n    position: relative;\n    height: 100vh;\n    background: #f6f6f6;\n}\n#notfound .notfound[data-v-ca908186] {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n.notfound[data-v-ca908186] {\n    max-width: 767px;\n    width: 100%;\n    line-height: 1.4;\n    padding: 110px 40px;\n    text-align: center;\n    background: #fff;\n    -webkit-box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);\n    box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);\n}\n.notfound a[data-v-ca908186] {\n    padding: 10px 60px;\n    width: 250px;\n    border: none;\n    background: -webkit-gradient(linear, left top, left bottom, from(#00b7ff), color-stop(#08b2f5), to(#00b7ff));\n    background: linear-gradient(#00b7ff, #08b2f5, #00b7ff);\n    color: #fff;\n    font-size: 20px;\n    -webkit-box-shadow: 0 5px 22px -5px #ddd;\n            box-shadow: 0 5px 22px -5px #ddd;\n    border-radius: 20px;\n    text-decoration: none !important;\n}\n\n/*.notfound a {*/\n/*padding: 10px 60px;*/\n/*width: 250px;*/\n/*border: none;*/\n/*background: linear-gradient(#e4425c, #08b2f5, #e4425c);*/\n/*color: #fff;*/\n/*font-size: 20px;*/\n/*box-shadow: 0px 5px 22px -5px #ddd;*/\n/*border-radius: 20px;*/\n/*text-decoration: none !important;*/\n/*}*/\n.notfound a[data-v-ca908186]:hover {\n    background: -webkit-gradient(linear, left top, left bottom, from(#e4425c), color-stop(#e41b3b), to(#e4425c));\n    background: linear-gradient(#e4425c, #e41b3b, #e4425c);\n    color: #fff;\n}\n.notfound .notfound-404[data-v-ca908186] {\n    position: relative;\n    height: 180px;\n}\n.notfound .notfound-404 h1[data-v-ca908186] {\n    font-family: 'Roboto', sans-serif;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    font-size: 165px;\n    font-weight: 700;\n    margin: 0;\n    color: #e4425c;\n    text-transform: uppercase;\n}\n.notfound .notfound-404 h1 > span[data-v-ca908186] {\n    color: #44b3e6;\n}\n.notfound h2[data-v-ca908186] {\n    font-family: 'Roboto', sans-serif;\n    font-size: 22px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: #333;\n    margin-top: 0;\n    margin-bottom: 25px;\n}\n.notfound .notfound-search[data-v-ca908186] {\n    position: relative;\n    max-width: 320px;\n    width: 100%;\n    margin: auto;\n}\n.notfound .notfound-search > input[data-v-ca908186] {\n    font-family: 'Roboto', sans-serif;\n    width: 100%;\n    height: 50px;\n    padding: 3px 65px 3px 30px;\n    color: #151515;\n    font-size: 16px;\n    background: transparent;\n    border: 2px solid #c5c5c5;\n    border-radius: 40px;\n    -webkit-transition: 0.2s all;\n    transition: 0.2s all;\n}\n.notfound .notfound-search > input[data-v-ca908186]:focus {\n    border-color: #00b7ff;\n}\n.notfound .notfound-search > button[data-v-ca908186] {\n    position: absolute;\n    right: 15px;\n    top: 5px;\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    border: none;\n    background: transparent;\n    padding: 0;\n    cursor: pointer;\n}\n.notfound .notfound-search > button > span[data-v-ca908186] {\n    width: 15px;\n    height: 15px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n    transform: translate(-50%, -50%) rotate(-45deg);\n    margin-left: -3px;\n}\n.notfound .notfound-search > button > span[data-v-ca908186]:after {\n    position: absolute;\n    content: '';\n    width: 10px;\n    height: 10px;\n    left: 0;\n    top: 0;\n    border-radius: 50%;\n    border: 4px solid #c5c5c5;\n    -webkit-transition: 0.2s all;\n    transition: 0.2s all;\n}\n.notfound-search > button > span[data-v-ca908186]:before {\n    position: absolute;\n    content: '';\n    width: 4px;\n    height: 10px;\n    left: 7px;\n    top: 17px;\n    border-radius: 2px;\n    background: #c5c5c5;\n    -webkit-transition: 0.2s all;\n    transition: 0.2s all;\n}\n.notfound .notfound-search > button:hover > span[data-v-ca908186]:after {\n    border-color: #00b7ff;\n}\n.notfound .notfound-search > button:hover > span[data-v-ca908186]:before {\n    background-color: #00b7ff;\n}\n@media only screen and (max-width: 767px) {\n.notfound h2[data-v-ca908186] {\n        font-size: 18px;\n}\n}\n@media only screen and (max-width: 480px) {\n.notfound .notfound-404 h1[data-v-ca908186] {\n        font-size: 141px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "notfound" } }, [
    _c(
      "div",
      { staticClass: "notfound" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("h2", [_vm._v("the page you requested could not found")]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/" } }, [
          _vm._v("Go Back to Homepage")
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notfound-404" }, [
      _c("h1", [_vm._v("4"), _c("span", [_vm._v("0")]), _vm._v("4")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ca908186", module.exports)
  }
}

/***/ })

});
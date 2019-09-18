webpackJsonp([0],{

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1264)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1266)
/* template */
var __vue_template__ = __webpack_require__(1267)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69d93173"
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
Component.options.__file = "resources/js/components/common/ContentLoader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69d93173", Component.options)
  } else {
    hotAPI.reload("data-v-69d93173", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1265);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("323d0e52", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69d93173\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContentLoader.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69d93173\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContentLoader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.cssload-spin-box[data-v-69d93173] {\n    position: absolute;\n    margin: 20% auto;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 15px;\n    height: 15px;\n    z-index: 9999;\n    border-radius: 100%;\n    box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -o-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -ms-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -webkit-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -moz-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    animation: cssload-spin-data-v-69d93173 ease infinite 4.6s;\n    -o-animation: cssload-spin-data-v-69d93173 ease infinite 4.6s;\n    -ms-animation: cssload-spin-data-v-69d93173 ease infinite 4.6s;\n    -webkit-animation: cssload-spin-data-v-69d93173 ease infinite 4.6s;\n    -moz-animation: cssload-spin-data-v-69d93173 ease infinite 4.6s;\n}\n@keyframes cssload-spin-data-v-69d93173 {\n0%,\n    100% {\n        -webkit-box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n                box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n}\n25% {\n        -webkit-box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n                box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n}\n50% {\n        -webkit-box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n                box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n}\n75% {\n        -webkit-box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n                box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n}\n}\n@-webkit-keyframes cssload-spin-data-v-69d93173 {\n0%,\n    100% {\n        -webkit-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n                box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n}\n25% {\n        -webkit-box-shadow: -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73);\n                box-shadow: -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73);\n}\n50% {\n        -webkit-box-shadow: -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223);\n                box-shadow: -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223);\n}\n75% {\n        -webkit-box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n                box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 1267:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cssload-spin-box" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69d93173", module.exports)
  }
}

/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1278)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1280)
/* template */
var __vue_template__ = __webpack_require__(1281)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-746884fc"
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
Component.options.__file = "resources/js/components/common/InfoNotification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-746884fc", Component.options)
  } else {
    hotAPI.reload("data-v-746884fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1279);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("36fb0698", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-746884fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoNotification.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-746884fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoNotification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1280:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['msg']
});

/***/ }),

/***/ 1281:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "alert notifications2" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", [_c("p", [_vm._v(_vm._s(_vm.msg))])]),
    _vm._v(" "),
    _c("div")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("span", { staticClass: "fas fa-info" })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-746884fc", module.exports)
  }
}

/***/ }),

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1304)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1306)
/* template */
var __vue_template__ = __webpack_require__(1307)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/components/common/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b0b08a3", Component.options)
  } else {
    hotAPI.reload("data-v-3b0b08a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("8b97ac24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b0b08a3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b0b08a3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.pagination {\n    margin-top: 40px;\n}\n.disabled a {\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1306:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['pagination'],
    methods: {
        isCurrentPage: function isCurrentPage(page) {
            return this.pagination.current_page === page;
        },
        changePage: function changePage(page) {
            if (page > this.pagination.last_page) {
                page = this.pagination.last_page;
            }
            this.pagination.current_page = page;
            this.$emit('paginate');
        }
    },
    computed: {
        pages: function pages() {
            var pages = [];
            var from = this.pagination.current_page - Math.floor(this.pagination.per_page / 2);
            if (from < 1) {
                from = 1;
            }
            var to = from + this.pagination.per_page - 1;
            if (to > this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            while (from <= to) {
                pages.push(from);
                from++;
            }
            return pages;
        }
    }
});

/***/ }),

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "pagination" },
    [
      _c(
        "li",
        {
          staticClass: "page-item",
          class: _vm.pagination.current_page <= 1 ? "disabled" : "",
          attrs: { disabled: _vm.pagination.current_page <= 1 }
        },
        [
          _c(
            "a",
            {
              staticClass: "page-link",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.changePage(_vm.pagination.current_page - 1)
                }
              }
            },
            [_vm._v("Prev")]
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.pages, function(page) {
        return _c(
          "li",
          {
            staticClass: "page-item",
            class: _vm.isCurrentPage(page) ? "active" : ""
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.changePage(page)
                  }
                }
              },
              [_vm._v(_vm._s(page))]
            )
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "page-item",
          class:
            _vm.pagination.current_page >= _vm.pagination.last_page
              ? "disabled"
              : "",
          attrs: { disabled: _vm.pagination.current_page <= 1 }
        },
        [
          _c(
            "a",
            {
              staticClass: "page-link",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.changePage(_vm.pagination.current_page + 1)
                }
              }
            },
            [_vm._v("Next")]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b0b08a3", module.exports)
  }
}

/***/ }),

/***/ 1475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1476);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1de5b626", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2aff35\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAllOrder.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2aff35\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAllOrder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1476:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Pagination__ = __webpack_require__(1303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_InfoNotification__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_InfoNotification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_InfoNotification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_ContentLoader_vue__ = __webpack_require__(1263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_ContentLoader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_ContentLoader_vue__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__common_Pagination___default.a,
        infoNotification: __WEBPACK_IMPORTED_MODULE_1__common_InfoNotification___default.a,
        contentLoader: __WEBPACK_IMPORTED_MODULE_2__common_ContentLoader_vue___default.a
    },
    data: function data() {
        return {
            infoMessage: 'Currently You have no Order !',
            selectedDay: 7,
            listOfAllDays: [{ name: 'Last 7 days', sortDays: 7 }, { name: 'Last 15 days', sortDays: 15 }, { name: 'Last 1 month', sortDays: 30 }, { name: 'Last 1 year', sortDays: 365 }]
        };
    },

    computed: {
        dashboardLoader: function dashboardLoader() {
            return this.$store.state.dashboardLoader;
        },
        orderedItems: function orderedItems() {
            return this.$store.getters.getterOrderList;
        },
        pagination: function pagination() {
            return this.$store.getters.getterOrderListPagination;
        }
    },
    created: function created() {
        this.getAllOrderedItems();
    },

    methods: {
        getAllOrderedItemsWithPagination: function getAllOrderedItemsWithPagination() {
            var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

            if (this.$route.name === 'User All Order') {
                this.$store.dispatch('actionOrderList', { day: day, pagination: this.pagination.current_page });
            } else {
                this.$store.dispatch('actionOrderList', { day: day, pagination: this.pagination.current_page, pending: '&orders=pending' });
            }
        },
        getAllOrderedItems: function getAllOrderedItems() {
            var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

            if (this.$route.name === 'User All Order') {
                this.$store.dispatch('actionOrderList', { day: day, pagination: 1 });
            } else {
                this.$store.dispatch('actionOrderList', { day: day, pagination: 1, pending: '&orders=pending' });
            }
        }
    }
});

/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "order-list" },
    [
      _c("div", { staticClass: "order-header" }, [
        _c("div", { staticClass: "header-title" }, [
          _vm.$route.name === "User All Order"
            ? _c("h4", [_vm._v("All Orders")])
            : _vm._e(),
          _vm._v(" "),
          _vm.$route.name === "User Pending Orders"
            ? _c("h4", [_vm._v("Pending Orders")])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header-sort" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", [
            _c("form", [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectedDay,
                      expression: "selectedDay"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "select-order" },
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.selectedDay = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.getAllOrderedItems(_vm.selectedDay)
                      }
                    ]
                  }
                },
                _vm._l(_vm.listOfAllDays, function(day) {
                  return _c("option", { domProps: { value: day.sortDays } }, [
                    _vm._v(_vm._s(day.name))
                  ])
                })
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      !_vm.dashboardLoader
        ? [
            _vm.orderedItems.length
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "all-orders mobile-hide" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._l(_vm.orderedItems, function(item) {
                        return _c("div", { staticClass: "order-list-row" }, [
                          _c(
                            "div",
                            { staticClass: "order-list-column thubnail" },
                            [_c("p", [_vm._v(_vm._s(item.order_number))])]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "order-list-column" }, [
                            _c("strong", [
                              _vm._v("$" + _vm._s(item.master_price.toFixed(2)))
                            ])
                          ]),
                          _vm._v(" "),
                          item.status
                            ? _c("div", { staticClass: "order-list-column" }, [
                                item.status.alias === "cancel"
                                  ? _c(
                                      "h5",
                                      { staticClass: "label label-danger" },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(item.status.title)
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status.alias === "confirmed" ||
                                item.status.alias === "review-complete"
                                  ? _c(
                                      "h5",
                                      { staticClass: "label label-success" },
                                      [_vm._v(_vm._s(item.status.title))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status.alias === "pending-for-review" ||
                                item.status.alias === "cash-pending" ||
                                item.status.alias === "pending"
                                  ? _c(
                                      "h5",
                                      { staticClass: "label label-warning" },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(item.status.title)
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status.alias === "delivered"
                                  ? _c(
                                      "h5",
                                      { staticClass: "label label-primary" },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(item.status.title)
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status.alias === "purchased"
                                  ? _c(
                                      "h5",
                                      { staticClass: "label label-info" },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(item.status.title)
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status.alias !== "cancel" &&
                                item.status.alias !== "confirmed" &&
                                item.status.alias !== "pending" &&
                                item.status.alias !== "pending-for-review" &&
                                item.status.alias !== "cash-pending" &&
                                item.status.alias !== "delivered" &&
                                item.status.alias !== "review-complete" &&
                                item.status.alias !== "purchased"
                                  ? _c(
                                      "h5",
                                      { staticClass: "label label-default" },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(item.status.title)
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "order-list-column" }, [
                            _c("h5", [_vm._v(_vm._s(item.order_date.date))])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "order-list-column" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "User Order Details",
                                      params: { orderId: item.id }
                                    }
                                  }
                                },
                                [_vm._v("View")]
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _vm.pagination && _vm.pagination.last_page > 1
                        ? _c("pagination", {
                            attrs: { pagination: _vm.pagination, offset: 5 },
                            on: {
                              paginate: function($event) {
                                _vm.getAllOrderedItemsWithPagination(
                                  _vm.selectedDay
                                )
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "all-orders desktop-hide" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._l(_vm.orderedItems, function(item) {
                        return _c("div", { staticClass: "order-list-row" }, [
                          _c("div", { staticClass: "order-list-column" }, [
                            _c("h5", [
                              _vm._v("$" + _vm._s(item.master_price.toFixed(2)))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "order-list-column" }, [
                            _c("strong", [_vm._v(_vm._s(item.order_date.date))])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "order-list-column status-btn" },
                            [
                              item.status.alias === "cancel"
                                ? _c(
                                    "h5",
                                    { staticClass: "label label-danger" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(item.status.title)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.status.alias === "confirmed" ||
                              item.status.alias === "review-complete"
                                ? _c(
                                    "h5",
                                    { staticClass: "label label-success" },
                                    [_vm._v(_vm._s(item.status.title))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.status.alias === "pending-for-review" ||
                              item.status.alias === "cash-pending" ||
                              item.status.alias === "pending"
                                ? _c(
                                    "h5",
                                    { staticClass: "label label-warning" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(item.status.title)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.status.alias === "delivered"
                                ? _c(
                                    "h5",
                                    { staticClass: "label label-primary" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(item.status.title)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.status.alias === "purchased"
                                ? _c(
                                    "h5",
                                    { staticClass: "label label-info" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(item.status.title)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.status.alias !== "cancel" &&
                              item.status.alias !== "confirmed" &&
                              item.status.alias !== "pending" &&
                              item.status.alias !== "pending-for-review" &&
                              item.status.alias !== "cash-pending" &&
                              item.status.alias !== "delivered" &&
                              item.status.alias !== "review-complete" &&
                              item.status.alias !== "purchased"
                                ? _c(
                                    "h5",
                                    { staticClass: "label label-default" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(item.status.title)
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "order-list-column" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "User Order Details",
                                      params: { orderId: item.id }
                                    }
                                  }
                                },
                                [_vm._v("View")]
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _vm.pagination && _vm.pagination.last_page > 1
                        ? _c("pagination", {
                            attrs: { pagination: _vm.pagination, offset: 5 },
                            on: {
                              paginate: function($event) {
                                _vm.getAllOrderedItemsWithPagination(
                                  _vm.selectedDay
                                )
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    2
                  )
                ])
              : _c("info-notification", { attrs: { msg: _vm.infoMessage } })
          ]
        : _c("content-loader")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h5", [_vm._v("Show")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "order-list-row order-headings" }, [
      _c("div", { staticClass: "order-list-column thubnail" }, [
        _c("h4", [_vm._v("Order No.")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Amount")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Status")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Order Date")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "order-list-row order-headings" }, [
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Amount")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("date")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Status")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Details")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b2aff35", module.exports)
  }
}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1475)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1477)
/* template */
var __vue_template__ = __webpack_require__(1478)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b2aff35"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserAllOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b2aff35", Component.options)
  } else {
    hotAPI.reload("data-v-0b2aff35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
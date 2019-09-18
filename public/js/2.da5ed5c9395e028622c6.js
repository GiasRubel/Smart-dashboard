webpackJsonp([2],{

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1342)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1344)
/* template */
var __vue_template__ = __webpack_require__(1365)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7908d3ae"
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
Component.options.__file = "resources/js/pages/Cart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7908d3ae", Component.options)
  } else {
    hotAPI.reload("data-v-7908d3ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1213)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1215)
/* template */
var __vue_template__ = __webpack_require__(1216)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b598252"
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
Component.options.__file = "resources/js/components/common/content-loader.js.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b598252", Component.options)
  } else {
    hotAPI.reload("data-v-5b598252", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("094fb048", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b598252\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./content-loader.js.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b598252\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./content-loader.js.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.cssload-spin-box[data-v-5b598252] {\n    position: absolute;\n    margin: 20% auto;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 15px;\n    height: 15px;\n    z-index: 9999;\n    border-radius: 100%;\n    box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -o-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -ms-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -webkit-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -moz-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -o-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -ms-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -webkit-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -moz-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n}\n@keyframes cssload-spin-data-v-5b598252 {\n0%,\n    100% {\n        -webkit-box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n                box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n}\n25% {\n        -webkit-box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n                box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n}\n50% {\n        -webkit-box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n                box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n}\n75% {\n        -webkit-box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n                box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n}\n}\n@-webkit-keyframes cssload-spin-data-v-5b598252 {\n0%,\n    100% {\n        -webkit-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n                box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n}\n25% {\n        -webkit-box-shadow: -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73);\n                box-shadow: -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73);\n}\n50% {\n        -webkit-box-shadow: -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223);\n                box-shadow: -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223);\n}\n75% {\n        -webkit-box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n                box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 1216:
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
    require("vue-hot-reload-api")      .rerender("data-v-5b598252", module.exports)
  }
}

/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1218)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1220)
/* template */
var __vue_template__ = __webpack_require__(1222)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d3d944f"
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
Component.options.__file = "resources/js/components/login/LoginSocialLink.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d3d944f", Component.options)
  } else {
    hotAPI.reload("data-v-1d3d944f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7d48d0ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d3d944f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginSocialLink.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d3d944f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginSocialLink.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_social_signup_service__ = __webpack_require__(1221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
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

// import config from '../../config/config';



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            currentUrlIs: __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].localHostUrl + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].defaultRedirectUrl,
            socialLogin: __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].socialLogin
        };
    },

    methods: {
        checkSocialLogin: function checkSocialLogin(url) {
            __WEBPACK_IMPORTED_MODULE_0__services_social_signup_service__["a" /* default */].socialLogin(url);
        }
    }
});

/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(185);




var socialSignup = {
    //check social login
    socialLogin: function socialLogin(url) {
        this.popUp(url);
        window.addEventListener('message', function (e) {
            if (e.data.authUser) {
                var userData = e.data.authUser;
                __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].dispatch('userLoggedIn', userData);
            }
            __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push(e.data.redirect);
        }, false);
        /*  const socialInterval = setInterval(function () {
              const localStorageDataLogin = JSON.parse(localStorage.getItem('loginDetails'));
                if (localStorageDataLogin) {
                  currentUserId: localStorageDataLogin.user_id;
                  username: localStorageDataLogin.name;
                  loginToken: localStorageDataLogin.token;
                  clearInterval(socialInterval);
              }
          }, 2000);*/
    },
    popItUp: function popItUp(url, id, title, module, base_url) {
        base_url = base_url || __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].localHostUrl;
        module = module || 'products';
        url = url + base_url + module + '/' + id + '/' + title + '-share';

        this.popUp(url);
    },


    //for popup section
    popUp: function popUp(url) {
        var width = 300,
            height = 500;

        var left = screen.width / 2 - width / 2,
            top = screen.height / 2 - height / 2;

        window.open(url, left, top);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (socialSignup);

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-social-link" }, [
    _c("div", { staticClass: "social-icon" }, [
      _c("p", [_vm._v("Connect with")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.checkSocialLogin(_vm.socialLogin + "facebook")
                }
              }
            },
            [_c("span", { staticClass: "fab fa-facebook-f" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.checkSocialLogin(_vm.socialLogin + "twitter")
                }
              }
            },
            [_c("span", { staticClass: "fab fa-twitter" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.checkSocialLogin(_vm.socialLogin + "google")
                }
              }
            },
            [_c("span", { staticClass: "fab fa-google-plus-g" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.checkSocialLogin(_vm.socialLogin + "linkedin")
                }
              }
            },
            [_c("span", { staticClass: "fab fa-linkedin-in" })]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d3d944f", module.exports)
  }
}

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1227)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1229)
/* template */
var __vue_template__ = __webpack_require__(1230)
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

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1228);
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

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1229:
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

/***/ 1230:
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

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1232)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1234)
/* template */
var __vue_template__ = __webpack_require__(1235)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77b91cd1"
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
Component.options.__file = "resources/js/components/common/TooltipBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77b91cd1", Component.options)
  } else {
    hotAPI.reload("data-v-77b91cd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1da0dff8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77b91cd1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TooltipBox.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77b91cd1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TooltipBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1234:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['msg']
});

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tooltip-box" }, [
    _c("p", [_vm._v(_vm._s(_vm.msg))]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrow-bottom" }, [_c("span")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77b91cd1", module.exports)
  }
}

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1246)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1248)
/* template */
var __vue_template__ = __webpack_require__(1249)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17cad468"
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
Component.options.__file = "resources/js/components/cart/CardForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17cad468", Component.options)
  } else {
    hotAPI.reload("data-v-17cad468", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1238)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1240)
/* template */
var __vue_template__ = __webpack_require__(1241)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f4c6bce8"
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
Component.options.__file = "resources/js/components/login/LoginForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4c6bce8", Component.options)
  } else {
    hotAPI.reload("data-v-f4c6bce8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1239);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c08133d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4c6bce8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4c6bce8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.is-danger[data-v-f4c6bce8] {\n    border-color: red !important;\n}\n.form-group span[data-v-f4c6bce8] {\n    color: red !important;\n}\n.create-account button a[data-v-f4c6bce8] {\n    text-decoration: none !important;\n}\n.new-registration .reg-form .create-account button span[data-v-f4c6bce8] {\n    font-size: 14px;\n}\n.new-registration .reg-form .create-account button span[data-v-f4c6bce8]:focus,\n.new-registration .reg-form .create-account button[data-v-f4c6bce8]:focus,\n.new-registration .reg-form .create-account button[data-v-f4c6bce8]:hover,\n.new-registration .reg-form .create-account button span[data-v-f4c6bce8]:hover {\n    color: #23527c;\n}\n.login-password a[data-v-f4c6bce8] {\n    font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_types__ = __webpack_require__(31);
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
    data: function data() {
        return {
            showTooltip: false,
            login: {
                remember: true
            },
            loginError: '',
            resend: '',
            loginLoading: false
        };
    },
    created: function created() {
        /*Validator.extend('emailOrPhone', {
            getMessage: field => `The ${field} must be either a valid e-mail or  phone number`,
            validate: value => config.EMAILREGEXP.test(value) || config.BDMOBILEREGEXP.test(value)
        });*/
        __WEBPACK_IMPORTED_MODULE_1_vee_validate__["a" /* Validator */].extend('passwordAlphaDigitMinMax', {
            getMessage: function getMessage(field) {
                return 'The ' + field + ' must contain at least one number and one uppercase letter,\n                                  and at least 6 but not more than 16 characters';
            },
            validate: function validate(value) {
                return __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* default */].PASSWORD.test(value);
            }
        });
    },

    methods: {
        submitLoginForm: function submitLoginForm() {
            var _this = this;

            this.resend = '';
            this.login.browser_id = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* default */].browserId;
            this.login.redirect = __WEBPACK_IMPORTED_MODULE_2__config_api__["a" /* default */].baseUrl + 'user/browser/verify';
            this.redirectToThisRoute = this.$route.path === '/cart' ? '/cart' : this.$route.query.from ? this.$route.query.from : '/';
            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.loginLoading) {
                    _this.loginLoading = true;
                    __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_2__config_api__["a" /* default */].login, _this.login).then(function (response) {
                        if (response.data.result && response.data.message) {
                            _this.login = {};

                            if (response.data.result.is_email_verify == 0) {
                                _this.$router.push('/user/email/verify?resend=' + response.data.resend + '&notification=' + response.data.message);
                            }

                            if (response.data.result.is_email_verify == 1 && response.data.result.is_browser_verify == 0) {
                                _this.$router.push('/user/browser/verify?notification=' + response.data.message);
                            }

                            _this.$awn.success(response.data.message);

                            _this.userData = {
                                userId: response.data.result.id,
                                username: response.data.result.name,
                                email: response.data.result.email,
                                isEmailVerify: response.data.result.is_email_verify,
                                isBrowserVerify: response.data.result.is_browser_verify,
                                mobile: response.data.result.mobile,
                                redirect: _this.redirectToThisRoute,
                                token: response.data.result.token,
                                verify: false
                            };

                            if (_this.userData.isEmailVerify && _this.userData.isBrowserVerify) {
                                _this.userData.verify = true;
                            }

                            if (_this.userData.token) {
                                _this.$store.dispatch('userLoggedIn', _this.userData);
                            }

                            if (_this.userData.isBrowserVerify == 1) {

                                if (_this.$store.getters[__WEBPACK_IMPORTED_MODULE_4__store_types__["C" /* CART_TOTAL_ITEM_QUANTITY */]] > 0) {
                                    _this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["h" /* CART_ITEM_APPEND_WITH_AUTHENTICATE */]);
                                } else {
                                    _this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["m" /* CART_ITEM_LIST */]);
                                }

                                _this.$router.push(_this.redirectToThisRoute);
                            }

                            _this.loginLoading = false;
                        }
                    }).catch(function (error) {
                        _this.loginLoading = false;
                        _this.loginError = error.response.data.message;

                        if (error.response.data.resend) {
                            _this.resend = error.response.data.resend;
                        }
                    });
                }
            });
        },
        resendVerification: function resendVerification() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(this.resend + '?redirect=' + __WEBPACK_IMPORTED_MODULE_2__config_api__["a" /* default */].baseUrl + 'user/email/verify').then(function (response) {
                _this2.notification = response.data.message;
                if (response.data.resend) {
                    _this2.resend = response.data.resend;
                } else {
                    _this2.resend = '';
                }
            }).catch(function (error) {});
        },
        closeTooltip: function closeTooltip() {
            this.showTooltip = false;
        },
        show: function show() {
            this.showTooltip = !this.showTooltip;
        }
    }
});

/***/ }),

/***/ 1241:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-form" }, [
    _c("h3", [_vm._v("Sign in")]),
    _vm._v(" "),
    _vm.loginError
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("strong", [_vm._v(_vm._s(_vm.loginError))])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitLoginForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { class: { "has-error": _vm.errors.has("emailOrPhone") } },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.login.email,
                    expression: "login.email"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "form-control",
                class: {
                  input: true,
                  "has-error": _vm.errors.has("emailOrPhone")
                },
                attrs: {
                  type: "text",
                  placeholder: "Enter Email",
                  name: "emailOrPhone",
                  id: "emailOrPhone",
                  "data-vv-as": "email"
                },
                domProps: { value: _vm.login.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.login, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "help-block error text-danger" }, [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("emailOrPhone"),
                        expression: "errors.has('emailOrPhone')"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.errors.first("emailOrPhone")))]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group login-password" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "label",
            [
              _c("router-link", { attrs: { to: "/forgot-password" } }, [
                _vm._v("Forgot Password?\n                ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { class: { "has-error": _vm.errors.has("password") } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.login.password,
                  expression: "login.password"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("password") },
              attrs: {
                type: "password",
                placeholder: "Enter Password",
                name: "password",
                id: "password"
              },
              domProps: { value: _vm.login.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.login, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "help-block error text-danger" }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ]
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errors.first("password")) +
                      "\n                    "
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [
          _vm._v("Sign in\n            "),
          _vm.loginLoading
            ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "keep-login" }, [
          _c("input", {
            staticClass: "inp-cbx",
            attrs: { id: "cbx", type: "checkbox" }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "cbx", attrs: { for: "cbx" } }, [
            _c("span", [
              _c(
                "svg",
                {
                  attrs: { width: "12px", height: "10px", viewBox: "0 0 12 10" }
                },
                [_c("polyline", { attrs: { points: "1.5 6 4.5 9 10.5 1" } })]
              )
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Keep me signed in.")])
          ]),
          _vm._v(" "),
          _c("a", { on: { click: _vm.show } }, [_vm._v(" Details")]),
          _vm._v(" "),
          _vm.showTooltip
            ? _c("div", { attrs: { id: "keepSigning" } }, [
                _c("div", { staticClass: "tooltip-box" }, [
                  _c("div", { staticClass: "tooltip-title" }, [
                    _c("h5", [_vm._v('"Keep me Signed in" Checkbox')]),
                    _vm._v(" "),
                    _c("a", { on: { click: _vm.closeTooltip } }, [
                      _c("span", [_vm._v("x")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      'Choosing "Keep me signed in" reduces the number of times you\'re asked\n                        to sign in on this device.'
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "To keep your account secure, use this option only on your personal devices."
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ])
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "create-account" },
      [
        _c("b", [_vm._v("New to ShopnShipbd?")]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/registration", tag: "button" } }, [
          _c("span", [_vm._v("Create your ShopnShipbd account")])
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
    return _c("label", { attrs: { for: "emailOrPhone" } }, [
      _vm._v("Email\n                "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "password" } }, [
      _vm._v("Password\n                "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrow-bottom" }, [_c("span")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f4c6bce8", module.exports)
  }
}

/***/ }),

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1243)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1245)
/* template */
var __vue_template__ = __webpack_require__(1250)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-977af2ba"
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
Component.options.__file = "resources/js/components/common/CommonPaymentMethod.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-977af2ba", Component.options)
  } else {
    hotAPI.reload("data-v-977af2ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c70664de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-977af2ba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommonPaymentMethod.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-977af2ba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommonPaymentMethod.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.gateway-list ul li a span[data-v-977af2ba] {\n    color: #ccc !important;\n}\n.gateway-list ul li a span.green[data-v-977af2ba] {\n    color: #44b3e6 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_types__ = __webpack_require__(31);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        cardForm: __WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm___default.a
    },
    data: function data() {
        return {
            paymentMethods: {},
            cardDetails: {},
            lodash: _
        };
    },

    computed: {
        showCardForm: function showCardForm() {
            return this.$store.getters.showCardForm;
        },
        cardList: function cardList() {
            return this.$store.getters.getCardList;
        },
        payments: function payments() {
            return this.$store.getters.getterPayments;
        },
        defaultValues: function defaultValues() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_5__store_types__["G" /* CONFIG_DEFAULT_SETTINGS */]];
        }
    },
    created: function created() {
        this.getPaymentMethod();
        this.stripeCardList(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].stripeCardList);
        this.payments.gateway = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].CURRENTINFO && __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].CURRENTINFO.country_name === 'Bangladesh' ? 1 : 2;
    },

    methods: {
        getPaymentMethod: function getPaymentMethod() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].paymentMethodApi).then(function (response) {
                if (response.data) {
                    _this.paymentMethods = response.data;
                    _this.$store.dispatch('actionSetPaymentMethod', { paymentMethodId: 1, gatewayId: _this.payments.gateway });
                    _this.paymentMethods.forEach(function (value) {
                        if (value.is_online) _this.payments.paymentMethod = value.id;
                    });
                }
            }).catch(function (error) {});
        },
        stripeCardList: function stripeCardList(cardDetailsLink) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].getData(cardDetailsLink).then(function (response) {
                if (response.data.length) {
                    _this2.$store.dispatch('actionCardList', response.data);
                    _this2.$store.dispatch('openCardForm', false);
                } else {
                    _this2.$store.dispatch('openCardForm', true);
                }
            }).catch(function (error) {});
        },
        addCard: function addCard() {
            this.$store.dispatch('cardPaymentForm', {});
            this.$store.dispatch('openCardForm', true);
        },
        editCard: function editCard(card) {
            this.$store.dispatch('getCardDetailsLink', card);
            this.$store.dispatch('openCardForm', true);
        },
        activeCard: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(cardId) {
                var _this3 = this;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].patchData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].card + 'active/' + cardId, cardId).then(function (response) {
                                    if (response.data) {
                                        _this3.$awn.success(response.data.message);
                                        _this3.$store.dispatch('updateCardField', {
                                            id: response.data.id,
                                            field: 'is_active',
                                            value: true
                                        });
                                    }
                                });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function activeCard(_x) {
                return _ref.apply(this, arguments);
            }

            return activeCard;
        }(),
        changePaymentMethod: function changePaymentMethod(paymentMethodID) {
            this.$store.dispatch('setPaymentMethodId', paymentMethodID);
        },
        changeGateway: function changeGateway(gatewayID) {
            var currency = gatewayID === 1 || gatewayID === 3 ? 'BDT' : 'USD';
            this.$store.dispatch('setGatewayId', gatewayID);
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_5__store_types__["Z" /* SET_BASE_CURRENCY */], currency);
        }
    }
});

/***/ }),

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5a28ad7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17cad468\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17cad468\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card-form span[data-v-17cad468] {\n  color: red !important;\n}\n.cart-forms .payment-cart .change-payment-option ul li i[data-v-17cad468] {\n  padding-left: 0;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_axios_service__ = __webpack_require__(30);
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
    props: ['gateway'],
    data: function data() {
        return {
            cardPaymentError: {},
            showPaymentList: false,
            cardAddLoading: false,
            errorMessage: '',
            cardYear: '',
            cardMonth: '',
            currentMonth: new Date().getMonth() + 1,
            months: []
        };
    },

    computed: {
        cardDetailsData: function cardDetailsData() {
            return this.$store.getters.card;
        },
        cardPayment: function cardPayment() {
            return this.$store.getters.cardPayment;
        },
        yearList: function yearList() {
            var years = [];
            var currentYear = new Date().getFullYear();
            for (var i = currentYear; i <= currentYear + 10; i++) {
                years.push(i);
            }

            return years;
        }
    },
    created: function created() {
        if (this.cardDetailsData.details_link) {
            this.getCardDetails(this.cardDetailsData.details_link);
        }

        this.monthList();
    },

    methods: {
        submitCard: function submitCard(gatewayID) {
            var _this = this;

            this.cardPayment.expire_date = this.cardYear + '-' + this.cardMonth;
            this.cardPayment.gateway_id = gatewayID;
            var message = this.cardDetailsData ? 'Card Updated' : 'Card Added';
            var formSubmitCallback = function formSubmitCallback(response) {
                if (response.data.status === true && response.data.card) {
                    _this.$store.dispatch('cardPaymentForm', {});
                    _this.$store.dispatch('addUpdateCard', response.data.card);
                    _this.$awn.success(message);
                    _this.$store.dispatch('openCardForm', false);
                    _this.$store.dispatch('getCardDetailsLink', {});
                    _this.cardAddLoading = false;
                }
                if (!response.data.status) {
                    _this.$store.dispatch('cardPaymentForm', {});
                    _this.errorMessage = response.data.message;
                    _this.$store.dispatch('openCardForm', true);
                    _this.$store.dispatch('getCardDetailsLink', {});
                    _this.cardAddLoading = false;
                }
            };
            var formErrorCallback = function formErrorCallback(error) {
                if (error) {
                    _this.cardPaymentError = error.response.data.errors;
                    _this.$store.dispatch('openCardForm', true);
                    _this.cardAddLoading = false;
                }
            };
            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.cardAddLoading) {
                    _this.cardAddLoading = true;
                    if (_.isEmpty(_this.cardDetailsData)) {
                        if (!Object.keys(_this.$store.getters.getCardList).length) {
                            _this.cardPayment.is_active = true;
                        }
                        _this.$store.dispatch('cardPaymentForm', _this.cardPayment);
                        __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].card + 'store', _this.cardPayment).then(formSubmitCallback).catch(formErrorCallback);
                    } else {
                        _this.$store.dispatch('cardPaymentForm', _this.cardPayment);
                        __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].patchData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].card + 'update/' + _this.cardDetailsData.id, _this.cardPayment).then(formSubmitCallback).catch(formErrorCallback);
                    }
                }
            });
        },
        monthList: function monthList() {
            for (var i = 1; i <= 12; i++) {
                this.months.push(i);
            }
        },
        closeCard: function closeCard() {
            this.$store.dispatch('cardPaymentForm', {});
            this.$store.dispatch('openCardForm', false);
            this.$store.dispatch('getCardDetailsLink', {});
        },
        getCardDetails: function getCardDetails(cardDetailLink) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].getData(cardDetailLink).then(function (response) {
                _this2.$store.dispatch('cardPaymentForm', _this2.cardDetailsData);
                var splittedExpireDate = _this2.cardPayment.expire_date.split('-');
                _this2.cardYear = splittedExpireDate[0];
                _this2.cardMonth = Number(splittedExpireDate[1]);
            });
        }
    }
});

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-form" }, [
    _vm.errorMessage
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("strong", [_vm._v(_vm._s(_vm.errorMessage))])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("form", { staticClass: "card-form" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button" },
          on: { click: _vm.closeCard }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("div", { class: _vm.gateway.title + "-card" }, [
        _c("div", { class: { "has-error": _vm.errors.has("card_number") } }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.cardPayment.card_number,
                expression: "cardPayment.card_number"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|max:23|min:12",
                expression: "'required|max:23|min:12'"
              }
            ],
            staticClass: "form-control",
            class: { input: true, "has-error": _vm.errors.has("card_number") },
            attrs: {
              type: "text",
              name: "card_number",
              placeholder: "Card number (2222 3333 4444 5555)",
              "data-vv-as": "card number"
            },
            domProps: { value: _vm.cardPayment.card_number },
            on: {
              keyup: function(e) {
                return (_vm.cardPayment.card_number = e.target.value
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim())
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.cardPayment, "card_number", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "help-block error text-danger" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("card_number"),
                      expression: "errors.has('card_number')"
                    }
                  ]
                },
                [_vm._v("Required")]
              ),
              _vm._v(" "),
              _vm._l(_vm.cardPaymentError.card_number, function(error) {
                return _vm.cardPaymentError.card_number
                  ? _c("span", [_vm._v(_vm._s(error))])
                  : _vm._e()
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column col-6 left",
            class: { "has-error": _vm.errors.has("month") }
          },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cardMonth,
                    expression: "cardMonth"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                class: { input: true, "has-error": _vm.errors.has("month") },
                attrs: { name: "month" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.cardMonth = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("MM")]),
                _vm._v(" "),
                _vm._l(_vm.months, function(month) {
                  return _c(
                    "option",
                    {
                      attrs: {
                        disabled:
                          _vm.cardYear === _vm.yearList[0] &&
                          _vm.currentMonth > month
                      },
                      domProps: { value: month }
                    },
                    [_vm._v(_vm._s(month) + "\n                    ")]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "help-block error text-danger" },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("month"),
                        expression: "errors.has('month')"
                      }
                    ]
                  },
                  [_vm._v("Required")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cardPaymentError.expire_date, function(error) {
                  return _vm.cardPaymentError.expire_date
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column col-6  right",
            class: { "has-error": _vm.errors.has("year") }
          },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cardYear,
                    expression: "cardYear"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                class: { input: true, "has-error": _vm.errors.has("year") },
                attrs: { name: "year" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.cardYear = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("YYYY")]),
                _vm._v(" "),
                _vm._l(_vm.yearList, function(year) {
                  return _c(
                    "option",
                    {
                      attrs: {
                        disabled:
                          year === _vm.yearList[0] &&
                          _vm.currentMonth > _vm.cardMonth
                      },
                      domProps: { value: year }
                    },
                    [_vm._v(_vm._s(year) + "\n                    ")]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "help-block error text-danger" },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("year"),
                        expression: "errors.has('year')"
                      }
                    ]
                  },
                  [_vm._v("Required")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cardPaymentError.expire_date, function(error) {
                  return _vm.cardPaymentError.expire_date
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "fullwidth left",
            class: { "has-error": _vm.errors.has("cvv") }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cardPayment.cvc,
                  expression: "cardPayment.cvc"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|min:3|max:4",
                  expression: "'required|min:3|max:4'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("cvv") },
              attrs: { type: "number", name: "cvv", placeholder: "CVV code" },
              domProps: { value: _vm.cardPayment.cvc },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.cardPayment, "cvc", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "help-block error text-danger" },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("cvv"),
                        expression: "errors.has('cvv')"
                      }
                    ]
                  },
                  [_vm._v("Required")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cardPaymentError.cvc, function(error) {
                  return _vm.cardPaymentError.cvc
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-success",
            on: {
              click: function($event) {
                _vm.submitCard(_vm.gateway.id)
              }
            }
          },
          [
            _vm._v("Save\n                "),
            _vm.cardAddLoading
              ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
              : _vm._e()
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17cad468", module.exports)
  }
}

/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.paymentMethods
    ? _c(
        "div",
        _vm._l(_vm.paymentMethods, function(payment) {
          return _c("div", [
            _c("div", { staticClass: "cart-row" }, [
              _c("div", { staticClass: "payment-cart-column" }, [
                _c("label", { staticClass: "radio-btn" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.payments.paymentMethod,
                        expression: "payments.paymentMethod"
                      }
                    ],
                    attrs: { type: "radio", name: "payment" },
                    domProps: {
                      value: payment.id,
                      checked: _vm._q(_vm.payments.paymentMethod, payment.id)
                    },
                    on: {
                      change: [
                        function($event) {
                          _vm.$set(_vm.payments, "paymentMethod", payment.id)
                        },
                        function($event) {
                          _vm.changePaymentMethod(_vm.payments.paymentMethod)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "payment-cart-column" }, [
                _c("h5", [_vm._v(_vm._s(payment.title))])
              ]),
              _vm._v(" "),
              _vm.payments.paymentMethod === payment.id
                ? _c(
                    "div",
                    { staticClass: "change-payment-option" },
                    [
                      _vm._l(payment.gateway, function(gateway) {
                        return _c("div", [
                          _c("ul", [
                            _c("li", [
                              _c("label", { staticClass: "radio-btn" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payments.gateway,
                                      expression: "payments.gateway"
                                    }
                                  ],
                                  attrs: { type: "radio", name: "gateway" },
                                  domProps: {
                                    value: gateway.id,
                                    checked: _vm._q(
                                      _vm.payments.gateway,
                                      gateway.id
                                    )
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        _vm.$set(
                                          _vm.payments,
                                          "gateway",
                                          gateway.id
                                        )
                                      },
                                      function($event) {
                                        _vm.changeGateway(_vm.payments.gateway)
                                      }
                                    ]
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "checkmark" })
                              ]),
                              _vm._v(" "),
                              _c("i", { staticClass: "fab fa-cc-mastercard" }),
                              _vm._v(" "),
                              _c("strong", [_vm._v(_vm._s(gateway.title))]),
                              _vm._v(" "),
                              _vm.payments.gateway === 2
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "gateway-list",
                                      class: gateway.title + "-list"
                                    },
                                    [
                                      gateway.id === 2
                                        ? _c(
                                            "ul",
                                            [
                                              !_vm.lodash.isEmpty(_vm.cardList)
                                                ? _c("p", [
                                                    _vm._v(
                                                      "Click on any card to active"
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm._l(_vm.cardList, function(
                                                card
                                              ) {
                                                return _c("li", [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "card-no",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.activeCard(
                                                            card.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "fas fa-check-circle",
                                                          class: {
                                                            green:
                                                              card.is_active
                                                          }
                                                        },
                                                        [
                                                          _c("strong", [
                                                            _vm._v(
                                                              "Card number: (" +
                                                                _vm._s(
                                                                  card.card_4_digit
                                                                ) +
                                                                ")"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "right",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.editCard(card)
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Edit")]
                                                  )
                                                ])
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "card-add-new-button"
                                                },
                                                [
                                                  !_vm.showCardForm
                                                    ? _c(
                                                        "a",
                                                        {
                                                          staticClass: "btn",
                                                          on: {
                                                            click: _vm.addCard
                                                          }
                                                        },
                                                        [_vm._v("Add new")]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.showCardForm
                                                    ? _c(
                                                        "div",
                                                        {
                                                          attrs: {
                                                            id: gateway.title
                                                          }
                                                        },
                                                        [
                                                          _c("card-form", {
                                                            attrs: {
                                                              gateway: gateway
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            2
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _vm.payments.paymentMethod === 2
                        ? _c("div", [
                            _c("p", [
                              _vm._v(
                                "Please deposit the cash amount in this account no\n                        "
                              ),
                              _c("b", [
                                _vm._v(
                                  _vm._s(
                                    _vm.defaultValues
                                      .deposit_bank_account_number
                                  )
                                )
                              ])
                            ])
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                : _vm._e()
            ])
          ])
        })
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-977af2ba", module.exports)
  }
}

/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2a1a497a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7908d3ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cart.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7908d3ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm__ = __webpack_require__(1237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_LoginSocialLink__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_LoginSocialLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_login_LoginSocialLink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cart_CartProductList__ = __webpack_require__(1345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cart_CartProductList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_cart_CartProductList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_CartProductTotalCount__ = __webpack_require__(1350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_CartProductTotalCount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_cart_CartProductTotalCount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_CartPaymentMethod__ = __webpack_require__(1355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_CartPaymentMethod___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_cart_CartPaymentMethod__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_InfoNotification__ = __webpack_require__(1226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_InfoNotification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_common_InfoNotification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_content_loader_js__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_content_loader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_common_content_loader_js__);
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
        loginForm: __WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm___default.a,
        loginSocialLink: __WEBPACK_IMPORTED_MODULE_1__components_login_LoginSocialLink___default.a,
        cartProductList: __WEBPACK_IMPORTED_MODULE_2__components_cart_CartProductList___default.a,
        cartProductTotalCount: __WEBPACK_IMPORTED_MODULE_3__components_cart_CartProductTotalCount___default.a,
        cartPaymentMethod: __WEBPACK_IMPORTED_MODULE_4__components_cart_CartPaymentMethod___default.a,
        infoNotification: __WEBPACK_IMPORTED_MODULE_5__components_common_InfoNotification___default.a,
        contentLoader: __WEBPACK_IMPORTED_MODULE_7__components_common_content_loader_js___default.a
    },
    data: function data() {
        return {
            infoMessage: 'Right now you have no available items on shopping cart.'
        };
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        this.$store.dispatch('actionSetPaymentMethod', { paymentMethodId: '', gatewayId: '' });
        next();
    },

    computed: {
        authenticated: function authenticated() {
            return this.$store.state.login.authenticated;
        },
        cart: function cart() {
            if (this.$store.getters[__WEBPACK_IMPORTED_MODULE_6__store_types__["C" /* CART_TOTAL_ITEM_QUANTITY */]] > 0) {
                return true;
            }
        },
        orderForReview: function orderForReview() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_6__store_types__["g" /* CART_IS_REVIEW */]];
        },
        dashboardLoader: function dashboardLoader() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_6__store_types__["f" /* CART_IS_LOADING */]];
        }
    },
    mounted: function mounted() {
        if (this.$route.query.session_id) {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_6__store_types__["m" /* CART_ITEM_LIST */]);

            if (this.authenticated && this.authenticated.verify) {
                this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_6__store_types__["h" /* CART_ITEM_APPEND_WITH_AUTHENTICATE */]);
            }
        }
    }
});

/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1346)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1348)
/* template */
var __vue_template__ = __webpack_require__(1349)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bf7b7a9"
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
Component.options.__file = "resources/js/components/cart/CartProductList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bf7b7a9", Component.options)
  } else {
    hotAPI.reload("data-v-3bf7b7a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1347);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("075f9dac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bf7b7a9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartProductList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bf7b7a9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartProductList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.tooltip-toggle[data-v-3bf7b7a9] {\n    cursor: pointer;\n    position: relative;\n}\n.tooltip-toggle[data-v-3bf7b7a9]::before {\n    position: absolute;\n    top: -14px;\n    left: -45px;\n    background-color: #7f8284;\n    border-radius: 5px;\n    color: #fff;\n    content: attr(data-tooltip);\n    padding: 5px;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 160px;\n}\n.tooltip-toggle[data-v-3bf7b7a9]::after {\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #7f8284;\n    content: \" \";\n    font-size: 0;\n    line-height: 0;\n    margin-left: -5px;\n    width: 0;\n}\n.tooltip-toggle[data-v-3bf7b7a9]::before,\n.tooltip-toggle[data-v-3bf7b7a9]::after {\n    color: #efefef;\n    font-family: monospace;\n    font-size: 12px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center;\n}\n.tooltip-toggle[data-v-3bf7b7a9]:hover::before,\n.tooltip-toggle[data-v-3bf7b7a9]:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 1348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_TooltipBox__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_TooltipBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_TooltipBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_types__ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        tooltipBox: __WEBPACK_IMPORTED_MODULE_2__common_TooltipBox___default.a
    },
    data: function data() {
        return {
            isLoad: false,
            country_id: '',
            state_id: '',
            weightMessage: 'This item has no weight',
            giftMessage: 'Shopnshipbd gift wrap will charge $5 over your payment. Gift prices will be hidden ' + 'on the receipt',
            insuranceMessage: '1.2% insurance will be added to your payment. If your insurance amount is ' + 'less than $15, then $15 will be added to your payment as insurance'
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])({
        cart: __WEBPACK_IMPORTED_MODULE_4__store_types__["r" /* CART_LIST */],
        isGiftAvailable: __WEBPACK_IMPORTED_MODULE_4__store_types__["b" /* CART_GIFTS */],
        isInsuranceAvailable: __WEBPACK_IMPORTED_MODULE_4__store_types__["e" /* CART_INSURANCES */],
        totalWeight: __WEBPACK_IMPORTED_MODULE_4__store_types__["D" /* CART_TOTAL_WEIGHT */]
    }), {
        authenticated: function authenticated() {
            return this.$store.state.login.authenticated;
        },
        currencyName: function currencyName() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_4__store_types__["a" /* BASE_CURRENCY_NAME */]] === 'BDT' ? 'BDT' : '$';
        }
    }),
    methods: {
        addGift: function addGift(cartItem, index) {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["i" /* CART_ITEM_APPLY_GIFT */], { index: index, action: this.isGiftAvailable[cartItem.id] });
        },
        addInsurance: function addInsurance(cartItem, index) {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["j" /* CART_ITEM_APPLY_INSURANCE */], {
                index: index,
                action: this.isInsuranceAvailable[cartItem.id]
            });
        },
        increaseQuantity: function increaseQuantity(index) {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["w" /* CART_QUANTITY_INCREMENT */], index);
        },
        decreaseQuantity: function decreaseQuantity(index) {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["v" /* CART_QUANTITY_DECREMENT */], index);
        },
        removeItemFromCart: function removeItemFromCart(cartItem, index) {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_4__store_types__["k" /* CART_ITEM_DELETE */], { index: index, item: cartItem });
        },
        loaded: function loaded() {
            this.isLoad = true;
        },
        onImageLoadFailure: function onImageLoadFailure() {
            event.target.src = '/images/logo/logo.png';
        },
        perItemSubtotalPrice: function perItemSubtotalPrice(index) {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_4__store_types__["s" /* CART_LIST_PER_ITEM_SUB_TOTAL */]](index);
        },
        checkUrlEbayAmazon: function checkUrlEbayAmazon(url) {
            url = url.replace('https://www.amazon.com/', 'http://' + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].amazonUrl + '.' + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].localHostUrl);
            url = url.replace('https://www.ebay.com/', 'http://' + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].ebayUrl + '.' + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].localHostUrl);
            return url;
        }
    }
});

/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cart-product-list" }, [
    _c(
      "table",
      { staticClass: "mobile-hide" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.cart, function(item, key) {
          return _c("tr", { attrs: { index: key } }, [
            _c("td", [
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isLoad,
                    expression: "isLoad"
                  }
                ],
                attrs: { src: item.imageUrl },
                on: { load: _vm.loaded, error: _vm.onImageLoadFailure }
              }),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isLoad,
                    expression: "!isLoad"
                  }
                ],
                attrs: { src: "/images/logo/logo.png" }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "extra-service" }, [
                _c("form", [
                  _c(
                    "span",
                    [
                      _c("tooltip-box", { attrs: { msg: _vm.giftMessage } }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.isGiftAvailable[item.id],
                            expression: "isGiftAvailable[item.id]"
                          }
                        ],
                        staticClass: "inp-cbx",
                        attrs: {
                          type: "checkbox",
                          name: "gift",
                          id: "giftCheckbox" + key
                        },
                        domProps: {
                          checked: Array.isArray(_vm.isGiftAvailable[item.id])
                            ? _vm._i(_vm.isGiftAvailable[item.id], null) > -1
                            : _vm.isGiftAvailable[item.id]
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.isGiftAvailable[item.id],
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.isGiftAvailable,
                                      item.id,
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.isGiftAvailable,
                                      item.id,
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.isGiftAvailable, item.id, $$c)
                              }
                            },
                            function($event) {
                              _vm.addGift(item, key)
                            }
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "cbx",
                          attrs: { for: "giftCheckbox" + key }
                        },
                        [
                          _c("span", [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  width: "12px",
                                  height: "10px",
                                  viewBox: "0 0 12 10"
                                }
                              },
                              [
                                _c("polyline", {
                                  attrs: { points: "1.5 6 4.5 9 10.5 1" }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Gift Wrap")])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("tooltip-box", {
                        attrs: { msg: _vm.insuranceMessage }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.isInsuranceAvailable[item.id],
                            expression: "isInsuranceAvailable[item.id]"
                          }
                        ],
                        staticClass: "inp-cbx",
                        attrs: {
                          type: "checkbox",
                          name: "insurance",
                          id: "insuranceCheckbox" + key
                        },
                        domProps: {
                          checked: Array.isArray(
                            _vm.isInsuranceAvailable[item.id]
                          )
                            ? _vm._i(_vm.isInsuranceAvailable[item.id], null) >
                              -1
                            : _vm.isInsuranceAvailable[item.id]
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.isInsuranceAvailable[item.id],
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.isInsuranceAvailable,
                                      item.id,
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.isInsuranceAvailable,
                                      item.id,
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.isInsuranceAvailable, item.id, $$c)
                              }
                            },
                            function($event) {
                              _vm.addInsurance(item, key)
                            }
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "cbx",
                          attrs: { for: "insuranceCheckbox" + key }
                        },
                        [
                          _c("span", [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  width: "12px",
                                  height: "10px",
                                  viewBox: "0 0 12 10"
                                }
                              },
                              [
                                _c("polyline", {
                                  attrs: { points: "1.5 6 4.5 9 10.5 1" }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Insurance")])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: {
                    href: _vm.checkUrlEbayAmazon(item.url),
                    target: "_blank"
                  }
                },
                [_c("p", [_vm._v(_vm._s(item.title ? item.title : item.url))])]
              )
            ]),
            _vm._v(" "),
            _c(
              "td",
              [
                item.weight <= 0
                  ? [
                      _c(
                        "span",
                        { staticClass: "cart-weight" },
                        [
                          _c("i", { staticClass: "fas fa-eye" }),
                          _vm._v(" "),
                          _c("tooltip-box", {
                            attrs: { msg: _vm.weightMessage }
                          })
                        ],
                        1
                      )
                    ]
                  : [
                      item.prices
                        ? [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm._f("convertedToKg")(
                                    item.weight * item.prices.quantity
                                  )
                                ) +
                                " kg\n                    "
                            )
                          ]
                        : _vm._e()
                    ]
              ],
              2
            ),
            _vm._v(" "),
            item.prices
              ? _c("td", [_vm._v(_vm._s(item.prices.quantity))])
              : _vm._e(),
            _vm._v(" "),
            _c("td", { staticClass: "add-remove" }, [
              _c(
                "a",
                {
                  attrs: { title: "Increase", id: "shop-test-plus" },
                  on: {
                    click: function($event) {
                      _vm.increaseQuantity(key)
                    }
                  }
                },
                [_c("span", { staticClass: "fas fa-plus-circle" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { title: "Decrease", id: "shop-test-minus" },
                  on: {
                    click: function($event) {
                      _vm.decreaseQuantity(key)
                    }
                  }
                },
                [_c("span", { staticClass: "fas fa-minus-circle" })]
              )
            ]),
            _vm._v(" "),
            _c(
              "td",
              [
                _vm._v(
                  _vm._s(_vm.currencyName) +
                    " " +
                    _vm._s(_vm.perItemSubtotalPrice(key).toFixed(2)) +
                    "\n                "
                ),
                item.prices.custom_price
                  ? [
                      _c(
                        "span",
                        [
                          _vm._v(
                            "\n                        + " +
                              _vm._s(
                                parseFloat(
                                  item.prices.quantity *
                                    item.prices.custom_price.custom_amount
                                ).toFixed(2)
                              ) +
                              "\n                        "
                          ),
                          _c("tooltip-box", {
                            attrs: {
                              msg: item.prices.custom_price.custom_amount_reason
                            }
                          })
                        ],
                        1
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  attrs: { title: "Delete", id: "shop-test-remove" },
                  on: {
                    click: function($event) {
                      _vm.removeItemFromCart(item, key)
                    }
                  }
                },
                [_c("span", { staticClass: "fas fa-trash-alt" })]
              )
            ])
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "desktop-hide" },
      _vm._l(_vm.cart, function(item, key) {
        return _c(
          "div",
          { staticClass: "mobile-products", attrs: { index: key } },
          [
            _c("div", { staticClass: "product-image" }, [
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isLoad,
                    expression: "isLoad"
                  }
                ],
                attrs: { src: item.imageUrl },
                on: { load: _vm.loaded, error: _vm.onImageLoadFailure }
              }),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isLoad,
                    expression: "!isLoad"
                  }
                ],
                attrs: { src: "/images/logo/logo.png" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "add-cart-row" }, [
              _vm._m(1, true),
              _vm._v(" "),
              _c("div", { staticClass: "item-entity" }, [
                _c("h5", [
                  _c(
                    "a",
                    {
                      staticClass: "btn-warning",
                      attrs: { title: "Delete" },
                      on: {
                        click: function($event) {
                          _vm.removeItemFromCart(item, key)
                        }
                      }
                    },
                    [_c("span", { staticClass: "far fa-trash-alt" })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(item.title))]),
            _vm._v(" "),
            _c("div", { staticClass: "add-cart-row" }, [
              _vm._m(2, true),
              _vm._v(" "),
              _c("div", { staticClass: "item-entity" }, [
                _c("h5", [_vm._v(_vm._s(item.prices.quantity))]),
                _vm._v(" "),
                _c("div", { staticClass: "inc-dec" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn-success",
                      attrs: { title: "Increase" },
                      on: {
                        click: function($event) {
                          _vm.increaseQuantity(key)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-plus-square" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn-danger",
                      attrs: { title: "Decrease" },
                      on: {
                        click: function($event) {
                          _vm.decreaseQuantity(key)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-minus-square" })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "add-cart-row" }, [
              _vm._m(3, true),
              _vm._v(" "),
              _c("div", { staticClass: "item-entity" }, [
                _c(
                  "h5",
                  [
                    item.weight <= 0
                      ? [
                          _c(
                            "span",
                            [
                              _c("i", { staticClass: "fas fa-eye" }),
                              _vm._v(" "),
                              _c("tooltip-box", {
                                attrs: { msg: _vm.weightMessage }
                              })
                            ],
                            1
                          )
                        ]
                      : [
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                _vm._f("convertedToKg")(
                                  item.weight * item.prices.quantity
                                )
                              ) +
                              " kg\n                        "
                          )
                        ]
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "add-cart-row" }, [
              _vm._m(4, true),
              _vm._v(" "),
              _c("div", { staticClass: "item-entity" }, [
                _c(
                  "h5",
                  [
                    _vm._v(
                      _vm._s(_vm.currencyName) +
                        " " +
                        _vm._s(_vm.perItemSubtotalPrice(key).toFixed(2)) +
                        "\n                        "
                    ),
                    item.prices.custom_price
                      ? [
                          _c(
                            "span",
                            [
                              _vm._v(
                                "\n                                + " +
                                  _vm._s(
                                    parseFloat(
                                      item.prices.quantity *
                                        item.prices.custom_price.custom_amount
                                    ).toFixed(2)
                                  ) +
                                  "\n                                "
                              ),
                              _c("tooltip-box", {
                                attrs: {
                                  msg:
                                    item.prices.custom_price
                                      .custom_amount_reason
                                }
                              })
                            ],
                            1
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "add-cart-row" }, [
              _c(
                "div",
                { staticClass: "item-type" },
                [
                  _c("h5", [_vm._v("Gift Wrap")]),
                  _vm._v(" "),
                  _c("tooltip-box", { attrs: { msg: _vm.giftMessage } })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "item-entity" }, [
                _c("h5", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.isGiftAvailable[item.id],
                        expression: "isGiftAvailable[item.id]"
                      }
                    ],
                    staticClass: "inp-cbx",
                    attrs: {
                      type: "checkbox",
                      name: "mobileGift",
                      id: "giftCheckbox" + key
                    },
                    domProps: {
                      checked: Array.isArray(_vm.isGiftAvailable[item.id])
                        ? _vm._i(_vm.isGiftAvailable[item.id], null) > -1
                        : _vm.isGiftAvailable[item.id]
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.isGiftAvailable[item.id],
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.isGiftAvailable,
                                  item.id,
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.isGiftAvailable,
                                  item.id,
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.isGiftAvailable, item.id, $$c)
                          }
                        },
                        function($event) {
                          _vm.addGift(item, key)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "cbx",
                      attrs: { for: "giftCheckbox" + key }
                    },
                    [
                      _c("span", [
                        _c(
                          "svg",
                          {
                            attrs: {
                              width: "12px",
                              height: "10px",
                              viewBox: "0 0 12 10"
                            }
                          },
                          [
                            _c("polyline", {
                              attrs: { points: "1.5 6 4.5 9 10.5 1" }
                            })
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "add-cart-row" }, [
              _c("div", { staticClass: "item-type" }, [
                _c(
                  "h5",
                  [
                    _vm._v(
                      "\n                        Insurance\n                        "
                    ),
                    _c("tooltip-box", { attrs: { msg: _vm.insuranceMessage } })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "item-entity" }, [
                _c("h5", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.isInsuranceAvailable[item.id],
                        expression: "isInsuranceAvailable[item.id]"
                      }
                    ],
                    staticClass: "inp-cbx",
                    attrs: {
                      type: "checkbox",
                      name: "mobileInsurance",
                      id: "insuranceCheckbox" + key
                    },
                    domProps: {
                      checked: Array.isArray(_vm.isInsuranceAvailable[item.id])
                        ? _vm._i(_vm.isInsuranceAvailable[item.id], null) > -1
                        : _vm.isInsuranceAvailable[item.id]
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.isInsuranceAvailable[item.id],
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.isInsuranceAvailable,
                                  item.id,
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.isInsuranceAvailable,
                                  item.id,
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.isInsuranceAvailable, item.id, $$c)
                          }
                        },
                        function($event) {
                          _vm.addInsurance(item, key)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "cbx",
                      attrs: { for: "insuranceCheckbox" + key }
                    },
                    [
                      _c("span", [
                        _c(
                          "svg",
                          {
                            attrs: {
                              width: "12px",
                              height: "10px",
                              viewBox: "0 0 12 10"
                            }
                          },
                          [
                            _c("polyline", {
                              attrs: { points: "1.5 6 4.5 9 10.5 1" }
                            })
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      })
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "btn-continue" },
      [
        _c("router-link", { attrs: { to: "/", tag: "button" } }, [
          _vm._v("Continue Shopping")
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
    return _c("tr", [
      _c("th", { attrs: { colspan: "2" } }, [_vm._v("Item")]),
      _vm._v(" "),
      _c("th", [_vm._v("Weight")]),
      _vm._v(" "),
      _c("th", [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th"),
      _vm._v(" "),
      _c("th", [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Delete")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-type" }, [_c("h5", [_vm._v("Item")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-type" }, [
      _c("h5", [_vm._v("Quantity")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-type" }, [
      _c("h5", [_vm._v("Weight")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-type" }, [
      _c("h5", [_vm._v("Price")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3bf7b7a9", module.exports)
  }
}

/***/ }),

/***/ 1350:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1351)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1353)
/* template */
var __vue_template__ = __webpack_require__(1354)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ed8a7314"
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
Component.options.__file = "resources/js/components/cart/CartProductTotalCount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed8a7314", Component.options)
  } else {
    hotAPI.reload("data-v-ed8a7314", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1352);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c9ce961c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed8a7314\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartProductTotalCount.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed8a7314\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartProductTotalCount.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.tooltip-toggle[data-v-ed8a7314] {\n    cursor: pointer;\n    position: relative;\n}\n.tooltip-toggle[data-v-ed8a7314]::before {\n    position: absolute;\n    top: -14px;\n    left: -45px;\n    background-color: #7f8284;\n    border-radius: 5px;\n    color: #fff;\n    content: attr(data-tooltip);\n    padding: 5px;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 160px;\n}\n.tooltip-toggle[data-v-ed8a7314]::after {\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #7f8284;\n    content: \" \";\n    font-size: 0;\n    line-height: 0;\n    margin-left: -5px;\n    width: 0;\n}\n.tooltip-toggle[data-v-ed8a7314]::before,\n.tooltip-toggle[data-v-ed8a7314]::after {\n    color: #efefef;\n    font-family: monospace;\n    font-size: 12px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center;\n}\n.tooltip-toggle[data-v-ed8a7314]:hover::before,\n.tooltip-toggle[data-v-ed8a7314]:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_TooltipBox__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_TooltipBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_TooltipBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(363);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        tooltipBox: __WEBPACK_IMPORTED_MODULE_0__common_TooltipBox___default.a
    },
    data: function data() {
        return {
            usTaxAmountMessage: 'US Tax 8.75% has been added on your payment',
            cartTotalMessage: 'Product actual price, as well as gift wrap ' + 'is shown here. When gift wrap & insurance fee is applicable',
            totalInsuranceMessage: 'It shows the total amount of insurance fee for each order',
            localTaxMessage: 'No local tax will be applicable'
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
        cartTotal: __WEBPACK_IMPORTED_MODULE_1__store_types__["p" /* CART_ITEM_SUBTOTAL_CONVERSION */],
        usTaxAmount: __WEBPACK_IMPORTED_MODULE_1__store_types__["E" /* CART_US_TAX_AMOUNT */],
        grandTotal: __WEBPACK_IMPORTED_MODULE_1__store_types__["c" /* CART_GRANT_TOTAL */],
        localTax: __WEBPACK_IMPORTED_MODULE_1__store_types__["t" /* CART_LOCAL_TAX_AMOUNT */],
        totalInsurance: __WEBPACK_IMPORTED_MODULE_1__store_types__["B" /* CART_TOTAL_INSURANCE_PRICE */],
        serviceCharge: __WEBPACK_IMPORTED_MODULE_1__store_types__["x" /* CART_SERVICE_CHARGE */],
        paymentGateway: __WEBPACK_IMPORTED_MODULE_1__store_types__["u" /* CART_PAYMENT_GATEWAY_COST */],
        payments: "getterPayments",
        orderForReview: __WEBPACK_IMPORTED_MODULE_1__store_types__["g" /* CART_IS_REVIEW */],
        shippingMessage: __WEBPACK_IMPORTED_MODULE_1__store_types__["d" /* CART_INFO_MESSAGE */]

    }), {
        internationalShippingCost: function internationalShippingCost() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_1__store_types__["y" /* CART_SHIPPING_COST */]];
        },
        authenticated: function authenticated() {
            return this.$store.state.login.authenticated;
        },
        currencyName: function currencyName() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_1__store_types__["a" /* BASE_CURRENCY_NAME */]] === 'BDT' ? 'BDT' : '$';
        },
        paymentGatewayMessage: function paymentGatewayMessage() {
            var msg = '';

            if (this.payments.gateway === 1) {
                msg = 'You have been charged 2.5% over your payment for Domestic Payment Gateway';
            } else if (this.payments.gateway === 2) {
                msg = 'You have been charged 2.9%+30 cent over your payment for International Credit Card';
            } else {
                msg = 'You have been charged 3.5% over your payment for American Express';
            }

            return msg;
        },
        grandTotalMessage: function grandTotalMessage() {
            if (this.grandTotal > 0) {
                return 'It shows the sum of the above calculation';
            } else {
                return 'The grand total is not showing perfectly due to some missing data';
            }
        }
    })
});

/***/ }),

/***/ 1354:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cart-product-total-count" }, [
    _c("div", { staticClass: "cart-summery" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "cart-column ship-details" }, [
        _c("table", [
          _c("tr", [
            _c(
              "td",
              [
                _vm._v("Sub-Total\n                        "),
                _c("tooltip-box", { attrs: { msg: _vm.cartTotalMessage } })
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
              _vm._v(" " + _vm._s(parseFloat(_vm.cartTotal).toFixed(2)))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c(
              "td",
              [
                _vm._v("US Taxes\n                        "),
                _c("tooltip-box", { attrs: { msg: _vm.usTaxAmountMessage } })
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
              _vm._v(" " + _vm._s(parseFloat(_vm.usTaxAmount).toFixed(2)))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("International Shipping")]),
            _vm._v(" "),
            _c("td", { staticClass: "right" }, [
              _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
              _vm._v(
                "\n                        " +
                  _vm._s(parseFloat(_vm.internationalShippingCost).toFixed(2)) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c(
              "td",
              [
                _vm._v("Local Customs and Taxes\n                        "),
                _c("tooltip-box", { attrs: { msg: _vm.localTaxMessage } })
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
              _vm._v(" " + _vm._s(parseFloat(_vm.localTax).toFixed(2)))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Service Charge")]),
            _vm._v(" "),
            _c("td", [
              _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
              _vm._v(" " + _vm._s(parseFloat(_vm.serviceCharge).toFixed(2)))
            ])
          ]),
          _vm._v(" "),
          _vm.totalInsurance > 0
            ? _c(
                "tr",
                [
                  _c(
                    "td",
                    [
                      _vm._v("Total Insurance\n                        "),
                      _c("tooltip-box", {
                        attrs: { msg: _vm.totalInsuranceMessage }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
                    _vm._v(
                      " " + _vm._s(parseFloat(_vm.totalInsurance).toFixed(2))
                    )
                  ]),
                  _vm._v(" "),
                  _c("tooltip-box", {
                    attrs: { msg: _vm.totalInsuranceMessage }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.authenticated && _vm.payments.gateway
            ? _c("tr", [
                _c(
                  "td",
                  [
                    _vm._v("Payment gateway charge\n                        "),
                    _c("tooltip-box", {
                      attrs: { msg: _vm.paymentGatewayMessage }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm.payments.gateway === 1
                      ? [
                          _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
                          _vm._v(
                            " " +
                              _vm._s(
                                parseFloat(_vm.paymentGateway).toFixed(2)
                              ) +
                              "\n                        "
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.payments.gateway === 2
                      ? [
                          _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
                          _vm._v(
                            " " +
                              _vm._s(
                                parseFloat(_vm.paymentGateway).toFixed(2)
                              ) +
                              "\n                        "
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.payments.gateway === 3
                      ? [
                          _c("span", [_vm._v(_vm._s(_vm.currencyName))]),
                          _vm._v(
                            " " +
                              _vm._s(
                                parseFloat(_vm.paymentGateway).toFixed(2)
                              ) +
                              "\n                        "
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("tr", [
            _c(
              "td",
              [
                _vm._v("Grand Total\n                        "),
                _c("tooltip-box", { attrs: { msg: _vm.grandTotalMessage } })
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c("strong", [_vm._v(_vm._s(_vm.currencyName))]),
              _vm._v(" " + _vm._s(parseFloat(_vm.grandTotal).toFixed(2)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.orderForReview
        ? _c("div", { staticClass: "cart-column" }, [_vm._m(1)])
        : _vm._e(),
      _vm._v(" "),
      _vm.shippingMessage
        ? _c("div", { staticClass: "cart-column" }, [
            _c("div", { staticClass: "alert alert-danger alert-dismissible" }, [
              _c("strong", [_vm._v(_vm._s(_vm.shippingMessage))])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cart-column mobile-hide" }, [
      _c("div", { staticClass: "ship-notice" }, [
        _c("h5", [
          _c("span", { staticClass: "fas fa-plane" }),
          _vm._v(" Shipping Notice !\n                ")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                    Please note that our estimated delivery time for Bangladesh is 12-14 business days after\n                    receiving your product in our New York warehouse. If you are from another country, it will\n                    require more time. Because we don't have any control over the custom system of the country. You\n                    may receive multiple packages of your ordered items.\n                "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ship-notice" }, [
        _c("h5", [
          _c("span", { staticClass: "fas fa-ban" }),
          _vm._v(" Prohibited Item !\n                ")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                    It's very important to always check the list of prohibited items into your country\n                    by visiting the Prohibited Items section. Prohibited items are subject to\n                    confiscation upon arrival, and may not be shipped out from the original country.\n                "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-danger alert-dismissible" }, [
      _c("strong", [
        _vm._v(
          'Weight is required for shipping. Currently, we can\'t estimate your shipping cost. For that\n                    reason, please press "Submit for review" button. Our technical team will review your order first\n                    then notify you for placing your order. It will be done within one working day. Till then stay\n                    with us.'
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ed8a7314", module.exports)
  }
}

/***/ }),

/***/ 1355:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1356)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1358)
/* template */
var __vue_template__ = __webpack_require__(1364)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00242203"
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
Component.options.__file = "resources/js/components/cart/CartPaymentMethod.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00242203", Component.options)
  } else {
    hotAPI.reload("data-v-00242203", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1357);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("73ec43d4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00242203\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartPaymentMethod.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00242203\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartPaymentMethod.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cart_CartUserInfo__ = __webpack_require__(1359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cart_CartUserInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_cart_CartUserInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod__ = __webpack_require__(1242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_types__ = __webpack_require__(31);
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
        cartUserInfo: __WEBPACK_IMPORTED_MODULE_0__components_cart_CartUserInfo___default.a,
        commonPaymentMethod: __WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod___default.a
    },
    data: function data() {
        return {};
    },

    computed: {
        orderForReview: function orderForReview() {
            return this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["g" /* CART_IS_REVIEW */]];
        }
    }
});

/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1360)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1362)
/* template */
var __vue_template__ = __webpack_require__(1363)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-355a7e4d"
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
Component.options.__file = "resources/js/components/cart/CartUserInfo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-355a7e4d", Component.options)
  } else {
    hotAPI.reload("data-v-355a7e4d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1361);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("74440def", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-355a7e4d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartUserInfo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-355a7e4d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CartUserInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.tooltip-toggle[data-v-355a7e4d] {\n    cursor: pointer;\n    position: relative;\n}\n.tooltip-toggle[data-v-355a7e4d]::before {\n    position: absolute;\n    top: -14px;\n    left: -45px;\n    background-color: #7f8284;\n    border-radius: 5px;\n    color: #fff;\n    content: attr(data-tooltip);\n    padding: 5px;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 160px;\n}\n.tooltip-toggle[data-v-355a7e4d]::after {\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #7f8284;\n    content: \" \";\n    font-size: 0;\n    line-height: 0;\n    margin-left: -5px;\n    width: 0;\n}\n.tooltip-toggle[data-v-355a7e4d]::before,\n.tooltip-toggle[data-v-355a7e4d]::after {\n    color: #efefef;\n    font-family: monospace;\n    font-size: 12px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center;\n}\n.tooltip-toggle[data-v-355a7e4d]:hover::before,\n.tooltip-toggle[data-v-355a7e4d]:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(363);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    data: function data() {
        return {
            address_id: '',
            paymentLoading: false,
            addressErrors: {}
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapGetters */])({
        countries: __WEBPACK_IMPORTED_MODULE_3__store_types__["L" /* LOC_COUNTRY_LIST */],
        states: __WEBPACK_IMPORTED_MODULE_3__store_types__["P" /* LOC_STATE_LIST */],
        cardList: "getCardList",
        payments: "getterPayments",
        defaultAddress: __WEBPACK_IMPORTED_MODULE_3__store_types__["Y" /* LOC_USER_DEFAULT_ADDRESS */],
        grandTotal: __WEBPACK_IMPORTED_MODULE_3__store_types__["c" /* CART_GRANT_TOTAL */],
        orderForReview: __WEBPACK_IMPORTED_MODULE_3__store_types__["g" /* CART_IS_REVIEW */],
        usTax: __WEBPACK_IMPORTED_MODULE_3__store_types__["E" /* CART_US_TAX_AMOUNT */],
        shippingMessage: __WEBPACK_IMPORTED_MODULE_3__store_types__["d" /* CART_INFO_MESSAGE */]

    }), {
        order: function order() {
            return {
                taxAmount: this.usTax,
                grandTotal: this.grandTotal,
                currency: this.$store.getters[__WEBPACK_IMPORTED_MODULE_3__store_types__["a" /* BASE_CURRENCY_NAME */]]
            };
        },
        addressList: function addressList() {
            var addresses = this.$store.getters[__WEBPACK_IMPORTED_MODULE_3__store_types__["V" /* LOC_USER_ADDRESS_LIST */]];
            if (addresses) {
                this.address_id = this.defaultAddress;

                if (Object.keys(addresses).length === 1) {
                    this.address_id = Object.keys(addresses)[0];
                }
            }
            return addresses;
        },
        address: function address() {
            return this.address_id ? this.addressList[this.address_id] : { phones: [{ phone: '' }] };
        }
    }),
    created: function created() {
        var _this = this;

        this.getUserAddressList();
        this.getCountries();
        this.address.country_id = '';
        this.address.state_id = '';

        setTimeout(function () {
            if (_this.address.country_id) {
                _this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["Q" /* LOC_STATE_LIST_API */], _this.address.country_id);
            }
        }, 3000);
    },

    methods: {
        paymentMethodFormSubmit: function paymentMethodFormSubmit() {
            var _this2 = this;

            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this2.paymentLoading) {
                    _this2.processUserCart();
                    __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].placeOrder, _this2.payments).then(function (response) {
                        if (response.data.original && response.data.original.status === true) {
                            _this2.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["l" /* CART_ITEM_EMPTY */]);
                            location.replace(response.data.original.url);
                        }
                        if (response.data.status) {
                            _this2.orderSuccessUpdateAddress();
                            _this2.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["l" /* CART_ITEM_EMPTY */]);
                            if (response.data.cash === 1) {
                                _this2.$router.push({
                                    name: 'Payment Status',
                                    query: {
                                        status: 'success',
                                        cash: 'yes',
                                        message: response.data.message,
                                        order_id: response.data.order_id,
                                        order_number: response.data.order_number
                                    }
                                });
                            } else {
                                _this2.$router.push({
                                    name: 'Payment Status',
                                    query: {
                                        status: 'success',
                                        message: response.data.message,
                                        order_id: response.data.order_id,
                                        order_number: response.data.order_number
                                    }
                                });
                            }
                        } else {
                            _this2.$awn.alert(response.data.message);
                        }
                        _this2.paymentLoading = false;
                    }).catch(function (error) {
                        if (error) {
                            _this2.paymentLoading = false;
                            _this2.addressErrors = error.response.data.errors;

                            if (_this2.addressErrors.shipping_cost) {
                                _this2.$awn.alert(_this2.addressErrors.shipping_cost[0]);
                            }
                        }
                    });
                }
            });
        },
        reviewOrder: function reviewOrder() {
            var _this3 = this;

            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this3.paymentLoading) {
                    _this3.processUserCart();
                    __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].reviewOrder, _this3.payments).then(function (response) {
                        if (response.data.status) {
                            _this3.orderSuccessUpdateAddress();
                            _this3.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["l" /* CART_ITEM_EMPTY */]);
                            _this3.$router.push({
                                name: 'Payment Status',
                                query: {
                                    status: 'review',
                                    message: response.data.message,
                                    order_id: response.data.order_id,
                                    order_number: response.data.order_number
                                }
                            });
                        }
                        _this3.paymentLoading = false;
                    }).catch(function (error) {
                        if (error) {
                            _this3.paymentLoading = false;
                            _this3.addressErrors = error.response.data.errors;
                        }
                    });
                }
            });
        },
        processUserCart: function processUserCart() {
            var _this4 = this;

            this.paymentLoading = true;

            delete this.address.country;
            delete this.address.state;

            var phones = this.address.phones;
            this.address.phones = [];
            phones.forEach(function (value, key) {
                if (value.phone) {
                    _this4.address.phones[key] = {
                        phone: value.phone
                    };
                }
            });
            this.payments.address = this.address;
            this.payments.order = this.order;
            if (!_.size(this.addressList)) {
                this.address.is_default = true;
            }
        },
        orderSuccessUpdateAddress: function orderSuccessUpdateAddress() {
            if (!_.size(this.addressList)) {
                this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["W" /* LOC_USER_ADDRESS_LIST_FROM_API */]);
            } else {
                this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["T" /* LOC_USER_ADDRESS_ADD_UPDATE */], this.address);
            }
        },
        getUserAddressList: function getUserAddressList() {
            var _this5 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].address).then(function (response) {
                if (response.data.result) {
                    _this5.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["W" /* LOC_USER_ADDRESS_LIST_FROM_API */], response.data.result);
                }
            }).catch(function (error) {});
        },
        selectAddress: function selectAddress() {
            this.address.country_id ? this.getStates() : '';
        },
        getCountries: function getCountries() {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["M" /* LOC_COUNTRY_LIST_API */]);
        },
        getStates: function getStates() {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["Q" /* LOC_STATE_LIST_API */], this.address.country_id);
        },
        addMobileNumber: function addMobileNumber() {
            __WEBPACK_IMPORTED_MODULE_2_vue___default.a.set(this.address.phones, this.address.phones.length, { phone: '' });
        },
        cancelMobileNumber: function cancelMobileNumber(index) {
            this.address.phones.splice(index, 1);
        },
        changeSelectedState: function changeSelectedState() {
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["S" /* LOC_STATE_SELECTED_SET */], this.address.state_id);
        }
    }
});

/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cart-user-info" }, [
    Object.keys(_vm.addressList).length
      ? _c("div", { staticClass: "form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address_id,
                  expression: "address_id"
                }
              ],
              staticClass: "form-control",
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
                    _vm.address_id = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.selectAddress
                ]
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Address")
              ]),
              _vm._v(" "),
              _vm._l(_vm.addressList, function(address, key) {
                return _c(
                  "option",
                  { attrs: { index: key }, domProps: { value: key } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          address && address.address
                            ? address.address.substring(0, 30) + "..."
                            : ""
                        ) +
                        "\n                "
                    ),
                    address.is_default ? _c("b", [_vm._v("Default")]) : _vm._e()
                  ]
                )
              })
            ],
            2
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c("label", [_vm._v("Telephone Number")]),
        _vm._v(" "),
        _vm._l(_vm.address.phones, function(phone, key) {
          return _c("div", { attrs: { index: key } }, [
            key > 0
              ? _c(
                  "a",
                  {
                    staticClass: "close contact-close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.cancelMobileNumber(key)
                      }
                    }
                  },
                  [_vm._v("×")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { class: { "has-error": _vm.errors.has("phone") } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: phone.phone,
                    expression: "phone.phone"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: key === 0 ? "required|min:9|max:13" : "min:9|max:13",
                    expression:
                      "key === 0 ? 'required|min:9|max:13' : 'min:9|max:13'"
                  }
                ],
                staticClass: "form-control",
                class: { input: true, "has-error": _vm.errors.has("phone") },
                attrs: {
                  type: "text",
                  name: "phone" + key,
                  placeholder: "Used to assist delivery",
                  "data-vv-as": "phone"
                },
                domProps: { value: phone.phone },
                on: {
                  keyup: function(e) {
                    return (phone.phone = e.target.value.replace(/[^\d]/g, ""))
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(phone, "phone", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "help-block error text-danger" },
                [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("phone" + key),
                          expression: "errors.has('phone' + key)"
                        }
                      ]
                    },
                    [_vm._v(_vm._s(_vm.errors.first("phone" + key)))]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.addressErrors["address.phone"], function(error) {
                    return _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.addressErrors &&
                              _vm.addressErrors["address.phone"] &&
                              key === 0,
                            expression:
                              "addressErrors && addressErrors['address.phone'] && key === 0"
                          }
                        ]
                      },
                      [_vm._v(_vm._s(error))]
                    )
                  })
                ],
                2
              )
            ])
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Full Name")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.address.full_name,
            expression: "address.full_name"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "John Doe", name: "full_name" },
        domProps: { value: _vm.address.full_name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.address, "full_name", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Address")]),
      _vm._v(" "),
      _c("div", { class: { "has-error": _vm.errors.has("address") } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.address.address,
              expression: "address.address"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          class: { input: true, "has-error": _vm.errors.has("address") },
          attrs: {
            type: "text",
            name: "address",
            placeholder: "Street and number, P.O. box, c/o."
          },
          domProps: { value: _vm.address.address },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.address, "address", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "help-block error text-danger" },
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("address"),
                    expression: "errors.has('address')"
                  }
                ]
              },
              [_vm._v(_vm._s(_vm.errors.first("address")))]
            ),
            _vm._v(" "),
            _vm._l(_vm.addressErrors["address.address"], function(error) {
              return _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.addressErrors &&
                        _vm.addressErrors["address.address"],
                      expression:
                        "addressErrors && addressErrors['address.address']"
                    }
                  ]
                },
                [_vm._v(_vm._s(error))]
              )
            })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.address.address_2,
            expression: "address.address_2"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          name: "address",
          placeholder: "Apartment, suite, unit, building, floor, etc."
        },
        domProps: { value: _vm.address.address_2 },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.address, "address_2", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Shipping Details")]),
      _vm._v(" "),
      _c("div", { class: { "has-error": _vm.errors.has("city") } }, [
        _c("div", { staticClass: "col-6 left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.address.city,
                expression: "address.city"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "form-control",
            class: { input: true, "has-error": _vm.errors.has("city") },
            attrs: { type: "text", placeholder: "City", name: "city" },
            domProps: { value: _vm.address.city },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.address, "city", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "help-block error text-danger" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("city"),
                      expression: "errors.has('city')"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.errors.first("city")))]
              ),
              _vm._v(" "),
              _vm._l(_vm.addressErrors["address.city"], function(error) {
                return _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.addressErrors &&
                          _vm.addressErrors["address.city"],
                        expression:
                          "addressErrors && addressErrors['address.city']"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(error))]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 left right" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.address.zip_code,
              expression: "address.zip_code"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number", placeholder: "Zip Code", name: "zip_code" },
          domProps: { value: _vm.address.zip_code },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.address, "zip_code", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-6 left" }, [
        _c("div", { class: { "has-error": _vm.errors.has("country") } }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.country_id,
                  expression: "address.country_id"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("country") },
              attrs: { name: "country" },
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
                    _vm.$set(
                      _vm.address,
                      "country_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                  _vm.getStates
                ]
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select country")
              ]),
              _vm._v(" "),
              _vm._l(_vm.countries, function(country) {
                return _c("option", { domProps: { value: country.id } }, [
                  _vm._v(_vm._s(country.name))
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "help-block error text-danger" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("country"),
                      expression: "errors.has('country')"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.errors.first("country")))]
              ),
              _vm._v(" "),
              _vm._l(_vm.addressErrors["address.country"], function(error) {
                return _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.addressErrors &&
                          _vm.addressErrors["address.country"],
                        expression:
                          "addressErrors && addressErrors['address.country']"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(error))]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 right" }, [
        _c("div", { class: { "has-error": _vm.errors.has("state") } }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.state_id,
                  expression: "address.state_id"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("state") },
              attrs: { name: "state", id: "shop-test-state" },
              on: {
                state: _vm.changeSelectedState,
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.address,
                    "state_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select state")]),
              _vm._v(" "),
              _vm._l(_vm.states, function(state) {
                return _c("option", { domProps: { value: state.id } }, [
                  _vm._v(_vm._s(state.name))
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "help-block error text-danger" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("state"),
                      expression: "errors.has('state')"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.errors.first("state")))]
              ),
              _vm._v(" "),
              _vm._l(_vm.addressErrors["address.state"], function(error) {
                return _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.addressErrors &&
                          _vm.addressErrors["address.state"],
                        expression:
                          "addressErrors && addressErrors['address.state']"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(error))]
                )
              })
            ],
            2
          )
        ])
      ])
    ]),
    _vm._v(" "),
    !_vm.orderForReview
      ? _c(
          "button",
          {
            staticClass: "btn button-custom",
            attrs: { disabled: _vm.shippingMessage },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.paymentMethodFormSubmit($event)
              }
            }
          },
          [
            _vm._v("Place Order\n        "),
            _vm.paymentLoading
              ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
              : _vm._e()
          ]
        )
      : _c(
          "button",
          {
            staticClass: "btn button-custom",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.reviewOrder($event)
              }
            }
          },
          [
            _vm._v("Submit for review\n        "),
            _vm.paymentLoading
              ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
              : _vm._e()
          ]
        ),
    _vm._v(" "),
    _c("div", { staticClass: "cart-terms" }, [
      _c("strong", [
        _vm._v("You may decide to cancel your order after it is reviewed")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("By placing your order, you agree to ShopnShipbd's ")]),
      _vm._v(" "),
      _c(
        "p",
        [
          _c("router-link", { attrs: { to: "/terms-of-services" } }, [
            _vm._v("Terms of Service")
          ]),
          _vm._v("\n            and\n            "),
          _c("router-link", { attrs: { to: "/privacy-policy" } }, [
            _vm._v("Privacy Policy")
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", { staticClass: "fas fa-star" }),
      _vm._v(
        "\n        Please only use your real name. Packages arriving with false information maybe\n        confiscated by the local authorities at the destination country.\n    "
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-355a7e4d", module.exports)
  }
}

/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cart-payment-method" }, [
    _c("div", { staticClass: "payment-cart" }, [
      _c(
        "form",
        [
          !_vm.orderForReview ? _c("common-payment-method") : _vm._e(),
          _vm._v(" "),
          _c("cart-user-info")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00242203", module.exports)
  }
}

/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-8 col-sm-12" },
        [
          !_vm.dashboardLoader
            ? _c("div", [
                _c(
                  "div",
                  { staticClass: "add-cart" },
                  [
                    _c(
                      "div",
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        !_vm.cart
                          ? _c("info-notification", {
                              attrs: { msg: _vm.infoMessage }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.cart ? _c("cart-product-list") : _vm._e(),
                    _vm._v(" "),
                    _vm.cart ? _c("cart-product-total-count") : _vm._e()
                  ],
                  1
                )
              ])
            : _c("content-loader")
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
        !_vm.authenticated || (_vm.authenticated && !_vm.authenticated.verify)
          ? _c("div", { staticClass: "add-cart-reg new-registration" }, [
              _c(
                "div",
                { staticClass: "reg-form" },
                [_c("login-form"), _vm._v(" "), _c("login-social-link")],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.authenticated && _vm.authenticated.verify && _vm.cart
          ? _c("div", { staticClass: "add-cart-reg new-registration" }, [
              _c(
                "div",
                { staticClass: "cart-forms" },
                [
                  !_vm.orderForReview
                    ? _c("h4", [_vm._v("Choose a payment method")])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("cart-payment-method")
                ],
                1
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("span", { staticClass: "fas fa-shopping-cart" }),
      _vm._v("Cart Items\n                        ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7908d3ae", module.exports)
  }
}

/***/ })

});
webpackJsonp([13],{

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1305)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1307)
/* template */
var __vue_template__ = __webpack_require__(1313)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5153ccd3"
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
Component.options.__file = "resources/js/pages/UserHome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5153ccd3", Component.options)
  } else {
    hotAPI.reload("data-v-5153ccd3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1306);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6052663a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5153ccd3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserHome.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5153ccd3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserHome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_dashboard_Sidebar__ = __webpack_require__(1308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_dashboard_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_user_dashboard_Sidebar__);
//
//
//
//
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
        sidebar: __WEBPACK_IMPORTED_MODULE_0__components_user_dashboard_Sidebar___default.a
    },
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1309)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1311)
/* template */
var __vue_template__ = __webpack_require__(1312)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e3d8c6c"
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
Component.options.__file = "resources/js/components/user-dashboard/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e3d8c6c", Component.options)
  } else {
    hotAPI.reload("data-v-2e3d8c6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1310);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("50215d7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e3d8c6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e3d8c6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1310:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'node-sass'\n    at Function.Module._resolveFilename (module.js:548:15)\n    at Function.Module._load (module.js:475:25)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (G:\\laragon\\www\\shopnshipbd\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (G:\\laragon\\www\\shopnshipbd\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\NormalModule.js:275:15)\n    at Compilation.buildModule (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\Compilation.js:157:10)\n    at factoryCallback (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\Compilation.js:348:12)\n    at NormalModuleFactory.create (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\NormalModuleFactory.js:216:25)\n    at semaphore.acquire (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\Compilation.js:248:13)\n    at Semaphore.acquire (G:\\laragon\\www\\shopnshipbd\\node_modules\\webpack\\lib\\util\\Semaphore.js:16:4)");

/***/ }),

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cookie__ = __webpack_require__(41);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            sideBarDiv: false
        };
    },

    computed: {
        authenticated: function authenticated() {
            return this.$store.state.login.authenticated;
        },
        routeName: function routeName() {
            return this.$route.name;
        },
        image: function image() {
            return this.$store.getters.getterUserImage;
        }
    },
    mounted: function mounted() {
        this.checkIsMobile();
    },

    methods: {
        logout: function logout() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].logout).then(function (response) {
                if (response.data.message) {
                    _this.$store.dispatch('userLoggedOut');
                    _this.$router.push('/');
                    axios.get(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].sessionId).then(function (response) {
                        if (response.data) {
                            __WEBPACK_IMPORTED_MODULE_2__services_cookie__["a" /* default */].setCookie('session_id', response.data.session_id);
                            _this.$store.dispatch('actionCartListData', []);
                        }
                    });
                }
            });
        },
        clickOnHamburger: function clickOnHamburger() {
            if (screen.width <= 1023) {
                this.sideBarDiv = true;
            }
        },
        clickOnCross: function clickOnCross() {
            if (screen.width <= 1023) {
                this.sideBarDiv = false;
            }
        },
        checkIsMobile: function checkIsMobile() {
            if (screen.width <= 1023) {
                this.sideBarDiv = false;
            } else {
                this.sideBarDiv = true;
            }
        },
        onImageLoadFailure: function onImageLoadFailure() {
            event.target.src = '/images/profile.png';
        }
    }
});

/***/ }),

/***/ 1312:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.authenticated
    ? _c("div", { staticClass: "col-md-3 user-settings" }, [
        _c("div", { staticClass: "user-profile" }, [
          _c("div", { staticClass: "profile-photo" }, [
            _vm.image
              ? _c("img", {
                  attrs: { src: _vm.image },
                  on: { error: _vm.onImageLoadFailure }
                })
              : _c("img", { attrs: { src: "/images/profile.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile-title" }, [
            _c("h4", { staticClass: "text-capitalize" }, [
              _vm._v(_vm._s(_vm.authenticated.username))
            ]),
            _vm._v(" "),
            _c("h6", [_vm._v("Premium user")])
          ])
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "dashboard-menu" }, [
          _c(
            "div",
            {
              staticClass: "modal FadeIn",
              attrs: {
                id: "dashboardMenu",
                role: "dialog",
                "data-easein": "slideRightIn",
                "tab-index": "1"
              }
            },
            [
              _c("div", { staticClass: "modal-dialog" }, [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("×")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "user-profile" }, [
                      _c("div", { staticClass: "profile-photo" }, [
                        _vm.image
                          ? _c("img", {
                              attrs: { src: _vm.image },
                              on: { error: _vm.onImageLoadFailure }
                            })
                          : _c("img", { attrs: { src: "/images/profile.png" } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "profile-title" }, [
                        _c("h4", { staticClass: "text-capitalize" }, [
                          _vm._v("Hello, " + _vm._s(_vm.authenticated.username))
                        ]),
                        _vm._v(" "),
                        _c("h6", [_vm._v("Premium user")])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("ul", [
                      _c(
                        "li",
                        {
                          class: { active: _vm.routeName === "User Dashboard" }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "User Dashboard" },
                                "data-dismiss": "modal"
                              }
                            },
                            [
                              _c("span", { staticClass: "fas fa-home" }),
                              _vm._v(
                                "Dashboard\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          class: { active: _vm.routeName === "User All Order" }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "User All Order" },
                                "data-dismiss": "modal"
                              }
                            },
                            [
                              _c("span", { staticClass: "fas fa-list" }),
                              _vm._v("Orders\n                                ")
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { class: { active: _vm.routeName === "User Profile" } },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "User Profile" },
                                "data-dismiss": "modal"
                              }
                            },
                            [
                              _c("span", { staticClass: "fas fa-user" }),
                              _vm._v(
                                "Profile Settings\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          class: {
                            active: _vm.routeName === "User Address List"
                          }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "User Address List" },
                                "data-dismiss": "modal"
                              }
                            },
                            [
                              _c("span", {
                                staticClass: "fas fa-address-card"
                              }),
                              _vm._v(
                                "Address\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          class: {
                            active: _vm.routeName === "User Payment Options"
                          }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "User Payment Options" },
                                "data-dismiss": "modal"
                              }
                            },
                            [
                              _c("span", {
                                staticClass: "fab fa-cc-mastercard"
                              }),
                              _vm._v(
                                "Payment Options\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: { "data-dismiss": "modal" },
                            on: { click: _vm.logout }
                          },
                          [
                            _c("span", { staticClass: "fas fa-sign-out-alt" }),
                            _vm._v("Sign out\n                                ")
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm.sideBarDiv
          ? _c("ul", [
              _c(
                "li",
                { class: { active: _vm.routeName === "User Dashboard" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "User Dashboard" } } },
                    [_c("span", [_vm._v("Dashboard")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { class: { active: _vm.routeName === "User All Order" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "User All Order" } } },
                    [_c("span", [_vm._v("Orders")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { class: { active: _vm.routeName === "User Profile" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "User Profile" } } },
                    [_c("span", [_vm._v("Profile Settings")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { class: { active: _vm.routeName === "User Address List" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "User Address List" } } },
                    [_c("span", [_vm._v("Address")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { class: { active: _vm.routeName === "User Payment Options" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "User Payment Options" } } },
                    [_c("span", [_vm._v("Payment Options")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("li", [
                _c("a", { on: { click: _vm.logout } }, [
                  _c("span", [_vm._v("Sign out")])
                ])
              ])
            ])
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "humburger-menu desktop-hide" }, [
      _c("a", { attrs: { "data-toggle": "modal", href: "#dashboardMenu" } }, [
        _c("span", { staticClass: "fas fa-bars" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e3d8c6c", module.exports)
  }
}

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "user-dashboard" },
        [
          _c("sidebar"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-9 user-landing" },
            [_c("router-view")],
            1
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-5153ccd3", module.exports)
  }
}

/***/ })

});
webpackJsonp([12],{

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1354)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1356)
/* template */
var __vue_template__ = __webpack_require__(1362)
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

/***/ 1354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1355);
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

/***/ 1355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_dashboard_Sidebar__ = __webpack_require__(1357);
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

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1358)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1360)
/* template */
var __vue_template__ = __webpack_require__(1361)
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

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1359);
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

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cookie__ = __webpack_require__(184);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1361:
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
            ])
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
                        ])
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

/***/ 1362:
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
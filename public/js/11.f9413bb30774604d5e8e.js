webpackJsonp([11],{

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1222)
/* template */
var __vue_template__ = __webpack_require__(1223)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/pages/common/auth/VerificationBrowser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-550c3bd1", Component.options)
  } else {
    hotAPI.reload("data-v-550c3bd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1178)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1180)
/* template */
var __vue_template__ = __webpack_require__(1182)
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

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7d48d0ce", content, false, {});
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

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_social_signup_service__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(31);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(183);




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

/***/ 1182:
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

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1184)
/* template */
var __vue_template__ = __webpack_require__(1185)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/components/login/LoginFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2924bae3", Component.options)
  } else {
    hotAPI.reload("data-v-2924bae3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginSocialLink__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginSocialLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LoginSocialLink__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        loginSocialLink: __WEBPACK_IMPORTED_MODULE_1__LoginSocialLink___default.a
    },
    data: function data() {
        return {
            currentYear: __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].CURRENTYEAR
        };
    }
});

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-md-12 no-space reg-footer-style" },
    [
      _c("login-social-link"),
      _vm._v(" "),
      _c("div", { staticClass: "reg-footer" }, [
        _c("ul", [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/terms-of-services" } }, [
                _vm._v("Terms of Service")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/privacy-policy" } }, [
                _vm._v("Privacy Policy")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/about" } }, [
                _vm._v("About us")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("©2018\n            "),
            _c("router-link", { attrs: { to: "/" } }, [
              _vm._v("shopnshipbd.com")
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2924bae3", module.exports)
  }
}

/***/ }),

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_LoginFooter__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_LoginFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_login_LoginFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(265);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { LoginFooter: __WEBPACK_IMPORTED_MODULE_3__components_login_LoginFooter___default.a },
    data: function data() {
        return {
            notification: this.$route.query.notification ? this.$route.query.notification : '',
            resend: this.$route.query.resend ? this.$route.query.resend : '',
            browserLoading: false
        };
    },
    created: function created() {
        !this.notification ? this.verifyBrowser() : '';
    },

    methods: {
        verifyBrowser: function verifyBrowser() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].browserVerifyByToken + this.$route.query.token + '/' + this.$route.query.user + '/' + this.$route.query.browser).then(function (response) {
                _this.notification = response.data.message;
                if (response.data.is_browser_verify) {
                    _this.$awn.success(response.data.message);
                    _this.$router.push(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.login.authenticated.redirect);
                    _this.$store.dispatch('updateField', {
                        field: 'isBrowserVerify',
                        value: response.data.is_browser_verify
                    });
                    _this.$store.dispatch('updateField', {
                        field: 'verify',
                        value: true
                    });

                    //update the session cart to user add to cart
                    _this.$router.push(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.login.authenticated.redirect);

                    _this.$store.dispatch('actionCartListData');
                    if (Object.keys(_this.cart).length) {
                        _this.$store.dispatch('actionUpdateCartListData');
                    } else {
                        _this.$store.dispatch('actionCartListData');
                    }
                }
                if (response.data.resend) {
                    _this.resend = response.data.resend;
                } else {
                    __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.login.authenticated.is_email_verify = response.data.is_email_verify;
                }
            }).catch(function (error) {});
        },
        browserVerify: function browserVerify() {
            var _this2 = this;

            this.browserLoading = true;
            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(this.resend + '?redirect=' + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].baseUrl + 'user/browser/verify').then(function (response) {
                _this2.notification = response.data.message;
                if (response.data.is_browser_verify) {
                    _this2.$awn.success(response.data.message);
                    _this2.$store.dispatch('updateField', {
                        field: 'isBrowserVerify',
                        value: response.data.is_browser_verify
                    });
                    _this2.$store.dispatch('updateField', {
                        field: 'verify',
                        value: true
                    });

                    //update the session cart to user add to cart
                    _this2.$router.push(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.login.authenticated.redirect);

                    _this2.$store.dispatch('actionCartListData');
                    if (Object.keys(_this2.cart).length) {
                        _this2.$store.dispatch('actionUpdateCartListData');
                    } else {
                        _this2.$store.dispatch('actionCartListData');
                    }
                }
                if (response.data.resend) {
                    _this2.resend = response.data.resend;
                } else {
                    _this2.resend = '';
                }
                _this2.browserLoading = false;
            }).catch(function (error) {
                _this2.browserLoading = false;
            });
        },
        againResend: function againResend() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(this.resend + '?redirect=' + __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].baseUrl + 'user/browser/verify').then(function (response) {
                _this3.notification = response.data.message;
                if (response.data.resend) {
                    _this3.resend = response.data.resend;
                } else {
                    _this3.resend = '';
                }
            }).catch(function (error) {});
        },
        checkUserIsAuthentic: function checkUserIsAuthentic() {
            var _this4 = this;

            this.browserLoading = true;
            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postBeforeVerified(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].browserVerifiedCheck + __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* default */].browserId).then(function (response) {
                _this4.notification = response.data.message;
                if (response.data.result && response.data.result.is_browser_verify) {
                    _this4.$store.dispatch('updateField', {
                        field: 'isBrowserVerify',
                        value: response.data.result.is_browser_verify
                    });
                    _this4.$store.dispatch('updateField', {
                        field: 'verify',
                        value: true
                    });

                    //update the session cart to user add to cart
                    _this4.$router.push(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.login.authenticated.redirect);

                    _this4.$store.dispatch('actionCartListData');
                    if (Object.keys(_this4.cart).length) {
                        _this4.$store.dispatch('actionUpdateCartListData');
                    } else {
                        _this4.$store.dispatch('actionCartListData');
                    }

                    _this4.$awn.success(response.data.message);
                    _this4.$router.push(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.login.authenticated.redirect);
                }
                _this4.browserLoading = false;
            }).catch(function (error) {
                _this4.browserLoading = false;
            });
        }
    },
    computed: {
        cart: function cart() {
            return this.$store.getters.getterCart;
        }
    }
});

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid no-space" }, [
    _c(
      "div",
      { staticClass: "row no-space" },
      [
        _c("div", { staticClass: "col-md-12 no-space" }, [
          _c("div", { staticClass: "new-registration" }, [
            _c(
              "div",
              { staticClass: "reg-logo" },
              [
                _c("router-link", { attrs: { to: "/" } }, [
                  _c("img", { attrs: { src: "/images/logo/logo-color.png" } })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "notifications" }, [
              _c("div", { staticClass: "notifications-msg" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", [_c("h4", [_vm._v(_vm._s(_vm.notification))])])
              ]),
              _vm._v(" "),
              _c("h5", [
                _vm._v(
                  "Please check first the email and verify then access, its for our security reason "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "notifications-btn" }, [
                _vm.resend
                  ? _c(
                      "button",
                      {
                        on: {
                          click: function($event) {
                            _vm.browserVerify()
                          }
                        }
                      },
                      [
                        _vm._v("Resend\n                            "),
                        _vm.browserLoading
                          ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.$store.state.login.authenticated
                  ? _c("button", { on: { click: _vm.checkUserIsAuthentic } }, [
                      _vm._v("Continue\n                            "),
                      _vm.browserLoading
                        ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("login-footer")
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
    return _c("div", [_c("span", { staticClass: "fas fa-info" })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-550c3bd1", module.exports)
  }
}

/***/ })

});
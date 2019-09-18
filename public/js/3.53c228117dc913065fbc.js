webpackJsonp([3],{

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1208)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1210)
/* template */
var __vue_template__ = __webpack_require__(1211)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0dc81ace"
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
Component.options.__file = "resources/js/pages/common/auth/ResetPassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dc81ace", Component.options)
  } else {
    hotAPI.reload("data-v-0dc81ace", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1168)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1170)
/* template */
var __vue_template__ = __webpack_require__(1172)
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

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("7d48d0ce", content, false, {});
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

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_social_signup_service__ = __webpack_require__(1171);
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

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(31);


var socialSignup = {
    //check social login
    socialLogin: function socialLogin(url) {
        this.popUp(url);
        var socialInterval = setInterval(function () {
            var localStorageDataLogin = JSON.parse(localStorage.getItem('loginDetails'));

            if (localStorageDataLogin) {
                currentUserId: localStorageDataLogin.user_id;
                username: localStorageDataLogin.name;
                loginToken: localStorageDataLogin.token;
                clearInterval(socialInterval);
            }
        }, 2000);
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

/***/ 1172:
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

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1174)
/* template */
var __vue_template__ = __webpack_require__(1175)
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

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginSocialLink__ = __webpack_require__(1167);
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

/***/ 1175:
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

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1209);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1fea422a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0dc81ace\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResetPassword.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0dc81ace\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResetPassword.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.is-danger[data-v-0dc81ace] {\n    border-color: red !important;\n}\n.form-group span[data-v-0dc81ace] {\n    color: red !important;\n}\n.create-account button a[data-v-0dc81ace] {\n    text-decoration: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_axios_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_LoginFooter__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_LoginFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_login_LoginFooter__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vee_validate__["b" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        loginFooter: __WEBPACK_IMPORTED_MODULE_5__components_login_LoginFooter___default.a
    },
    data: function data() {
        return {
            resetPassword: {},
            resetPasswordError: {},
            resetPasswordLoading: false,
            resend: '',
            notification: ''
        };
    },
    created: function created() {
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
        submitResetPasswordForm: function submitResetPasswordForm() {
            var _this = this;

            var resetPasswordData = {
                email: this.resetPassword.email,
                password: this.resetPassword.password,
                password_confirmation: this.resetPassword.confirm_password,
                token: this.$route.query.token,
                user_id: this.$route.query.uid,
                browser_id: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* default */].browserId
            };
            this.redirectToThisRoute = this.$route.path === '/cart' ? '/cart' : this.$route.query.from ? this.$route.query.from : '/';

            this.$validator.validateAll().then(function (valid) {
                if (valid) {
                    _this.resetPasswordLoading = true;
                    __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_2__config_api__["a" /* default */].resetPassword, resetPasswordData).then(function (response) {
                        _this.checkUserValidOrResend(response);
                    }).catch(function (error) {
                        _this.resetPasswordLoading = false;
                        _this.resetPasswordError = error.response.data.errors;
                    });
                }
            });
        },
        resendResetPassword: function resendResetPassword() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].getData(this.resend + '?redirect=' + __WEBPACK_IMPORTED_MODULE_2__config_api__["a" /* default */].baseUrl + 'reset/password').then(function (response) {
                _this2.checkUserValidOrResend(response);
            }).catch(function (error) {});
        },
        checkUserValidOrResend: function checkUserValidOrResend(response) {
            if (response.data.message) {
                this.notification = response.data.message;
                this.$awn.success(response.data.message);
            }
            if (response.data.result) {
                this.userData = {
                    userId: response.data.result.id,
                    username: response.data.result.name,
                    email: response.data.result.email,
                    mobile: response.data.result.mobile,
                    token: response.data.result.token,
                    isEmailVerify: response.data.result.is_email_verify,
                    isBrowserVerify: response.data.result.is_browser_verify,
                    verify: true
                };
                if (this.userData.token) {
                    this.$store.dispatch('userLoggedIn', this.userData);
                    this.resetPasswordLoading = false;
                    this.$router.push(this.redirectToThisRoute);
                }
            } else {
                this.resend = response.data.resend;
            }
        }
    }
});

/***/ }),

/***/ 1211:
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
            _vm.resend
              ? _c("div", { staticClass: "notifications" }, [
                  _c("div", { staticClass: "notifications-msg" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", [_c("h4", [_vm._v(_vm._s(_vm.notification))])])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "notifications-btn" }, [
                    _vm.resend
                      ? _c(
                          "button",
                          { on: { click: _vm.resendResetPassword } },
                          [
                            _vm._v("Resend\n                            "),
                            _vm.browserLoading
                              ? _c("i", { staticClass: "fas fa-spinner" })
                              : _vm._e()
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "reg-form" }, [
              _c("h3", [_vm._v("Reset Password")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.submitResetPasswordForm()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { class: { "has-error": _vm.errors.has("email") } },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.resetPassword.email,
                              expression: "resetPassword.email"
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
                            "has-error": _vm.errors.has("email")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter Email",
                            name: "email",
                            id: "email"
                          },
                          domProps: { value: _vm.resetPassword.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.resetPassword,
                                "email",
                                $event.target.value
                              )
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
                                    value: _vm.errors.has("email"),
                                    expression: "errors.has('email')"
                                  }
                                ]
                              },
                              [_vm._v(_vm._s(_vm.errors.first("email")))]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.resetPasswordError.email, function(
                              error
                            ) {
                              return _vm.resetPasswordError.email
                                ? _c("span", [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(error) +
                                        "\n                                    "
                                    )
                                  ])
                                : _vm._e()
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { class: { "has-error": _vm.errors.has("password") } },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.resetPassword.password,
                              expression: "resetPassword.password"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|passwordAlphaDigitMinMax",
                              expression: "'required|passwordAlphaDigitMinMax'"
                            }
                          ],
                          ref: "password",
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "has-error": _vm.errors.has("password")
                          },
                          attrs: {
                            type: "password",
                            placeholder: "Enter Password",
                            name: "password",
                            id: "password"
                          },
                          domProps: { value: _vm.resetPassword.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.resetPassword,
                                "password",
                                $event.target.value
                              )
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
                                    value: _vm.errors.has("password"),
                                    expression: "errors.has('password')"
                                  }
                                ]
                              },
                              [_vm._v(_vm._s(_vm.errors.first("password")))]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.resetPasswordError.password, function(
                              error
                            ) {
                              return _vm.resetPasswordError.password
                                ? _c("span", [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(error) +
                                        "\n                                    "
                                    )
                                  ])
                                : _vm._e()
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: {
                          "has-error": _vm.errors.has("confirm_password")
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.resetPassword.confirm_password,
                              expression: "resetPassword.confirm_password"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|confirmed:password",
                              expression: "'required|confirmed:password'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "has-error": _vm.errors.has("confirm_password")
                          },
                          attrs: {
                            type: "password",
                            placeholder: "Password, Again",
                            name: "confirm_password",
                            id: "confirm_password",
                            "data-vv-as": "confirm password"
                          },
                          domProps: {
                            value: _vm.resetPassword.confirm_password
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.resetPassword,
                                "confirm_password",
                                $event.target.value
                              )
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
                                    value: _vm.errors.has("confirm_password"),
                                    expression: "errors.has('confirm_password')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors.first("confirm_password"))
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("button", { attrs: { type: "submit" } }, [
                    _vm._v("Submit\n                            "),
                    _vm.resetPasswordLoading
                      ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                      : _vm._e()
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "create-account" },
                [
                  _c("span", [_vm._v("Already Registered? Here")]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: "/login", tag: "button", type: "button" } },
                    [_c("span", [_vm._v("Sign in")])]
                  )
                ],
                1
              )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "email" } }, [
      _c("b", [_vm._v("Email")]),
      _vm._v(" "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "password" } }, [
      _c("b", [_vm._v("Password")]),
      _vm._v(" "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "confirm_password" } }, [
      _c("b", [_vm._v("Confirm Password")]),
      _vm._v(" "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0dc81ace", module.exports)
  }
}

/***/ })

});
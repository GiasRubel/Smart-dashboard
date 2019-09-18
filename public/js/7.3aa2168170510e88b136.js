webpackJsonp([7],{

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1225)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1227)
/* template */
var __vue_template__ = __webpack_require__(1228)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a3a13db6"
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
Component.options.__file = "resources/js/pages/common/auth/Registration.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3a13db6", Component.options)
  } else {
    hotAPI.reload("data-v-a3a13db6", Component.options)
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

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7156477c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a3a13db6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Registration.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a3a13db6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Registration.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.is-danger[data-v-a3a13db6] {\n    border-color: red !important;\n}\n.form-group span[data-v-a3a13db6] {\n    color: red !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_axios_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_LoginFooter__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_LoginFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_login_LoginFooter__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        loginFooter: __WEBPACK_IMPORTED_MODULE_4__components_login_LoginFooter___default.a
    },
    data: function data() {
        return {
            registration: {},
            phone: '',
            registrationError: {},
            registrationLoading: false
        };
    },
    created: function created() {
        __WEBPACK_IMPORTED_MODULE_0_vee_validate__["a" /* Validator */].extend('passwordAlphaDigitMinMax', {
            getMessage: function getMessage(field) {
                return 'The ' + field + ' must contain at least one number and one uppercase letter,\n                                  and at least 6 but not more than 16 characters';
            },
            validate: function validate(value) {
                return __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].PASSWORD.test(value);
            }
        });
    },

    methods: {
        submitRegistrationForm: function submitRegistrationForm() {
            var _this = this;

            this.registration.browser_id = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].browserId;
            this.registration.redirect = __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].baseUrl + 'user/email/verify';
            this.$validator.validateAll().then(function (valid) {
                if (valid) {
                    _this.registrationLoading = true;
                    __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].registration, _this.registration).then(function (response) {
                        if (response.data.result && response.data.message) {
                            _this.registration = {};

                            _this.userData = {
                                userId: response.data.result.id,
                                username: response.data.result.name,
                                email: response.data.result.email,
                                isEmailVerify: response.data.result.is_email_verify,
                                isBrowserVerify: response.data.result.is_browser_verify,
                                redirect: '/',
                                token: response.data.result.token,
                                verify: false
                            };

                            if (_this.userData.isEmailVerify && _this.userData.isBrowserVerify) {
                                _this.userData.verify = true;
                            }

                            if (_this.userData.token) {
                                _this.$store.dispatch('userLoggedIn', _this.userData);
                            }
                            if (!_this.userData.isEmailVerify) {
                                _this.$router.push('/user/email/verify?resend=' + response.data.resend + '&notification=' + response.data.message);
                            }

                            if (_this.userData.isEmailVerify == 1 && !_this.userData.isBrowserVerify) {
                                _this.$router.push('/user/browser/verify?notification=' + response.data.message);
                            }

                            _this.$awn.success(response.data.message);
                        }
                        _this.registrationLoading = false;
                    }).catch(function (error) {
                        _this.registrationLoading = false;
                        _this.registrationError = error.response.data.errors;
                    });
                }
            });
        },
        onInput: function onInput(_ref) {
            var number = _ref.number,
                isValid = _ref.isValid,
                country = _ref.country;

            console.log(number, isValid, country);
        }
    }
});

/***/ }),

/***/ 1228:
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
            _c("div", { staticClass: "reg-form" }, [
              _c("h3", [_vm._v("Create Account")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.submitRegistrationForm()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { class: { "has-error": _vm.errors.has("name") } },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.registration.name,
                              expression: "registration.name"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "has-error": _vm.errors.has("name")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter Full Name",
                            name: "name",
                            id: "name",
                            "data-vv-as": "full name"
                          },
                          domProps: { value: _vm.registration.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.registration,
                                "name",
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
                                    value: _vm.errors.has("name"),
                                    expression: "errors.has('name')"
                                  }
                                ]
                              },
                              [_vm._v(_vm._s(_vm.errors.first("name")))]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.registrationError.name, function(error) {
                              return _vm.registrationError.name
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
                              value: _vm.registration.email,
                              expression: "registration.email"
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
                            type: "email",
                            placeholder: "Enter Email",
                            name: "email",
                            id: "email"
                          },
                          domProps: { value: _vm.registration.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.registration,
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
                            _vm._l(_vm.registrationError.email, function(
                              error
                            ) {
                              return _vm.registrationError.email
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
                              value: _vm.registration.password,
                              expression: "registration.password"
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
                          domProps: { value: _vm.registration.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.registration,
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
                            _vm._l(_vm.registrationError.password, function(
                              error
                            ) {
                              return _vm.registrationError.password
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
                              value: _vm.registration.confirm_password,
                              expression: "registration.confirm_password"
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
                            value: _vm.registration.confirm_password
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.registration,
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
                                  "\n                                        " +
                                    _vm._s(
                                      _vm.errors.first("confirm_password")
                                    ) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("button", [
                    _vm._v(
                      "Create Your ShopnShipbd Account\n                            "
                    ),
                    _vm.registrationLoading
                      ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "reg-login" }, [
                    _c(
                      "p",
                      [
                        _vm._v(
                          "Already have an account?\n                                "
                        ),
                        _c("router-link", { attrs: { to: "/login" } }, [
                          _vm._v(
                            "Sign in\n                                    "
                          ),
                          _c("span", { staticClass: "fas fa-caret-right" })
                        ])
                      ],
                      1
                    )
                  ])
                ]
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
    return _c("label", [
      _vm._v("Your Full Name\n                                "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Email\n                                "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Password\n                                "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Re-enter Password\n                                "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "By creating an account, you agree Shopnshipbd's\n                            "
      ),
      _c("a", { attrs: { href: "" } }, [_vm._v("Conditions of use")]),
      _vm._v(" and\n                            "),
      _c("a", { attrs: { href: "" } }, [_vm._v("Privacy Notice.")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a3a13db6", module.exports)
  }
}

/***/ })

});
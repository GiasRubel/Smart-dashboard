webpackJsonp([6],{

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1315)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1317)
/* template */
var __vue_template__ = __webpack_require__(1318)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-317d31ad"
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
Component.options.__file = "resources/js/pages/common/auth/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-317d31ad", Component.options)
  } else {
    hotAPI.reload("data-v-317d31ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1269)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1271)
/* template */
var __vue_template__ = __webpack_require__(1273)
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

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1270);
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

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_social_signup_service__ = __webpack_require__(1272);
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

/***/ 1272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_types__ = __webpack_require__(32);





var socialSignup = {
    //check social login
    socialLogin: function socialLogin(url) {
        this.popUp(url);
        window.addEventListener('message', function (e) {
            if (e.data.authUser) {
                var userData = e.data.authUser;
                __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].dispatch('userLoggedIn', userData);

                if (__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].getters[__WEBPACK_IMPORTED_MODULE_3__store_types__["D" /* CART_TOTAL_ITEM_QUANTITY */]] > 0) {
                    __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["h" /* CART_ITEM_APPEND_WITH_AUTHENTICATE */]);
                } else {
                    __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].dispatch(__WEBPACK_IMPORTED_MODULE_3__store_types__["m" /* CART_ITEM_LIST */]);
                }
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

/***/ 1273:
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

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1275)
/* template */
var __vue_template__ = __webpack_require__(1276)
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

/***/ 1275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginSocialLink__ = __webpack_require__(1268);
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

/***/ 1276:
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
            _vm._v("©" + _vm._s(_vm.currentYear) + "\n            "),
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

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1289)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1291)
/* template */
var __vue_template__ = __webpack_require__(1292)
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

/***/ 1289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1290);
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

/***/ 1290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.is-danger[data-v-f4c6bce8] {\n    border-color: red !important;\n}\n.form-group span[data-v-f4c6bce8] {\n    color: red !important;\n}\n.create-account button a[data-v-f4c6bce8] {\n    text-decoration: none !important;\n}\n.new-registration .reg-form .create-account button span[data-v-f4c6bce8] {\n    font-size: 14px;\n}\n.new-registration .reg-form .create-account button span[data-v-f4c6bce8]:focus,\n.new-registration .reg-form .create-account button[data-v-f4c6bce8]:focus,\n.new-registration .reg-form .create-account button[data-v-f4c6bce8]:hover,\n.new-registration .reg-form .create-account button span[data-v-f4c6bce8]:hover {\n    color: #23527c;\n}\n.login-password a[data-v-f4c6bce8] {\n    font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_types__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            loginLoading: false,
            redirectToThisRoute: ''
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

                                if (_this.$store.getters[__WEBPACK_IMPORTED_MODULE_4__store_types__["D" /* CART_TOTAL_ITEM_QUANTITY */]] > 0) {
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

/***/ 1292:
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
                  "data-vv-as": "email",
                  "data-vv-validate-on": "blur"
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

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1316);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("41a6d0db", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-317d31ad\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-317d31ad\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm__ = __webpack_require__(1288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_login_LoginForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_LoginFooter__ = __webpack_require__(1274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_LoginFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_login_LoginFooter__);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        loginFooter: __WEBPACK_IMPORTED_MODULE_1__components_login_LoginFooter___default.a
    },
    data: function data() {
        return {};
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (from.path === '/cart' && !to.query.from) to.query.from = '/cart';
        next();
    }
});

/***/ }),

/***/ 1318:
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
            _c("div", { staticClass: "reg-form" }, [_c("login-form")], 1)
          ])
        ]),
        _vm._v(" "),
        _c("login-footer")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-317d31ad", module.exports)
  }
}

/***/ })

});
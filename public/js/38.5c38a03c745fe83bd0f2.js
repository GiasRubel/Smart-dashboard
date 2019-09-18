webpackJsonp([38],{

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1343)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1345)
/* template */
var __vue_template__ = __webpack_require__(1346)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-539af1d0"
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
Component.options.__file = "resources/js/components/user-dashboard/UserChangePassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-539af1d0", Component.options)
  } else {
    hotAPI.reload("data-v-539af1d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1344);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("543c0386", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539af1d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserChangePassword.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539af1d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserChangePassword.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.is-danger[data-v-539af1d0] {\n    border-color: red;\n}\n.form-group span[data-v-539af1d0] {\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 1345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api__ = __webpack_require__(31);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vee_validate__["b" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            changePassword: {},
            changePasswordError: {},
            changePasswordLoading: false
        };
    },
    created: function created() {
        __WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* Validator */].extend('passwordAlphaDigitMinMax', {
            getMessage: function getMessage(field) {
                return 'The ' + field + ' must contain at least one number and one uppercase letter,\n                                  and at least 6 but not more than 16 characters';
            },
            validate: function validate(value) {
                return __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* default */].PASSWORD.test(value);
            }
        });
    },

    methods: {
        changePasswordForm: function changePasswordForm() {
            var _this = this;

            this.$validator.validateAll().then(function (valid) {
                if (valid) {
                    _this.changePasswordLoading = true;
                    __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_3__config_api__["a" /* default */].changePassword, _this.changePassword).then(function (response) {
                        if (response.data.message) {
                            _this.$router.push({ name: 'User Profile' });
                            _this.$store.dispatch('actionOpenUserForm', false);
                            _this.changePassword = {};
                            _this.$awn.success(response.data.message);
                            _this.changePasswordLoading = false;
                        }
                    }).catch(function (error) {
                        _this.changePasswordLoading = false;
                        _this.changePasswordError = error.response.data.errors;
                    });
                }
            });
        },
        cancelChangePasswordForm: function cancelChangePasswordForm() {
            this.$router.push({ name: 'User Profile' });
            this.changePassword = {};
        }
    }
});

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard-settings" }, [
    _c("div", { staticClass: "edit-options" }, [
      _c("h3", [_vm._v("Change Password Form")]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.changePasswordForm()
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { class: { "has-error": _vm.errors.has("current_password") } },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.changePassword.current_password,
                      expression: "changePassword.current_password"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|passwordAlphaDigitMinMax",
                      expression: "'required|passwordAlphaDigitMinMax'"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    input: true,
                    "has-error": _vm.errors.has("current_password")
                  },
                  attrs: {
                    type: "password",
                    placeholder: "Enter Current Password",
                    name: "current_password",
                    id: "current_password",
                    "data-vv-as": "current password"
                  },
                  domProps: { value: _vm.changePassword.current_password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.changePassword,
                        "current_password",
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
                            value: _vm.errors.has("current_password"),
                            expression: "errors.has('current_password')"
                          }
                        ]
                      },
                      [_vm._v(_vm._s(_vm.errors.first("current_password")))]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.changePasswordError.current_password, function(
                      error
                    ) {
                      return _vm.changePasswordError.current_password
                        ? _c("span", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(error) +
                                "\n                    "
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
              { class: { "has-error": _vm.errors.has("new_password") } },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.changePassword.new_password,
                      expression: "changePassword.new_password"
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
                    "has-error": _vm.errors.has("new_password")
                  },
                  attrs: {
                    type: "password",
                    placeholder: "Enter New Password",
                    name: "new_password",
                    id: "new_password",
                    "data-vv-as": "new password"
                  },
                  domProps: { value: _vm.changePassword.new_password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.changePassword,
                        "new_password",
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
                            value: _vm.errors.has("new_password"),
                            expression: "errors.has('new_password')"
                          }
                        ]
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.first("new_password")) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.changePasswordError.new_password, function(
                      error
                    ) {
                      return _vm.changePasswordError.new_password
                        ? _c("span", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(error) +
                                "\n                    "
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
              {
                class: {
                  "has-error": _vm.errors.has("new_password_confirmation")
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.changePassword.new_password_confirmation,
                      expression: "changePassword.new_password_confirmation"
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
                    "has-error": _vm.errors.has("new_password_confirmation")
                  },
                  attrs: {
                    type: "password",
                    placeholder: "Password, Again",
                    name: "new_password_confirmation",
                    id: "new_password_confirmation",
                    "data-vv-as": "confirm password"
                  },
                  domProps: {
                    value: _vm.changePassword.new_password_confirmation
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.changePassword,
                        "new_password_confirmation",
                        $event.target.value
                      )
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
                          value: _vm.errors.has("new_password_confirmation"),
                          expression: "errors.has('new_password_confirmation')"
                        }
                      ]
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.errors.first("new_password_confirmation")
                          ) +
                          "\n                    "
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("button", { attrs: { type: "submit" } }, [
              _vm._v("Submit\n                "),
              _vm.changePasswordLoading
                ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "cancel-button",
                attrs: { type: "button" },
                on: { click: _vm.cancelChangePasswordForm }
              },
              [_vm._v("Cancel")]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "current_password" } }, [
      _c("b", [_vm._v("Current Password")]),
      _vm._v(" "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "new_password" } }, [
      _c("b", [_vm._v("New Password")]),
      _vm._v(" "),
      _c("span", { staticClass: "star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "new_password_confirmation" } }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-539af1d0", module.exports)
  }
}

/***/ })

});
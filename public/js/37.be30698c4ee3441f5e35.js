webpackJsonp([37],{

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1439)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1441)
/* template */
var __vue_template__ = __webpack_require__(1442)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d4222468"
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
Component.options.__file = "resources/js/components/user-dashboard/UserProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4222468", Component.options)
  } else {
    hotAPI.reload("data-v-d4222468", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1440);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5bad9eb7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d4222468\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserProfile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d4222468\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserProfile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#preview[data-v-d4222468] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#preview img[data-v-d4222468] {\n    max-width: 100%;\n    max-height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(31);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            userError: {},
            profileLoading: false
        };
    },

    computed: {
        authenticated: function authenticated() {
            return this.$store.state.login.authenticated;
        },
        showUserForm: function showUserForm() {
            return this.$store.getters.getterShowUserForm;
        },
        image: function image() {
            return this.$store.getters.getterUserImage;
        },
        userData: function userData() {
            return this.$store.getters.getterUserData;
        }
    },
    methods: {
        editUserProfile: function editUserProfile() {
            this.$store.dispatch('actionOpenUserForm', true);
        },
        submitUserForm: function submitUserForm() {
            var _this = this;

            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.profileLoading) {
                    _this.profileLoading = true;
                    __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].patchData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].userProfileAddUpdate, _this.userData).then(function (response) {
                        if (response.data) {
                            _this.$awn.success(response.data.message);
                            _this.$store.dispatch('actionOpenUserForm', false);
                            _this.$store.dispatch('updateField', {
                                field: 'username',
                                value: response.data.user.name
                            });
                            _this.profileLoading = false;
                        }
                    }).catch(function (error) {
                        _this.userError = error.response.data.errors;
                    });
                }
            });
        },
        cancelProfileForm: function cancelProfileForm() {
            this.$store.dispatch('actionOpenUserForm', false);
        },
        onFileChange: function onFileChange(e) {
            var _this2 = this;

            var file = e.target.files[0];
            var url = URL.createObjectURL(file);
            this.$store.dispatch('actionUserImage', url);
            var formData = new FormData();
            formData.append('image', file);
            __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].profilePicture, formData).then(function (response) {
                _this2.$awn.success(response.data.message);
            });
        },
        onImageLoadFailure: function onImageLoadFailure() {
            event.target.src = '/images/profile.png';
        }
    }
});

/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard-settings" }, [
    _c("div", { staticClass: "edit-options" }, [
      _vm.showUserForm
        ? _c("div", { staticClass: "user-add-edit" }, [
            _c("h3", [_vm._v("Personal Information")]),
            _vm._v(" "),
            _c(
              "form",
              { attrs: { enctype: "multipart/form-data", novalidate: "" } },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("User Image")]),
                  _vm._v(" "),
                  _c("div", [
                    _c("input", {
                      attrs: { type: "file", accept: "image/*" },
                      on: { change: _vm.onFileChange }
                    }),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "preview" } }, [
                      _vm.image
                        ? _c("img", {
                            attrs: { src: _vm.image },
                            on: { error: _vm.onImageLoadFailure }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitUserForm($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
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
                            value: _vm.userData.name,
                            expression: "userData.name"
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
                          name: "name",
                          placeholder: "Xorent",
                          "data-vv-validate-on": "input"
                        },
                        domProps: { value: _vm.userData.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.userData, "name", $event.target.value)
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
                          _vm._l(_vm.userError.name, function(error) {
                            return _vm.userError.name
                              ? _c("span", [_vm._v(_vm._s(error))])
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
                  _c("label", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userData.email,
                        expression: "userData.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: "xorentit@gmail.com",
                      disabled: ""
                    },
                    domProps: { value: _vm.userData.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.userData, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Phone")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { class: { "has-error": _vm.errors.has("mobile") } },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userData.mobile,
                            expression: "userData.mobile"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "min:9|max:14",
                            expression: "'min:9|max:14'"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          input: true,
                          "has-error": _vm.errors.has("mobile")
                        },
                        attrs: {
                          type: "text",
                          name: "mobile",
                          placeholder: "+8801923539156",
                          "data-vv-validate-on": "input"
                        },
                        domProps: { value: _vm.userData.mobile },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.userData,
                              "mobile",
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
                                  value: _vm.errors.has("mobile"),
                                  expression: "errors.has('mobile')"
                                }
                              ]
                            },
                            [_vm._v(_vm._s(_vm.errors.first("mobile")))]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.userError.mobile, function(error) {
                            return _vm.userError.mobile
                              ? _c("span", [_vm._v(_vm._s(error))])
                              : _vm._e()
                          })
                        ],
                        2
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("button", { attrs: { type: "submit" } }, [
                  _vm._v("Submit\n                    "),
                  _vm.profileLoading
                    ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "cancel-button",
                    attrs: { type: "button" },
                    on: { click: _vm.cancelProfileForm }
                  },
                  [_vm._v("Cancel")]
                )
              ]
            )
          ])
        : _c("div", { staticClass: "show-user-info" }, [
            _c(
              "a",
              {
                staticClass: "edit-button navbar-right",
                on: { click: _vm.editUserProfile }
              },
              [
                _vm._v("\n                Edit "),
                _c("i", { staticClass: "far fa-edit" })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "user-profile-image" }, [
              _vm.image
                ? _c("img", {
                    attrs: { src: _vm.image },
                    on: { error: _vm.onImageLoadFailure }
                  })
                : _c("img", { attrs: { src: "/images/profile.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "user-profile-info" }, [
              _c(
                "ul",
                [
                  _vm.userData.name
                    ? _c("li", [
                        _c("span", [_vm._v("Name: ")]),
                        _vm._v(" "),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.authenticated.username) +
                            "\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userData.email
                    ? _c("li", [
                        _c("span", [_vm._v("Email: ")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.userData.email) +
                            "\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userData.defaultAddress &&
                  _vm.userData.defaultAddress.phones
                    ? _vm._l(_vm.userData.defaultAddress.phones, function(
                        phone
                      ) {
                        return _c("li", [
                          _c("span", [_vm._v("Phone: ")]),
                          _vm._v(
                            "\n                            " +
                              _vm._s(phone.phone) +
                              "\n                        "
                          )
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.userData.defaultAddress && _vm.userData.mobile
                    ? _c("li", [
                        _c("span", [_vm._v("Phone: ")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.userData.mobile) +
                            "\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "User Change Password" } } },
                        [
                          _vm._v(
                            "Change Your Password Here\n                            "
                          ),
                          _c("span", { staticClass: "fas fa-edit" })
                        ]
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _vm.userData.defaultAddress
                ? _c("address", [
                    _c("span", [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.userData.defaultAddress.address) +
                          ", " +
                          _vm._s(_vm.userData.defaultAddress.state.title) +
                          ",\n                        " +
                          _vm._s(_vm.userData.defaultAddress.city) +
                          " " +
                          _vm._s(_vm.userData.defaultAddress.zip_code) +
                          ",\n                        " +
                          _vm._s(_vm.userData.defaultAddress.country.title)
                      )
                    ])
                  ])
                : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-d4222468", module.exports)
  }
}

/***/ })

});
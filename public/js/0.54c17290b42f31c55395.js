webpackJsonp([0],{

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1391);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("22ae162e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25674d40\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAddressForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25674d40\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAddressForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.is-danger[data-v-25674d40] {\n    border-color: red !important;\n}\n.form-group span[data-v-25674d40] {\n    color: red !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(35);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            address: {},
            countries: {},
            states: {},
            addressErrors: {},
            addressLoading: false
        };
    },
    created: function created() {
        this.getCountries();
        if (this.$route.params.addressId) {
            this.getAddressDetails(this.$route.params.addressId);
        }
    },

    methods: {
        submitAddressForm: function submitAddressForm() {
            var _this = this;

            var patchUrl = __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].address + '/update/' + this.$route.params.addressId;
            var postUrl = __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].address + '/add';
            var formSubmitCallback = function formSubmitCallback(response) {
                if (response.data.message && response.data.result) {
                    _this.addressLoading = false;
                    _this.$awn.success(response.data.message);
                    _this.$store.dispatch('addUpdateAddress', response.data.result);
                    if (response.data.result && response.data.result.is_default) {
                        _this.$store.dispatch('defaultAddressUpdate', response.data.result.id);
                        _this.$store.dispatch('actionUpdateUserProfileDefaultAddress', response.data.result);
                    }
                    _this.$router.push('/user/' + _this.$route.params.userId + '/address');
                }
            };
            var formErrorCallback = function formErrorCallback(error) {
                if (error) {
                    _this.addressLoading = false;
                    _this.addressErrors = error.response.data.errors;
                }
            };

            this.$validator.validateAll().then(function (valid) {
                if (valid) {
                    _this.addressLoading = true;
                    if (_this.$route.params.addressId) {
                        __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].patchData(patchUrl, _this.address).then(formSubmitCallback).catch(formErrorCallback);
                    } else {
                        if (!Object.keys(_this.$store.getters.getAddressList).length) {
                            _this.address.is_default = true;
                        }
                        __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(postUrl, _this.address).then(formSubmitCallback).catch(formErrorCallback);
                    }
                }
            });
        },
        getCountries: function getCountries() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].countries).then(function (response) {
                _this2.countries = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getStates: function getStates(countryID) {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].countries + '/' + countryID).then(function (response) {
                _this3.states = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getAddressDetails: function getAddressDetails(addressId) {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].address + '/show/' + addressId).then(function (response) {
                _this4.address = response.data.result;
                _this4.address.country_id ? _this4.getStates(_this4.address.country_id) : '';
            }).catch(function (error) {
                console.log(error);
            });
        },
        cancelAddressForm: function cancelAddressForm() {
            this.$router.push('/user/' + this.$route.params.userId + '/address');
        }
    }
});

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-dashboard-panel user-address" }, [
    _c("div", { staticClass: "user-dashboard-breadcrumb" }, [
      _c("ul", [
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "User Dashboard" } } }, [
              _vm._v("User Dashboard\n                    "),
              _c("span", { staticClass: "fas fa-chevron-right" })
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "router-link",
              { attrs: { to: { name: "User Address List" } } },
              [_vm._v("User Address")]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("h3", [_vm._v("Add or Update Address")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n        Or pick up your packages at your convenience from our self-service locations.\n        To add an ShopnShipbd Pickup Point or Locker, click\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitAddressForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Full Name")]),
          _vm._v(" "),
          _c("div", { class: { "has-error": _vm.errors.has("full_name") } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.full_name,
                  expression: "address.full_name"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("full_name") },
              attrs: {
                type: "text",
                name: "full_name",
                "data-vv-as": "full name"
              },
              domProps: { value: _vm.address.full_name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.address, "full_name", $event.target.value)
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
                        value: _vm.errors.has("full_name"),
                        expression: "errors.has('full_name')"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.errors.first("full_name")))]
                ),
                _vm._v(" "),
                _vm._l(_vm.addressErrors.full_name, function(error) {
                  return _vm.addressErrors.full_name
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ])
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
                _vm._l(_vm.addressErrors.address, function(error) {
                  return _vm.addressErrors.address
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
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
              name: "address2",
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
          _c("label", [_vm._v("City")]),
          _vm._v(" "),
          _c("div", { class: { "has-error": _vm.errors.has("city") } }, [
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
              attrs: { type: "text", name: "city" },
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
                _vm._l(_vm.addressErrors.city, function(error) {
                  return _vm.addressErrors.city
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Country/Region")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.country_id,
                  expression: "address.country_id"
                }
              ],
              staticClass: "form-control",
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
                  function($event) {
                    _vm.getStates(_vm.address.country_id)
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Country")
              ]),
              _vm._v(" "),
              _vm._l(_vm.countries, function(country) {
                return _c("option", { domProps: { value: country.id } }, [
                  _vm._v(_vm._s(country.name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("State/Province/Region")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.state_id,
                  expression: "address.state_id"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "state", id: "select-state" },
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
                  _vm.$set(
                    _vm.address,
                    "state_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            _vm._l(_vm.states, function(state) {
              return _c("option", { domProps: { value: state.id } }, [
                _vm._v(_vm._s(state.name))
              ])
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Zip Code")]),
          _vm._v(" "),
          _c("div", { class: { "has-error": _vm.errors.has("zip_code") } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.zip_code,
                  expression: "address.zip_code"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("zip_code") },
              attrs: {
                type: "text",
                name: "zip_code",
                "data-vv-as": "zip code"
              },
              domProps: { value: _vm.address.zip_code },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.address, "zip_code", $event.target.value)
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
                        value: _vm.errors.has("zip_code"),
                        expression: "errors.has('zip_code')"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.errors.first("zip_code")))]
                ),
                _vm._v(" "),
                _vm._l(_vm.addressErrors.zip_code, function(error) {
                  return _vm.addressErrors.zip_code
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Phone Number")]),
          _vm._v(" "),
          _c("div", { class: { "has-error": _vm.errors.has("phone") } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.address.phone,
                  expression: "address.phone"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("phone") },
              attrs: {
                type: "text",
                name: "phone",
                placeholder: "May be used to assist delivery"
              },
              domProps: { value: _vm.address.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.address, "phone", $event.target.value)
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
                        value: _vm.errors.has("phone"),
                        expression: "errors.has('phone')"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.errors.first("phone")))]
                ),
                _vm._v(" "),
                _vm._l(_vm.addressErrors.phone, function(error) {
                  return _vm.addressErrors.phone
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("button", { attrs: { type: "submit" } }, [
              _vm._v("Submit Address\n                    "),
              _vm.addressLoading
                ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button-warning",
                attrs: { type: "button" },
                on: { click: _vm.cancelAddressForm }
              },
              [_vm._v("Cancel")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-25674d40", module.exports)
  }
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1390)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1392)
/* template */
var __vue_template__ = __webpack_require__(1393)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25674d40"
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
Component.options.__file = "resources/js/components/user-dashboard/address/UserAddressForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25674d40", Component.options)
  } else {
    hotAPI.reload("data-v-25674d40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
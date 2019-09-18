webpackJsonp([2],{

/***/ 1174:
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
var __vue_template__ = __webpack_require__(1398)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58e1dec8"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserOrderDetails.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58e1dec8", Component.options)
  } else {
    hotAPI.reload("data-v-58e1dec8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1187)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1189)
/* template */
var __vue_template__ = __webpack_require__(1190)
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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("36fb0698", content, false, {});
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

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1189:
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

/***/ 1190:
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

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1202)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1204)
/* template */
var __vue_template__ = __webpack_require__(1205)
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

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5a28ad7c", content, false, {});
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

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.card-form span[data-v-17cad468] {\n  color: red !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_axios_service__ = __webpack_require__(41);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            currentMonth: new Date().getMonth() + 1
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
        },
        monthList: function monthList() {
            var months = [];
            var currentMonth = new Date().getMonth() + 1;
            for (var i = 1; i <= 12; i++) {
                months.push(i);
            }

            return months;
        }
    },
    created: function created() {
        if (this.cardDetailsData.details_link) {
            this.getCardDetails(this.cardDetailsData.details_link);
        }
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
                if (response.data.status !== true) {
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
                if (valid) {
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
        closeCard: function closeCard() {
            this.$store.dispatch('cardPaymentForm', {});
            this.$store.dispatch('openCardForm', false);
            this.$store.dispatch('getCardDetailsLink', {});
        },
        getCardDetails: function getCardDetails(cardDetailLink) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].getData(cardDetailLink).then(function (response) {
                _this2.$store.dispatch('cardPaymentForm', _this2.cardDetailsData);
                _this2.cardPayment.expire_date = __WEBPACK_IMPORTED_MODULE_1_moment___default()(_this2.cardPayment.expire_date).format("YYYY-MM");
                var splittedExpireDate = _this2.cardPayment.expire_date.split('-');
                _this2.cardYear = splittedExpireDate[0];
                _this2.cardMonth = Number(splittedExpireDate[1]);
            });
        }
    }
});

/***/ }),

/***/ 1205:
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
                [_vm._v(_vm._s(_vm.errors.first("card_number")))]
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
        _c("div", { staticClass: "column col-6 right" }, [
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
              _vm._l(_vm.monthList, function(month) {
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
          _c("div", { staticClass: "help-block error text-danger" }, [
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
              [_vm._v(_vm._s(_vm.errors.first("month")))]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column col-6 left",
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
                    [_vm._v(_vm._s(year))]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "help-block error text-danger" }, [
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
                [_vm._v(_vm._s(_vm.errors.first("year")))]
              )
            ])
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
                  [_vm._v(_vm._s(_vm.errors.first("cvv")))]
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

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1391);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("34699b86", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58e1dec8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserOrderDetails.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58e1dec8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserOrderDetails.vue");
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_dashboard_dashboard_UserOrderPaymentMethod__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_dashboard_dashboard_UserOrderPaymentMethod___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__user_dashboard_dashboard_UserOrderPaymentMethod__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_InfoNotification__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_InfoNotification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_InfoNotification__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        userOrderPaymentMethod: __WEBPACK_IMPORTED_MODULE_0__user_dashboard_dashboard_UserOrderPaymentMethod___default.a,
        infoNotification: __WEBPACK_IMPORTED_MODULE_1__common_InfoNotification___default.a
    },
    data: function data() {
        return {
            infoMessage1: 'Your total payment has been changed due to new weight of your desire products !',
            infoMessage2: 'Notification message !'
        };
    },

    computed: {
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        },
        payment: function payment() {
            var payment = 0;
            _.forEach(this.orderDetails.payments, function (value) {
                if (value.currency === 'BDT') {
                    payment += (value.amount - value.gateway_charge_amount) / value.conversion_rate;
                } else {
                    payment += value.amount - value.gateway_charge_amount;
                }
            });

            return payment;
        },
        totalWeight: function totalWeight() {
            var total = 0;
            _.forEach(this.orderDetails.items, function (value) {
                total += value.prices.quantity * value.weight;
            });

            return total;
        }
    },
    created: function created() {
        this.getOrderDetails();
    },

    methods: {
        getOrderDetails: function getOrderDetails() {
            var orderId = this.$route.params.orderId;
            this.$store.dispatch('actionOrderDetails', orderId);
        },
        onImageLoadFailure: function onImageLoadFailure() {
            event.target.src = '/images/profile.png';
        }
    }
});

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1394)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1396)
/* template */
var __vue_template__ = __webpack_require__(1397)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f3d5a63e"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserOrderPaymentMethod.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3d5a63e", Component.options)
  } else {
    hotAPI.reload("data-v-f3d5a63e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1395);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0bea6467", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3d5a63e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserOrderPaymentMethod.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3d5a63e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserOrderPaymentMethod.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.gateway-list ul li a span[data-v-f3d5a63e] {\n    color: #ccc !important;\n}\n.gateway-list ul li a span.green[data-v-f3d5a63e] {\n    color: #44b3e6 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cart_CardForm__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cart_CardForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_cart_CardForm__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cardForm: __WEBPACK_IMPORTED_MODULE_2__components_cart_CardForm___default.a
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
            return this.$store.getters.getterDefaultValues;
        },
        orderForReview: function orderForReview() {
            return this.$store.getters.getterOrderForReview;
        },
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        },
        orderSubTaxInsTotal: function orderSubTaxInsTotal() {
            return parseFloat(this.orderDetails.total_price) + parseFloat(this.orderDetails.tax_usa) + parseFloat(this.orderDetails.shipment_cost) + parseFloat(this.orderDetails.royalty_charge);
        },
        paymentGateway: function paymentGateway() {
            var gatewayId = this.$store.getters.getterPayments.gateway;

            if (gatewayId === 1) {
                return this.orderSubTaxInsTotal * this.$store.getters.getterDefaultValues.sslCommerz;
            }
            if (gatewayId === 2) {
                return this.orderSubTaxInsTotal * this.$store.getters.getterDefaultValues.stripe + 0.3;
            }
            if (gatewayId === 3) {
                return this.orderSubTaxInsTotal * this.$store.getters.getterDefaultValues.americanExpress;
            }
        }
    },
    created: function created() {
        this.getPaymentMethod();
        this.stripeCardList(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].stripeCardList);
    },

    methods: {
        getPaymentMethod: function getPaymentMethod() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].paymentMethodApi).then(function (response) {
                if (response.data) {
                    _this.paymentMethods = response.data;

                    _this.paymentMethods.forEach(function (value) {
                        if (value.is_online) _this.payments.paymentMethod = value.id;
                    });
                }
            }).catch(function (error) {});
        },
        stripeCardList: function stripeCardList(cardDetailsLink) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].getData(cardDetailsLink).then(function (response) {
                if (response.data.length) {
                    _this2.$store.dispatch('cardList', response.data);
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
        activeCard: function activeCard(cardId) {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].patchData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].card + 'active/' + cardId, cardId).then(function (response) {
                if (response.data) {
                    _this3.$awn.success(response.data.message);
                    _this3.$store.dispatch('updateCardField', {
                        id: response.data.id,
                        field: 'is_active',
                        value: true
                    });
                }
            });
        },
        changePaymentMethod: function changePaymentMethod(paymentMethodID) {
            this.$store.dispatch('setPaymentMethodId', paymentMethodID);
        },
        changeGateway: function changeGateway(gatewayID) {
            this.$store.dispatch('setGatewayId', gatewayID);
            var currency = gatewayID === 1 || gatewayID === 3 ? 'BDT' : 'USD';
            this.$store.dispatch('actionCurrentCurrency', currency);
        },
        submitOrderPayment: function submitOrderPayment() {
            var _this4 = this;

            this.payments.order = {
                subTotal: parseFloat(this.orderDetails.total_price).toFixed(2),
                taxAmount: parseFloat(this.orderDetails.tax_usa).toFixed(2),
                internationalShippingCost: parseFloat(this.orderDetails.shipment_cost).toFixed(2),
                localTax: parseFloat(this.orderDetails.tax_bd).toFixed(2),
                paymentGatewayCharge: parseFloat(this.paymentGateway).toFixed(2),
                grandTotal: (parseFloat(this.orderDetails.master_price) + parseFloat(this.paymentGateway)).toFixed(2),
                currency: this.orderDetails.currency,
                royaltyCharge: parseFloat(this.orderDetails.royalty_charge).toFixed(2)
            };

            console.log(this.payments);
            __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].orderReviewSubmit, this.payments).then(function (response) {
                if (response.data) {
                    _this4.$awn.success(response.data.message);
                }
            });
        }
    }
});

/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal-dialog", attrs: { role: "document" } },
    [
      _c("div", { staticClass: "add-cart-reg new-registration" }, [
        _c("div", { staticClass: "cart-forms" }, [
          _c("div", { staticClass: "cart-payment-method" }, [
            _c("div", { staticClass: "payment-cart" }, [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm.paymentMethods
                  ? _c("div", { staticClass: "modal-body" }, [
                      _c("h2", [_vm._v("Extra payment form appear here!")]),
                      _vm._v(" "),
                      _c(
                        "form",
                        [
                          _vm._l(_vm.paymentMethods, function(payment) {
                            return _c(
                              "div",
                              { staticClass: "order-payment-methodt" },
                              [
                                _c("div", { staticClass: "cart-row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "payment-cart-column" },
                                    [
                                      _c("span", [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.payments.paymentMethod,
                                              expression:
                                                "payments.paymentMethod"
                                            }
                                          ],
                                          attrs: {
                                            type: "radio",
                                            name: "payment"
                                          },
                                          domProps: {
                                            value: payment.id,
                                            checked: _vm._q(
                                              _vm.payments.paymentMethod,
                                              payment.id
                                            )
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                _vm.$set(
                                                  _vm.payments,
                                                  "paymentMethod",
                                                  payment.id
                                                )
                                              },
                                              function($event) {
                                                _vm.changePaymentMethod(
                                                  _vm.payments.paymentMethod
                                                )
                                              }
                                            ]
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "payment-cart-column" },
                                    [_c("h5", [_vm._v(_vm._s(payment.title))])]
                                  ),
                                  _vm._v(" "),
                                  _vm.payments.paymentMethod === payment.id
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "change-payment-option"
                                        },
                                        [
                                          _vm._l(payment.gateway, function(
                                            gateway
                                          ) {
                                            return _c("div", [
                                              _c("ul", [
                                                _c("li", [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.payments.gateway,
                                                        expression:
                                                          "payments.gateway"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "radio",
                                                      name: "gateway"
                                                    },
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
                                                          _vm.changeGateway(
                                                            _vm.payments.gateway
                                                          )
                                                        }
                                                      ]
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    staticClass:
                                                      "fab fa-cc-mastercard"
                                                  }),
                                                  _vm._v(" "),
                                                  _c("strong", [
                                                    _vm._v(
                                                      _vm._s(gateway.title)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _vm.payments.gateway === 2
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "gateway-list",
                                                          class:
                                                            gateway.title +
                                                            "-list"
                                                        },
                                                        [
                                                          gateway.id === 2
                                                            ? _c(
                                                                "ul",
                                                                [
                                                                  !_vm.lodash.isEmpty(
                                                                    _vm.cardList
                                                                  )
                                                                    ? _c("p", [
                                                                        _vm._v(
                                                                          "Click on any\n                                                                    card to active"
                                                                        )
                                                                      ])
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.cardList,
                                                                    function(
                                                                      card
                                                                    ) {
                                                                      return _c(
                                                                        "li",
                                                                        [
                                                                          _c(
                                                                            "a",
                                                                            {
                                                                              staticClass:
                                                                                "card-no",
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
                                                                                  _c(
                                                                                    "strong",
                                                                                    [
                                                                                      _vm._v(
                                                                                        "Card number: (" +
                                                                                          _vm._s(
                                                                                            card.card_4_digit
                                                                                          ) +
                                                                                          ")"
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "a",
                                                                            {
                                                                              staticClass:
                                                                                "right",
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  _vm.editCard(
                                                                                    card
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Edit"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    }
                                                                  ),
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
                                                                              staticClass:
                                                                                "btn",
                                                                              on: {
                                                                                click:
                                                                                  _vm.addCard
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Add new"
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm.showCardForm
                                                                        ? _c(
                                                                            "div",
                                                                            {
                                                                              attrs: {
                                                                                id:
                                                                                  gateway.title
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "card-form",
                                                                                {
                                                                                  attrs: {
                                                                                    gateway: gateway
                                                                                  }
                                                                                }
                                                                              )
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
                                                _c("b", [
                                                  _vm._v(
                                                    "Please deposit the cash amount in this account no\n                                                    " +
                                                      _vm._s(
                                                        _vm.defaultValues
                                                          .deposit_bank_account_number
                                                      )
                                                  )
                                                ])
                                              ])
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    : _vm._e()
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "cart-column ship-details" },
                            [
                              _c("table", [
                                _c("tr", [
                                  _c("td", [_vm._v("Sub-Total :")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.orderDetails.currency) +
                                        "\n                                                " +
                                        _vm._s(
                                          parseFloat(
                                            _vm.orderDetails.total_price
                                          ).toFixed(2)
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("US Taxes :")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.orderDetails.currency) +
                                        " " +
                                        _vm._s(
                                          parseFloat(
                                            _vm.orderDetails.tax_usa
                                          ).toFixed(2)
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [
                                    _vm._v("International Shipping :")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.orderDetails.currency) +
                                        "\n                                                " +
                                        _vm._s(
                                          parseFloat(
                                            _vm.orderDetails.shipment_cost
                                          ).toFixed(2)
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [
                                    _vm._v("Local Customs and Taxes :")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.orderDetails.currency) +
                                        " " +
                                        _vm._s(
                                          parseFloat(
                                            _vm.orderDetails.tax_bd
                                          ).toFixed(2)
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Service Charge :")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.orderDetails.currency) +
                                        "\n                                                " +
                                        _vm._s(
                                          parseFloat(
                                            _vm.orderDetails.royalty_charge
                                          ).toFixed(2)
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [
                                    _vm._v("Payment gateway charge :")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm.payments.gateway === 1
                                      ? _c("strong", [
                                          _c("small", [_vm._v("2.5%")]),
                                          _vm._v(
                                            "\n                                                    (" +
                                              _vm._s(
                                                _vm.orderDetails.currency
                                              ) +
                                              " " +
                                              _vm._s(
                                                parseFloat(
                                                  _vm.paymentGateway
                                                ).toFixed(2)
                                              ) +
                                              ")\n                                                "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.payments.gateway === 2
                                      ? _c("strong", [
                                          _c("small", [
                                            _vm._v("2.9% + 30cent")
                                          ]),
                                          _vm._v(
                                            "\n                                                    (" +
                                              _vm._s(
                                                _vm.orderDetails.currency
                                              ) +
                                              " " +
                                              _vm._s(
                                                parseFloat(
                                                  _vm.paymentGateway
                                                ).toFixed(2)
                                              ) +
                                              ")\n                                                "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.payments.gateway === 3
                                      ? _c("strong", [
                                          _c("small", [_vm._v("3.5%")]),
                                          _vm._v(
                                            "\n                                                    (" +
                                              _vm._s(
                                                _vm.orderDetails.currency
                                              ) +
                                              " " +
                                              _vm._s(
                                                parseFloat(
                                                  _vm.paymentGateway
                                                ).toFixed(2)
                                              ) +
                                              ")\n                                                "
                                          )
                                        ])
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Grand Total :")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.orderDetails.currency) +
                                        "\n                                                " +
                                        _vm._s(
                                          (
                                            parseFloat(
                                              _vm.orderDetails.master_price
                                            ) + parseFloat(_vm.paymentGateway)
                                          ).toFixed(2)
                                        ) +
                                        "\n                                            "
                                    )
                                  ])
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn button-custom",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.submitOrderPayment($event)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "Submit\n                                    "
                              )
                            ]
                          )
                        ],
                        2
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3d5a63e", module.exports)
  }
}

/***/ }),

/***/ 1398:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.orderDetails
    ? _c("div", { staticClass: "order-details" }, [
        _c("div", { staticClass: "order-details-status" }, [
          _vm.orderDetails.status &&
          _vm.orderDetails.status.alias === "review-complete"
            ? _c("div", { staticClass: "modify-payment-option" }, [
                _c("p", [
                  _vm._v(
                    "\n                New weight of your products\n                "
                  ),
                  _vm._v("\n                is\n                "),
                  _c("span", [_vm._v(_vm._s(_vm.totalWeight) + " lb")]),
                  _vm._v(" and price is\n                "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.orderDetails.currency) +
                        _vm._s(_vm.orderDetails.total_price)
                    )
                  ]),
                  _vm._v(" .\n            ")
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal fade",
                    attrs: {
                      id: "extraPayment",
                      tabindex: "-1",
                      role: "dialog",
                      "aria-labelledby": "exampleModalLabel",
                      "aria-hidden": "true"
                    }
                  },
                  [_c("user-order-payment-method")],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "order-status-header" }, [
            _c("div", { staticClass: "status-header-column" }, [
              _c("ul", [
                _c("li", [
                  _vm._v("Ordered on "),
                  _c("strong", [_vm._v(_vm._s(_vm.orderDetails.order_date))])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Order "),
                  _c("strong", [
                    _vm._v("#" + _vm._s(_vm.orderDetails.order_number))
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Order Place Currency "),
                  _c("strong", [_vm._v(_vm._s(_vm.orderDetails.currency))])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "status-header-column" }, [
              _c(
                "button",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "User Invoice",
                          params: { orderId: _vm.$route.params.orderId }
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "fas fa-print" }),
                      _vm._v("Print Invoice\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "details-section" }, [
            _vm.orderDetails.address
              ? _c("div", { staticClass: "details-column" }, [
                  _c("h5", [_vm._v("Shipping Address")]),
                  _vm._v(" "),
                  _c("h6", [_vm._v(_vm._s(_vm.orderDetails.address.address))]),
                  _vm._v(" "),
                  _c("h6", [
                    _vm._v(_vm._s(_vm.orderDetails.address.address_2))
                  ]),
                  _vm._v(" "),
                  _c("h6", [
                    _vm._v(
                      _vm._s(_vm.orderDetails.address.state.title) +
                        ", " +
                        _vm._s(_vm.orderDetails.address.city) +
                        "\n                    "
                    ),
                    _vm.orderDetails.address.zip_code
                      ? _c("span", [
                          _vm._v(
                            "-" + _vm._s(_vm.orderDetails.address.zip_code)
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("h6", [
                    _vm._v(_vm._s(_vm.orderDetails.address.country.title))
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "details-column justify-content" }, [
              _vm.payment > 0
                ? _c("div", [
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.orderDetails.currency) +
                          " " +
                          _vm._s(_vm.payment.toFixed(2))
                      )
                    ]),
                    _vm._v("Paid\n                    "),
                    _vm.orderDetails.pay_by && _vm.orderDetails.pay_by.title
                      ? _c("span", [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.orderDetails.pay_by.title) +
                              "\n                    "
                          )
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "details-column" }, [
              _c("h5", [_vm._v("Order Summary")]),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm.orderDetails.total_price
                  ? _c("tr", [
                      _c("td", { staticClass: "left" }, [
                        _vm._v("Item(s) Subtotal")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "right" }, [
                        _vm._v(
                          _vm._s(_vm.orderDetails.currency) +
                            " " +
                            _vm._s(_vm.orderDetails.total_price)
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.orderDetails.shipment_cost
                  ? _c("tr", [
                      _c("td", { staticClass: "left" }, [
                        _vm._v("Shipping & Handling")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "right" }, [
                        _vm._v(
                          _vm._s(_vm.orderDetails.currency) +
                            " " +
                            _vm._s(_vm.orderDetails.shipment_cost)
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.orderDetails.tax_usa
                  ? _c("tr", [
                      _c("td", { staticClass: "left" }, [_vm._v("Total Tax")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "right" }, [
                        _vm._v(
                          _vm._s(_vm.orderDetails.currency) +
                            "\n                            " +
                            _vm._s(
                              _vm.orderDetails.tax_bd + _vm.orderDetails.tax_usa
                            ) +
                            "\n                        "
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.orderDetails.master_price
                  ? _c("tr", [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("td", { staticClass: "right" }, [
                        _c("strong", [
                          _vm._v(
                            _vm._s(_vm.orderDetails.currency) +
                              "\n                            " +
                              _vm._s(_vm.orderDetails.master_price)
                          )
                        ])
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "delivery-status" },
          [
            _vm.orderDetails.status
              ? _c("div", { staticClass: "delivery-status-header" }, [
                  _c("strong", [
                    _vm._v("Products delivered on mailing address")
                  ]),
                  _vm._v(" "),
                  _vm.orderDetails.status.alias === "cancel"
                    ? _c("h3", { staticClass: "label label-danger" }, [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(_vm._s(_vm.orderDetails.status.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.orderDetails.status.alias === "confirmed" ||
                  _vm.orderDetails.status.alias === "review-complete"
                    ? _c("h3", { staticClass: "label label-success" }, [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(_vm._s(_vm.orderDetails.status.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.orderDetails.status.alias === "pending-for-review"
                    ? _c("h3", { staticClass: "label label-warning" }, [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(_vm._s(_vm.orderDetails.status.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.orderDetails.status.alias === "delivered"
                    ? _c("h3", { staticClass: "label label-primary" }, [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(_vm._s(_vm.orderDetails.status.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.orderDetails.status.alias === "purchased"
                    ? _c("h3", { staticClass: "label label-info" }, [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(_vm._s(_vm.orderDetails.status.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.orderDetails.status.alias !== "purchased" &&
                  _vm.orderDetails.status.alias !== "confirmed" &&
                  _vm.orderDetails.status.alias !== "pending-for-review" &&
                  _vm.orderDetails.status.alias !== "delivered" &&
                  _vm.orderDetails.status.alias !== "review-complete" &&
                  _vm.orderDetails.status.alias !== "purchased"
                    ? _c("h3", { staticClass: "label label-default" }, [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(_vm._s(_vm.orderDetails.status.title))
                      ])
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.orderDetails.items, function(item) {
              return _c("div", { staticClass: "products-details" }, [
                _c("div", { staticClass: "single-products" }, [
                  _c("div", { staticClass: "products-image" }, [
                    item.imageUrl
                      ? _c("img", {
                          attrs: { src: item.imageUrl },
                          on: { error: _vm.onImageLoadFailure }
                        })
                      : _c("img", { attrs: { src: "/images/profile.png" } })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "products-title" }, [
                    item.title
                      ? _c("h5", [_vm._v(_vm._s(item.title))])
                      : _vm._e(),
                    _vm._v(" "),
                    item.store
                      ? _c("h6", [_vm._v("Sold by " + _vm._s(item.store))])
                      : _vm._e(),
                    _vm._v(" "),
                    item.prices && item.prices.quantity
                      ? _c("h6", [
                          _vm._v("Quantity " + _vm._s(item.prices.quantity))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    item.prices && item.prices
                      ? _c("h6", [
                          _vm._v(
                            "Price " +
                              _vm._s(_vm.orderDetails.currency) +
                              "\n                        " +
                              _vm._s(item.prices.item_price)
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    item.prices && item.prices.custom_price
                      ? _c("h6", [
                          _vm._v(
                            "Custom Amount " +
                              _vm._s(_vm.orderDetails.currency) +
                              "\n                        " +
                              _vm._s(item.prices.custom_price.custom_amount)
                          )
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "products-action" }, [
                  item.is_apply_insurance
                    ? _c("button", [
                        _vm._v("Insurance\n                    "),
                        item.insurance_amount > 0
                          ? _c("span", [
                              _vm._v(
                                " " +
                                  _vm._s(_vm.orderDetails.currency) +
                                  _vm._s(item.insurance_amount)
                              )
                            ])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.is_gift
                    ? _c("button", [_vm._v("You have a gift")])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("button", [_vm._v("Weight " + _vm._s(item.weight))])
                ])
              ])
            })
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "send-payment" }, [
      _c("p", [_vm._v("you can send modify payment")]),
      _vm._v(" "),
      _c(
        "button",
        { attrs: { "data-toggle": "modal", "data-target": "#extraPayment" } },
        [_vm._v("Pay Now")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "left" }, [
      _c("strong", [_vm._v("Grand Total")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58e1dec8", module.exports)
  }
}

/***/ })

});
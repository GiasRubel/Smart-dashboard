webpackJsonp([33],{

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1370)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1372)
/* template */
var __vue_template__ = __webpack_require__(1373)
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

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1371);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("34699b86", content, false, {});
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

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1372:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {};
    },

    computed: {
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        },
        payment: function payment() {
            var payment = 0;
            _.forEach(this.orderDetails.payments, function (value) {
                if (value.currency === 'BDT') {
                    payment += value.amount / value.conversion_rate;
                } else {
                    payment += value.amount;
                }
            });

            return payment;
        }
    },
    created: function created() {
        this.getOrderDetails();
    },

    methods: {
        getOrderDetails: function getOrderDetails() {
            var orderId = this.$route.params.orderId;
            this.$store.dispatch('actionOrderDetails', orderId);
        }
    }
});

/***/ }),

/***/ 1373:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.orderDetails
    ? _c("div", { staticClass: "order-details" }, [
        _c("div", { staticClass: "order-details-status" }, [
          _vm._m(0),
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
                  _vm._v("Order# " + _vm._s(_vm.orderDetails.order_number))
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
              _c("div", [
                _c("strong", [
                  _vm._v(
                    _vm._s(_vm.orderDetails.currency) +
                      " " +
                      _vm._s(_vm.payment.toFixed(2))
                  )
                ]),
                _vm._v("Paid\n                    "),
                _vm.orderDetails.pay_by &&
                _vm.orderDetails.pay_by.title === "Cash on delivery"
                  ? _c("span", [_vm._v("\n                        By Cash")])
                  : _vm._e(),
                _vm._v(" "),
                _vm.orderDetails.pay_by &&
                _vm.orderDetails.pay_by.title !== "Cash on delivery"
                  ? _c("span", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.orderDetails.pay_by.title) +
                          "\n                    "
                      )
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "details-column" }, [
              _c("h5", [_vm._v("Order Summary")]),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _c("tr", [
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
                ]),
                _vm._v(" "),
                _c("tr", [
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
                ]),
                _vm._v(" "),
                _c("tr", [
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
                ]),
                _vm._v(" "),
                _c("tr", [
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
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "delivery-status" },
          [
            _c("div", { staticClass: "delivery-status-header" }, [
              _c("strong", [_vm._v("Products delivered on mailing address")]),
              _vm._v(" "),
              _vm.orderDetails.status
                ? _c("button", [
                    _c("span", { staticClass: "fas fa-check" }),
                    _vm._v(
                      _vm._s(_vm.orderDetails.status.title) + "\n            "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm._l(_vm.orderDetails.items, function(item) {
              return _c("div", { staticClass: "products-details" }, [
                _c("div", { staticClass: "single-products" }, [
                  _c("div", { staticClass: "products-image" }, [
                    _c("img", { attrs: { src: item.imageUrl } })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "products-title" }, [
                    _c("h5", [_vm._v(_vm._s(item.title))]),
                    _vm._v(" "),
                    _c("h6", [_vm._v("Sold by " + _vm._s(item.store))]),
                    _vm._v(" "),
                    _c("h6", [
                      _vm._v(
                        "Price " +
                          _vm._s(_vm.orderDetails.currency) +
                          " " +
                          _vm._s(item.prices.item_price)
                      )
                    ]),
                    _vm._v(" "),
                    _c("h6", [
                      _vm._v(
                        "Custom Amount " +
                          _vm._s(_vm.orderDetails.currency) +
                          " " +
                          _vm._s(item.prices.custom_price.custom_amount)
                      )
                    ])
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
                                  "\n                        " +
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
    return _c("div", { staticClass: "notifications2" }, [
      _c("div", [_c("span", { staticClass: "fas fa-info" })]),
      _vm._v(" "),
      _c("div", [_c("p", [_vm._v("Notification message !")])]),
      _vm._v(" "),
      _c("div", [_c("span", { staticClass: "fas fa-times" })])
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
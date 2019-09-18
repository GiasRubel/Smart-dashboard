webpackJsonp([3],{

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1482)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1484)
/* template */
var __vue_template__ = __webpack_require__(1505)
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

/***/ 1482:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1483);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("34699b86", content, false, {});
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

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1484:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: G:/laragon/www/shopnshipbd/resources/js/components/user-dashboard/dashboard/UserOrderDetails.vue: Unexpected character '‘' (260:25)\n\n\u001b[0m \u001b[90m 258 | \u001b[39m\n \u001b[90m 259 | \u001b[39m        modalHide(e) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 260 | \u001b[39m            \u001b[33mEventBus\u001b[39m\u001b[33m.\u001b[39m$on(‘EVENT_NAME’\u001b[33m,\u001b[39m \u001b[36mfunction\u001b[39m (payLoad) {\n \u001b[90m     | \u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 261 | \u001b[39m            \u001b[33m...\u001b[39m\n \u001b[90m 262 | \u001b[39m            })\u001b[33m;\u001b[39m\n \u001b[90m 263 | \u001b[39m        }\u001b[0m\n");

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.orderDetails && !_vm.dashboardLoader
    ? _c("div", { staticClass: "order-details" }, [
        _c("div", { staticClass: "order-details-status" }, [
          (_vm.orderDetails.status &&
            _vm.orderDetails.status.alias === "review-complete") ||
          (_vm.orderDetails.status &&
            _vm.orderDetails.status.alias === "partial-payment-pending")
            ? _c(
                "div",
                { staticClass: "modify-payment-option" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.modalState
                    ? _c("user-order-payment-method", {
                        attrs: { id: "extraPayment" },
                        on: {
                          hide: function($event) {
                            _vm.modalHide($event)
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "order-status-header" }, [
            _c("div", { staticClass: "status-header-column" }, [
              _vm.orderDetails.status &&
              _vm.orderDetails.status.alias !== "pending-for-review" &&
              _vm.orderDetails.status.alias !== "cash-pending" &&
              _vm.orderDetails.status.alias !== "cancel" &&
              _vm.orderDetails.status.alias !== "pending" &&
              _vm.orderDetails.status.alias !== "review-complete"
                ? _c(
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
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-details-status" }, [
              _c("ul", [
                _vm.orderDetails && _vm.orderDetails.order_date
                  ? _c("li", [
                      _vm._v("Ordered on\n                        "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.orderDetails.order_date.date))
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Order "),
                  _c("strong", [
                    _vm._v("#" + _vm._s(_vm.orderDetails.order_number))
                  ])
                ]),
                _vm._v(" "),
                _vm.orderDetails.status &&
                _vm.orderDetails.status.alias !== "pending-for-review" &&
                _vm.orderDetails.status.alias !== "cash-pending" &&
                _vm.orderDetails.status.alias !== "cancel" &&
                _vm.orderDetails.status.alias !== "pending" &&
                _vm.orderDetails.status.alias !== "review-complete"
                  ? _c("li", [
                      _vm._v(
                        "Payment Gateway Charge\n                        "
                      ),
                      _c("strong", [
                        _vm._v("$ " + _vm._s(_vm.gatewayCharge.toFixed(2)))
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.orderDetails.is_cancelable
                  ? _c("li", { staticClass: "right" }, [
                      _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              _vm.cancelUrl(_vm.orderDetails.cancel_url)
                            }
                          }
                        },
                        [_vm._v("Cancel Order")]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "details-section" }, [
            _vm.orderDetails.address
              ? _c(
                  "div",
                  { staticClass: "details-column" },
                  [
                    _c("h5", [_vm._v("Shipping Address")]),
                    _vm._v(" "),
                    _c("h6", [
                      _vm._v(_vm._s(_vm.orderDetails.address.full_name))
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.orderDetails.address.phones, function(phone) {
                      return _c("h6", [_vm._v(_vm._s(phone.phone))])
                    }),
                    _vm._v(" "),
                    _c("h6", [
                      _vm._v(_vm._s(_vm.orderDetails.address.address))
                    ]),
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
                              " " + _vm._s(_vm.orderDetails.address.zip_code)
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("h6", [
                      _vm._v(_vm._s(_vm.orderDetails.address.country.title))
                    ])
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "details-column justify-content" }, [
              _vm.payment > 0
                ? _c("div", [
                    _c("strong", [
                      _vm._v("$ " + _vm._s(_vm.payment.toFixed(2)))
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
            _vm.orderDetails.status &&
            _vm.orderDetails.status.alias !== "pending-for-review"
              ? _c("div", { staticClass: "details-column" }, [
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
                              _vm._s(_vm.currency) +
                                " " +
                                _vm._s(_vm.orderDetails.total_price.toFixed(2))
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.orderDetails.tax_usa
                      ? _c("tr", [
                          _c("td", { staticClass: "left" }, [
                            _vm._v("Total Tax")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "right" }, [
                            _vm._v(
                              _vm._s(_vm.currency) +
                                "\n                            " +
                                _vm._s(
                                  (
                                    _vm.orderDetails.tax_bd +
                                    _vm.orderDetails.tax_usa
                                  ).toFixed(2)
                                ) +
                                "\n                        "
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
                              _vm._s(_vm.currency) +
                                " " +
                                _vm._s(
                                  _vm.orderDetails.shipment_cost.toFixed(2)
                                )
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.orderDetails.royalty_charge
                      ? _c("tr", [
                          _c("td", { staticClass: "left" }, [
                            _vm._v("Service Charge")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "right" }, [
                            _vm._v(
                              _vm._s(_vm.currency) +
                                "\n                            " +
                                _vm._s(
                                  _vm.orderDetails.royalty_charge.toFixed(2)
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
                            _vm.payments.paymentMethod === 2
                              ? _c("strong", [
                                  _vm._v(
                                    _vm._s(_vm.currency) +
                                      " " +
                                      _vm._s(
                                        _vm.orderDetails.master_price.toFixed()
                                      )
                                  )
                                ])
                              : _c("strong", [
                                  _vm._v(
                                    _vm._s(_vm.currency) +
                                      " " +
                                      _vm._s(
                                        _vm.orderDetails.master_price.toFixed(2)
                                      )
                                  )
                                ])
                          ])
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e()
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
                  _vm.orderDetails.status.alias === "pending-for-review" ||
                  _vm.orderDetails.status.alias === "cash-pending" ||
                  _vm.orderDetails.status.alias === "pending"
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
                  _vm.orderDetails.status.alias !== "cancel" &&
                  _vm.orderDetails.status.alias !== "confirmed" &&
                  _vm.orderDetails.status.alias !== "pending" &&
                  _vm.orderDetails.status.alias !== "pending-for-review" &&
                  _vm.orderDetails.status.alias !== "cash-pending" &&
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
                  _c("div", { staticClass: "products-image single-block" }, [
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
                      ? _c("h5", [
                          _c(
                            "a",
                            {
                              attrs: { href: _vm.checkUrlEbayAmazon(item.url) }
                            },
                            [_vm._v(_vm._s(item.title))]
                          )
                        ])
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
                              _vm._s(_vm.currency) +
                              "\n                        " +
                              _vm._s(item.prices.item_price.toFixed(2))
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    item.prices && item.prices.custom_price
                      ? _c("h6", [
                          _vm._v(
                            "Custom Amount " +
                              _vm._s(_vm.currency) +
                              "\n                        " +
                              _vm._s(
                                item.prices.custom_price.custom_amount.toFixed(
                                  2
                                )
                              )
                          )
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "products-action" }, [
                  item.is_apply_insurance
                    ? _c("p", [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v("Insurance\n                    "),
                        item.insurance_amount > 0
                          ? _c("span", [
                              _vm._v(
                                " " +
                                  _vm._s(_vm.currency) +
                                  _vm._s(item.insurance_amount.toFixed(2))
                              )
                            ])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.is_gift
                    ? _c("p", [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v("You have a gift")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.weight * item.prices.quantity > 0
                    ? _c("p", [
                        _c("span", { staticClass: "fas fa-check" }),
                        _vm._v(
                          "Weight " +
                            _vm._s(
                              _vm._f("convertedToKg")(
                                item.weight * item.prices.quantity
                              )
                            ) +
                            " kg"
                        )
                      ])
                    : _vm._e()
                ])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm.orderDetails.status &&
        _vm.orderDetails.status.alias === "cash-pending"
          ? _c(
              "div",
              { staticClass: "delivery-status" },
              [_c("user-money-recite")],
              1
            )
          : _vm._e()
      ])
    : _c("content-loader")
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "send-payment" }, [
      _c("p", [_vm._v("You can send modify payment")]),
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
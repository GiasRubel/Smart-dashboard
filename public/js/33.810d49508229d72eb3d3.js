webpackJsonp([33],{

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1434)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1436)
/* template */
var __vue_template__ = __webpack_require__(1437)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4fb18855"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserInvoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fb18855", Component.options)
  } else {
    hotAPI.reload("data-v-4fb18855", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1435);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("042fab5f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fb18855\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserInvoice.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fb18855\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserInvoice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1436:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            return this.$store.getters.getterOriginalOrderDetails;
        },
        currency: function currency() {
            return this.orderDetails.currency === 'USD' ? '$' : 'BDT';
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
    },
    filters: {
        limitString: function limitString(value) {
            if (!value) return '';
            var moreThan70 = value.length > 70 ? '...' : '';
            return value.substr(0, 70) + moreThan70;
        }
    }
});

/***/ }),

/***/ 1437:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "order-details" }, [
    _c("div", { staticClass: "order-header" }, [
      _c("div", { staticClass: "order-num" }, [
        _c("h4", [
          _vm._v("Invoice #" + _vm._s(_vm.orderDetails.purchase_invoice_number))
        ]),
        _vm._v(" "),
        _c("h5", [_vm._v("Invoice to")]),
        _vm._v(" "),
        _vm.orderDetails.address
          ? _c(
              "div",
              [
                _c("p", [_vm._v(_vm._s(_vm.orderDetails.address.full_name))]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.orderDetails.address.address))]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.orderDetails.address.address_2))]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(_vm.orderDetails.address.state.title) +
                      ", " +
                      _vm._s(_vm.orderDetails.address.city) +
                      "\n                    "
                  ),
                  _vm.orderDetails.address.zip_code
                    ? _c("span", [
                        _vm._v("-" + _vm._s(_vm.orderDetails.address.zip_code))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(_vm._s(_vm.orderDetails.address.country.title))
                ]),
                _vm._v(" "),
                _vm._l(_vm.orderDetails.address.phones, function(phone) {
                  return _c("p", [_vm._v("Phone : " + _vm._s(phone.phone))])
                })
              ],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "company-logo" }, [
        _vm.orderDetails && _vm.orderDetails.order_date
          ? _c("div", { staticClass: "order-date" }, [
              _c("strong", [_vm._v("Date : ")]),
              _c("span", [_vm._v(_vm._s(_vm.orderDetails.order_date.date))])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("img", { attrs: { src: "/images/logo/logo-color.png" } }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "payment-method" }, [
          _c("strong", [_vm._v("Paid")]),
          _vm._v(" "),
          _vm.orderDetails.pay_by && _vm.orderDetails.pay_by.title
            ? _c("span", [_vm._v(_vm._s(_vm.orderDetails.pay_by.title))])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "order-items" }, [
      _vm._m(3),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table table-striped" },
        [
          _vm._m(4),
          _vm._v(" "),
          _vm._l(_vm.orderDetails.items, function(item, key) {
            return _c("tr", { attrs: { index: key } }, [
              _c("td", [_vm._v(_vm._s(key + 1))]),
              _vm._v(" "),
              _c("td", { attrs: { colspan: "3" } }, [
                item.title
                  ? _c("strong", [
                      _vm._v(_vm._s(_vm._f("limitString")(item.title)))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "mobile-hide" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(item.prices.quantity) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "mobile-hide" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.currency) +
                    " " +
                    _vm._s(item.prices.insurance_amount) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "mobile-hide" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.currency) +
                    " " +
                    _vm._s(item.prices.gift_amount) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "mobile-hide" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.currency) +
                    " " +
                    _vm._s(item.prices.item_price) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.currency) +
                    " " +
                    _vm._s(
                      item.prices.quantity * item.prices.item_subtotal_price
                    ) +
                    "\n                "
                )
              ])
            ])
          }),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _vm.orderDetails.total_price
            ? _c("tr", { staticClass: "row-bg" }, [
                _c("td", {
                  staticClass: "mobile-hide",
                  attrs: { colspan: "2" }
                }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "3" } }, [_vm._v("Sub Total")]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }, [
                  _vm._v(
                    _vm._s(_vm.currency) +
                      " " +
                      _vm._s(_vm.orderDetails.total_price)
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.orderDetails.tax_usa
            ? _c("tr", { staticClass: "row-bg" }, [
                _c("td", {
                  staticClass: "mobile-hide",
                  attrs: { colspan: "2" }
                }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "3" } }, [_vm._v("Total Tax")]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }, [
                  _vm._v(
                    _vm._s(_vm.currency) +
                      " " +
                      _vm._s(_vm.orderDetails.tax_bd + _vm.orderDetails.tax_usa)
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.orderDetails.shipment_cost
            ? _c("tr", { staticClass: "row-bg" }, [
                _c("td", {
                  staticClass: "mobile-hide",
                  attrs: { colspan: "2" }
                }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "3" } }, [
                  _vm._v("Shipping Cost")
                ]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }, [
                  _vm._v(
                    _vm._s(_vm.currency) +
                      " " +
                      _vm._s(_vm.orderDetails.shipment_cost)
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.orderDetails.royalty_charge
            ? _c("tr", { staticClass: "row-bg" }, [
                _c("td", {
                  staticClass: "mobile-hide",
                  attrs: { colspan: "2" }
                }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "3" } }, [
                  _vm._v("Service Charge")
                ]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }, [
                  _vm._v(
                    _vm._s(_vm.currency) +
                      " " +
                      _vm._s(_vm.orderDetails.royalty_charge)
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.orderDetails.master_price
            ? _c("tr", { staticClass: "row-bg" }, [
                _c("td", {
                  staticClass: "mobile-hide",
                  attrs: { colspan: "2" }
                }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "3" } }, [_vm._v("Grand Total")]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "2" } }, [
                  _vm._v(
                    _vm._s(_vm.currency) +
                      " " +
                      _vm._s(_vm.orderDetails.master_price)
                  )
                ])
              ])
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "address-row" }, [
      _c("div", { staticClass: "address-item" }, [
        _c("span", { staticClass: "fas fa-map-marker-alt" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "address-item" }, [
        _c("p", [
          _vm._v("House 79, Shah-Makhdum Avenue,"),
          _c("br"),
          _vm._v(" Flat No-A4, Sector-12, Uttara, Dhaka-1230")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "address-row" }, [
      _c("div", { staticClass: "address-item" }, [
        _c("span", { staticClass: "fas fa-phone-volume" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "address-item" }, [
        _c("p", [_vm._v("096-17707707")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "address-row" }, [
      _c("div", { staticClass: "address-item" }, [
        _c("span", { staticClass: "fas fa-envelope" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "address-item" }, [
        _c("p", [_vm._v("info@shopnshipbd.com")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "order-title" }, [
      _c("h5", [_vm._v("Order Items")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Sl.")]),
      _vm._v(" "),
      _c("th", { attrs: { colspan: "3" } }, [_vm._v("Title")]),
      _vm._v(" "),
      _c("th", { staticClass: "mobile-hide" }, [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", { staticClass: "mobile-hide" }, [_vm._v("Insurance")]),
      _vm._v(" "),
      _c("th", { staticClass: "mobile-hide" }, [_vm._v("Gift")]),
      _vm._v(" "),
      _c("th", { staticClass: "mobile-hide" }, [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Sub Total")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "9" } })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fb18855", module.exports)
  }
}

/***/ })

});
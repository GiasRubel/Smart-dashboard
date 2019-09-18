webpackJsonp([30],{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1282)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1284)
/* template */
var __vue_template__ = __webpack_require__(1285)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05279986"
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
Component.options.__file = "resources/js/pages/common/PaymentStatus.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05279986", Component.options)
  } else {
    hotAPI.reload("data-v-05279986", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1283);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0d8e1b80", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05279986\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaymentStatus.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05279986\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaymentStatus.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.payment-notification[data-v-05279986] {\n    margin: 5% 10%;\n    width: auto;\n}\n.payment-notification .alert-success[data-v-05279986] {\n    background: #00bf8f;\n    color: #fff;\n    text-align: center;\n}\n.payment-notification .alert-danger[data-v-05279986] {\n    text-align: center;\n}\n.payment-notification .alert-success button[data-v-05279986] {\n    color: #fff;\n    opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1284:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            message: this.$route.query && this.$route.query.message,
            status: this.$route.query && this.$route.query.status,
            cash: this.$route.query && this.$route.query.cash
        };
    },

    computed: {
        authenticated: function authenticated() {
            return this.$store.state.login.authenticated;
        }
    }
});

/***/ }),

/***/ 1285:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "payment-status" }, [
    _vm.status === "fail" || _vm.status === "cancel"
      ? _c("h3", [
          _vm._v(
            "Due to some unavoidable circumstances, your payment has been\n        canceled."
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.status === "success" && !_vm.cash
      ? _c("h3", [
          _vm._v(
            "Your payment has been successfully completed. You will get every shipping status\n        notification from us of your products."
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "payment-notification" },
      [
        _vm.status === "success"
          ? _c("div", { staticClass: "alert alert-success" }, [
              _c("strong", [_vm._v(_vm._s(_vm.message))])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.status === "review"
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _c("strong", [_vm._v(_vm._s(_vm.message))])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.status === "fail" || _vm.status === "cancel"
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _c("strong", [_vm._v(_vm._s(_vm.message))])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Your Order Number is: #" + _vm._s(this.$route.query.order_number)
          )
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          {
            attrs: {
              to: {
                name: "User Order Details",
                params: {
                  userId: _vm.authenticated.userId,
                  orderId: this.$route.query.order_id
                }
              }
            }
          },
          [_c("button", { attrs: { target: "" } }, [_vm._v("View Details")])]
        ),
        _vm._v(" "),
        _c(
          "h4",
          [
            _vm._v("Thanks for shopping from\n            "),
            _c("router-link", { attrs: { to: "/" } }, [
              _vm._v("ShopNShipBD.com")
            ])
          ],
          1
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-05279986", module.exports)
  }
}

/***/ })

});
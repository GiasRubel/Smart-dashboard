webpackJsonp([64],{

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1317)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1319)
/* template */
var __vue_template__ = __webpack_require__(1320)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10a4df6f"
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
Component.options.__file = "resources/js/pages/footer-pages/OrderConfirmation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10a4df6f", Component.options)
  } else {
    hotAPI.reload("data-v-10a4df6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1318);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6bb3a04e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10a4df6f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderConfirmation.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10a4df6f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderConfirmation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-10a4df6f] {\n    padding: 20px 0;\n}\nh1[data-v-10a4df6f] {\n    text-transform: uppercase;\n}\np[data-v-10a4df6f] {\n    padding: 5px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1319:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "footer-content" }, [
        _c("h3", [_vm._v("Order Confirmation:")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            At ShopnShipBD, we've employed our best talents and expertise to ensure a secure, smooth and pleasant\n            shopping experience for our customers. We work around the clock to bring you the very best items from\n            the world largest stores at the lowest possible prices. No hassles, guaranteed!\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            For orders on ShopnShipBD, unlike other services, we have a deep integration with world largest shopping\n            sites that allows you to freely browse and build your shopping cart on the site. When you're done, all\n            you have to do is checkout and our web-application automatically calculates all the additional costs and\n            clearly presents them to you. These include any shipping, customs, special tax, and additional fees\n            associated with your order. Nothing is hidden, the price you see is the price you pay. No questions\n            asked.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Due to the fact that there are millions of merchants from all over the world, there will be a few cases\n            when ShopnShipBD's web-application will not get all the details it requires to calculate the fees\n            associated with a particular order. This is why we have a team waiting to review your shopping cart and\n            get back to you with an accurate and quick evaluation of what it would cost to import the item to you.\n            Items that require such attention will be highlighted and presented clearly to you on the checkout page.\n            You can choose to confirm or cancel your order after it is reviewed.\n        "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-10a4df6f", module.exports)
  }
}

/***/ })

});
webpackJsonp([21],{

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1270)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1272)
/* template */
var __vue_template__ = __webpack_require__(1273)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08523eea"
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
Component.options.__file = "resources/js/pages/footer-pages/HowItWorks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08523eea", Component.options)
  } else {
    hotAPI.reload("data-v-08523eea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1271);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("79182a7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08523eea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HowItWorks.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08523eea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HowItWorks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-08523eea] {\n    padding: 20px 0;\n}\nh1[data-v-08523eea], h4[data-v-08523eea] {\n    text-transform: uppercase;\n}\nol[data-v-08523eea] {\n    counter-reset: my-awesome-counter;\n    list-style: none;\n    padding-left: 40px;\n}\nol li[data-v-08523eea] {\n    margin: 20px 0;\n    counter-increment: my-awesome-counter;\n    position: relative;\n}\nol li[data-v-08523eea]::before {\n    content: counter(my-awesome-counter);\n    color: #fcd000;\n    font-size: 1.5rem;\n    font-weight: bold;\n    position: absolute;\n    --size: 32px;\n    left: calc(-1 * var(--size) - 10px);\n    line-height: var(--size);\n    width: var(--size);\n    height: var(--size);\n    top: 0;\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n    background: black;\n    border-radius: 50%;\n    text-align: center;\n    -webkit-box-shadow: 1px 1px 0 #999;\n            box-shadow: 1px 1px 0 #999;\n}\n", ""]);

// exports


/***/ }),

/***/ 1272:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 1273:
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
        _c("h3", [_vm._v("How it works ?")]),
        _vm._v(" "),
        _c("p", { staticClass: "highlighted-content" }, [
          _vm._v(
            "\n            Making your purchase through ShopnShipBD is really simple and user friendly, just follow the following\n            instructions:\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("Start Your Search on ShopnShipBD")]),
            _c("br"),
            _vm._v(
              "\n                Go to ShopnShipBD.com, select your favorite index (Amazon, EBay or Others) and enter the name\n                of the item you'd like to order in the search box provided on the homepage and hit the\n                “Search” button. If you'd like to freely surf your favorite shopping site. If you select Amazon,\n                simply just enter the\n                name of the item or Amazon url in the search box and hit the “Search” button. If you select EBay,\n                enter the name of the item or eBayurl in the search box and hit the “Search” button. For “Others”,\n                you can enter any product url from any international website in the search box, after that you can\n                customize your quantity as well as put some instructions if you have any and then hit the “Submit”\n                button. Remember that you can add as many as website url clicking on (+) button. From “Others”\n                option, you can buy products from any website through us.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "Fill up your shopping cart as you normally would & when done hit the checkout button"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                Once you are on the shopping site, you'll see that ShopnShipBD's top bar has followed you there. Now\n                you can search and shop for all of the items that you would like to purchase. When you're done, just\n                click the ShopnShipBD Checkout button on the top bar.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Enter your details & place your order")]),
            _c("br"),
            _vm._v(
              '\n                On the Checkout page, select your payment method, and other order related details and click the\n                "Place My Order" button. At this point, you\'ll receive an e-mail or SMS confirmation with further\n                details concerning your payment.\n            '
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Choose your payment Option")]),
            _c("br"),
            _vm._v(
              "\n                Currently Credit Card payments is the only available payment method in our country, ShopnShipBD's\n                team is working on providing further options soon.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Get your stuff! DONE!")]),
            _c("br"),
            _vm._v(
              "\n                If your items ship from within the United States, then you’ll receive your goods in about 9-14\n                business days from the time of payment. If your item ships from outside the United States, it will\n                take more time to reach you. You'll receive your items at the address you provided to us.\n            "
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-08523eea", module.exports)
  }
}

/***/ })

});
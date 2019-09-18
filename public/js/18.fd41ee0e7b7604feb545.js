webpackJsonp([18],{

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1312)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1314)
/* template */
var __vue_template__ = __webpack_require__(1315)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58f3f226"
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
Component.options.__file = "resources/js/pages/footer-pages/PrivacyPolicy.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58f3f226", Component.options)
  } else {
    hotAPI.reload("data-v-58f3f226", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("024b6a7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58f3f226\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrivacyPolicy.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58f3f226\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrivacyPolicy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-58f3f226] {\n    padding: 20px 0;\n}\nh1[data-v-58f3f226], h4[data-v-58f3f226] {\n    text-transform: uppercase;\n}\np[data-v-58f3f226] {\n}\n", ""]);

// exports


/***/ }),

/***/ 1314:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 1315:
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
        _c("h3", [_vm._v("Privacy Policy:")]),
        _vm._v(" "),
        _c("h4", [_vm._v("Personal data")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Your personally identifiable data (first name, last name, and email) are processed by ShopnShipBD. Your\n            data are processed for the purpose of administering your membership of and process your orders on the\n            ShopnShipBD website and for direct marketing. ShopnShipBD will use your personal data only for the\n            purposes indicated above.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Subject to the above and except to the extent that communications of personal data to companies whose\n            intervention as data processors, acting on behalf and under the sole control of ShopnShipBD, is required\n            to accomplish the purposes indicated above, ShopnShipBD will not disclose, sell, rent or exchange such\n            personal data to any other organization or entity, unless you are first notified and expressly agreed\n            with it, or as otherwise required by law.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            We draw your attention to the fact that you have the right to access and restrict your data and, where\n            appropriate, request rectification of any erroneous data relating to you. You may furthermore, at any\n            moment, object by means of a simple request and free of charge, to the future processing of personal\n            data relating to you for the purpose of direct marketing. These rights may be exercised by sending an\n            e-mail regarding any questions you may have to shipnshop.2018@gmail.com, or by ordinary mail at the\n            aforementioned address.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            The ShopnShipBD website may contain links to other websites not owned or operated by ShopnShipBD. Please\n            be aware that ShopnShipBD is not responsible for the privacy practices of such websites and that this\n            privacy policy applies solely to data collected by the ShopnShipBD website.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Cookies and action tags")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            We also collect non-personally identifiable information passively using "cookies" and "action\n            tags"."Cookies" are small text files that are placed on your computer in order to identify your web\n            browser and the activities of your computer on the ShopnShipBD website and other websites. We may use\n            cookies to allow us to statistically monitor how you are using the ShopnShipBD website to help us\n            improve our online offerings, or to determine the popularity of certain content. We furthermore send a\n            "session cookie" to your computer when you log in to the ShopnShipBD website. These session cookies\n            allow us to recognize you if you visit multiple pages during the same browser session, without needing\n            to re-enter your login information multiple times. Once you log out or close your browser, these session\n            cookies are deleted. Although most browsers are initially set to accept cookies, you may reset your\n            browser to notify you when you receive a cookie or to reject cookies generally. Most browsers offer\n            instructions on how to do so in the "Help" section of the toolbar. Please be aware that if you decline\n            the use of cookies you will be unable to login to the ShopnShipBD website.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            "Action tags" also known as web beacons or gif tags, are a web technology used to help track website\n            usage information, such as how many times a specific page has been viewed. Action tags are invisible to\n            you, and any portion of the ShopnShipBD Website, including advertisements, or email sent on our behalf,\n            may contain action tags. We may select and use from time to time different third parties to track\n            website usage through action tags on the ShopnShipBD Website.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            By using cookies and action tags together, we are able to gain valuable information to improve the\n            ShopnShipBD website and online offerings and measure the effectiveness of the ShopnShipBD advertising\n            and marketing campaigns.\n        "
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
    require("vue-hot-reload-api")      .rerender("data-v-58f3f226", module.exports)
  }
}

/***/ })

});
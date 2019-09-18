webpackJsonp([29],{

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1341)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1343)
/* template */
var __vue_template__ = __webpack_require__(1344)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60cc1f9c"
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
Component.options.__file = "resources/js/pages/common/ProhibitedItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60cc1f9c", Component.options)
  } else {
    hotAPI.reload("data-v-60cc1f9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1342);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("65cdbeb0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60cc1f9c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProhibitedItem.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60cc1f9c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProhibitedItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1342:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding G:\\laragon\\www\\shopnshipbd\\node_modules\\node-sass\\vendor\\win32-x64-64\\binding.node\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 10.x\n\nFound bindings for the following environments:\n  - Windows 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (G:\\laragon\\www\\shopnshipbd\\node_modules\\node-sass\\lib\\binding.js:15:13)\n    at Object.<anonymous> (G:\\laragon\\www\\shopnshipbd\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.sassLoader (G:\\laragon\\www\\shopnshipbd\\node_modules\\sass-loader\\lib\\loader.js:46:72)");

/***/ }),

/***/ 1343:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {
        this.countDown(20, 'status');
    },

    methods: {
        historyBack: function historyBack() {
            if (this.$route.query.redirect) {
                location.replace(this.$route.query.redirect);
            }
            history.back(-2);
        },
        countDown: function countDown(secs, elem) {
            var _this = this;

            var element = document.getElementById(elem);
            element.innerHTML = "You'll be redirected back automatically in " + secs + " seconds, or just";

            if (secs < 1) {
                clearTimeout(timer);
                if (this.$route.query.redirect) {
                    location.replace(this.$route.query.redirect);
                }
                history.back(-2);
            }

            secs--;
            var timer = setTimeout(function () {
                _this.countDown(secs, elem);
            }, 2000);
        }
    }
});

/***/ }),

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "prohibited-item-section" }, [
    _c("div", { staticClass: "restricted-notification" }, [
      _c("span", { staticClass: "fas fa-exclamation-triangle" }),
      _vm._v(" "),
      _c("h3", [_vm._v("We hope you're having fun shopping with us")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "When you place an order, it's very important to check the list prohibited items. Prohibited item can be\n            confiscated through the custom of your desired shipping country."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", { attrs: { id: "status" } }),
        _vm._v(" "),
        _c("button", { on: { click: _vm.historyBack } }, [
          _vm._v("Back to Shopping")
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
    require("vue-hot-reload-api")      .rerender("data-v-60cc1f9c", module.exports)
  }
}

/***/ })

});
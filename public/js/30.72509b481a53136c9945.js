webpackJsonp([30],{

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1385)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1387)
/* template */
var __vue_template__ = __webpack_require__(1388)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72989fac"
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
Component.options.__file = "resources/js/components/user-dashboard/notification/UserNotificationDetails.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72989fac", Component.options)
  } else {
    hotAPI.reload("data-v-72989fac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1385:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1386);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2a553b48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72989fac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserNotificationDetails.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72989fac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserNotificationDetails.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
//
//
//
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
        notification: function notification() {
            var details = this.$store.getters.getterNotificationDetails;
            var createdTime = __WEBPACK_IMPORTED_MODULE_0_moment___default.a.utc(details.created_at).local().format('YYYY-MM-DD HH:mm:ss');
            details.created_at = __WEBPACK_IMPORTED_MODULE_0_moment___default()(createdTime).startOf('hour').fromNow();

            return details;
        }
    },
    created: function created() {
        this.callNotificationDetails();
    },

    methods: {
        callNotificationDetails: function callNotificationDetails() {
            this.$store.dispatch('actionNotificationDetails', this.$route.params.detailId);
        }
    }
});

/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.notification && _vm.notification.data
    ? _c("div", [
        _c(
          "div",
          { staticClass: "notify-details" },
          [
            _c("h4", {
              domProps: { innerHTML: _vm._s(_vm.notification.data.message) }
            }),
            _vm._v(" "),
            _vm.notification.data.url && _vm.notification.data.url_title
              ? _c(
                  "router-link",
                  { attrs: { to: _vm.notification.data.url } },
                  [
                    _vm._v(
                      "\n            " + _vm._s(_vm.notification.data.url_title)
                    ),
                    _c("span", { staticClass: "fas fa-arrow-right" })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("p", [
              _vm._v("Order Placed By: "),
              _c("span", [_vm._v(_vm._s(_vm.notification.data.name))])
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v("Notify at: "),
              _c("span", [_vm._v(_vm._s(_vm.notification.created_at))])
            ])
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72989fac", module.exports)
  }
}

/***/ })

});
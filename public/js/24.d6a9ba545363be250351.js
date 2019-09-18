webpackJsonp([24],{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1291)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1293)
/* template */
var __vue_template__ = __webpack_require__(1294)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bcf6b6c"
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
Component.options.__file = "resources/js/pages/footer-pages/Contact.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bcf6b6c", Component.options)
  } else {
    hotAPI.reload("data-v-3bcf6b6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1292);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2657f1cc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf6b6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf6b6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1293:
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 1294:
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
        _c("h3", [_vm._v("Contact")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-5" }, [
            _c("p", [
              _vm._v("Contact us and we'll get back to you within 24 hours.")
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "glyphicon glyphicon-map-marker" }),
              _vm._v(
                "\n                    House 79, Shah-Makhdum Avenue, Flat No-A4, Sector-12, Uttara, Dhaka-1230\n                "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "glyphicon glyphicon-phone" }),
              _vm._v(" 096-17707707\n                ")
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "glyphicon glyphicon-envelope" }),
              _vm._v(" info@shopnshipbd.com\n                ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-7 slideanim" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6 form-group" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    id: "name",
                    name: "name",
                    placeholder: "Name",
                    type: "text",
                    required: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6 form-group" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    id: "email",
                    name: "email",
                    placeholder: "Email",
                    type: "email",
                    required: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6 form-group" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    id: "phone",
                    name: "phone",
                    placeholder: "Phone Number",
                    type: "number",
                    required: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6 form-group" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    id: "address",
                    name: "address",
                    placeholder: "Type Your Address",
                    type: "text",
                    required: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("textarea", {
              staticClass: "form-control",
              attrs: {
                id: "message",
                name: "message",
                placeholder: "Type Your Message",
                rows: "5"
              }
            }),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12 form-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default pull-right",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Send")]
                )
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3bcf6b6c", module.exports)
  }
}

/***/ })

});
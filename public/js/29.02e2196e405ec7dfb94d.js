webpackJsonp([29],{

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1331)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1333)
/* template */
var __vue_template__ = __webpack_require__(1334)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-96dd7d22"
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
Component.options.__file = "resources/js/pages/common/auth/EmailNotFound.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96dd7d22", Component.options)
  } else {
    hotAPI.reload("data-v-96dd7d22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1332);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4dab1cce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-96dd7d22\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EmailNotFound.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-96dd7d22\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EmailNotFound.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.btn[data-v-96dd7d22] {\n    margin: 56px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_axios_service__ = __webpack_require__(31);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vee_validate__["b" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            email: '',
            emailNotFoundError: '',
            emailNotFoundLoading: false,
            userData: {},
            redirectToThisRoute: ''
        };
    },

    methods: {
        submitEmailNotFoundForm: function submitEmailNotFoundForm() {
            var _this = this;

            var emailNotFound = {
                email: this.email,
                token: this.$route.params.token
            };

            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.emailNotFoundLoading) {
                    _this.emailNotFoundLoading = true;
                    __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].setEmailInProvider, emailNotFound).then(function (response) {
                        var data = JSON.parse('{"' + decodeURI(response.data).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                        _this.saveData(data);
                    });
                }
            });
        },
        saveData: function saveData(data) {
            this.redirectToThisRoute = this.$route.path === '/cart' ? '/cart' : this.$route.query.from ? this.$route.query.from : '/';
            console.log(data);
            this.userData = {
                userId: data.id,
                username: data.name,
                email: data.email,
                isEmailVerify: data.is_email_verify,
                isBrowserVerify: data.is_browser_verify,
                mobile: data.mobile,
                redirect: this.redirectToThisRoute,
                token: data.token,
                verify: true
            };

            if (this.userData.token) {
                var currentPopupMenu = window.self;
                window.opener.postMessage({ authUser: this.userData, redirect: this.redirectToThisRoute }, "*");
                currentPopupMenu.close();
            }
        },
        beforeRouteEnter: function beforeRouteEnter(to, from, next) {
            if (from.path === '/cart' && !to.query.from) to.query.from = '/cart';
            next();
        }
    }
});

/***/ }),

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.emailNotFoundError
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("strong", [_vm._v(_vm._s(_vm.emailNotFoundError))])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitEmailNotFoundForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group col-md-8" }, [
          _c("h3", [_vm._v("Enter Your Email Address")]),
          _vm._v(" "),
          _c(
            "div",
            { class: { "has-error": _vm.errors.has("emailOrPhone") } },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "form-control",
                class: {
                  input: true,
                  "has-error": _vm.errors.has("emailOrPhone")
                },
                attrs: {
                  type: "text",
                  placeholder: "Enter Email",
                  name: "emailOrPhone",
                  id: "emailOrPhone",
                  "data-vv-as": "email",
                  "data-vv-validate-on": "blur"
                },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "help-block error text-danger" }, [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("emailOrPhone"),
                        expression: "errors.has('emailOrPhone')"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.errors.first("emailOrPhone")))]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [
              _vm._v("Submit\n                "),
              _vm.emailNotFoundLoading
                ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                : _vm._e()
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-96dd7d22", module.exports)
  }
}

/***/ })

});
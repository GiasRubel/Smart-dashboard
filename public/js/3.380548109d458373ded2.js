webpackJsonp([3],{

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1431)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1433)
/* template */
var __vue_template__ = __webpack_require__(1454)
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

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1213)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1215)
/* template */
var __vue_template__ = __webpack_require__(1216)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b598252"
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
Component.options.__file = "resources/js/components/common/content-loader.js.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b598252", Component.options)
  } else {
    hotAPI.reload("data-v-5b598252", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("094fb048", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b598252\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./content-loader.js.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b598252\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./content-loader.js.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.cssload-spin-box[data-v-5b598252] {\n    position: absolute;\n    margin: 20% auto;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 15px;\n    height: 15px;\n    z-index: 9999;\n    border-radius: 100%;\n    box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -o-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -ms-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -webkit-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    -moz-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n    animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -o-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -ms-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -webkit-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n    -moz-animation: cssload-spin-data-v-5b598252 ease infinite 4.6s;\n}\n@keyframes cssload-spin-data-v-5b598252 {\n0%,\n    100% {\n        -webkit-box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n                box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n}\n25% {\n        -webkit-box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n                box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n}\n50% {\n        -webkit-box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n                box-shadow: 15px 15px rgb(228, 66, 92), -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230);\n}\n75% {\n        -webkit-box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n                box-shadow: -15px 15px rgb(68, 179, 230), -15px -15px rgb(228, 66, 92), 15px -15px rgb(68, 179, 230), 15px 15px rgb(228, 66, 92);\n}\n}\n@-webkit-keyframes cssload-spin-data-v-5b598252 {\n0%,\n    100% {\n        -webkit-box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n                box-shadow: 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223);\n}\n25% {\n        -webkit-box-shadow: -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73);\n                box-shadow: -15px 15px rgb(223,223,223), -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73);\n}\n50% {\n        -webkit-box-shadow: -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223);\n                box-shadow: -15px -15px rgb(79,77,73), 15px -15px rgb(223,223,223), 15px 15px rgb(79,77,73), -15px 15px rgb(223,223,223);\n}\n75% {\n        -webkit-box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n                box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cssload-spin-box" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b598252", module.exports)
  }
}

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1227)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1229)
/* template */
var __vue_template__ = __webpack_require__(1230)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-746884fc"
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
Component.options.__file = "resources/js/components/common/InfoNotification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-746884fc", Component.options)
  } else {
    hotAPI.reload("data-v-746884fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1228);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("36fb0698", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-746884fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoNotification.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-746884fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoNotification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1229:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['msg']
});

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "alert notifications2" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", [_c("p", [_vm._v(_vm._s(_vm.msg))])]),
    _vm._v(" "),
    _c("div")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("span", { staticClass: "fas fa-info" })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-746884fc", module.exports)
  }
}

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1246)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1248)
/* template */
var __vue_template__ = __webpack_require__(1249)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17cad468"
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
Component.options.__file = "resources/js/components/cart/CardForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17cad468", Component.options)
  } else {
    hotAPI.reload("data-v-17cad468", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1243)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1245)
/* template */
var __vue_template__ = __webpack_require__(1250)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-977af2ba"
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
Component.options.__file = "resources/js/components/common/CommonPaymentMethod.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-977af2ba", Component.options)
  } else {
    hotAPI.reload("data-v-977af2ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c70664de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-977af2ba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommonPaymentMethod.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-977af2ba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommonPaymentMethod.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.gateway-list ul li a span[data-v-977af2ba] {\n    color: #ccc !important;\n}\n.gateway-list ul li a span.green[data-v-977af2ba] {\n    color: #44b3e6 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(363);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        cardForm: __WEBPACK_IMPORTED_MODULE_4__components_cart_CardForm___default.a
    },
    data: function data() {
        return {
            paymentMethods: {},
            cardDetails: {},
            lodash: _
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapGetters */])({
        showCardForm: "showCardForm",
        cardList: "getCardList",
        payments: "getterPayments",
        defaultValues: __WEBPACK_IMPORTED_MODULE_5__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]
    })),
    created: function created() {
        this.getPaymentMethod();
        this.stripeCardList(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].stripeCardList);
        this.payments.gateway = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].CURRENTINFO && __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].CURRENTINFO.country_name === 'Bangladesh' ? 1 : 2;
    },

    methods: {
        getPaymentMethod: function getPaymentMethod() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].paymentMethodApi).then(function (response) {
                if (response.data) {
                    _this.paymentMethods = response.data;
                    _this.$store.dispatch('actionSetPaymentMethod', { paymentMethodId: 1, gatewayId: _this.payments.gateway });
                    _this.paymentMethods.forEach(function (value) {
                        if (value.is_online) _this.payments.paymentMethod = value.id;
                    });
                }
            }).catch(function (error) {});
        },
        stripeCardList: function stripeCardList(cardDetailsLink) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].getData(cardDetailsLink).then(function (response) {
                if (response.data.length) {
                    _this2.$store.dispatch('actionCardList', response.data);
                    _this2.$store.dispatch('openCardForm', false);
                } else {
                    _this2.$store.dispatch('openCardForm', true);
                }
            }).catch(function (error) {});
        },
        addCard: function addCard() {
            this.$store.dispatch('cardPaymentForm', {});
            this.$store.dispatch('openCardForm', true);
        },
        editCard: function editCard(card) {
            this.$store.dispatch('getCardDetailsLink', card);
            this.$store.dispatch('openCardForm', true);
        },
        activeCard: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(cardId) {
                var _this3 = this;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].patchData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].card + 'active/' + cardId, cardId).then(function (response) {
                                    if (response.data) {
                                        _this3.$awn.success(response.data.message);
                                        _this3.$store.dispatch('updateCardField', {
                                            id: response.data.id,
                                            field: 'is_active',
                                            value: true
                                        });
                                    }
                                });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function activeCard(_x) {
                return _ref.apply(this, arguments);
            }

            return activeCard;
        }(),
        changePaymentMethod: function changePaymentMethod(paymentMethodID) {
            if (paymentMethodID === 2) {
                this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_5__store_types__["_0" /* SET_BASE_CURRENCY */], 'BDT');
            }

            this.$store.dispatch('setPaymentMethodId', paymentMethodID);
        },
        changeGateway: function changeGateway(gatewayID) {
            var currency = gatewayID === 1 || gatewayID === 3 ? 'BDT' : 'USD';
            this.$store.dispatch('setGatewayId', gatewayID);
            this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_5__store_types__["_0" /* SET_BASE_CURRENCY */], currency);
        }
    }
});

/***/ }),

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5a28ad7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17cad468\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17cad468\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card-form span[data-v-17cad468] {\n  color: red !important;\n}\n.cart-forms .payment-cart .change-payment-option ul li i[data-v-17cad468] {\n  padding-left: 0;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_axios_service__ = __webpack_require__(30);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['gateway'],
    data: function data() {
        return {
            cardPaymentError: {},
            showPaymentList: false,
            cardAddLoading: false,
            errorMessage: '',
            cardYear: '',
            cardMonth: '',
            currentMonth: new Date().getMonth() + 1,
            months: []
        };
    },

    computed: {
        cardDetailsData: function cardDetailsData() {
            return this.$store.getters.card;
        },
        cardPayment: function cardPayment() {
            return this.$store.getters.cardPayment;
        },
        yearList: function yearList() {
            var years = [];
            var currentYear = new Date().getFullYear();
            for (var i = currentYear; i <= currentYear + 10; i++) {
                years.push(i);
            }

            return years;
        }
    },
    created: function created() {
        if (this.cardDetailsData.details_link) {
            this.getCardDetails(this.cardDetailsData.details_link);
        }

        this.monthList();
    },

    methods: {
        submitCard: function submitCard(gatewayID) {
            var _this = this;

            this.cardPayment.expire_date = this.cardYear + '-' + this.cardMonth;
            this.cardPayment.gateway_id = gatewayID;
            var message = this.cardDetailsData ? 'Card Updated' : 'Card Added';
            var formSubmitCallback = function formSubmitCallback(response) {
                if (response.data.status === true && response.data.card) {
                    _this.$store.dispatch('cardPaymentForm', {});
                    _this.$store.dispatch('addUpdateCard', response.data.card);
                    _this.$awn.success(message);
                    _this.$store.dispatch('openCardForm', false);
                    _this.$store.dispatch('getCardDetailsLink', {});
                    _this.cardAddLoading = false;
                }
                if (!response.data.status) {
                    _this.$store.dispatch('cardPaymentForm', {});
                    _this.errorMessage = response.data.message;
                    _this.$store.dispatch('openCardForm', true);
                    _this.$store.dispatch('getCardDetailsLink', {});
                    _this.cardAddLoading = false;
                }
            };
            var formErrorCallback = function formErrorCallback(error) {
                if (error) {
                    _this.cardPaymentError = error.response.data.errors;
                    _this.$store.dispatch('openCardForm', true);
                    _this.cardAddLoading = false;
                }
            };
            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.cardAddLoading) {
                    _this.cardAddLoading = true;
                    if (_.isEmpty(_this.cardDetailsData)) {
                        if (!Object.keys(_this.$store.getters.getCardList).length) {
                            _this.cardPayment.is_active = true;
                        }
                        _this.$store.dispatch('cardPaymentForm', _this.cardPayment);
                        __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].card + 'store', _this.cardPayment).then(formSubmitCallback).catch(formErrorCallback);
                    } else {
                        _this.$store.dispatch('cardPaymentForm', _this.cardPayment);
                        __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].patchData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].card + 'update/' + _this.cardDetailsData.id, _this.cardPayment).then(formSubmitCallback).catch(formErrorCallback);
                    }
                }
            });
        },
        monthList: function monthList() {
            for (var i = 1; i <= 12; i++) {
                this.months.push(i);
            }
        },
        closeCard: function closeCard() {
            this.$store.dispatch('cardPaymentForm', {});
            this.$store.dispatch('openCardForm', false);
            this.$store.dispatch('getCardDetailsLink', {});
        },
        getCardDetails: function getCardDetails(cardDetailLink) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_4__services_axios_service__["a" /* default */].getData(cardDetailLink).then(function (response) {
                _this2.$store.dispatch('cardPaymentForm', _this2.cardDetailsData);
                var splittedExpireDate = _this2.cardPayment.expire_date.split('-');
                _this2.cardYear = splittedExpireDate[0];
                _this2.cardMonth = Number(splittedExpireDate[1]);
            });
        }
    }
});

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-form" }, [
    _vm.errorMessage
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("strong", [_vm._v(_vm._s(_vm.errorMessage))])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("form", { staticClass: "card-form" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button" },
          on: { click: _vm.closeCard }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("div", { class: _vm.gateway.title + "-card" }, [
        _c("div", { class: { "has-error": _vm.errors.has("card_number") } }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.cardPayment.card_number,
                expression: "cardPayment.card_number"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|max:23|min:12",
                expression: "'required|max:23|min:12'"
              }
            ],
            staticClass: "form-control",
            class: { input: true, "has-error": _vm.errors.has("card_number") },
            attrs: {
              type: "text",
              name: "card_number",
              placeholder: "Card number (2222 3333 4444 5555)",
              "data-vv-as": "card number"
            },
            domProps: { value: _vm.cardPayment.card_number },
            on: {
              keyup: function(e) {
                return (_vm.cardPayment.card_number = e.target.value
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim())
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.cardPayment, "card_number", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "help-block error text-danger" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("card_number"),
                      expression: "errors.has('card_number')"
                    }
                  ]
                },
                [_vm._v("Required")]
              ),
              _vm._v(" "),
              _vm._l(_vm.cardPaymentError.card_number, function(error) {
                return _vm.cardPaymentError.card_number
                  ? _c("span", [_vm._v(_vm._s(error))])
                  : _vm._e()
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column col-6 left",
            class: { "has-error": _vm.errors.has("month") }
          },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cardMonth,
                    expression: "cardMonth"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                class: { input: true, "has-error": _vm.errors.has("month") },
                attrs: { name: "month" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.cardMonth = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("MM")]),
                _vm._v(" "),
                _vm._l(_vm.months, function(month) {
                  return _c(
                    "option",
                    {
                      attrs: {
                        disabled:
                          _vm.cardYear === _vm.yearList[0] &&
                          _vm.currentMonth > month
                      },
                      domProps: { value: month }
                    },
                    [_vm._v(_vm._s(month) + "\n                    ")]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "help-block error text-danger" },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("month"),
                        expression: "errors.has('month')"
                      }
                    ]
                  },
                  [_vm._v("Required")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cardPaymentError.expire_date, function(error) {
                  return _vm.cardPaymentError.expire_date
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column col-6  right",
            class: { "has-error": _vm.errors.has("year") }
          },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cardYear,
                    expression: "cardYear"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                class: { input: true, "has-error": _vm.errors.has("year") },
                attrs: { name: "year" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.cardYear = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("YYYY")]),
                _vm._v(" "),
                _vm._l(_vm.yearList, function(year) {
                  return _c(
                    "option",
                    {
                      attrs: {
                        disabled:
                          year === _vm.yearList[0] &&
                          _vm.currentMonth > _vm.cardMonth
                      },
                      domProps: { value: year }
                    },
                    [_vm._v(_vm._s(year) + "\n                    ")]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "help-block error text-danger" },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("year"),
                        expression: "errors.has('year')"
                      }
                    ]
                  },
                  [_vm._v("Required")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cardPaymentError.expire_date, function(error) {
                  return _vm.cardPaymentError.expire_date
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "fullwidth left",
            class: { "has-error": _vm.errors.has("cvv") }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cardPayment.cvc,
                  expression: "cardPayment.cvc"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|min:3|max:4",
                  expression: "'required|min:3|max:4'"
                }
              ],
              staticClass: "form-control",
              class: { input: true, "has-error": _vm.errors.has("cvv") },
              attrs: { type: "number", name: "cvv", placeholder: "CVV code" },
              domProps: { value: _vm.cardPayment.cvc },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.cardPayment, "cvc", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "help-block error text-danger" },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("cvv"),
                        expression: "errors.has('cvv')"
                      }
                    ]
                  },
                  [_vm._v("Required")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cardPaymentError.cvc, function(error) {
                  return _vm.cardPaymentError.cvc
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-success",
            on: {
              click: function($event) {
                _vm.submitCard(_vm.gateway.id)
              }
            }
          },
          [
            _vm._v("Save\n                "),
            _vm.cardAddLoading
              ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
              : _vm._e()
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-17cad468", module.exports)
  }
}

/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.paymentMethods
    ? _c(
        "div",
        _vm._l(_vm.paymentMethods, function(payment) {
          return _c("div", [
            _c("div", { staticClass: "cart-row" }, [
              _c("div", { staticClass: "payment-cart-column" }, [
                _c("label", { staticClass: "radio-btn" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.payments.paymentMethod,
                        expression: "payments.paymentMethod"
                      }
                    ],
                    attrs: { type: "radio", name: "payment" },
                    domProps: {
                      value: payment.id,
                      checked: _vm._q(_vm.payments.paymentMethod, payment.id)
                    },
                    on: {
                      change: [
                        function($event) {
                          _vm.$set(_vm.payments, "paymentMethod", payment.id)
                        },
                        function($event) {
                          _vm.changePaymentMethod(_vm.payments.paymentMethod)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "payment-cart-column" }, [
                _c("h5", [_vm._v(_vm._s(payment.title))])
              ]),
              _vm._v(" "),
              _vm.payments.paymentMethod === payment.id
                ? _c(
                    "div",
                    { staticClass: "change-payment-option" },
                    [
                      _vm._l(payment.gateway, function(gateway) {
                        return _c("div", [
                          _c("ul", [
                            _c("li", [
                              _c("label", { staticClass: "radio-btn" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payments.gateway,
                                      expression: "payments.gateway"
                                    }
                                  ],
                                  attrs: { type: "radio", name: "gateway" },
                                  domProps: {
                                    value: gateway.id,
                                    checked: _vm._q(
                                      _vm.payments.gateway,
                                      gateway.id
                                    )
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        _vm.$set(
                                          _vm.payments,
                                          "gateway",
                                          gateway.id
                                        )
                                      },
                                      function($event) {
                                        _vm.changeGateway(_vm.payments.gateway)
                                      }
                                    ]
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "checkmark" })
                              ]),
                              _vm._v(" "),
                              _c("i", { staticClass: "fab fa-cc-mastercard" }),
                              _vm._v(" "),
                              _c("strong", [_vm._v(_vm._s(gateway.title))]),
                              _vm._v(" "),
                              _vm.payments.gateway === 2
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "gateway-list",
                                      class: gateway.title + "-list"
                                    },
                                    [
                                      gateway.id === 2
                                        ? _c(
                                            "ul",
                                            [
                                              !_vm.lodash.isEmpty(_vm.cardList)
                                                ? _c("p", [
                                                    _vm._v(
                                                      "Click on any card to active"
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm._l(_vm.cardList, function(
                                                card
                                              ) {
                                                return _c("li", [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "card-no",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.activeCard(
                                                            card.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "fas fa-check-circle",
                                                          class: {
                                                            green:
                                                              card.is_active
                                                          }
                                                        },
                                                        [
                                                          _c("strong", [
                                                            _vm._v(
                                                              "Card number: (" +
                                                                _vm._s(
                                                                  card.card_4_digit
                                                                ) +
                                                                ")"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "right",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.editCard(card)
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Edit")]
                                                  )
                                                ])
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "card-add-new-button"
                                                },
                                                [
                                                  !_vm.showCardForm
                                                    ? _c(
                                                        "a",
                                                        {
                                                          staticClass: "btn",
                                                          on: {
                                                            click: _vm.addCard
                                                          }
                                                        },
                                                        [_vm._v("Add new")]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.showCardForm
                                                    ? _c(
                                                        "div",
                                                        {
                                                          attrs: {
                                                            id: gateway.title
                                                          }
                                                        },
                                                        [
                                                          _c("card-form", {
                                                            attrs: {
                                                              gateway: gateway
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            2
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _vm.payments.paymentMethod === 2
                        ? _c("div", [
                            _c("p", [
                              _vm._v(
                                "Please deposit the cash amount in this account no\n                        "
                              ),
                              _c("b", [
                                _vm._v(
                                  _vm._s(
                                    _vm.defaultValues
                                      .deposit_bank_account_number
                                  )
                                )
                              ])
                            ])
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                : _vm._e()
            ])
          ])
        })
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-977af2ba", module.exports)
  }
}

/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1432);
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

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_dashboard_dashboard_UserOrderPaymentMethod__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_dashboard_dashboard_UserOrderPaymentMethod___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__user_dashboard_dashboard_UserOrderPaymentMethod__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_dashboard_dashboard_UserMoneyRecite__ = __webpack_require__(1449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_dashboard_dashboard_UserMoneyRecite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_dashboard_dashboard_UserMoneyRecite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_InfoNotification__ = __webpack_require__(1226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_InfoNotification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_InfoNotification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_content_loader_js__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_content_loader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_common_content_loader_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        userOrderPaymentMethod: __WEBPACK_IMPORTED_MODULE_1__user_dashboard_dashboard_UserOrderPaymentMethod___default.a,
        infoNotification: __WEBPACK_IMPORTED_MODULE_3__common_InfoNotification___default.a,
        userMoneyRecite: __WEBPACK_IMPORTED_MODULE_2__user_dashboard_dashboard_UserMoneyRecite___default.a,
        contentLoader: __WEBPACK_IMPORTED_MODULE_5__components_common_content_loader_js___default.a
    },
    data: function data() {
        return {
            infoMessage1: 'Your total payment has been changed due to new weight of your desire products !',
            infoMessage2: 'Notification message !',
            gatewayCharge: 0
        };
    },

    computed: {
        dashboardLoader: function dashboardLoader() {
            return this.$store.state.dashboardLoader;
        },
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        },
        payment: function payment() {
            var _this = this;

            var payment = 0;
            _.forEach(this.orderDetails.payments, function (value) {
                if (value.currency === 'BDT' || value.currency === 1) {
                    payment += (value.amount - value.gateway_charge_amount) / value.conversion_rate;
                    _this.gatewayCharge += Number(value.gateway_charge_amount) / value.conversion_rate;
                } else {
                    payment += value.amount - value.gateway_charge_amount;
                    _this.gatewayCharge += Number(value.gateway_charge_amount);
                }
            });

            return payment;
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
            this.$store.dispatch('actionOrderDetails', this.$route.params.orderId);
        },
        onImageLoadFailure: function onImageLoadFailure() {
            event.target.src = '/images/profile.png';
        },
        cancelUrl: function cancelUrl(url) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(url).then(function (response) {
                if (response.data.status) {
                    _this2.$awn.success(response.data.message);
                    _this2.$store.dispatch('actionOrderDetails', _this2.$route.params.orderId);
                    _this2.$store.dispatch('actionOrderList', { day: 7, pagination: 1 });
                }
            });
        },
        checkUrlEbayAmazon: function checkUrlEbayAmazon(url) {
            url = url.replace('https://www.amazon.com/', 'http://' + __WEBPACK_IMPORTED_MODULE_4__config_api__["a" /* default */].amazonUrl + '.' + __WEBPACK_IMPORTED_MODULE_4__config_api__["a" /* default */].localHostUrl);
            url = url.replace('https://www.ebay.com/', 'http://' + __WEBPACK_IMPORTED_MODULE_4__config_api__["a" /* default */].ebayUrl + '.' + __WEBPACK_IMPORTED_MODULE_4__config_api__["a" /* default */].localHostUrl);
            return url;
        }
    }
});

/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1435)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1437)
/* template */
var __vue_template__ = __webpack_require__(1448)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserOrderPaymentMethod.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3d5a63e", Component.options)
  } else {
    hotAPI.reload("data-v-f3d5a63e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1436);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("971ff648", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3d5a63e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserOrderPaymentMethod.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3d5a63e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserOrderPaymentMethod.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.extra-payment-modal .new-registration {\n    max-width: 450px;\n}\n.extra-payment-modal .new-registration .cart-forms {\n    padding: 0;\n}\n.extra-payment-modal .new-registration .payment-cart {\n    margin: 0;\n}\n.extra-payment-modal .new-registration .modal-content {\n    border-radius: 0;\n}\n.extra-payment-modal .new-registration .modal-header {\n    background: #44b3e6;\n}\n.extra-payment-modal .new-registration .modal-header h5 {\n    color: #fff;\n    font-size: 16px;\n}\n.extra-payment-modal .new-registration .modal-header button {\n    color: #fff;\n    opacity: 1;\n}\n.extra-payment-modal .new-registration .modal-content .cart-column {\n    border: 1px solid #ddd;\n    margin: 15px 0;\n}\n.extra-payment-modal .new-registration .modal-content .cart-column table {\n    width: 100%;\n}\n.extra-payment-modal .new-registration .modal-content .cart-column .grund-total {\n    background: #e4425c;\n    color: #fff;\n    font-weight: 700;\n    font-size: 16px;\n}\n.extra-payment-modal .new-registration .modal-content .cart-column tr td {\n    padding: 10px;\n}\n.extra-payment-modal .new-registration .modal-content .cart-column tr td:last-child {\n    text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cart_CardForm__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cart_CardForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_cart_CardForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod__ = __webpack_require__(1242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_dashboard_dashboard_ReviewCompleteOrder__ = __webpack_require__(1438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_dashboard_dashboard_ReviewCompleteOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_user_dashboard_dashboard_ReviewCompleteOrder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_dashboard_dashboard_PartialPaymentPendingOrder__ = __webpack_require__(1443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_dashboard_dashboard_PartialPaymentPendingOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_user_dashboard_dashboard_PartialPaymentPendingOrder__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['id'],
    components: {
        cardForm: __WEBPACK_IMPORTED_MODULE_0__components_cart_CardForm___default.a,
        commonPaymentMethod: __WEBPACK_IMPORTED_MODULE_1__components_common_CommonPaymentMethod___default.a,
        reviewCompleteOrder: __WEBPACK_IMPORTED_MODULE_2__components_user_dashboard_dashboard_ReviewCompleteOrder___default.a,
        partialPaymentPendingOrder: __WEBPACK_IMPORTED_MODULE_3__components_user_dashboard_dashboard_PartialPaymentPendingOrder___default.a
    },
    data: function data() {
        return {};
    },

    computed: {
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        }
    }
});

/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1439)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1441)
/* template */
var __vue_template__ = __webpack_require__(1442)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e0827e0"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/ReviewCompleteOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e0827e0", Component.options)
  } else {
    hotAPI.reload("data-v-1e0827e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1440);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0bb8136a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e0827e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ReviewCompleteOrder.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e0827e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ReviewCompleteOrder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_types__ = __webpack_require__(31);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            ReviewCompleteLoading: false
        };
    },

    computed: {
        payments: function payments() {
            return this.$store.getters.getterPayments;
        },
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        },
        orderSubTaxInsTotal: function orderSubTaxInsTotal() {
            return parseFloat(this.orderDetails.total_price) + parseFloat(this.orderDetails.tax_usa) + parseFloat(this.orderDetails.shipment_cost) + parseFloat(this.orderDetails.royalty_charge);
        },
        paymentGateway: function paymentGateway() {
            var gatewayId = this.$store.getters.getterPayments.gateway;

            if (gatewayId === 1) {
                return this.orderSubTaxInsTotal * this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]].sslCommerz;
            }
            if (gatewayId === 2) {
                return this.orderSubTaxInsTotal * this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]].stripe + 0.3;
            }
            if (gatewayId === 3) {
                return this.orderSubTaxInsTotal * this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]].americanExpress;
            }
        },
        orderGrandTotal: function orderGrandTotal() {
            if (this.paymentGateway) {
                return (parseFloat(this.orderDetails.master_price) + parseFloat(this.paymentGateway)).toFixed(2);
            } else {
                return parseFloat(this.orderDetails.master_price).toFixed(2);
            }
        }
    },
    methods: {
        submitReviewOrderPayment: function submitReviewOrderPayment() {
            var _this = this;

            this.payments.order = {
                orderId: this.orderDetails.id,
                subTotal: parseFloat(this.orderDetails.total_price).toFixed(2),
                taxAmount: parseFloat(this.orderDetails.tax_usa).toFixed(2),
                internationalShippingCost: parseFloat(this.orderDetails.shipment_cost).toFixed(2),
                localTax: parseFloat(this.orderDetails.tax_bd).toFixed(2),
                paymentGatewayCharge: parseFloat(this.paymentGateway).toFixed(2),
                grandTotal: this.orderGrandTotal,
                currency: this.orderDetails.currency,
                royaltyCharge: parseFloat(this.orderDetails.royalty_charge).toFixed(2)
            };
            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.ReviewCompleteLoading) {
                    _this.ReviewCompleteLoading = true;
                    __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].orderReviewSubmit, _this.payments).then(function (response) {
                        if (response.data) {
                            _this.ReviewCompleteLoading = false;

                            if (response.data.original && response.data.original.url && response.data.original.status) {
                                _this.$store.dispatch('actionOrderDetails', _this.$route.params.orderId);
                                location.replace(response.data.original.url);
                            }
                            if (response.data.status) {
                                _this.$store.dispatch('actionOrderDetails', _this.$route.params.orderId);
                                if (response.data.cash === 1) {
                                    _this.$router.push({
                                        name: 'Payment Status',
                                        query: {
                                            status: 'success',
                                            cash: 'yes',
                                            message: response.data.message,
                                            order_id: response.data.order_id,
                                            order_number: response.data.order_number
                                        }
                                    });
                                } else {
                                    _this.$router.push({
                                        name: 'Payment Status',
                                        query: {
                                            status: 'success',
                                            message: response.data.message,
                                            order_id: response.data.order_id,
                                            order_number: response.data.order_number
                                        }
                                    });
                                }
                            } else {
                                _this.$awn.alert(response.data.message);
                            }
                        }
                    }).catch(function (error) {
                        _this.ReviewCompleteLoading = false;
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "review-complete-order" }, [
    _c("div", { staticClass: "cart-column ship-details" }, [
      _c("table", [
        _c("tr", [
          _c("td", [_vm._v("Sub-Total")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                "\n                    " +
                _vm._s(parseFloat(_vm.orderDetails.total_price).toFixed(2)) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("US Taxes")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                "\n                    " +
                _vm._s(parseFloat(_vm.orderDetails.tax_usa).toFixed(2)) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("International Shipping")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                "\n                    " +
                _vm._s(parseFloat(_vm.orderDetails.shipment_cost).toFixed(2)) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Local Customs and Taxes")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                "\n                    " +
                _vm._s(parseFloat(_vm.orderDetails.tax_bd).toFixed(2)) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Service Charge")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                "\n                    " +
                _vm._s(parseFloat(_vm.orderDetails.royalty_charge).toFixed(2)) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _vm.payments.gateway
          ? _c("tr", [
              _c("td", [_vm._v("Payment gateway charge")]),
              _vm._v(" "),
              _c("td", [
                _vm.payments.gateway === 1
                  ? _c("strong", [
                      _c("small", [_vm._v("2.5%")]),
                      _vm._v(
                        "\n                        (" +
                          _vm._s(_vm.orderDetails.currency) +
                          "\n                        " +
                          _vm._s(parseFloat(_vm.paymentGateway).toFixed(2)) +
                          ")\n                    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.payments.gateway === 2
                  ? _c("strong", [
                      _c("small", [_vm._v("2.9% + 30cent")]),
                      _vm._v(
                        "\n                        (" +
                          _vm._s(_vm.orderDetails.currency) +
                          "\n                        " +
                          _vm._s(parseFloat(_vm.paymentGateway).toFixed(2)) +
                          ")\n                    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.payments.gateway === 3
                  ? _c("strong", [
                      _c("small", [_vm._v("3.5%")]),
                      _vm._v(
                        "\n                        (" +
                          _vm._s(_vm.orderDetails.currency) +
                          "\n                        " +
                          _vm._s(parseFloat(_vm.paymentGateway).toFixed(2)) +
                          ")\n                    "
                      )
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("tr", { staticClass: "grund-total" }, [
          _c("td", [_vm._v("Grand Total")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                " " +
                _vm._s(_vm.orderGrandTotal)
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn button-custom",
        attrs: { type: "submit" },
        on: { click: _vm.submitReviewOrderPayment }
      },
      [
        _vm._v("Submit\n        "),
        _vm.ReviewCompleteLoading
          ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-1e0827e0", module.exports)
  }
}

/***/ }),

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1444)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1446)
/* template */
var __vue_template__ = __webpack_require__(1447)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44ceb18e"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/PartialPaymentPendingOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44ceb18e", Component.options)
  } else {
    hotAPI.reload("data-v-44ceb18e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1444:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1445);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("72d2a7d0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44ceb18e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PartialPaymentPendingOrder.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44ceb18e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PartialPaymentPendingOrder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_types__ = __webpack_require__(31);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            partialPaymentPendingLoading: false
        };
    },

    computed: {
        payments: function payments() {
            return this.$store.getters.getterPayments;
        },
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        },
        paymentGateway: function paymentGateway() {
            var gatewayId = this.$store.getters.getterPayments.gateway;

            if (gatewayId === 1) {
                return this.orderDetails.total_custom_amount * this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]].sslCommerz;
            }
            if (gatewayId === 2) {
                return this.orderDetails.total_custom_amount * this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]].stripe + 0.3;
            }
            if (gatewayId === 3) {
                return this.orderDetails.total_custom_amount * this.$store.getters[__WEBPACK_IMPORTED_MODULE_2__store_types__["H" /* CONFIG_DEFAULT_SETTINGS */]].americanExpress;
            }
        },
        orderGrandTotal: function orderGrandTotal() {
            if (this.paymentGateway) {
                return (parseFloat(this.orderDetails.total_custom_amount) + parseFloat(this.paymentGateway)).toFixed(2);
            } else {
                return parseFloat(this.orderDetails.total_custom_amount).toFixed(2);
            }
        }
    },
    methods: {
        submitPartialPaymentPendingOrderPayment: function submitPartialPaymentPendingOrderPayment() {
            var _this = this;

            this.payments.order = {
                orderId: this.orderDetails.id,
                paymentGatewayCharge: parseFloat(this.paymentGateway).toFixed(2),
                grandTotal: this.orderGrandTotal,
                currency: this.orderDetails.currency
            };
            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this.partialPaymentPendingLoading) {
                    _this.partialPaymentPendingLoading = true;
                    __WEBPACK_IMPORTED_MODULE_1__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].orderCustomAmount, _this.payments).then(function (response) {
                        if (response.data) {
                            _this.partialPaymentPendingLoading = false;

                            if (response.data.original && response.data.original.url && response.data.original.status) {
                                _this.$store.dispatch('actionOrderDetails', _this.$route.params.orderId);
                                location.replace(response.data.original.url);
                            }
                            if (response.data.status) {
                                _this.$store.dispatch('actionOrderDetails', _this.$route.params.orderId);
                                if (response.data.cash === 1) {
                                    _this.$router.push({
                                        name: 'Payment Status',
                                        query: {
                                            status: 'success',
                                            cash: 'yes',
                                            message: response.data.message,
                                            order_id: response.data.order_id,
                                            order_number: response.data.order_number
                                        }
                                    });
                                } else {
                                    _this.$router.push({
                                        name: 'Payment Status',
                                        query: {
                                            status: 'success',
                                            message: response.data.message,
                                            order_id: response.data.order_id,
                                            order_number: response.data.order_number
                                        }
                                    });
                                }
                            } else {
                                _this.$awn.alert(response.data.message);
                            }
                        }
                    }).catch(function (error) {
                        _this.partialPaymentPendingLoading = false;
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "partial-payment-pending-order" }, [
    _c("div", { staticClass: "cart-column ship-details" }, [
      _c("table", [
        _vm.payments.gateway
          ? _c("tr", [
              _c("td", [_vm._v("Payment gateway charge")]),
              _vm._v(" "),
              _c("td", [
                _vm.payments.gateway === 1
                  ? _c("strong", [
                      _c("small", [_vm._v("2.5%")]),
                      _vm._v(
                        "\n                        (" +
                          _vm._s(_vm.orderDetails.currency) +
                          "\n                        " +
                          _vm._s(parseFloat(_vm.paymentGateway).toFixed(2)) +
                          ")\n                    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.payments.gateway === 2
                  ? _c("strong", [
                      _c("small", [_vm._v("2.9% + 30cent")]),
                      _vm._v(
                        "\n                        (" +
                          _vm._s(_vm.orderDetails.currency) +
                          "\n                        " +
                          _vm._s(parseFloat(_vm.paymentGateway).toFixed(2)) +
                          ")\n                    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.payments.gateway === 3
                  ? _c("strong", [
                      _c("small", [_vm._v("3.5%")]),
                      _vm._v(
                        "\n                        (" +
                          _vm._s(_vm.orderDetails.currency) +
                          "\n                        " +
                          _vm._s(parseFloat(_vm.paymentGateway).toFixed(2)) +
                          ")\n                    "
                      )
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("tr", { staticClass: "grund-total" }, [
          _c("td", [_vm._v("Grand Total")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              _vm._s(_vm.orderDetails.currency) +
                " " +
                _vm._s(_vm.orderGrandTotal)
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn button-custom",
        attrs: { type: "submit" },
        on: { click: _vm.submitPartialPaymentPendingOrderPayment }
      },
      [
        _vm._v("Submit\n        "),
        _vm.partialPaymentPendingLoading
          ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-44ceb18e", module.exports)
  }
}

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: { id: _vm.id, tabindex: "-1", role: "dialog" }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog extra-payment-modal",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "add-cart-reg new-registration" }, [
            _c("div", { staticClass: "cart-forms" }, [
              _c("div", { staticClass: "cart-payment-method" }, [
                _c("div", { staticClass: "payment-cart" }, [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "form",
                        [
                          _c(
                            "div",
                            { staticClass: "order-payment-method" },
                            [_c("common-payment-method")],
                            1
                          ),
                          _vm._v(" "),
                          this.orderDetails.status.alias === "review-complete"
                            ? _c("review-complete-order")
                            : _vm._e(),
                          _vm._v(" "),
                          this.orderDetails.status.alias ===
                          "partial-payment-pending"
                            ? _c("partial-payment-pending-order")
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Pay for reviewed products")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3d5a63e", module.exports)
  }
}

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1450)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1452)
/* template */
var __vue_template__ = __webpack_require__(1453)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03502cdc"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserMoneyRecite.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03502cdc", Component.options)
  } else {
    hotAPI.reload("data-v-03502cdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1451);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3b5de76c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03502cdc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserMoneyRecite.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03502cdc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserMoneyRecite.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#preview[data-v-03502cdc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#preview img[data-v-03502cdc] {\n    max-width: 100%;\n    max-height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            file: '',
            image: '',
            moneyReceiptErrors: {}
        };
    },

    computed: {
        orderDetails: function orderDetails() {
            return this.$store.getters.getterOrderDetails;
        }
    },
    methods: {
        onImageChange: function onImageChange(e) {
            this.file = e.target.files[0];
            this.image = URL.createObjectURL(this.file);
        },
        onImageLoadFailure: function onImageLoadFailure() {
            event.target.src = '/images/money-receipt/money-error.jpg';
        },
        submitMoneyReceipt: function submitMoneyReceipt() {
            var _this = this;

            var formData = new FormData();
            formData.append('receipt_image', this.file);
            formData.append('order_id', this.$route.params.orderId);
            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].orderMoneyReceipt, formData).then(function (response) {
                if (response.data.status) {
                    _this.image = '';
                    _this.file = '';
                    _this.$awn.success(response.data.message);
                    _this.$store.dispatch('actionUpdateOrderDetailsReceiptImage', { image: response.data.image });
                }
            }).catch(function (error) {
                _this.moneyReceiptErrors = error.response.data.errors;
            });
        }
    }
});

/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-money-recite" }, [
    _c("div", { staticClass: "delivery-status-header" }, [
      _c("strong", [_vm._v("Upload money receipt")]),
      _vm._v(" "),
      _vm.orderDetails.receipt_image.length < 4
        ? _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitMoneyReceipt($event)
                }
              }
            },
            [
              _c("input", {
                attrs: {
                  type: "file",
                  placeholder: "Upload Payment Receipt",
                  accept: "image/*"
                },
                on: { change: _vm.onImageChange }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "help-block error text-danger" },
                _vm._l(_vm.moneyReceiptErrors.receipt_image, function(error) {
                  return _vm.moneyReceiptErrors.receipt_image
                    ? _c("span", [_vm._v(_vm._s(error))])
                    : _vm._e()
                })
              ),
              _vm._v(" "),
              _c("div", { attrs: { id: "preview" } }, [
                _vm.image
                  ? _c("img", {
                      attrs: { src: _vm.image },
                      on: { error: _vm.onImageLoadFailure }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-success", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.orderDetails.receipt_image.length
      ? _c(
          "div",
          { staticClass: "products-details" },
          _vm._l(_vm.orderDetails.receipt_image, function(receiptImage) {
            return _c("div", { staticClass: "payment-recite" }, [
              _c("img", { attrs: { src: receiptImage.image } })
            ])
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03502cdc", module.exports)
  }
}

/***/ }),

/***/ 1454:
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
                  _c("user-order-payment-method", {
                    attrs: { id: "extraPayment" }
                  })
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
                _c("li", [
                  _vm._v("Payment Gateway Charge "),
                  _c("strong", [_vm._v(_vm._s(_vm.gatewayCharge.toFixed(2)))])
                ]),
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
                      _vm._v(
                        _vm._s(_vm.currency) +
                          " " +
                          _vm._s(_vm.payment.toFixed(2))
                      )
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
                                _vm._s(_vm.orderDetails.total_price)
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
                                  _vm.orderDetails.tax_bd +
                                    _vm.orderDetails.tax_usa
                                ) +
                                "\n                        "
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.orderDetails.shipment_cost
                      ? _c("tr", [
                          _vm._v(
                            _vm._s(_vm.orderDetails.shipment_cost) +
                              "\n                        "
                          ),
                          _c("td", { staticClass: "left" }, [
                            _vm._v("Shipping & Handling")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "right" }, [
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
                      ? _c("tr", [
                          _c("td", { staticClass: "left" }, [
                            _vm._v("Service Charge")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "right" }, [
                            _vm._v(
                              _vm._s(_vm.currency) +
                                "\n                            " +
                                _vm._s(_vm.orderDetails.royalty_charge) +
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
                            _c("strong", [
                              _vm._v(
                                _vm._s(_vm.currency) +
                                  "\n                            "
                              ),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.orderDetails.master_price)
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
                              _vm._s(item.prices.item_price)
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
                              _vm._s(item.prices.custom_price.custom_amount)
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
                                  _vm._s(item.insurance_amount)
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
                            "\n                    kg"
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
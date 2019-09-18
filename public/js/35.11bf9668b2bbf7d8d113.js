webpackJsonp([35],{

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1392)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1394)
/* template */
var __vue_template__ = __webpack_require__(1395)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2145803a"
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
Component.options.__file = "resources/js/components/user-dashboard/address/UserAddressList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2145803a", Component.options)
  } else {
    hotAPI.reload("data-v-2145803a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1393);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5f06cff8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2145803a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAddressList.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2145803a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAddressList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.dashboard-settings .user-address .list-address[data-v-2145803a] {\n    border: 1px solid #bfbaba;\n}\n", ""]);

// exports


/***/ }),

/***/ 1394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(28);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            lodash: _,
            currentRoute: '',
            addressID: ''
        };
    },

    computed: {
        addressList: function addressList() {
            return this.$store.getters.getAddressList;
        },
        defaultAddress: function defaultAddress() {
            return this.$store.getters.getDefaultAddress;
        },
        renderedAddressList: function renderedAddressList() {
            var _this = this;

            var list = [];
            _.forEach(this.addressList, function (value, key) {
                {
                    list.push(_this.addressList[key]);
                }
            });

            _.forEach(list, function (value, key) {
                if (list[key].id === _this.defaultAddress) {
                    var x = 0,
                        y = key;
                    list[x] = list.splice(y, 1, list[x])[0];
                }
            });

            return list;
        }
    },
    created: function created() {
        this.getUserAddressList();
    },

    methods: {
        setDefaultAddress: function setDefaultAddress(addressId) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].address + '/setDefault', { address_id: addressId }).then(function (response) {
                _this2.$awn.success(response.data.message);
                _this2.$store.dispatch('defaultAddressUpdate', response.data.result.id);
                /*_.forEach(this.addressList, value => {
                    if(value.id === response.data.result.id) {
                        this.$store.dispatch('actionUpdateUserProfileDefaultAddress', value);
                    }
                })*/
            }).catch(function (error) {});
        },
        getUserAddressList: function getUserAddressList() {
            this.$store.dispatch('addressList');
        },
        deleteAddress: function deleteAddress(addressId) {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].address + '/delete', { id: addressId }).then(function (response) {
                if (response.data.message) _this3.$store.dispatch('deleteAddress', addressId);
                _this3.$awn.success(response.data.message);
            });
        }
    }
});

/***/ }),

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard-settings" }, [
    _c("div", { staticClass: "user-address" }, [
      _c(
        "div",
        { staticClass: "address-box" },
        [
          _c(
            "router-link",
            { attrs: { to: { name: "User Address Create" } } },
            [
              _c("span", { staticClass: "fas fa-plus" }),
              _vm._v(" "),
              _c("h3", [_vm._v("Add Address")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.addressList
        ? _c(
            "div",
            _vm._l(_vm.renderedAddressList, function(address) {
              return _c("div", [
                _c(
                  "div",
                  { staticClass: "list-address" },
                  [
                    _vm.defaultAddress === address.id
                      ? _c("h4", [
                          _c("i", { staticClass: "fas fa-check-circle" }),
                          _vm._v(" Default\n                    ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(address.full_name))]),
                    _vm._v(" "),
                    _vm._l(address.phones, function(phone) {
                      return _c("p", [
                        _c("span", { staticClass: "fas fa-phone" }),
                        _vm._v(" " + _vm._s(phone.phone))
                      ])
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", { staticClass: "fas fa-map-marker-alt" }),
                      _vm._v(" " + _vm._s(address.address))
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(address.address_2))]),
                    _vm._v(" "),
                    address.state
                      ? _c("p", [
                          _vm._v(
                            _vm._s(address.state.title) +
                              ", " +
                              _vm._s(address.city) +
                              "\n                        "
                          ),
                          address.zip_code
                            ? _c("b", [_vm._v("-" + _vm._s(address.zip_code))])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(address.country.title))]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "User Address Edit",
                            params: { addressId: address.id }
                          }
                        }
                      },
                      [_c("span", { staticClass: "fas fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: { id: "shop-test-delete-address" },
                        on: {
                          click: function($event) {
                            _vm.deleteAddress(address.id)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fas fa-trash-alt" })]
                    ),
                    _vm._v(" "),
                    _vm.defaultAddress !== address.id
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                _vm.setDefaultAddress(address.id)
                              }
                            }
                          },
                          [_c("span", [_vm._v("Set as default")])]
                        )
                      : _vm._e()
                  ],
                  2
                )
              ])
            })
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2145803a", module.exports)
  }
}

/***/ })

});
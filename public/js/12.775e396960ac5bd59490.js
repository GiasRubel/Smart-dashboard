webpackJsonp([12],{

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1362)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1364)
/* template */
var __vue_template__ = __webpack_require__(1365)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b2aff35"
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
Component.options.__file = "resources/js/components/user-dashboard/dashboard/UserAllOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b2aff35", Component.options)
  } else {
    hotAPI.reload("data-v-0b2aff35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1182)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1184)
/* template */
var __vue_template__ = __webpack_require__(1185)
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
Component.options.__file = "resources/js/components/common/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b0b08a3", Component.options)
  } else {
    hotAPI.reload("data-v-3b0b08a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("8b97ac24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b0b08a3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b0b08a3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.pagination {\n    margin-top: 40px;\n}\n.disabled a {\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1184:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['pagination'],
    methods: {
        isCurrentPage: function isCurrentPage(page) {
            return this.pagination.current_page === page;
        },
        changePage: function changePage(page) {
            if (page > this.pagination.last_page) {
                page = this.pagination.last_page;
            }
            this.pagination.current_page = page;
            this.$emit('paginate');
        }
    },
    computed: {
        pages: function pages() {
            var pages = [];
            var from = this.pagination.current_page - Math.floor(this.pagination.per_page / 2);
            if (from < 1) {
                from = 1;
            }
            var to = from + this.pagination.per_page - 1;
            if (to > this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            while (from <= to) {
                pages.push(from);
                from++;
            }
            return pages;
        }
    }
});

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "pagination" },
    [
      _c(
        "li",
        {
          staticClass: "page-item",
          class: _vm.pagination.current_page <= 1 ? "disabled" : "",
          attrs: { disabled: _vm.pagination.current_page <= 1 }
        },
        [
          _c(
            "a",
            {
              staticClass: "page-link",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.changePage(_vm.pagination.current_page - 1)
                }
              }
            },
            [_vm._v("Prev")]
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.pages, function(page) {
        return _c(
          "li",
          {
            staticClass: "page-item",
            class: _vm.isCurrentPage(page) ? "active" : ""
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.changePage(page)
                  }
                }
              },
              [_vm._v(_vm._s(page))]
            )
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "page-item",
          class:
            _vm.pagination.current_page >= _vm.pagination.last_page
              ? "disabled"
              : "",
          attrs: { disabled: _vm.pagination.current_page <= 1 }
        },
        [
          _c(
            "a",
            {
              staticClass: "page-link",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.changePage(_vm.pagination.current_page + 1)
                }
              }
            },
            [_vm._v("Next")]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b0b08a3", module.exports)
  }
}

/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1de5b626", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2aff35\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAllOrder.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2aff35\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserAllOrder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_axios_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Pagination__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_Pagination__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        pagination: __WEBPACK_IMPORTED_MODULE_2__common_Pagination___default.a
    },
    data: function data() {
        return {
            selectedDay: 7,
            listOfAllDays: [{ name: 'Last 7 days', sortDays: 7 }, { name: 'Last 15 days', sortDays: 15 }, { name: 'Last 1 month', sortDays: 30 }, { name: 'Last 1 year', sortDays: 365 }],
            orderedItems: {},
            pagination: {
                'current_page': 1
            }
        };
    },
    created: function created() {
        this.getAllOrderedItems();
    },

    methods: {
        getAllOrderedItems: function getAllOrderedItems() {
            var _this = this;

            var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

            __WEBPACK_IMPORTED_MODULE_0__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].allOrderItems + day + '&page=' + this.pagination.current_page).then(function (response) {
                _this.orderedItems = response.data.data;
                _this.pagination = response.data.meta;
            });
        }
    }
});

/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "order-list" }, [
    _c("div", { staticClass: "order-header" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "header-sort" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", [
          _c("form", [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedDay,
                    expression: "selectedDay"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "select-order" },
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.selectedDay = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.getAllOrderedItems(_vm.selectedDay)
                    }
                  ]
                }
              },
              _vm._l(_vm.listOfAllDays, function(day) {
                return _c("option", { domProps: { value: day.sortDays } }, [
                  _vm._v(_vm._s(day.name))
                ])
              })
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "all-orders mobile-hide" },
      [
        _vm._m(2),
        _vm._v(" "),
        _vm._l(_vm.orderedItems, function(item) {
          return _c("div", { staticClass: "order-list-row" }, [
            _c("div", { staticClass: "order-list-column thubnail" }, [
              _c("p", [_vm._v(_vm._s(item.order_number))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-list-column" }, [
              _c("strong", [_vm._v("$" + _vm._s(item.master_price))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-list-column" }, [
              item.status
                ? _c("h5", [_vm._v(_vm._s(item.status.alias))])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-list-column" }, [
              _c("h5", [_vm._v(_vm._s(item.order_date))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "order-list-column" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "User Order Details",
                        params: { orderId: item.id }
                      }
                    }
                  },
                  [_vm._v("View")]
                )
              ],
              1
            )
          ])
        }),
        _vm._v(" "),
        _vm.pagination && _vm.pagination.last_page > 1
          ? _c("pagination", {
              attrs: { pagination: _vm.pagination, offset: 5 },
              on: {
                paginate: function($event) {
                  _vm.getAllOrderedItems()
                }
              }
            })
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "all-orders desktop-hide" },
      [
        _vm._m(3),
        _vm._v(" "),
        _vm._l(_vm.orderedItems, function(item) {
          return _c("div", { staticClass: "order-list-row" }, [
            _c("div", { staticClass: "order-list-column" }, [
              _c("h5", [_vm._v("$" + _vm._s(item.master_price))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-list-column" }, [
              _c("strong", [_vm._v(_vm._s(item.order_date))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "order-list-column" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "User Order Details",
                        params: { orderId: item.id }
                      }
                    }
                  },
                  [_vm._v("View")]
                )
              ],
              1
            )
          ])
        }),
        _vm._v(" "),
        _vm.pagination && _vm.pagination.last_page > 1
          ? _c("pagination", {
              attrs: { pagination: _vm.pagination, offset: 5 },
              on: {
                paginate: function($event) {
                  _vm.getAllOrderedItems()
                }
              }
            })
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-title" }, [
      _c("h4", [_vm._v("All Orders")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h5", [_vm._v("Show")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "order-list-row order-headings" }, [
      _c("div", { staticClass: "order-list-column thubnail" }, [
        _c("h4", [_vm._v("Order No.")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Amount")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Status")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Order Date")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Details")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "order-list-row order-headings" }, [
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Amount")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("date")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "order-list-column" }, [
        _c("h4", [_vm._v("Details")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b2aff35", module.exports)
  }
}

/***/ })

});
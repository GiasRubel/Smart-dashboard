webpackJsonp([15],{

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1381)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1383)
/* template */
var __vue_template__ = __webpack_require__(1384)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77e2c9e6"
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
Component.options.__file = "resources/js/components/user-dashboard/notification/UserNotificationList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77e2c9e6", Component.options)
  } else {
    hotAPI.reload("data-v-77e2c9e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1240:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1241)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1243)
/* template */
var __vue_template__ = __webpack_require__(1244)
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

/***/ 1241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("8b97ac24", content, false, {});
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

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.pagination {\n    margin-top: 40px;\n}\n.disabled a {\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1243:
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

/***/ 1244:
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

/***/ 1381:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1382);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("f8bd36ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e2c9e6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserNotificationList.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e2c9e6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserNotificationList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.notification-title .unread[data-v-77e2c9e6] {\n    font-weight: bold !important;\n}\n.notification-title a[data-v-77e2c9e6] {\n    font-weight: normal !important;\n}\n.notification-out-for-delivery[data-v-77e2c9e6] {\n    color: red !important;\n}\n.notification-title a[data-v-77e2c9e6]:hover {\n    color: black !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Pagination__ = __webpack_require__(1240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_Pagination__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        pagination: __WEBPACK_IMPORTED_MODULE_0__common_Pagination___default.a
    },
    data: function data() {
        return {};
    },

    computed: {
        allNotifications: function allNotifications() {
            return this.$store.getters.getterAllNotifications;
        },
        pagination: function pagination() {
            return this.$store.getters.getterPagination;
        },
        notificationType: function notificationType() {
            return this.$store.getters.getterNotificationType;
        },
        checkedItems: function checkedItems() {
            return this.$store.getters.getterCheckedItems;
        }
    },
    methods: {
        markAsRead: function markAsRead(notifyID) {
            this.$store.dispatch('actionMarkAsRead', notifyID);
        },
        getAllNotifications: function getAllNotifications() {
            this.$store.dispatch('actionAllNotifications', {
                type: this.notificationType.type,
                name: this.notificationType.name,
                current_page: this.pagination.current_page
            });
        },
        getCheckedItems: function getCheckedItems() {
            this.$store.dispatch('actionGetCheckedItems', this.checkedItems);
        }
    },
    filters: {
        limitString: function limitString(value) {
            if (!value) return '';
            var moreThan70 = value.length > 70 ? '...' : '';
            return value.substr(0, 70) + moreThan70;
        }
    }
});

/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-pane fade in active" },
    [
      _vm._l(_vm.allNotifications, function(notify) {
        return _c("div", { staticClass: "notification-content" }, [
          _c("div", { staticClass: "checked left" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.checkedItems[notify.id],
                  expression: "checkedItems[notify.id]"
                }
              ],
              attrs: { type: "checkbox", name: "notifyCheckbox" },
              domProps: {
                checked: Array.isArray(_vm.checkedItems[notify.id])
                  ? _vm._i(_vm.checkedItems[notify.id], null) > -1
                  : _vm.checkedItems[notify.id]
              },
              on: {
                change: [
                  function($event) {
                    var $$a = _vm.checkedItems[notify.id],
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.checkedItems,
                            notify.id,
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.checkedItems,
                            notify.id,
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.checkedItems, notify.id, $$c)
                    }
                  },
                  _vm.getCheckedItems
                ]
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-data right" }, [
            _c(
              "div",
              { staticClass: "notification-title left" },
              [
                _c(
                  "router-link",
                  {
                    class: { unread: !notify.read_at },
                    attrs: {
                      to: {
                        name: "User Notification Details",
                        params: { detailId: notify.id }
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { tag: "html" } }, [
                      _vm._v(_vm._s(_vm._f("limitString")(notify.data.message)))
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "notification-details right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "User Notification Details",
                        params: { detailId: notify.id }
                      }
                    }
                  },
                  [_vm._v("View\n                ")]
                )
              ],
              1
            )
          ])
        ])
      }),
      _vm._v(" "),
      _vm.pagination.last_page > 1
        ? _c("pagination", {
            attrs: { pagination: _vm.pagination, offset: 5 },
            on: {
              paginate: function($event) {
                _vm.getAllNotifications()
              }
            }
          })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-77e2c9e6", module.exports)
  }
}

/***/ })

});
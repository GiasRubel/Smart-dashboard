webpackJsonp([5],{

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1382)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1384)
/* template */
var __vue_template__ = __webpack_require__(1390)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d8ad2186"
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
Component.options.__file = "resources/js/components/user-dashboard/notification/Notification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8ad2186", Component.options)
  } else {
    hotAPI.reload("data-v-d8ad2186", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1218)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1220)
/* template */
var __vue_template__ = __webpack_require__(1221)
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

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1219);
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

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1220:
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

/***/ 1221:
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

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1383);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("09b29dbb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d8ad2186\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d8ad2186\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserNotifications__ = __webpack_require__(1385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserNotifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UserNotifications__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        userNotifications: __WEBPACK_IMPORTED_MODULE_0__UserNotifications___default.a
    }
});

/***/ }),

/***/ 1385:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1386)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1388)
/* template */
var __vue_template__ = __webpack_require__(1389)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61e0a9fb"
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
Component.options.__file = "resources/js/components/user-dashboard/notification/UserNotifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61e0a9fb", Component.options)
  } else {
    hotAPI.reload("data-v-61e0a9fb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1387);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0f24654e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61e0a9fb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserNotifications.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61e0a9fb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserNotifications.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.all-button a.active[data-v-61e0a9fb], .all-button a.active i[data-v-61e0a9fb] {\n    color: #fa8526 !important;\n}\n.fa-align-justify[data-v-61e0a9fb]:hover {\n    background-color: transparent!important;\n}\n.tooltip-toggle[data-v-61e0a9fb] {\n    cursor: pointer;\n    position: relative;\n}\n.tooltip-toggle[data-v-61e0a9fb]::before {\n    position: absolute;\n    top: -2px;\n    left: 43px;\n    background-color: #7f8284;\n    border-radius: 5px;\n    color: #fff;\n    content: attr(data-tooltip);\n    padding: 5px;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 120px;\n}\n.tooltip-toggle[data-v-61e0a9fb]::after {\n    position: absolute;\n    top: -2px;\n    left: 42px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #7f8284;\n    content: \" \";\n    font-size: 0;\n    line-height: 0;\n    margin-left: -8px;\n    width: 0;\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    margin-top: 10px;\n}\n.tooltip-toggle[data-v-61e0a9fb]::before,\n.tooltip-toggle[data-v-61e0a9fb]::after {\n    color: #efefef;\n    font-family: monospace;\n    font-size: 12px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center;\n}\n.tooltip-toggle[data-v-61e0a9fb]:hover::before,\n.tooltip-toggle[data-v-61e0a9fb]:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_InfoNotification__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_InfoNotification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_InfoNotification__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        infoNotification: __WEBPACK_IMPORTED_MODULE_0__common_InfoNotification___default.a
    },
    data: function data() {
        return {
            markedData: '',
            notificationTypeList: [{ name: 'Read', sortType: 'read=1' }, { name: 'Unread', sortType: 'unread=1' }, { name: 'Ascending', sortType: 'order=asc' }, { name: 'Descending', sortType: 'order=desc' }],
            markedList: [{ name: 'Select any', type: '' }, { name: 'Mark as Read', type: 'read' }, { name: 'Mark as Unread', type: 'unread' }],
            // checkAllNotification: false
            infoMessage: 'Currently you have no notification'
        };
    },

    computed: {
        typeOfNotification: function typeOfNotification() {
            return this.$store.getters.getterNotificationType;
        },
        pagination: function pagination() {
            return this.$store.getters.getterPagination;
        },
        marked: function marked() {
            return this.$store.getters.getterMarked;
        },
        isRead: function isRead() {
            return this.$store.getters.getterIsRead;
        },
        allNotifications: function allNotifications() {
            return this.$store.getters.getterAllNotifications;
        }
    },
    created: function created() {
        this.getAllNotifications();
    },

    methods: {
        getAllNotifications: function getAllNotifications() {
            this.$store.dispatch('actionAllNotifications', { type: 'order=asc', name: 'all', current_page: 1 });
            this.$router.push({ name: 'User Notifications', params: { userId: this.$route.params.userId } });
        },
        getNotificationItems: function getNotificationItems() {
            this.$store.dispatch('actionAllNotifications', { type: this.typeOfNotification.type, current_page: 1 });
        },
        getMarkedItems: function getMarkedItems() {
            this.$store.dispatch('actionMarkedItems');
        }
    }
});

/***/ }),

/***/ 1389:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return Object.keys(_vm.allNotifications).length > 0
    ? _c("div", { staticClass: "user-notification" }, [
        _c(
          "div",
          { staticClass: "notification-header" },
          [
            _c("router-link", {
              staticClass: "fas fa-home left",
              attrs: { to: { name: "User Notifications" } }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "actions right" }, [
              _c("div", { staticClass: "all-button" }, [
                _c(
                  "a",
                  {
                    class: { active: _vm.typeOfNotification.name === "all" },
                    on: { click: _vm.getAllNotifications }
                  },
                  [
                    _c("i", { staticClass: "fas fa-align-justify" }),
                    _vm._v("All\n                ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.typeOfNotification.type,
                        expression: "typeOfNotification.type"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "select-type" },
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
                          _vm.$set(
                            _vm.typeOfNotification,
                            "type",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.getNotificationItems
                      ]
                    }
                  },
                  _vm._l(_vm.notificationTypeList, function(type) {
                    return _c(
                      "option",
                      { domProps: { value: type.sortType } },
                      [_vm._v(_vm._s(type.name))]
                    )
                  })
                ),
                _vm._v(" "),
                _c("span", { staticClass: "fas fa-caret-down" })
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "a",
                  {
                    staticClass: "tooltip-toggle",
                    attrs: {
                      "data-tooltip": _vm.isRead
                        ? "Mark as read"
                        : "Mark as unread"
                    },
                    on: { click: _vm.getMarkedItems }
                  },
                  [
                    _c("i", {
                      class: _vm.isRead
                        ? "fas fa-envelope-open"
                        : "fas fa-envelope"
                    })
                  ]
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tab-content" }, [_c("router-view")], 1)
      ])
    : _c("info-notification", { attrs: { msg: _vm.infoMessage } })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61e0a9fb", module.exports)
  }
}

/***/ }),

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("user-notifications")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d8ad2186", module.exports)
  }
}

/***/ })

});
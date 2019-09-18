webpackJsonp([14],{

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1308)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1310)
/* template */
var __vue_template__ = __webpack_require__(1311)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c1b31aa"
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
Component.options.__file = "resources/js/pages/common/LandingPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c1b31aa", Component.options)
  } else {
    hotAPI.reload("data-v-6c1b31aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1283)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1285)
/* template */
var __vue_template__ = __webpack_require__(1286)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77b91cd1"
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
Component.options.__file = "resources/js/components/common/TooltipBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77b91cd1", Component.options)
  } else {
    hotAPI.reload("data-v-77b91cd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1284);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1da0dff8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77b91cd1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TooltipBox.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77b91cd1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TooltipBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1285:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['msg']
});

/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tooltip-box" }, [
    _c("p", [_vm._v(_vm._s(_vm.msg))]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrow-bottom" }, [_c("span")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77b91cd1", module.exports)
  }
}

/***/ }),

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0e6f6920", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c1b31aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LandingPage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c1b31aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LandingPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.help-block[data-v-6c1b31aa] {\n    /*margin-left: -43%;*/\n    margin-top: 7px;\n    position: absolute;\n    z-index: 9;\n}\n.help-block span[data-v-6c1b31aa] {\n    border-radius: 10px;\n    -webkit-box-shadow: 0 0 9px 0 #333;\n            box-shadow: 0 0 9px 0 #333;\n}\n.tooltip-toggle[data-v-6c1b31aa] {\n    cursor: pointer;\n    position: relative;\n}\n.tooltip-toggle[data-v-6c1b31aa]::before {\n    position: absolute;\n    top: -14px;\n    left: -45px;\n    background-color: #7f8284;\n    border-radius: 5px;\n    color: #fff;\n    content: attr(data-tooltip);\n    padding: 5px;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 160px;\n}\n.tooltip-toggle[data-v-6c1b31aa]::after {\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #7f8284;\n    content: \" \";\n    font-size: 0;\n    line-height: 0;\n    margin-left: -5px;\n    width: 0;\n}\n.tooltip-toggle[data-v-6c1b31aa]::before,\n.tooltip-toggle[data-v-6c1b31aa]::after {\n    color: #efefef;\n    font-family: monospace;\n    font-size: 12px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center;\n}\n.tooltip-toggle[data-v-6c1b31aa]:hover::before,\n.tooltip-toggle[data-v-6c1b31aa]:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease;\n}\n.others-last-delete-button[data-v-6c1b31aa] {\n    right: 40px !important;\n}\n.others-last-delete-button button[data-v-6c1b31aa] {\n    padding: 5.5px 10px !important;\n    border-radius: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cookie__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_TooltipBox__ = __webpack_require__(1282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_TooltipBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_common_TooltipBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_axios_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        tooltipBox: __WEBPACK_IMPORTED_MODULE_2__components_common_TooltipBox___default.a
    },
    data: function data() {
        var _search;

        return {
            tooltipMessage: 'Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.',
            activeDomain: 'shop-01-xo-us',
            activeField: 'field-keywords',
            api: __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */],
            searchModel: '',
            search: (_search = {}, _defineProperty(_search, __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].amazonUrl, {
                query: 's',
                fieldName: 'field-keywords'
            }), _defineProperty(_search, __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].ebayUrl, {
                query: 'sch/i.html',
                fieldName: '_nkw'
            }), _defineProperty(_search, 'others-search', {
                query: 'search',
                fieldName: 'keywords'
            }), _search),
            othersSite: [{
                quantity: 1,
                site: {}
            }],
            metaInfoDetails: {},
            otherSiteError: {},
            duplicateUrl: [],
            metaData: false,
            metaInfoLoading: false,
            otherSiteLoading: false,
            amazonEbayLoading: false,
            hasDuplicateUrlError: false
        };
    },

    computed: {
        searchUrlAction: function searchUrlAction() {
            return 'http://' + this.activeDomain + '.' + __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].localHostUrl + this.search[this.activeDomain].query;
        }
    },
    methods: {
        activeTabName: function activeTabName(tabName) {
            if (this.activeDomain === tabName) {
                //window.location.href = 'http://' + this.activeDomain + '.' + api.localHostUrl;
                this.searchPostRequest();
            }
            this.activeDomain = tabName;
            this.activeField = this.search[this.activeDomain].fieldName;
        },
        searchPostRequest: function searchPostRequest() {
            var _this = this;

            var postData = {
                queryString: this.search[this.activeDomain].query,
                shop_session_id: __WEBPACK_IMPORTED_MODULE_1__services_cookie__["a" /* default */].getCookie('session_id'),
                domain: this.activeDomain
            };

            this.amazonEbayLoading = true;
            axios.post(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].productSearch, postData).then(function (response) {
                _this.amazonEbayLoading = false;
                var url = 'http://' + _this.activeDomain + '.' + __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].localHostUrl;

                if (_this.searchModel) url += _this.search[_this.activeDomain].query + '?' + _this.activeField + '=' + _this.searchModel + '&';else url += '?';

                url += "shop_session_id=" + postData.shop_session_id;
                window.location.replace(url);
            }).catch(function (error) {
                _this.amazonEbayLoading = false;
            });
        },
        removeButton: function removeButton(index) {
            this.othersSite.splice(index, 1);
        },
        addOthersRow: function addOthersRow() {
            var _this2 = this;

            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this2.hasDuplicateUrlError) {
                    _this2.metaData = false;
                    _this2.othersSite.push({
                        quantity: 1
                    });
                }
            });
        },
        submitOthersSiteForm: function submitOthersSiteForm() {
            var _this3 = this;

            this.$validator.validateAll().then(function (valid) {
                if (valid && !_this3.otherSiteLoading) {
                    var sessionId = __WEBPACK_IMPORTED_MODULE_1__services_cookie__["a" /* default */].getCookie('session_id');
                    _this3.otherSiteLoading = true;
                    _.forEach(_this3.othersSite, function (value, key) {
                        if (value && value.url) {
                            _this3.othersSite[key].session_id = sessionId;
                        } else {
                            _this3.othersSite.splice(key, 1);
                        }
                    });

                    __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].storeItemUrl, _this3.othersSite).then(function (response) {
                        if (response.data) {
                            _this3.$awn.success(response.data.message);
                            _this3.$router.push('/cart?session_id=' + sessionId);
                            _this3.otherSiteLoading = false;
                        }
                    }).catch(function (error) {
                        _this3.otherSiteLoading = false;
                        _this3.otherSiteError = error.response.data.errors;
                    });
                }
            });
        },
        getMetaInfo: function getMetaInfo(url) {
            var _this4 = this;

            this.hasDuplicateUrlError = false;
            var index = this.othersSite.length - 1;
            if (this.othersSite.length > 1) {
                this.othersSite.forEach(function (value, key) {
                    if (value.url === url && key !== index) {
                        _this4.hasDuplicateUrlError = true;
                        _this4.metaInfoLoading = false;
                        _this4.metaData = true;
                    }
                });
                this.$set(this.duplicateUrl, index, this.hasDuplicateUrlError);
            }
            if (!this.hasDuplicateUrlError) {
                this.metaInfoLoading = true;
                var a = this.othersSite[index];

                this.othersSite[index] = {};
                this.othersSite[index].url = a.url;
                this.othersSite[index].quantity = a.quantity;
                this.othersSite[index].instructions = a.instructions;

                __WEBPACK_IMPORTED_MODULE_3__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].metaInfo + url).then(function (response) {
                    if (Object.keys(response.data).length) {
                        _this4.metaData = true;
                        _this4.metaInfoLoading = false;
                        var merged = _extends({}, response.data, _this4.othersSite[index]);

                        __WEBPACK_IMPORTED_MODULE_4_vue___default.a.set(_this4.othersSite, index, merged);
                    } else {
                        _this4.metaData = true;
                        _this4.metaInfoLoading = false;
                    }
                }).catch(function (error) {
                    _this4.metaInfoLoading = false;
                });
            }
        },
        increaseSiteQuantity: function increaseSiteQuantity(index) {
            this.othersSite[index].quantity++;
        },
        decreaseSiteQuantity: function decreaseSiteQuantity(index) {
            if (this.othersSite[index].quantity > 1) {
                this.othersSite[index].quantity--;
            }
        }
    }
});

/***/ }),

/***/ 1311:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "landing-page" }, [
    _c("div", { staticClass: "container-fluid default-section no-space" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row " }, [
        _c("div", { staticClass: "col-md-12 search-filter" }, [
          _c("ul", { staticClass: "nav nav-tabs" }, [
            _c(
              "li",
              { staticClass: "active" },
              [
                _c(
                  "a",
                  {
                    attrs: { "data-toggle": "tab" },
                    on: {
                      click: function($event) {
                        _vm.activeTabName(_vm.api.amazonUrl)
                      }
                    }
                  },
                  [_c("img", { attrs: { src: "/images/logo/amazon.png" } })]
                ),
                _vm._v(" "),
                _c("tooltip-box", { attrs: { msg: _vm.tooltipMessage } })
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { "data-toggle": "tab" },
                  on: {
                    click: function($event) {
                      _vm.activeTabName(_vm.api.ebayUrl)
                    }
                  }
                },
                [_c("img", { attrs: { src: "/images/logo/ebay.png" } })]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { "data-toggle": "tab", id: "test-others" },
                  on: {
                    click: function($event) {
                      _vm.activeTabName("others-search")
                    }
                  }
                },
                [_c("img", { attrs: { src: "/images/logo/others.png" } })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "form",
              {
                attrs: { name: "amazonEbaySearchForm" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.searchPostRequest($event)
                  }
                }
              },
              [
                _vm.activeDomain === _vm.api.amazonUrl
                  ? _c(
                      "div",
                      {
                        staticClass: "tab-pane fade in active",
                        attrs: { id: "amazon" }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.searchModel,
                              expression: "searchModel"
                            }
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "Finds all kind of amazon products"
                          },
                          domProps: { value: _vm.searchModel },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.searchModel = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("button", { attrs: { type: "submit" } }, [
                          _c("img", {
                            attrs: { src: "/images/icon/search.png" }
                          }),
                          _vm._v("Search\n                                "),
                          _vm.amazonEbayLoading
                            ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                            : _vm._e()
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeDomain === _vm.api.ebayUrl
                  ? _c(
                      "div",
                      {
                        staticClass: "tab-pane fade in active",
                        attrs: { id: "ebay" }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.searchModel,
                              expression: "searchModel"
                            }
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "Finds all kind of ebay products"
                          },
                          domProps: { value: _vm.searchModel },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.searchModel = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("button", { attrs: { type: "submit" } }, [
                          _c("img", {
                            attrs: { src: "/images/icon/search.png" }
                          }),
                          _vm._v("Search\n                                "),
                          _vm.amazonEbayLoading
                            ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                            : _vm._e()
                        ])
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { name: "othersSearchForm" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitOthersSiteForm($event)
                  }
                }
              },
              [
                _vm.activeDomain === "others-search"
                  ? _c(
                      "div",
                      {
                        staticClass: "tab-pane fade in active others-products",
                        attrs: { id: "overstock" }
                      },
                      [
                        _vm._l(_vm.othersSite, function(site, key) {
                          return _c(
                            "div",
                            {
                              staticClass: "others-row",
                              attrs: { index: key }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "others-column",
                                  class: { "has-error": _vm.errors.has("url") }
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: site.url,
                                        expression: "site.url"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required|url:require_protocol",
                                        expression:
                                          "'required|url:require_protocol'"
                                      }
                                    ],
                                    class: {
                                      input: true,
                                      "has-error": _vm.errors.has("url")
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "url" + key,
                                      placeholder:
                                        "Please copy and paste your products link"
                                    },
                                    domProps: { value: site.url },
                                    on: {
                                      change: function($event) {
                                        _vm.getMetaInfo(site.url)
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          site,
                                          "url",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "help-block error text-danger"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.errors.has(
                                                "url" + key
                                              ),
                                              expression:
                                                "errors.has('url' + key)"
                                            }
                                          ]
                                        },
                                        [_vm._v("The link is invalid")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.otherSiteError[key + ".url"],
                                        function(error) {
                                          return _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.otherSiteError[
                                                      key + ".url"
                                                    ],
                                                  expression:
                                                    "otherSiteError[key + '.url']"
                                                }
                                              ]
                                            },
                                            [_vm._v(_vm._s(error.required))]
                                          )
                                        }
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.duplicateUrl[key],
                                          expression: "duplicateUrl[key]"
                                        }
                                      ],
                                      staticClass:
                                        "help-block error text-danger"
                                    },
                                    [
                                      _c("span", [
                                        _vm._v("This url is already exists")
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "others-column modify" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: site.quantity,
                                        expression: "site.quantity"
                                      }
                                    ],
                                    attrs: {
                                      type: "number",
                                      name: "quantity",
                                      placeholder: "Quantity"
                                    },
                                    domProps: { value: site.quantity },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          site,
                                          "quantity",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "inc-item" }, [
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.increaseSiteQuantity(key)
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "fas fa-plus"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.decreaseSiteQuantity(key)
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "fas fa-minus"
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "others-column" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: site.instructions,
                                      expression: "site.instructions"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    name: "instructions",
                                    placeholder: "Special Instructions"
                                  },
                                  domProps: { value: site.instructions },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        site,
                                        "instructions",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _vm.othersSite.length > 1
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "search-url-del",
                                      class:
                                        _vm.othersSite.length > 1 &&
                                        _vm.othersSite.length - 1 === key
                                          ? "others-last-delete-button"
                                          : ""
                                    },
                                    [
                                      _c(
                                        "button",
                                        { attrs: { type: "button" } },
                                        [
                                          _c("a", {
                                            staticClass: "fas fa-trash-alt",
                                            on: {
                                              click: function($event) {
                                                _vm.removeButton(key)
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "search-url-inc" }, [
                          _c("button", { attrs: { type: "button" } }, [
                            _c("a", {
                              staticClass: "fas fa-plus",
                              on: { click: _vm.addOthersRow }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "search-url-inc" }, [
                          _c("button", { attrs: { type: "button" } }, [
                            _vm.metaInfoLoading
                              ? _c("i", {
                                  staticClass: "fas fa-spinner fa-spin"
                                })
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "search-url-btn" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn",
                              attrs: {
                                dusk: "test-cart",
                                type: "submit",
                                disabled: !_vm.metaData
                              }
                            },
                            [
                              _c("span", [_vm._v("Add to Cart")]),
                              _vm._v(" "),
                              _vm.otherSiteLoading
                                ? _c("i", {
                                    staticClass: "fas fa-spinner fa-spin"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-shopping-cart"
                                  })
                            ]
                          )
                        ])
                      ],
                      2
                    )
                  : _vm._e()
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row filter-background-image no-space" }, [
      _c("div", { staticClass: "col-md-12 no-space" }, [
        _c("img", { attrs: { src: "/images/filter-background.png" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c1b31aa", module.exports)
  }
}

/***/ })

});
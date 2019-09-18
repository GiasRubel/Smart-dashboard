webpackJsonp([68],{

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1341)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1150)
/* template */
var __vue_template__ = __webpack_require__(1343)
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

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cookie__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_axios_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            activeDomain: 'shop-01-xo-us',
            activeField: 'field-keywords',
            search: {
                'shop-01-xo-us': {
                    query: 's',
                    fieldName: 'field-keywords'
                },
                'shop-02-xo-us': {
                    query: 'sch/i.html',
                    fieldName: '_nkw'
                },
                'shop-03-xo-us': {
                    query: 'search',
                    fieldName: 'keywords'
                }
            },
            searchModel: '',
            othersSite: [{}],
            metaInfoDetails: {}
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

            axios.post(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].productSearch, postData).then(function (response) {
                window.location.replace('http://' + _this.activeDomain + '.' + __WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].localHostUrl + _this.search[_this.activeDomain].query + '?' + _this.activeField + '=' + _this.searchModel + '&shop_session_id=' + postData.shop_session_id);
            }).catch(function (error) {});
        },
        removeButton: function removeButton(index) {
            this.othersSite.splice(index, 1);
        },
        addOthersRow: function addOthersRow() {
            var index = this.othersSite.length - 1;
            if (this.othersSite[index].url && this.othersSite[index].quantity) {
                this.othersSite.push({});
            }
        },
        submitOthersSiteForm: function submitOthersSiteForm() {
            var _this2 = this;

            var sessionId = __WEBPACK_IMPORTED_MODULE_1__services_cookie__["a" /* default */].getCookie('session_id');
            console.log(this.othersSite);
            __WEBPACK_IMPORTED_MODULE_2__services_axios_service__["a" /* default */].postData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].storeItemUrl, this.othersSite).then(function (response) {
                if (response.data) {
                    _this2.$awn.success(response.data.message);
                    _this2.$router.push('/cart?session_id=' + sessionId);
                }
            });
        },
        getMetaInfo: function getMetaInfo(url) {
            var _this3 = this;

            var sessionId = __WEBPACK_IMPORTED_MODULE_1__services_cookie__["a" /* default */].getCookie('session_id');
            var index = this.othersSite.length - 1;
            this.metaInfoDetails = {};
            __WEBPACK_IMPORTED_MODULE_2__services_axios_service__["a" /* default */].getData(__WEBPACK_IMPORTED_MODULE_0__config_api__["a" /* default */].metaInfo + url).then(function (response) {
                _this3.metaInfoDetails = response.data;
                _this3.metaInfoDetails['session_id'] = sessionId;
                _this3.metaInfoDetails['quantity'] = _this3.othersSite[index].quantity;
                _this3.metaInfoDetails['url'] = _this3.othersSite[index].url;
                _this3.metaInfoDetails['instructions'] = _this3.othersSite[index].instructions;
                __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(_this3.othersSite, index, _this3.metaInfoDetails);
            });
        }
    }
});

/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1342);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("0e6f6920", content, false, {});
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

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.tooltip-toggle[data-v-6c1b31aa] {\n    cursor: pointer;\n    position: relative;\n}\n.tooltip-toggle[data-v-6c1b31aa]::before {\n    position: absolute;\n    top: -14px;\n    left: -45px;\n    background-color: #7f8284;\n    border-radius: 5px;\n    color: #fff;\n    content: attr(data-tooltip);\n    padding: 5px;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 160px;\n}\n.tooltip-toggle[data-v-6c1b31aa]::after {\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #7f8284;\n    content: \" \";\n    font-size: 0;\n    line-height: 0;\n    margin-left: -5px;\n    width: 0;\n}\n.tooltip-toggle[data-v-6c1b31aa]::before,\n.tooltip-toggle[data-v-6c1b31aa]::after {\n    color: #efefef;\n    font-family: monospace;\n    font-size: 12px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center;\n}\n.tooltip-toggle[data-v-6c1b31aa]:hover::before,\n.tooltip-toggle[data-v-6c1b31aa]:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 1343:
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
            _c("li", { staticClass: "active" }, [
              _c(
                "a",
                {
                  staticClass: "tooltip-toggle",
                  attrs: {
                    "data-toggle": "tab",
                    "data-tooltip":
                      "Amazon and the Amazon logo are trademarks of Amazon.com,\n                                         Inc. or its affiliates"
                  },
                  on: {
                    click: function($event) {
                      _vm.activeTabName("shop-01-xo-us")
                    }
                  }
                },
                [_c("img", { attrs: { src: "/images/logo/amazon.png" } })]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { "data-toggle": "tab" },
                  on: {
                    click: function($event) {
                      _vm.activeTabName("shop-02-xo-us")
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
                  attrs: { "data-toggle": "tab" },
                  on: {
                    click: function($event) {
                      _vm.activeTabName("shop-03-xo-us")
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
                _vm.activeDomain === "shop-01-xo-us"
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
                        _vm._m(1)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeDomain === "shop-02-xo-us"
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
                        _vm._m(2)
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
                _vm.activeDomain === "shop-03-xo-us"
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
                              _c("div", { staticClass: "others-column" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: site.url,
                                      expression: "site.url"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    name: "url",
                                    placeholder:
                                      "Please Copy and Paste your products url"
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
                                      _vm.$set(site, "url", $event.target.value)
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "others-column" }, [
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
                                _vm._m(3, true)
                              ]),
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
                                    placeholder: "Instructions !"
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
                              _c("div", { staticClass: "search-url-del" }, [
                                _c("button", { attrs: { type: "button" } }, [
                                  _c("a", {
                                    staticClass: "fas fa-trash-alt",
                                    on: {
                                      click: function($event) {
                                        _vm.removeButton(key)
                                      }
                                    }
                                  })
                                ])
                              ])
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
                        _vm._m(4)
                      ],
                      2
                    )
                  : _vm._e()
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(5)
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { attrs: { type: "submit" } }, [
      _c("img", { attrs: { src: "/images/icon/search.png" } }),
      _vm._v("Search\n                            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { attrs: { type: "submit" } }, [
      _c("img", { attrs: { src: "/images/icon/search.png" } }),
      _vm._v("Search\n                            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inc-item" }, [
      _c("span", { staticClass: "fas fa-plus" }),
      _vm._v(" "),
      _c("span", { staticClass: "fas fa-minus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-url-btn" }, [
      _c("button", { attrs: { type: "submit" } }, [
        _c("span", [_vm._v("Submit")]),
        _c("i", { staticClass: "fas fa-arrow-right" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "container-fluid default-section no-space" },
      [
        _c("div", { staticClass: "row highlighted-feature no-space" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "tooltip" }, [
                _vm._v("Hover over me\n                        "),
                _c("span", { staticClass: "tooltiptext" }, [
                  _vm._v("Tooltip text")
                ])
              ]),
              _vm._v(" "),
              _c("ul", [
                _c("li", [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", {
                      attrs: { src: "images/icon/payment-card.png" }
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Easy & Secure Payment System")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", { attrs: { src: "images/icon/plane.png" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Straight Delivery to Your Door")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", { attrs: { src: "images/icon/headphone.png" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("24 Hours Customer Service & Help")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", { attrs: { src: "images/icon/security.png" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("100% Secure & Reliable")])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
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
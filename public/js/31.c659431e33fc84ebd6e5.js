webpackJsonp([31],{

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1286)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1288)
/* template */
var __vue_template__ = __webpack_require__(1289)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d2f1380"
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
Component.options.__file = "resources/js/pages/common/NotAllowed.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d2f1380", Component.options)
  } else {
    hotAPI.reload("data-v-2d2f1380", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1287);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("10bcef7e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d2f1380\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotAllowed.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d2f1380\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotAllowed.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\ninput[type=number][data-v-2d2f1380]::-webkit-inner-spin-button,\ninput[type=number][data-v-2d2f1380]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type='number'][data-v-2d2f1380] {\n  -moz-appearance: textfield;\n}\n.btn-continue button[data-v-2d2f1380] {\n  -webkit-box-shadow: 3px 3px 3px -3px #ddd;\n          box-shadow: 3px 3px 3px -3px #ddd;\n}\n.tooltip-box[data-v-2d2f1380] {\n  -webkit-box-shadow: 0 2px 9px -3px rgba(127, 127, 127, 0.5);\n          box-shadow: 0 2px 9px -3px rgba(127, 127, 127, 0.5);\n}\n.no-space[data-v-2d2f1380] {\n  margin: 0;\n  padding: 0;\n}\ninput[data-v-2d2f1380], select[data-v-2d2f1380] {\n  color: #333;\n}\n.cbx[data-v-2d2f1380] {\n  margin: auto;\n  -webkit-user-select: none;\n  -webkit-appearance: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  cursor: pointer;\n  font-weight: normal;\n}\n.cbx span[data-v-2d2f1380] {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n.cbx span[data-v-2d2f1380]:first-child {\n      position: relative;\n      width: 16px;\n      height: 16px;\n      border-radius: 3px;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      vertical-align: middle;\n      border: 2px solid #9098A9;\n      -webkit-transition: all .2s ease;\n      transition: all .2s ease;\n}\n.cbx span:first-child svg[data-v-2d2f1380] {\n        position: absolute;\n        top: 1px;\n        left: 0;\n        fill: none;\n        stroke: #FFFFFF;\n        stroke-width: 2;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-dasharray: 16px;\n        stroke-dashoffset: 16px;\n        -webkit-transition: all .3s ease;\n        transition: all .3s ease;\n        -webkit-transition-delay: .1s;\n                transition-delay: .1s;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n}\n.cbx span:first-child svg[data-v-2d2f1380]:before {\n          content: \"\";\n          width: 100%;\n          height: 100%;\n          background: #44b3e6;\n          display: block;\n          -webkit-transform: scale(0);\n                  transform: scale(0);\n          opacity: 1;\n          border-radius: 50%;\n}\n.cbx span[data-v-2d2f1380]:last-child {\n      padding-left: 8px;\n}\n.cbx span:hover span[data-v-2d2f1380]:first-child {\n      border-color: #44b3e6;\n}\n.inp-cbx:checked + .cbx span[data-v-2d2f1380]:first-child {\n  background: #44b3e6;\n  border-color: #44b3e6;\n  -webkit-animation: wave-data-v-2d2f1380 .4s ease;\n          animation: wave-data-v-2d2f1380 .4s ease;\n}\n.inp-cbx:checked + .cbx span:first-child svg[data-v-2d2f1380] {\n    stroke-dashoffset: 0;\n}\n.inp-cbx:checked + .cbx span:first-child svg[data-v-2d2f1380]:before {\n      -webkit-transform: scale(3.5);\n              transform: scale(3.5);\n      opacity: 0;\n      -webkit-transition: all .6s ease;\n      transition: all .6s ease;\n}\n@-webkit-keyframes wave-data-v-2d2f1380 {\n50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n}\n}\n@keyframes wave-data-v-2d2f1380 {\n50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n}\n}\n.radio-btn[data-v-2d2f1380] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.radio-btn input[data-v-2d2f1380] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n.radio-btn input:checked ~ .checkmark[data-v-2d2f1380] {\n    background-color: #44b3e6;\n}\n.radio-btn input:checked ~ .checkmark[data-v-2d2f1380]:after {\n      display: block;\n}\n.radio-btn:hover input ~ .checkmark[data-v-2d2f1380] {\n    background: #44b3e6;\n}\n.radio-btn .checkmark[data-v-2d2f1380]:after {\n    top: 3px;\n    left: 3px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: white;\n}\n\n/* Create a custom radio button */\n.checkmark[data-v-2d2f1380] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 2px solid #44b3e6;\n  border-radius: 50%;\n  background: transparent;\n}\n.checkmark[data-v-2d2f1380]:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\nselect[data-v-2d2f1380] {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  /* Likely future */\n}\n.button-light[data-v-2d2f1380], .payment-status .payment-notification button[data-v-2d2f1380], .btn-continue button[data-v-2d2f1380], .restricted-notification button[data-v-2d2f1380] {\n  border: none;\n  outline: none;\n  padding: 7px 15px;\n  background-color: #e4425c;\n  color: #fff;\n}\n.social-icon[data-v-2d2f1380] {\n  clear: both;\n}\n.social-icon ul[data-v-2d2f1380] {\n    text-align: center;\n    padding: 0;\n}\n.social-icon ul li[data-v-2d2f1380] {\n      display: inline-block;\n}\n.social-icon ul li a[data-v-2d2f1380] {\n        padding: 12px 13px;\n        margin: 0 5px;\n        background-color: #808080;\n        color: #fff;\n        display: inline-block;\n        width: 35px;\n        height: 35px;\n        text-align: center;\n        border-radius: 50%;\n        position: relative;\n}\n.social-icon ul li a span[data-v-2d2f1380] {\n          font-size: 18px;\n          position: absolute;\n          left: 9px;\n          bottom: 9px;\n          text-align: center;\n          width: 15px;\n}\n.social-icon p[data-v-2d2f1380] {\n    text-align: center;\n    color: #afd138;\n    font-size: 14px !important;\n    margin: 0;\n    padding: 0 0 5px 0 !important;\n}\n.col-3[data-v-2d2f1380] {\n  display: block;\n  width: 35%;\n}\n.col-9[data-v-2d2f1380] {\n  display: block;\n  width: 62%;\n}\n.col-6[data-v-2d2f1380] {\n  display: block;\n  width: calc(100% / 2 - 5px);\n}\n.col-8[data-v-2d2f1380] {\n  width: 66.66%;\n}\n.col-4[data-v-2d2f1380] {\n  width: 33.33%;\n}\n.fullwidth[data-v-2d2f1380] {\n  width: 100% !important;\n}\n.left[data-v-2d2f1380] {\n  float: left;\n  text-align: left;\n}\n.right[data-v-2d2f1380] {\n  float: right;\n  text-align: right;\n}\n.active[data-v-2d2f1380] {\n  color: #20c461;\n}\n.notifications2[data-v-2d2f1380] {\n  width: 100%;\n  background: #fdf2f4;\n  padding: 8px 10px;\n  border: 1px solid #fde8ec;\n  margin: 15px 0;\n  height: auto;\n  overflow: hidden;\n}\n.notifications2 span[data-v-2d2f1380] {\n    width: 30px;\n    display: block;\n}\n.notifications2 div[data-v-2d2f1380] {\n    float: left;\n    width: 75%;\n}\n.notifications2 div[data-v-2d2f1380]:first-child {\n      width: 30px;\n}\n.notifications2 div[data-v-2d2f1380]:last-child {\n      width: 30px;\n      float: right;\n}\n.notifications2 div p[data-v-2d2f1380] {\n      padding: 5px;\n      margin: 0;\n      color: #c3808b;\n}\n.notifications2 div .fa-info[data-v-2d2f1380] {\n      color: #afd138;\n      padding: 5px;\n      background: #fff;\n      border-radius: 50%;\n      width: 20px;\n      text-align: center;\n      float: left;\n      margin: 5px;\n      font-size: 10px;\n}\n.notifications2 div .fa-times[data-v-2d2f1380] {\n      color: #e4425c;\n      padding: 5px;\n      background: #fff;\n      border-radius: 50%;\n      width: 20px;\n      text-align: center;\n      float: right;\n      font-size: 10px;\n      margin: 5px;\n}\n.payment-status[data-v-2d2f1380] {\n  max-width: 650px;\n  margin: 0 auto;\n  text-align: center;\n}\n.payment-status .payment-notification[data-v-2d2f1380] {\n    text-align: center;\n    margin: 5% auto;\n}\n.payment-status .payment-notification button[data-v-2d2f1380] {\n      text-align: center;\n      margin: 30px auto;\n      padding: 10px 20px;\n      border-radius: 20px;\n}\n.payment-status .payment-notification strong[data-v-2d2f1380] {\n      font-size: 21px;\n}\n.payment-status h3[data-v-2d2f1380] {\n    margin: 10% 0 0;\n    font-size: 20px;\n}\n.payment-status h4[data-v-2d2f1380] {\n    color: #333;\n}\n.restricted-notification[data-v-2d2f1380] {\n  text-align: center;\n  padding: 15px;\n  margin: 15px;\n}\n.restricted-notification span[data-v-2d2f1380] {\n  color: #e4425c;\n  font-size: 42px;\n}\n.restricted-notification button[data-v-2d2f1380] {\n  border: none;\n  outline: none;\n  padding: 7px 15px;\n  background-color: #e4425c;\n  color: #fff;\n  border-radius: 20px;\n}\n.help-block span[data-v-2d2f1380] {\n  background: #fdf2f4;\n  padding: 5px;\n  color: #c3808b;\n}\n.card-error[data-v-2d2f1380] {\n  position: absolute;\n}\n.cvc-error[data-v-2d2f1380] {\n  position: absolute;\n  top: -45px;\n}\n.tooltip[data-v-2d2f1380] {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n.tooltip .tooltiptext[data-v-2d2f1380] {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -60px;\n}\n.tooltip:hover .tooltiptext[data-v-2d2f1380] {\n  visibility: visible;\n}\n.facebook[data-v-2d2f1380] {\n  background-color: #3b5998 !important;\n}\n.twitter[data-v-2d2f1380] {\n  background-color: #1da1f2 !important;\n}\n.linkedin[data-v-2d2f1380] {\n  background-color: #0077b5 !important;\n}\n.gplus[data-v-2d2f1380] {\n  background-color: #ea4335 !important;\n}\n.instagram[data-v-2d2f1380] {\n  background-color: #954ac9 !important;\n}\ninput[type=text][data-v-2d2f1380], input[type=password][data-v-2d2f1380], select[data-v-2d2f1380] {\n  outline: none;\n}\n.strong[data-v-2d2f1380] {\n  font-weight: 500 !important;\n  padding: 0 5px;\n}\n[placeholder][data-v-2d2f1380]:focus::-webkit-input-placeholder {\n  -webkit-transition: text-indent 0.5s 0.5s ease;\n  transition: text-indent 0.5s 0.5s ease;\n  text-indent: -150%;\n  opacity: 1;\n}\n[placeholder][data-v-2d2f1380]:focus::-moz-input-placeholder {\n  -webkit-transition: text-indent 0.5s 0.5s ease;\n  transition: text-indent 0.5s 0.5s ease;\n  text-indent: -150%;\n  opacity: 1;\n}\nbutton[data-v-2d2f1380]:focus {\n  outline: none;\n}\n.tooltip-box[data-v-2d2f1380] {\n  border: 1px solid #e4425c;\n  background: #fff;\n  padding: 0 10px 10px;\n  position: absolute;\n  bottom: 40px;\n  display: none;\n  border-radius: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.tooltip-box .tooltip-title[data-v-2d2f1380] {\n    border-radius: 10px 10px 0 0;\n    height: auto;\n    overflow: hidden;\n    background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), color-stop(#fbfbfb), to(#fbfbfb));\n    background: linear-gradient(#fbfbfb, #fbfbfb, #fbfbfb);\n    padding: 2px 10px;\n    margin: 0 -10px;\n}\n.tooltip-box .tooltip-title h5[data-v-2d2f1380] {\n      color: #333;\n      font-weight: 700;\n}\n.tooltip-box .tooltip-title span[data-v-2d2f1380] {\n      float: right;\n      color: #333;\n      cursor: pointer;\n}\n.tooltip-box .tooltip-title span[data-v-2d2f1380]:hover {\n        color: #e4425c;\n}\n.tooltip-box .arrow-bottom[data-v-2d2f1380] {\n    margin: 0 auto;\n    position: relative;\n}\n.tooltip-box .arrow-bottom span[data-v-2d2f1380] {\n      width: 10px;\n      height: 10px;\n      border-left: 1px solid #e4425c;\n      border-bottom: 1px solid #e4425c;\n      position: absolute;\n      right: 35%;\n      bottom: -16px;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      background: #fff;\n}\n.tooltip-box p[data-v-2d2f1380] {\n    padding: 15px 0 0;\n    color: #333;\n    margin: 0;\n}\n.btn-continue[data-v-2d2f1380] {\n  width: 100%;\n  margin: 15px 0;\n}\n.btn-continue button[data-v-2d2f1380] {\n    float: right;\n    border-radius: 20px;\n    background: #44b3e6;\n}\n.btn-continue button[data-v-2d2f1380]:hover {\n      background: #e4425c;\n}\n.restricted-notification[data-v-2d2f1380] {\n  text-align: center;\n  padding: 15px;\n  margin: 15px;\n}\n.restricted-notification p[data-v-2d2f1380] {\n    max-width: 59%;\n    margin: 0 auto;\n    padding: 10px 0;\n}\n.restricted-notification span[data-v-2d2f1380] {\n    color: #e4425c;\n    font-size: 42px;\n}\n.restricted-notification button[data-v-2d2f1380] {\n    border-radius: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1288:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {
        this.countDown(20, 'status');
    },

    methods: {
        historyBack: function historyBack() {
            if (this.$route.query.redirect) {
                location.replace(this.$route.query.redirect);
            }
            history.back(-2);
        },
        countDown: function countDown(secs, elem) {
            var _this = this;

            var element = document.getElementById(elem);
            element.innerHTML = "You'll be redirected back automatically in " + secs + " seconds, or just";

            if (secs < 1) {
                clearTimeout(timer);
                if (this.$route.query.redirect) {
                    location.replace(this.$route.query.redirect);
                }
                history.back(-2);
            }

            secs--;
            var timer = setTimeout(function () {
                _this.countDown(secs, elem);
            }, 2000);
        }
    }
});

/***/ }),

/***/ 1289:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "not-allowed-section" }, [
    _c("div", { staticClass: "restricted-notification" }, [
      _c("span", { staticClass: "fas fa-exclamation-triangle" }),
      _vm._v(" "),
      _c("h3", [
        _vm._v(
          "We hope you're having fun shopping with us, but sadly this action isn't allowed"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Not all functionality and items on Amazon are supported through our service, for example you cannot sign\n            in to your Amazon account, purchase items that are delivered through download, or buy subscriptions."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", { attrs: { id: "status" } }),
        _vm._v(" "),
        _c("button", { on: { click: _vm.historyBack } }, [
          _vm._v("Back to Shopping")
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-2d2f1380", module.exports)
  }
}

/***/ })

});
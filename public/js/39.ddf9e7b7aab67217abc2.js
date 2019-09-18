webpackJsonp([39],{

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1319)
/* template */
var __vue_template__ = __webpack_require__(1320)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/components/login/SocialLogin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ae1dd70a", Component.options)
  } else {
    hotAPI.reload("data-v-ae1dd70a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            redirectToThisRoute: '',
            userData: {}
        };
    },
    created: function created() {
        this.saveData();
    },

    methods: {
        saveData: function saveData() {
            this.redirectToThisRoute = this.$route.path === '/cart' ? '/cart' : this.$route.query.from ? this.$route.query.from : '/';
            this.userData = {
                userId: this.$route.query.id,
                username: this.$route.query.name,
                email: this.$route.query.email,
                isEmailVerify: this.$route.query.is_email_verify,
                isBrowserVerify: this.$route.query.is_browser_verify,
                mobile: this.$route.query.mobile,
                redirect: this.redirectToThisRoute,
                token: this.$route.query.token,
                verify: true
            };
            if (this.userData.token) {
                var currentPopupMenu = window.self;
                window.opener.postMessage({ authUser: this.userData, redirect: this.redirectToThisRoute }, "*");
                currentPopupMenu.close();
            }
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (from.path === '/cart' && !to.query.from) to.query.from = '/cart';
        next();
    }
});

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ae1dd70a", module.exports)
  }
}

/***/ })

});
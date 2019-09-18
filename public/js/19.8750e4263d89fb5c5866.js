webpackJsonp([19],{

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1387)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1389)
/* template */
var __vue_template__ = __webpack_require__(1390)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72210c24"
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
Component.options.__file = "resources/js/pages/footer-pages/ProhibitedItems.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72210c24", Component.options)
  } else {
    hotAPI.reload("data-v-72210c24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1388);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("25998ba2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72210c24\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProhibitedItems.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72210c24\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProhibitedItems.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-72210c24] {\n    padding: 20px 0;\n}\nh1[data-v-72210c24] {\n    text-transform: uppercase;\n}\nul[data-v-72210c24] {\n    list-style-type: square;\n}\n", ""]);

// exports


/***/ }),

/***/ 1389:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }
});

/***/ }),

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "footer-content" }, [
        _c("h3", [_vm._v("Prohibited Items:")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                Due to regulations and laws, there are particular items that cannot be imported into a particular\n                destination country. If you happen to order an item that is considered to be prohibited by our international\n                shipping partner or the destination country’s authorities, ShopnShipBD will notify you of these items and\n                allow you to remove them from your cart in order to continue with your purchase.\n                In the occasion that a prohibited item is not detected automatically, your order may be canceled in full or\n                the ShopnShipBD team will be in contact with you to provide further details.\n                Generally, these items have to do with contraband, firearms, narcotics, tobacco related products, spirits,\n                livestock, gambling apparatus and surveillance equipment. For a full declaration, please visit destination\n                country’s Customs Website.\n                An example list is provided below:\n            "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("General: ")]),
            _vm._v(
              "Power banks, batteries, standalone batteries, metal detector, radar detector, lock\n                        picks, telescopes, magnets, Tattoo machine and equipment.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Dangerous items: ")]),
            _vm._v(
              "Including all types of aerosols (hair spray, deodorant, perfumes etc.),\n                        gases,\n                        and pressurized containers, corrosives, explosives, flammable liquids, flammable solids, and\n                        radioactive\n                        materials, oxidizing substances and organic peroxides solids, flammable chemicals, Monoxide Hair\n                        Regrowth Treatment.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Drugs: ")]),
            _vm._v(
              "Cocaine, cannabis resin, LSD, narcotics, morphine, opium, psychotropic substances,\n                        etc.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Animals: ")]),
            _vm._v(
              "Live or dead animals, insects, reptiles of any kind, animal products, animal skins,\n                        meat\n                        and fur including hair products and pets supplements.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Electronics: ")]),
            _vm._v(
              "Shipments containing laser (as laser hair removals or laser pens),\n                        walkie-talkie,\n                        used laptops manufactured before 2008, smart watches containing sim slots or/and camera, remote\n                        control\n                        devices, GPS trackers, sports cameras and dash cameras, inspection camera.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Fake or dummy games: ")]),
            _vm._v(
              "Toy weapons, paint ball guns, BB guns, antique weapons, swords, knives,\n                        fake\n                        grenades, handcuffs, items that could be used as weapons, etc.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Gambling: ")]),
            _vm._v(
              "Lottery tickets and gambling chips and devices.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Fragile: ")]),
            _vm._v(
              "Glassware, ceramics, lighting (fluorescent tubes, neon lighting, x-ray tubes, light\n                        bulbs, etc.).\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Miscellaneous: ")]),
            _vm._v(
              "Fake money, bullion, gold, diamond, jewelry.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Perishables: ")]),
            _vm._v(
              "Foodstuffs and perishable food articles and beverages requiring refrigeration or\n                        other environmental control.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Plants: ")]),
            _vm._v(
              "Plants and plant material, including seeds and cut flowers.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Pornography: ")]),
            _vm._v(
              "Foul or disgusting material, pornography and/or obscene material, any\n                        unsolicited\n                        indecent item or representation of any kind.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Sharp tools or weapons: ")]),
            _vm._v(
              "Scissors, knives, needles and cartridges, guns and gun accessories,\n                        slingshots, stun gun, pepper spray.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Tobacco products: ")]),
            _vm._v(
              "cigarettes, cigars, electronic cigarettes and accessories, tobacco, hookah\n                        and hookah's accessories.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Spy items: ")]),
            _vm._v(
              "All small cameras or all cameras with microphones. Laser pen, any\n                        games/pens/watches\n                        that contain spy cams.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Toys: ")]),
            _vm._v(
              "Drones and quadcopters and robots and slime.\n                    "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Liquids: ")]),
            _vm._v(
              "Liquids in large quantities, nail polish, paint, and ink.\n                    "
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72210c24", module.exports)
  }
}

/***/ })

});
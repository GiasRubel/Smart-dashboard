webpackJsonp([24],{

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1357)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1359)
/* template */
var __vue_template__ = __webpack_require__(1360)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-719267f0"
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
Component.options.__file = "resources/js/pages/footer-pages/FrequentlyAskQuestion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-719267f0", Component.options)
  } else {
    hotAPI.reload("data-v-719267f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1358);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6906b115", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-719267f0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FrequentlyAskQuestion.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-719267f0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FrequentlyAskQuestion.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-719267f0] {\n    padding: 20px 0;\n}\nh1[data-v-719267f0], h4[data-v-719267f0] {\n    text-transform: uppercase;\n}\nul[data-v-719267f0] {\n    list-style-type: square;\n}\nol[data-v-719267f0] {\n    list-style-type: lower-alpha;\n}\n", ""]);

// exports


/***/ }),

/***/ 1359:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1360:
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
        _c("h3", [_vm._v("Frequently Ask Question:")]),
        _vm._v(" "),
        _c("h4", [_vm._v("General")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("What is ShopnShipBD?")]),
            _c("br"),
            _vm._v(
              "\n                ShopnShipBD is a unique service that allows you to buy items from world's largest shopping websites\n                conveniently with your preferred payment method and have them delivered straight to your door!\n                ShopnShipBD calculates the lowest customs and shipping charges and takes care of all of the\n                associated payments, or other necessary arrangements for your order on your behalf*. All the great\n                things you want to order just come straight to your doorstep. No problem.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Why use ShopnShipBD?")]),
            _c("br"),
            _vm._v(
              "\n                Don't have a credit card that works on shopping sites? This site doesn’t ship to your country? Don't\n                know what the customs and shipment charges are going to be upon arrival to you? ShopnShipBD has got\n                you covered! Unlike other sites, ShopnShipBD has built technology around your world's largest\n                shopping websites to localize it for users. We enable preferred payment methods, have set up an\n                international shipment forwarding service for you to get your items shipped to you, and finally\n                built a customs calculator that lets you know what charges will be before you even confirm your\n                order. Everything is delivered right to your door so you won't have to worry about anything. There\n                are no surprise charges or additional fees either upon the arrival of your packages.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("How does it work?")]),
            _c("br"),
            _vm._v(
              "\n                Simply visit ShopnShipBD's website, select the website that you want to shop and enter the name of\n                the item you'd like to purchase into the search field on the homepage. You will be taken to shopping\n                site through ShopnShipBD's service and you can build your shopping cart there. When you're done\n                shopping, you simply proceed to checkout and you'll be taken to ShopnShipBD's checkout page with the\n                final price to your door and all the locally required information. You are free to submit your\n                information into the system. Once your payment is processed successfully, The ShopnShipBD team will\n                proceed with placing your order. For orders to be paid through Credit Card, The ShopnShipBD team\n                will proceed with processing your order once the payment has been fulfilled.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("How do I contact customer service?")]),
            _c("br"),
            _vm._v(
              "\n                ShopnShipBD 's main business is customer service. Your satisfaction is our top priority and we'll\n                attend to your needs as well as we can.\n                You can reach us by: Phone at +8801611-967368 (8am - 6pm, Saturday - Thursday).\n                Email to shipnshop.2018@gmail.com.\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Payment")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("Can I pay in Cash?")]),
            _c("br"),
            _vm._v(
              "\n                Credit card is the only available payment option in your country, ShopnShipBD's team is working on\n                providing further payment options soon.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("What if I do not pay for my order?")]),
            _c("br"),
            _vm._v(
              "\n                The order will be canceled. Our policy is that we attempt to contact our customers a number of times\n                before taking action towards their orders. Generally, we attempt to touch base with our customers 3\n                times at different intervals. If we are unable to make contact with you, we automatically cancel\n                your order. Of course, you are free to contact ShopnShipBD 's customer service team to re-enable it\n                later.\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Checkout")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [
              _vm._v(
                'What are the "Subtotal", "Taxes", "Fees" & other charges on the checkout page?'
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                On every ShopnShipBD order you'll see a transparent breakdown of charges and data points associated\n                with your order. They are:\n\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Items in Cart: ")]),
            _vm._v(
              "These are the number of items that you've ordered.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Number of Packages: ")]),
            _vm._v(
              "These are the number of packages your order is shipping in. As\n                you\n                know, there are many merchants selling their goods on shopping sites and they all ship their\n                goods independently. This is to clarify how many shipments you'll be receiving.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Subtotal: ")]),
            _vm._v(
              "This is the price summation of all the items in your cart.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("US Shipping & Taxes: ")]),
            _vm._v(
              "This is the summation of all the local shipment & tax charges on\n                your items within the United States.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Transit Shipping: ")]),
            _vm._v(
              "This is the summation of all the local shipment & tax charges to\n                our\n                transit office, you can select the preferred Transit time for your order.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("International Shipping: ")]),
            _vm._v(
              "This is the charge associated with shipping your whole order\n                from the United States and delivering it to your door.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Local Customs & Taxes: ")]),
            _vm._v(
              "These are charges associated with any customs, clearance or\n                any\n                additional processing fees that apply to your order upon arrival to its destination country.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Fees: ")]),
            _vm._v(
              "These are ShopnShipBD's service fees that are applied to your cart.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Total: ")]),
            _vm._v(
              "This is the total charge for your order given in US Dollars and your local\n                currency. This is the final and only price that you pay.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Is the total price all I have to pay?")]),
            _c("br"),
            _vm._v(
              '\n                The "Total" price you see at checkout is the only price you are required to pay. There aren\'t any\n                hidden fees or extra charges upon arrival. Just a one-time payment that is all-inclusive and\n                worry-free.\n            '
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Why does my order require further review?")]),
            _c("br"),
            _vm._v(
              "\n                ShopnShipBD calculates all of the shipment, customs and delivery charges on the fly and presents\n                them to you at checkout. In few cases, usually with third party items listed online, the item\n                details will not be passed to us electronically and the ShopnShipBD team will have to make a quick\n                human assessment for your order in hopes filling in the missing order information. The process takes\n                a short while and an email with the final price will be sent to you immediately after. Also, you may\n                enter into your My Orders section to view the final price there. You may confirm or cancel your\n                order thereafter.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "What if I do not pay for my order after it's been reviewed?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                After your order has been reviewed, the final price will be sent to you via email or can be seen in\n                the My Orders section of the site. You will also receive an automated call a while after your order\n                is reviewed. There is no commitment to paying for your order at this point. You may choose to cancel\n                via our automated calling system or by contacting our customer service team that's available to you\n                by email or telephone. If no contact is made with the customer, the order will be automatically\n                canceled after the third attempt to get in touch.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Why did I receive an automated call?")]),
            _c("br"),
            _vm._v(
              "\n                Regional ecommerce customers expect to be contacted by the site they place their orders on.\n                ShopnShipBD's automated call system contacts you to confirm the order that you placed on the site.\n                Once you receive the call, you will be prompted to confirm the order, cancel it or leave a message\n                for the customer service department to get back to you if you have any questions. If you cannot\n                answer the call, our system will attempt to contact you at least 3 times at different intervals. If\n                we cannot reach you, your order will be canceled. Orders processed through a Credit Card payment\n                will not receive the automated call since the payment will be fulfilled upon placing the order.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "How was my personal information pre-filled at checkout? Can they be changed?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                If you are a returning customer, at checkout you'll find that your address and phone number are\n                pre-filled into the associated fields for convenience. This is because they have been saved to your\n                profile from the first order that you placed on the site. If you wish to change you information for\n                a particular order you are placing through your account, you may change them directly from the\n                checkout page and the new information will be saved to that particular order. If you are to place a\n                new order, your original information will appear again. If you are looking to change your default\n                information associated with your account, you may do so from the settings section on ShopnShipBD.\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Shipping and Delivery")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("Where will my items be delivered?")]),
            _c("br"),
            _vm._v(
              "\n                Your items will be delivered to the address associated with the order at the point of checkout. Our\n                local courier partners in your area deliver orders to your door. If any additional address\n                information or clarifications are required, the couriers may contact you for advice. On the other\n                hand you can directly receive it from our Dhaka office.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("How long does my order take to arrive?")]),
            _c("br"),
            _vm._v(
              "\n                Orders usually take an average of 9-14 business days to arrive if suppliers that are within the\n                United States are sourcing them. For suppliers that are outside of the United States, orders will\n                take over 14 business days to arrive. Customers should note that ShopnShipBD is not a shipping\n                company in itself, and delays may take place due to matters that are outside of ShopnShipBD's\n                control. These could be related to high shipping season congestion, customs related delays, or\n                simply because of orders getting lost in the mail. ShopnShipBD promises to do its very best in\n                following up on every order to make sure that you are satisfied with the service.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "What if I was not available to receive my packages upon delivery?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                Our delivery partner will arrange for a second delivery trial free of charge. In case of providing\n                an unclear address or an unreachable telephone number, ShopnShipBD will send you a notification by\n                email. If no details were received within 3 business days, you will be responsible for picking up\n                your packages upon an agreed on time from ShopnShipBD office. Packages that are abandoned by their\n                customers for an unreasonable amount of time may be subject to being destroyed without refund.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("How can I know the status of my order?")]),
            _c("br"),
            _vm._v(
              '\n                The status of each order is displayed in the My Orders section on the ShopnShipBD site. The status\n                of the order will display whether it is "Pending Payment", "Paid", "Shipped", "Completed" or\n                "Canceled".\n            '
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v("What do the status updates of my packages mean?")
            ]),
            _c("br"),
            _vm._v(
              "\n                Your package status update could be any of the following:\n                "
            ),
            _c("ul", [
              _c("li", [
                _c("b", [_vm._v("Not shipped yet: ")]),
                _vm._v(
                  "The supplier has not shipped the package yet.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("In-route to United States facility: ")]),
                _vm._v(
                  "Your package is on its way from its supplier to\n                        ShopnShipBD's facility in the United States. Please note that if your supplier is outside of\n                        the US, this will take some time.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Shipped from (Country) facility: ")]),
                _vm._v(
                  "Your package has already arrived to our facility in\n                        the US, and has shipped out from the facility in the country specified. This could either be\n                        the facility in the US, or a facility along a transit route.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Arrived in (Country): ")]),
                _vm._v(
                  "Your package has arrived in the specified country. If this is\n                        the destination country, it will be processed by customs as well as the other necessary\n                        departments, before it is cleared on your behalf and delivered to you. If it is not the\n                        destination country, it will be forwarded to the next hop in the transit route.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Delivery in progress: ")]),
                _vm._v(
                  "Your package is being delivered to you by local courier. Please\n                        be sure to make yourself available at the address you provided and keep you phone close in\n                        case they try to contact you.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Retrying delivery: ")]),
                _vm._v(
                  "The local courier is re-attempting to deliver your package to your\n                        address. You were not available on previous occasions. Please be sure to make yourself, or a\n                        representative to be present at the address you provided to us at checkout. Also, keep your\n                        telephone on alert in case they need to contact you.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Documents delivered: ")]),
                _vm._v(
                  "Depending on laws within the destination country your package is\n                        shipping to, there may be approvals that are required to import your package. In the\n                        occasion that your order requires any of these, the shipment documents will be delivered to\n                        you by the local courier and your package will be placed on hold. After obtaining the\n                        necessary approval, the shipment will be cleared and delivered to you.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Delivered: ")]),
                _vm._v(
                  "Your package has been successfully delivered to your address. Please be\n                        sure to check with other people residing at your address who may have signed for the\n                        packages on your behalf.\n                    "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "The package I have received only contains some of the items I have ordered. Where are my other\n                    items?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                The shopping sites we support has many merchants from various places all around the world selling on\n                their marketplace. Although you might place items in the same cart, they are very likely to ship\n                from different suppliers in separate packages. This will result in multiple packages arriving to\n                you. Once all of the items in your cart ship from their suppliers, you will receive a shipment\n                confirmation email with details around the number of shipments you are scheduled to receive. You may\n                also track your individual shipments and their progress by visiting the My Orders section on\n                ShopnShipBD.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("What if the goods I receive are damaged?")]),
            _c("br"),
            _vm._v(
              "\n                At ShopnShipBD, we guarantee that your package gets to you in the best condition possible. Local\n                customs and security might require opening your packages for inspection. This may alter or ruin the\n                packaging, but we'll do our very best to ensure that the actual products you requested are in the\n                condition you ordered them in. Any proven damages to the functionality of the product will be\n                refunded according to our refund policy for that particular product. No worries.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "What if customs agents or security marshals confiscate my order?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                As a first line of warning, the ShopnShipBD system has pre-set a number of items and item categories\n                to be prohibited. If your order contains an item that is not allowed to be imported into your\n                destination country, your order will automatically require a review by our customer service team. If\n                there is a prohibited item in your cart, it may result in the cancelation of your full order prior\n                to your payment. If your shopping cart is reviewed and approved, you will receive the final total\n                price for your order and can then choose to confirm it or cancel as you please. If for any\n                unforeseen reason that your order arrives to its destination country and is confiscated upon\n                arrival, you will be refunded according to our refund policies.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v("Are there any approvals required for the imported items?")
            ]),
            _c("br"),
            _vm._v(
              "\n                Depending on laws within the destination country your package is shipping to, there may be approvals\n                that are required to import your package. Approvals are required to be obtained by the customer.\n                This is because most approvals require the beneficiary to sign off on the approval itself, and\n                ShopnShipBD cannot carry that out on behalf of the customer. In the occasion that your order\n                requires any of these, the shipment documents will be delivered to you by the local courier and your\n                package will be placed on hold. After obtaining the necessary approval, the approval documents will\n                be picked up from your address and the shipment will be cleared and delivered to you.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "Are there any items that can't be delivered via ShopnShipBD?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                Due to regulations and laws, there are particular items that cannot be imported into a particular\n                destination country. Every country has a list of items that cannot be imported into that country.\n                The ShopnShipBD system will notify the user of some, but not all, of these items. To avoid\n                complications, customers are encouraged to review Prohibited Items list for the items that are to be\n                imported to their final address before placing their orders. If a prohibited item is added to your\n                cart, it could result in the cancellation of your whole order prior to its payment.\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Other")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("Where can I see my order history?")]),
            _c("br"),
            _vm._v(
              "\n                By visiting the My Orders section on ShopnShipBD, you will see your full order history as well as\n                the status of each of those orders. You can click on any of the order numbers to view its details.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Can I return or exchange an item?")]),
            _c("br"),
            _vm._v(
              "\n                ShopnShipBD wants you to be the happiest customer alive! If you have a problem with your order,\n                ShopnShipBD team will do everything in its power to keep you happy. Just call our customer service\n                personnel and we'll fix things for you as soon as we can. ShopnShipBD refund policies will apply.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v("Is the quality of the items guaranteed by ShopnShipBD?")
            ]),
            _c("br"),
            _vm._v(
              "\n                Products on shopping sites are sold by different sellers around the world, ShopnShipBD does not\n                guarantee these items in terms of quality, however we do guarantee the quality of our services in\n                terms of shipping of the items to your address as well as our after sale service for any defective\n                or wrongly received items."
            ),
            _c("br"),
            _vm._v(" "),
            _c("small", [
              _c("b", [_vm._v("Important Note:")]),
              _vm._v(
                " ShopnShipBD is not responsible to provide any compensation for used\n                    items.\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "What if I would like to make a purchase from a site other than the ones supported through\n                    ShopnShipBD?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                ShopnShipBD only serves a select group of sites. We try very hard to provide the most streamlined\n                and optimized shopping experience for our customer base, but we do plan on expanding in the future\n                to properties that are in the highest demand by our customers.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [
              _vm._v(
                "What if I want to pay for a subscription service? Can ShopnShipBD do that for me?"
              )
            ]),
            _c("br"),
            _vm._v(
              "\n                At this point in time, ShopnShipBD cannot subscribe to services on your behalf. This is because\n                there are recurring charges involved in subscription business models.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Am I required to sign up to complete my order?")]),
            _c("br"),
            _vm._v(
              "\n                Yes, you will be required to sign up or login to complete your order. You can sign up by using your\n                email or with Facebook, Twitter or Google login.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("How can I cancel an order on ShopnShipBD?")]),
            _c("br"),
            _vm._v(
              '\n                Once the credit card payment is confirmed you will not be able to cancel your order, you can always\n                contact our customer service team for further help. If your order is still pending payment you can\n                choose to Cancel it by visiting the "My Orders" page on the ShopnShipBD website.\n            '
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Why was my order canceled?")]),
            _c("br"),
            _vm._v(
              "\n                Cancelations occur either by the customer's request because you no longer want to continue with your\n                order, or because we've been unable to contact you to confirm your order, or because you've added a\n                prohibited item to your cart that cannot be shipped.\n            "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "\n                ShopnShipBD is responsible for handling customs related paperwork as long as it doesn't required\n                personal intervention from the customer; please refer to Orders, Shipping & Returns section for more\n                information about approvals.\n            "
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
    require("vue-hot-reload-api")      .rerender("data-v-719267f0", module.exports)
  }
}

/***/ })

});
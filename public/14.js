webpackJsonp([14],{

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1251)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1253)
/* template */
var __vue_template__ = __webpack_require__(1254)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4062b6fb"
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
Component.options.__file = "resources/js/pages/footer-pages/TermsOfService.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4062b6fb", Component.options)
  } else {
    hotAPI.reload("data-v-4062b6fb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("121f9837", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4062b6fb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TermsOfService.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4062b6fb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TermsOfService.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-4062b6fb] {\n    padding: 20px 0;\n}\nh1[data-v-4062b6fb], h4[data-v-4062b6fb] {\n    text-transform: uppercase;\n}\nul[data-v-4062b6fb] {\n    list-style-type: square;\n}\nol[data-v-4062b6fb] {\n    list-style-type: lower-alpha;\n}\n", ""]);

// exports


/***/ }),

/***/ 1253:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "footer-content" }, [
      _c("h3", [_vm._v("Terms Of Service")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            You confirm that you are at least 18 years of age or are accessing shopnshipbd.com under the supervision\n            of\n            a parent or legal guardian. Use of the shopnshipbd.com website is available to persons who can legally\n            form\n            binding contracts under the Applicable Governing laws of your Country.\n            If you are a minor i.e. under the age of 18 years, you shall not register as a member of shopnshipbd.com\n            and\n            shall not transact or use shopnshipbd.com website. As a minor if you wish to use or transact on\n            shopnshipbd.com, such use or transaction may be made by your legal guardian or parents who have\n            registered\n            as users ofshopnshipbd.com.\n            Shopnshipbd.com reserves the right to terminate your membership and refuse to provide you with access to\n            shopnshipbd.com if it is brought to our notice or if it is discovered that you are under the age of 18\n            years.\n            Both parties agree that this website may only be used in accordance with these Terms and Conditions of\n            Use.\n            If you do not agree with the Terms and Conditions of Use or do not wish to be bound by them, you agree\n            to\n            refrain from using this website.\n            We grant you a non-transferable, revocable and non-exclusive license to use this Shopnshipbd site, in\n            accordance with the Terms and Conditions of Use, for such things as: shopping for personal items sold on\n            Shopnshipbd, gathering prior information regarding our products and services and making purchases.\n            These Terms and Conditions of Use specifically prohibit actions such as: accessing our servers or\n            internal\n            computer systems, interfering in any way with the functionality of this website, gathering or altering\n            any\n            underlying software code, infringing any intellectual property rights. This list is non-exhaustive and\n            similar actions are also strictly prohibited. Any breach of these Terms and Conditions of Use shall\n            result\n            in the immediate revocation of the license granted in this paragraph without prior notice to you. Should\n            we\n            determine at our sole discretion that you are in breach of any of these conditions, we reserve the right\n            to\n            deny you access to this website and its contents and do so without prejudice to any available remedies\n            at\n            law or otherwise.\n            Shopnshipbd requires registration on the site or application. Should you choose to register or subscribe\n            to\n            the site, you agree to provide accurate and current information about yourself, and to promptly update\n            such\n            information if there are any changes.\n            Every user of Shopnshipbd is solely responsible for keeping passwords and other account identifiers safe\n            and\n            secure. The account owner is entirely responsible for all activities that occur under such password or\n            account. Furthermore, you must notify us of any unauthorized use of your password or account.\n            Shopnshipbd shall accept no responsibility or liability, directly or indirectly, in any way for any loss\n            or\n            damage of any kind incurred as a result of, or in connection with, your failure to comply with this\n            section.\n            During the registration process you agree to receive promotional emails from Shopnshipbd. You can\n            subsequently opt out of receiving such promotional e-mails by clicking on the link at the bottom of any\n            promotional email."
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("INFORMATION AVAILABLE ON WEBSITE")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            You accept that the information contained in this website is provided “as is and is intended for\n            information\n            purposes only and that it is subject to change without notice. Although we take reasonable steps to\n            ensure\n            the accuracy of information and we believe the information to be reliable when posted, it should not be\n            relied upon and it does not in any way constitute either a representation or a warranty or a guarantee.\n            Product representations expressed on the Shopnshipbd Application are those of the vendor and are not\n            made by\n            us.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("INFORMATION COLLECTION")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Operation of this site may require collection and processing of the following data:"
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("h4", [_vm._v("COOKIES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Our advertisers and organization may have the occasion to collect information in regards to your\n            computer\n            for our services to ensure easy and smooth transactions with our app. The information is gained in a\n            statistical manner for our use or advertisers on our site. Data gathered will not identify you\n            personally.\n            It is strictly aggregate statistical data about our visitors and how they used our resources on the\n            site. No\n            identifying personal information will be shared at any time via cookies. Close to the above, data\n            gathering\n            can be about general online use through a cookie file. When used, cookies are automatically placed in\n            your\n            hard drive where information transferred to your computer can be found. These cookies are designed to\n            help\n            us correct and improve our site’s services or products for you. You may elect to decline all cookies via\n            your computer. Every computer has the ability to decline file downloads like cookies. Your browser has\n            an\n            option to enable the declining of cookies. If you do decline cookie downloads you may be limited to\n            certain\n            functions of our app, as there are parts of our app that require cookies. On sites that we link to some\n            of\n            the advertisers may also have a use for cookies also that is out of our hand. We are not responsible,\n            nor do\n            we have control of the cookies downloaded from advertisements. They are downloaded only if you click on\n            the\n            advertisement.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("YOUR INFORMATION PRIVACY")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Primarily, we collect and index data about you to help us provide better service and products to you.\n            The following are purposes we may use your information for:\n        "
        )
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("h4", [_vm._v("CONTACTING US")]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("h4", [_vm._v("STORAGE OF PERSONAL DATA")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Information submitted by you is stored on secure servers we have. Any payment or transaction details\n            will be\n            encrypted for full safety measures to be in use. We utilize encryptions to help protect your data and do\n            not\n            index any credit card information on our servers.\n            As you know, transmission of data on the internet is never guaranteed regarding safety. It is impossible\n            to\n            guarantee your safety with electronic data and transmission. You are therefore at your own risk if you\n            elect\n            to transmit any data. When offered you may create a password, but you are responsible for keeping it\n            confidential.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("THIRD PARTY LINKS")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Many links on our site belong to third party retail sites. These websites have their Privacy Policy,\n            which\n            you agree to when you link to the site to shop via our platform. You should read their policy policies.\n            We\n            do not accept claims of liability or responsibility in any way for these policies or links, as we have\n            no\n            way to control the third party sites.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("INFORMATION SHARING")]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("h4", [_vm._v("ACCESSIBILITY OF WEBSITE")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Shopnshipbd aims is to ensure accessibility to the website always. However, we make no representation of\n            that nature and reserve the right to terminate the website at any time and without notice. You accept\n            that\n            service interruption may occur in order to allow for website improvements, scheduled maintenance or may\n            also\n            be due to outside factors beyond our control.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("LINKS AND THIRD PARTY WEBSITES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            We may include links to third party websites at any time. However, the existence of a link to another\n            website should not be considered as an affiliation or a partnership with a third party or viewed as an\n            endorsement of a website unless explicitly stated otherwise. In the event the user follows a link to\n            another\n            website, he or she does so at his or her own risk. We accept no responsibility for any content,\n            including,\n            but not limited to, information, products and services, available on third party websites. Creating a\n            link\n            to this website is strictly forbidden without our prior written consent. Furthermore, we reserve the\n            right\n            to revoke our consent without notice.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("USER’s DUTY OF CARE")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            We expect you to exercise the best duty of care in investigating the details and reviews of items you\n            seek\n            to purchase. We can make no warranties as to the quality of items purchased through Shopnshipbd. You are\n            encouraged to ensure that items are in good and functional order, before making payment. Kindly read\n            reviews\n            and comments of other buyers before paying.\n            We do not carry inventory and can accept no responsibility for non-functional items not damaged in\n            handling.\n            We also will not accept liability for unexpired items or items purchased through Amazon from third Party\n            resellers and merchants. Kindly contact us if any portion of these terms are unclear to you, please do\n            not\n            hesitate to call us on +1 631-455-8852 (USA), +8801611-967368 (Bangladesh)for guidance, assistance or\n            clarification.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("USED ITEM DISCLAIMER")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            This disclaimer is made in respect of stores on the shopnshipbd.com site, which list or carry as part of\n            their inventory, used, second hand, renewed, overhauled, repaired, revamped refurbished or repurposed\n            items.\n            While we endeavor to keep the information up to date and correct, we make no representations or\n            warranties\n            of any kind either express or implied, about the accuracy, reliability, suitability or availability of\n            items\n            listed for sale on stores under this category or the accompanying information, products, services, or\n            related graphics contained on the index’s website for any purpose.Any reliance you place on such\n            information\n            is therefore strictly at your own risk.\n            Orders from stores on these sites are procured and shipped to you “As is” and “As available” and\n            provided\n            without any guarantees, conditions, claims, representations or warranties, whether express or implied,\n            as to\n            its quality, merchantability, merchantable quality, durability, fitness for a purpose, functionality,\n            reliability, safety, performance, serviceability or those arising by statute.\n            Under no circumstances whatsoever shall shopnshipbd.com be liable for any loss or damage arising from\n            the\n            purchase of items listed as used, second hand or described in any like manner as to mean previous\n            ownership\n            or utilization.\n            This disclaimer shall include without limitation, indirect or consequential loss or damage, or any loss\n            or\n            damage whatsoever arising from loss of functionality or profits in connection with, the purchase of\n            these\n            items.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("INTELLECTUAL PROPERTY")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Both parties agree that all intellectual property rights and database rights, whether registered or\n            unregistered, on the Shopnshipbd Site and application, information content on Shopnshipbd the website\n            design, including, but not limited to, text, graphics, software, photos, video, music, sound, and their\n            selection and arrangement, all software compilations, underlying source code and software shall remain\n            at\n            all times vested in us or our licensors. Use of such material will only be permitted as expressly\n            authorized\n            by us or our licensors.\n            Any unauthorized use of the material and content of this website is strictly prohibited and you agree\n            not\n            to, or facilitate any third party to, copy, reproduce, transmit, publish, display, distribute,\n            commercially\n            exploit or create derivative works of such material and content.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("PROVISION OF MATERIAL INFORMATION TO CUSTOMERS")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Shopnshipbd will regularly update its site to reflect accurate comprehensive, up-to-date information of\n            our\n            service offerings. We will respond in a timely manner to Customer requests for information as it\n            concerns\n            its services. All such information will be provided at no cost to the Customer. All service information\n            will\n            be made available to the Customer by way of published fliers, emails, text messages and handbills,\n            publication on our online portals, social media, or requests. Enquires and queries shall be dealt with\n            at\n            the company offices and outlets as well as the company website.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("GENERAL DESCRIPTION OF SERVICES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Information regarding all service offerings, promos, index information and web-card related issues as\n            well\n            as general usage information is regularly updated on our website\n        "
        )
      ]),
      _vm._v(" "),
      _c(
        "p",
        [
          _c("router-link", { attrs: { to: "/" } }, [
            _vm._v("www.shopnshipbd.com")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("h4", [_vm._v("PAYMENTS AND PROCESSING")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Payments for all orders and purchases on the Shopnshipbd platform are considered complete when made in\n            full.\n            Orders for which payments are yet to be completed shall not be processed.\n            In the event that multiple purchases are made in one order, Shopnshipbd shall apply the funds available\n            on\n            your payment source against the Ordered Items. If your funds do not cover all the items selected, the\n            order\n            will NOT be processed.\n            Our standard delivery timelines, come into effect 24 hours after the order has been deemed confirmed. A\n            mail\n            shall be sent to you confirming your order, or providing additional information where necessary, if\n            additional fees apply.\n            Delivery timelines for Custom Orders on Shopnshipbd vary. Due to the nature of Custom orders and\n            variable\n            factors outside our control, we cannot stipulate a specific delivery timeline.\n            However we do commit to ensuring that we do everything possible to meet the period stated.\n            We accept no liability for orders, which fail to get delivered within 15 working days."
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("CARD SECURITY")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            You are required to turn on and fully activate the 3D Card Secure Tool provided by your Bank or\n            Financial\n            Institution. This is an additional safety guard to ensure the security of your funds at any given time.\n            Please note that this requirement is NOT optional.\n            Kindly contact your Bank for information on this feature\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("AVAILABILITY OF SERVICE:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            For details on locations where the Shopnshipbd service is currently available, kindly visit our web\n            page.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("MISUSE OF SERVICE")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Customers shall not misuse our services, including but not limited to dishonestly obtaining services or\n            using our service for the purchase of prohibited, illegal and banned items contrary to applicable laws\n            or\n            regulations. Please be informed that we have a duty to report all suspicious or illegal activity to the\n            appropriate authorities."
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("REVIEW TERMS AND CONDITIONS")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Shopnshipbd retains the right, at its sole discretion, to change, modify, add or remove portions of\n            these\n            Terms of Use, at any time. It is the customer’s responsibility to check these Terms and Conditions\n            periodically for changes. The continued use of the application following the posting of changes will\n            mean\n            that you accept and agree to the changes."
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("COMMUNICATION")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            When you use the website, or send emails or other data, information or communication to\n            www.shopnshipbd.com,\n            you agree and understand that you are communicating with Shopnshipbd through electronic records and you\n            consent to receive communication via electronic records from Shopnshipbd periodically, as and when\n            required.\n            Shopnshipbd may communicate by email or by such other mode of communication, electronic or otherwise.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("CHARGES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Membership on Shopnshipbd is free. We do not charge any fee for browsing on shopnshipbd.com, or\n            downloading\n            the Shopnshipbd application.\n            However Shopnshipbd reserves the right to charge fees and change its policies from time to time.\n            Shopnshipbd\n            may at its sole discretion introduce new services and modify some or all the existing services offered\n            on\n            shopnshipbd.com.\n            Shopnshipbdalso reserves, without notice to you, the right to introduce fees for the new services\n            offered or\n            amend/introduce fees for existing services.\n            Changes to the Fee and related policies shall automatically become effective immediately once\n            implemented on\n            shopnshipbd.com.\n            Unless otherwise stated, all fees shall be quoted in US Dollars. You shall be solely responsible for\n            compliance of all applicable laws for making payments Shopnshipbd.\n        "
        )
      ]),
      _c("p"),
      _c("h4", [_vm._v("GETTING A WEBCARD")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "When you sign up on the shopnship.com application or website, you are automatically allotted a web card\n            number.With a web card you can credit your account to any value you want for purposes of shopping from\n            stores on the application. There are no limits to the value you can load or shop with.\n            If you require a hard copy of the web card, instead of the free e- copy currently provided to you by\n            Shopnshipbd, one can be made available at an extra fee, which will be communicated upon enquiry.\n            You will be required to indicate which of our Pick Up centers, you prefer to have the card delivered to\n            for\n            ease of pick up."
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("LOADING YOUR WEBCARD")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "All information guiding the loading of customer web cards are included in detail on our website\n            https://www.shopnshipbd.com/load-webcard. For additional information or guidance, kindly contact us at\n            shopnshipbd.com.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("PROTECTION OF CUSTOMER INFORMATION")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            We understand the importance of our Customer’s privacy, and we want you to feel confident about the\n            privacy\n            and security of your personal information. We take reasonable care to prevent any unauthorized access to\n            your personal information and use personal information we collect in accordance with strict procedures.\n            We\n            have set out below some important information about the personal information we may hold about you, and\n            how\n            we use it. Full details of our privacy policy can be made available on request."
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("GENERAL PRINCIPLES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            When ordering for certain services, we will ask you for information such as your name, address, contact\n            phone numbers, email address and means of identification such as Driver’s license, National identity\n            card or\n            international passport. We may also ask you other relevant information about the service you are using\n            or\n            ordering.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("HOW WE USE YOUR PERSONAL INFORMATION:")]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("h4", [_vm._v("CHANGES TO OUR PRIVACY POLICY:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            We may make changes to our privacy policy from time to time. Your continued use of any of our services\n            indicates your agreement to the use of your personal information as set out in this privacy policy.\n            INFORMATION ACCURACY:\n            We take due care in ensuring that personal information provided by you is retained and processed in a\n            manner\n            that ensures that this information is accurate, relevant and current for the purpose for which it is to\n            be\n            used for.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("COMPLAINTS HANDLING:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Information to customers: If you are unhappy with our services kindly contact us and let us know. Your\n            feedback enables us review and improve the overall service performance we provide. If you have a\n            complaint,\n            kindly send a mail to shopnshipbd.2018@gmail.com. We are fully committed to addressing all complaints\n            fully\n            and fairly, and in a reasonable time frame.\n            We do try to resolve all verbal complaints. However, should you wish to receive a response in writing,\n            kindly forward all complaints to shopnshipbd.2018@gmail.com; and we will send you our feedback\n            accordingly.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("FAULT PROCESSING:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            All Shopnshipbd subscribers can contact the helpdesk on the numbers listed hereunder:\n            Email: shopnshipbd.2018@gmail.com. Phone Numbers: +1 631-455-8852 (USA), +8801611-967368 Before you\n            contact\n            our support desk, kindly make sure you have the details of the service you have subscribed to, your\n            mobile\n            number, your username (if any) and summary of the complaint. This will enable us process and resolve\n            your\n            complaint quickly.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("CONTACTING YOU:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            When we need to contact you, we will use your email address as the primary mode of communication. In a\n            few\n            cases we will attempt to contact you via your phone line. We may contact you to advice on the outcome of\n            an\n            investigation to any complaint, which our helpdesk agents were unable to resolve during the initial\n            telephone call. And to advise you on new product offerings and how to get the best out of current\n            product or\n            service offerings.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("CHARGES FOR COMPLAINTS HANDLING")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Complaint handling processes shall be provided free of charge. However, we may impose a reasonable\n            charge\n            for complaint handling processes where investigations of the complaints requires the retrieval of\n            records of\n            more than 12 months old and where such retrieval results in any incremental expense or significant\n            inconvenience, or where there is physical damage. Any such charges shall be identified, communicated and\n            agreed with the subscriber before we bill for it.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("REFUNDS")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "All refunds are made directly to the Customers web card. This is regardless of all deposit mediums used."
        )
      ]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            If you wish to draw down funds from your web card to your bank account, the following rules will apply:\n            Refund Currency: Refunds to Bank Accounts will be made in the obtainable currency of the transacting\n            country.\n            Full Refunds: Where a full refund is requested and the appropriate requirements fulfilled, we shall\n            refund\n            the full amount requested to your stipulated bank account.\n            For orders on Interswitch® you shall receive the full amount paid, less bank charges.\n            For Refunds on partial orders, the full amount less the convenience fee charged will be refunded.\n            Partial order refunds initiated on the inter switch platform will be refunded less the convenience fees\n            incurred and the Interswitch percentage charge stated above.\n            The above notwithstanding, Shopnshipbd reserves the right to treat refund requests on a case by case\n            basis,\n            factoring in possible underlying costs, expenses and administrative fees.\n            The refund process involving drawing funds down from your web card to your bank account will be carried\n            out\n            within seven (7) to ten (10) business days.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("ORDER PACKAGING")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Items may be re-bagged by Shopnshipbdand may not arrive in the original merchant boxes/ packaging.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("CUSTOMER ORDER PICK UP REQUIREMENT")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Where you choose to have your orders delivered to any of the designated Pick up Centers listed on the\n            Shopnshipbd Site, you will be required to pick up such orders or arrange have said orders picked up\n            within\n            Two weeks (2 weeks) of the item’s arrival at the Pick-Up Centre. Shopnshipbd may at its sole discretion,\n            deliver orders which exceed the 2-week time line at the pickup centers. This delivery will come with an\n            additional charge to you. We reserve the right to dispose of orders which remain unclaimed after the\n            given\n            2-week period. Shopnshipbd will accept no liability whatsoever for loss, theft or damage to orders which\n            are\n            not picked up within the stated timelines. If you have any difficulty having your orders picked up\n            within 2\n            weeks kindly contact the Customer service unit for options available to you.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("CONFIDENTIALITY")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            We will treat any information concerning any complaint or compliance in confidence and we will not\n            disclose\n            it to anyone except or in accordance with any instruction you have given us. However, there are\n            circumstances in which we may be required by law to disclose information. Such requests typically come\n            from\n            statutory authorities, e. g The Police Force. Etc. Any such disclosure will be strictly controlled and\n            made\n            fully in accordance with the laws of the.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("PURCHASE POLICY AND RULES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          '\n            If you are purchasing items with the Shopnshipbd app, you need to make sure each item meets the\n            following\n            criteria. Each item must be able to fit in a box 30 X 30 X 30 CM and weigh no more than 4KG when using\n            the\n            Shopnshipbd App. For items larger please fill out a Shopnshipbd Custom order. Simply login to your\n            account\n            and click on "Custom orders".\n        '
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("EXTRA SHIPPING CHARGES")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Shopnshipbd will charge additional shipping charges under the following conditions:\n            • Where the item selected is not within Shopnshipbd standard shipping size and weight (please see\n            illustration above).\n            • Where the merchant requires additional shipping charges which cannot be captured by our platform or\n            application.\n            Please note that these charges are not Shopnshipbd Fees. We will not be able to process or fulfil your\n            order\n            if the payments are not made and we will need to cancel the order after 24 hours.\n        "
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("SIMPLE RETURNS")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Items can only be returned if they are either damaged upon delivery, or where the wrong item is\n            delivered to\n            you. If you receive the wrong item having ordered a specific item, we will replace it with the right\n            item or\n            provide you with a full refund.\n            Only items that are non-functional, or are the wrong item received can be returned. When picking up your\n            item at your local pickup location verify the content is as it should be. If there is an error, please\n            immediately hand over the incorrect or damaged item back to the Shopnshipbdcuinf representative. For\n            door to\n            door deliveries please return damaged or incorrect items to your local pickup location within 2 business\n            days from the day you received the item.\n        "
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n                Visit details to our site or any resources used on our site are not limited to just location and\n                traffic data, weblogs or other communication information.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Information given to us when you contact us for any reason.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Data offered by filled out forms on our site, like a registration or purchase.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n                At any time you request information from us via a form or other electronic transmission we may use\n                your information to fulfill that request relating to our services and products. We may also\n                communicate with you on other products or services you may find of interest, only when consent has\n                been provided upon registration on our platform. You may opt out at any time by emailing us via our\n                contact us form on our contact us page.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Contracts we make with you create a commitment, which may require contact or use of your information\n                to ship your items to you.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                We have the right to notify you of changes to our website, products or services that could affect\n                our service to you.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Information on products or services similar to those of an existing consumer purchase may be\n                communicated to you. The information sent to you in a communication will be similar to the subject\n                of a recent sale.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                New consumers can be contacted by our website or third parties only if consent has been granted, and\n                only for those communications you have granted.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                An opportunity for declining your consent is provided on our site. Simply fill out the contact us\n                form and inform us to remove you from all newsletters and customer contacts and we will do so.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("If you have any questions please visit us at "),
      _c("a", { attrs: { href: "" } }, [
        _vm._v("https://www.shopnshipbd.com/contact-us")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n                If necessary, we may share personal information to our group members including such entities as\n                subsidiaries, partner companies, holding companies and their subsidiaries. Information is shared\n                only when applicable.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Third party disclosure may be necessary in regards to personal information.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                A sale of our business or its assets, in full or part, to a third party may require personal data\n                sharing.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Legally, we may be asked to share and disclose data details.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                To assist in reducing credit risk and fraud protection.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n                By registering to use our service you grant us permission to use your information in the following\n                ways.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Processing of orders you place with us\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\n                Charge for services we provide\n            ")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Providing directory enquiry services or information to the regulator and other authorized government\n                agencies, or as required by law.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Communicating with you about how to use the service, and letting you know about any changes to our\n                services.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Market our products and services to you.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Carry out market research and analysis on our current products and services and future developments.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                We may give information on this form to certain other people or organizations. We will make sure\n                that you cannot be identified.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                To prevent and detect criminal activity, fraud, misuse or damage to our network and prosecute and\n                sue those responsible.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                We may provide information (In response to requests from authorized law enforcement agencies).\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                To prevent and detect crime and prosecute offenders.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n                This means, where there is a need for a refund, we will credit your web card for the value\n                of that refund.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                This refund system includes payments from cyber-source and local or international banks\n                transfers to Shopnshipbd for purposes of shopping.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Refunds emanating from Pay Pal transactions will be credited to the PayPal account from\n                which the payments were made.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                For refunds to PayPal, we insist that the address you register with on shopnshipbd.com must\n                match that provided on your PayPal profile.\n            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                Refunds will take an average of 48 – 72 hours to process\n            "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4062b6fb", module.exports)
  }
}

/***/ })

});
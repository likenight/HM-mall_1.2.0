(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/msg/msg"],{

/***/ 124:
/*!************************************************************************!*\
  !*** D:/360极速浏览器下载/HM-mall_1.2.0/main.js?{"page":"pages%2Fmsg%2Fmsg"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _msg = _interopRequireDefault(__webpack_require__(/*! ./pages/msg/msg.vue */ 125));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_msg.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 125:
/*!*****************************************************!*\
  !*** D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msg_vue_vue_type_template_id_d5bed03c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg.vue?vue&type=template&id=d5bed03c& */ 126);
/* harmony import */ var _msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msg.vue?vue&type=script&lang=js& */ 128);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msg.vue?vue&type=style&index=0&lang=scss& */ 130);
/* harmony import */ var _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _msg_vue_vue_type_template_id_d5bed03c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _msg_vue_vue_type_template_id_d5bed03c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/*!************************************************************************************!*\
  !*** D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue?vue&type=template&id=d5bed03c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_template_id_d5bed03c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msg.vue?vue&type=template&id=d5bed03c& */ 127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_template_id_d5bed03c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_template_id_d5bed03c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 127:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue?vue&type=template&id=d5bed03c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 128:
/*!******************************************************************************!*\
  !*** D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msg.vue?vue&type=script&lang=js& */ 129);
/* harmony import */ var _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 129:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      chatList: [
      {
        uid: 1,
        username: "鲜果蔬专营店",
        face: "/static/img/im/face/face_1.jpg",
        time: "13:08",
        msg: "亲，20点前下单都是当天送达的",
        tisNum: 1 },

      {
        uid: 2,
        username: "官店大欺客旗舰店",
        face: "/static/img/im/face/face_2.jpg",
        time: "13:05",
        msg: "问那么多干什么？不想买就滚~",
        tisNum: 0 },

      {
        uid: 3,
        username: "妙不可言",
        face: "/static/img/im/face/face_3.jpg",
        time: "12:15",
        msg: "推荐一个商品呗？",
        tisNum: 0 },

      {
        uid: 4,
        username: "茶叶专卖",
        face: "/static/img/im/face/face_4.jpg",
        time: "12:11",
        msg: "现在卖的都是未过青的茶哦",
        tisNum: 0 },

      {
        uid: 5,
        username: "likeKiss客服",
        face: "/static/img/im/face/face_5.jpg",
        time: "12:10",
        msg: "你好，发福建快递多久送到的？",
        tisNum: 0 },

      {
        uid: 6,
        username: "白开水",
        face: "/static/img/im/face/face_6.jpg",
        time: "12:10",
        msg: "在吗？",
        tisNum: 0 },

      {
        uid: 7,
        username: "衣帽间的叹息",
        face: "/static/img/im/face/face_7.jpg",
        time: "11:56",
        msg: "新品上市，欢迎选购",
        tisNum: 0 },

      {
        uid: 8,
        username: "景萧疏",
        face: "/static/img/im/face/face_8.jpg",
        time: "11:56",
        msg: "商品七天无理由退换的",
        tisNum: 0 },

      {
        uid: 9,
        username: "文宁先生",
        face: "/static/img/im/face/face_9.jpg",
        time: "12:15",
        msg: "星期天再发货的",
        tisNum: 0 },

      {
        uid: 10,
        username: "高端Chieh",
        face: "/static/img/im/face/face_10.jpg",
        time: "12:36",
        msg: "建议你直接先测量好尺码在选购的。",
        tisNum: 0 },

      {
        uid: 11,
        username: "mode旗舰店",
        face: "/static/img/im/face/face_11.jpg",
        time: "12:40",
        msg: "新品5折，还有大量优惠券。",
        tisNum: 0 },

      {
        uid: 12,
        username: "敏萘客服",
        face: "/static/img/im/face/face_12.jpg",
        time: "12:36",
        msg: "还没有用，等我明天早上试一下",
        tisNum: 0 },

      {
        uid: 13,
        username: "春天里的花",
        face: "/static/img/im/face/face_13.jpg",
        time: "12:36",
        msg: "适用于成年人的，小孩不适用的",
        tisNum: 0 },

      {
        uid: 14,
        username: "电脑外设专业户",
        face: "/static/img/im/face/face_13.jpg",
        time: "12:36",
        msg: "把上面的螺丝拆下来，把铁片撬开就能看见了",
        tisNum: 0 },

      {
        uid: 15,
        username: "至善汽车用品",
        face: "/static/img/im/face/face_15.jpg",
        time: "12:36",
        msg: "这个产品是原车配件，完美装上的",
        tisNum: 0 }] };




  },
  //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onLoad: function onLoad() {

  },
  methods: {
    toChat: function toChat(chat) {
      uni.navigateTo({
        url: "chat/chat?name=" + chat.username });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 130:
/*!***************************************************************************************!*\
  !*** D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../360Downloads/Software/HBuilderX_1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msg.vue?vue&type=style&index=0&lang=scss& */ 131);
/* harmony import */ var _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_360Downloads_Software_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 131:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/360极速浏览器下载/HM-mall_1.2.0/pages/msg/msg.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[124,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/msg/msg.js.map
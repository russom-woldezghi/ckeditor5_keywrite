!function(e,_){"object"==typeof exports&&"object"==typeof module?module.exports=_():"function"==typeof define&&define.amd?define([],_):"object"==typeof exports?exports.CKEditor5=_():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.keywrite=_())}(self,(()=>(()=>{var __webpack_modules__={"./js/ckeditor5_plugins/keywrite/src/Keywrite.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Keywrite)\n/* harmony export */ });\n/* harmony import */ var ckeditor5_src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ckeditor5/src/core */ "ckeditor5/src/core.js");\n/* harmony import */ var _KeywriteEditing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeywriteEditing */ "./js/ckeditor5_plugins/keywrite/src/KeywriteEditing.js");\n/* harmony import */ var _KeywriteButtonUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeywriteButtonUI */ "./js/ckeditor5_plugins/keywrite/src/KeywriteButtonUI.js");\n\n\n\n\nclass Keywrite extends ckeditor5_src_core__WEBPACK_IMPORTED_MODULE_0__.Plugin {\n  /**\n   * @inheritDoc\n   */\n  static get pluginName() {\n    return \'Keywrite\';\n  }\n  \n  /**\n   * @inheritdoc\n   */\n  static get requires() {\n    return [_KeywriteEditing__WEBPACK_IMPORTED_MODULE_1__["default"], _KeywriteButtonUI__WEBPACK_IMPORTED_MODULE_2__["default"]];\n  }\n}\n\n\n//# sourceURL=webpack://CKEditor5.keywrite/./js/ckeditor5_plugins/keywrite/src/Keywrite.js?')},"./js/ckeditor5_plugins/keywrite/src/KeywriteButtonUI.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ KeywriteButtonUI)\n/* harmony export */ });\n/* harmony import */ var ckeditor5_src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ckeditor5/src/core */ "ckeditor5/src/core.js");\n/* harmony import */ var ckeditor5_src_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ckeditor5/src/ui */ "ckeditor5/src/ui.js");\n/* harmony import */ var _icons_keywrite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/keywrite.svg */ "./icons/keywrite.svg");\n\n\n\n\nclass KeywriteButtonUI extends ckeditor5_src_core__WEBPACK_IMPORTED_MODULE_0__.Plugin {\n    init() {\n      const editor = this.editor;\n\n      const buttonFactory = function () {\n        const button = new ckeditor5_src_ui__WEBPACK_IMPORTED_MODULE_1__.ButtonView();\n  \n        button.set(\n          {\n            label: \'Keywrite\',\n            icon: _icons_keywrite_svg__WEBPACK_IMPORTED_MODULE_2__["default"],\n            tooltip: true,\n          }\n        );\n  \n        // // Change the model using the model writer.\n        // const write = writer => {\n        //   // Insert the text at the user\'s current position.\n        //   editor.model.insertContent(writer.createText(\'It works!\'));\n        // }\n        // const executeHandler = () => {\n        //  editor.model.change(write);\n        // }\n        // button.on(\'execute\', executeHandler);\n  \n        return button;\n      };\n  \n      editor.ui.componentFactory.add(\'keywrite\', buttonFactory);\n    }\n}\n\n//# sourceURL=webpack://CKEditor5.keywrite/./js/ckeditor5_plugins/keywrite/src/KeywriteButtonUI.js?')},"./js/ckeditor5_plugins/keywrite/src/KeywriteEditing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ckeditor5_src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ckeditor5/src/core */ \"ckeditor5/src/core.js\");\n/* eslint-disable import/no-extraneous-dependencies */\n\n\n/**\n * Uses Keywrite to transliterate to configured language.\n *\n * @private\n */\nclass KeywriteEditing extends ckeditor5_src_core__WEBPACK_IMPORTED_MODULE_0__.Plugin {\n  /**\n   * @inheritdoc\n   */\n  static get pluginName() {\n    return 'KeywriteEditing';\n  }\n\n  /**\n   * @inheritdoc\n   */\n  init() {\n      console.log('init in KeywriteEditing')\n    }\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeywriteEditing);\n\n\n//# sourceURL=webpack://CKEditor5.keywrite/./js/ckeditor5_plugins/keywrite/src/KeywriteEditing.js?")},"./js/ckeditor5_plugins/keywrite/src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Keywrite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keywrite */ "./js/ckeditor5_plugins/keywrite/src/Keywrite.js");\n/**\n * @file The build process always expects an index.js file. Anything exported\n * here will be recognized by CKEditor 5 as an available plugin. Multiple\n * plugins can be exported in this one file.\n *\n * I.e. this file\'s purpose is to make plugin(s) discoverable.\n */\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    Keywrite: _Keywrite__WEBPACK_IMPORTED_MODULE_0__["default"],\n});\n\n//# sourceURL=webpack://CKEditor5.keywrite/./js/ckeditor5_plugins/keywrite/src/index.js?')},"./icons/keywrite.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path d=\\"M1.25 3.75h17.5v3.75h-17.5zM1.25 8.75h17.5v3.75h-17.5zM1.25 13.75h17.5v3.75h-17.5z\\"/>\\n</svg>\\n");\n\n//# sourceURL=webpack://CKEditor5.keywrite/./icons/keywrite.svg?')},"ckeditor5/src/core.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = (__webpack_require__(/*! dll-reference CKEditor5.dll */ "dll-reference CKEditor5.dll"))("./src/core.js");\n\n//# sourceURL=webpack://CKEditor5.keywrite/delegated_./core.js_from_dll-reference_CKEditor5.dll?')},"ckeditor5/src/ui.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = (__webpack_require__(/*! dll-reference CKEditor5.dll */ "dll-reference CKEditor5.dll"))("./src/ui.js");\n\n//# sourceURL=webpack://CKEditor5.keywrite/delegated_./ui.js_from_dll-reference_CKEditor5.dll?')},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./js/ckeditor5_plugins/keywrite/src/index.js");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));
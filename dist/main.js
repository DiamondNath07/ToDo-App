/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f6f6f6;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 0 30px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  background-color: white;\\r\\n  width: 500px;\\r\\n  margin-top: 100px;\\r\\n  box-shadow: 0 0 10px #a5a1a1;\\r\\n}\\r\\n\\r\\n.title-container {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.reload {\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 40px;\\r\\n}\\r\\n\\r\\n.app-title {\\r\\n  font-size: 18px;\\r\\n  font-family: Arial, sans-serif;\\r\\n  font-weight: 700;\\r\\n  padding: 20px 0 10px 10px;\\r\\n  border-bottom: 1px solid #a5a1a1;\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  width: 100%;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\narticle a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.check,\\r\\n.paragraph {\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n/* article td {\\r\\n  width: 23.33%;\\r\\n  padding: 0 10px;\\r\\n} */\\r\\n\\r\\n.strike-through {\\r\\n  font-style: italic;\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n/* article td img {\\r\\n  width: 30px;\\r\\n  margin: auto;\\r\\n} */\\r\\n\\r\\n.form-container {\\r\\n  overflow-x: hidden;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.single-list {\\r\\n  padding: 5px 10px;\\r\\n  font-size: 20px;\\r\\n  line-height: 40px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  border-bottom: 1px solid #a5a1a19d;\\r\\n}\\r\\n\\r\\n.check {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.kebabImg {\\r\\n  position: absolute;\\r\\n  right: 40px;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  position: absolute;\\r\\n  right: 10px;\\r\\n}\\r\\n\\r\\n.completedBtn {\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  border: none;\\r\\n  margin-top: 20px;\\r\\n  color: rgb(82, 75, 75);\\r\\n}\\r\\n\\r\\n.trashImg {\\r\\n  position: absolute;\\r\\n  left: 120px;\\r\\n  top: 15px;\\r\\n}\\r\\n\\r\\n#addBtn {\\r\\n  background-color: white;\\r\\n  border: none;\\r\\n  position: absolute;\\r\\n  left: 320px;\\r\\n  top: 3px;\\r\\n  height: 40px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#addBtn img {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n#input-text {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  border-bottom: 1px solid #a5a1a1;\\r\\n  padding: 20px 0 10px 10px;\\r\\n  font-size: 16px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.textcomplete {\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  border: none;\\r\\n  font-size: 18px;\\r\\n  margin-top: 10px;\\r\\n  font-family: Arial, sans-serif;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n  width: 310px;\\r\\n  padding: 0 20px 0 5px;\\r\\n  margin: auto;\\r\\n  left: -25px;\\r\\n  right: 0;\\r\\n  position: absolute;\\r\\n  height: 40px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.edit:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.editItem {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web-pack/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://web-pack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://web-pack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://web-pack/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _modules_uIdisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/uIdisplay.js */ \"./src/modules/uIdisplay.js\");\n/* harmony import */ var _modules_myTodoApp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/myTodoApp.js */ \"./src/modules/myTodoApp.js\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localStorage.js */ \"./src/modules/localStorage.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_uIdisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayToDo);\ndocument.getElementById('completedBtn').addEventListener('click', () => {\n  _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].removeCompleted();\n});\n\ndocument.querySelector('form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const todoListItem = _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDo();\n  const toDoInput = document.getElementById('input-text').value;\n  const id = todoListItem.length + 1;\n  const completed = false;\n\n  const todo = new _modules_myTodoApp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](toDoInput, id, completed);\n  _modules_uIdisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToDoList(todo);\n  _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodo(todo);\n  _modules_uIdisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteData();\n});\ndocument.getElementById('to-do-container').addEventListener('click', (e) => {\n  _modules_uIdisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].trashTodo(e.target);\n  if (e.target.classList.contains('check')) {\n    _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkboxCompleted(\n      e.target.parentElement.parentElement.children[4],\n      e.target.checked\n    );\n    e.target.parentElement.parentElement.children[2].children[0].classList.toggle(\n      'strike-through'\n    );\n    _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].editInput(\n      e.target.parentElement.parentElement.children[4].textContent,\n      e.target.parentElement,\n      e.target.parentElement.parentElement,\n      e.target.parentElement.parentElement.children[2].children[0]\n    );\n  }\n  _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\n    e.target.parentElement.parentElement.previousElementSibling.previousElementSibling\n      .textContent\n  );\n});\n\n\n//# sourceURL=webpack://web-pack/./src/index.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Storage {\n  static getToDo() {\n    let todoListItem;\n    if (!localStorage.getItem('todoListItem')) {\n      todoListItem = [];\n    } else {\n      todoListItem = JSON.parse(localStorage.getItem('todoListItem'));\n    }\n    return todoListItem;\n  }\n\n  static addTodo(todo) {\n    const todoListItem = Storage.getToDo();\n\n    todoListItem.push(todo);\n\n    localStorage.setItem('todoListItem', JSON.stringify(todoListItem));\n  }\n\n  static remove(id) {\n    const todoListItem = Storage.getToDo();\n    id = Number(id);\n    todoListItem.forEach((todo, i) => {\n      if (todo.id === id) {\n        todoListItem.splice(i, 1);\n      }\n    });\n    localStorage.setItem('todoListItem', JSON.stringify(todoListItem));\n    Storage.resetId();\n  }\n\n  static resetId() {\n    const todoListItem = Storage.getToDo();\n    const arr = [];\n\n    todoListItem.forEach((item) => {\n      const newId = { ...item, id: arr.length + 1 };\n      arr.push(newId);\n      localStorage.setItem('todoListItem', JSON.stringify(arr));\n    });\n  }\n\n  static checkboxCompleted(id, status) {\n    const todoListItem = Storage.getToDo();\n    id = Number(id.textContent);\n\n    todoListItem.forEach((x) => {\n      if (x.id === id) {\n        if (status) {\n          x.completed = true;\n        } else {\n          x.completed = false;\n        }\n      }\n      localStorage.setItem('todoListItem', JSON.stringify(todoListItem));\n    });\n    return todoListItem;\n  }\n\n  static removeCompleted() {\n    const todoListItem = Storage.getToDo();\n\n    const notCompleted = todoListItem.filter((x) => x.completed === false);\n    localStorage.setItem('todoListItem', JSON.stringify(notCompleted));\n    Storage.resetId();\n    window.location.reload();\n  }\n\n  static deleteCompletedTask() {\n    const todoListItem = Storage.getToDo();\n\n    const notCompleted = todoListItem.filter((x) => x.completed === false);\n    localStorage.setItem('todoListItem', JSON.stringify(notCompleted));\n    Storage.resetId();\n    // window.location.reload();\n  }\n\n  static delete(id) {\n    const todoListItem = Storage.getToDo();\n    const arr = [];\n\n    todoListItem.forEach((item) => {\n      if (item.id !== id) {\n        arr.push(item);\n        localStorage.setItem('todoListItem', JSON.stringify(arr));\n      }\n    });\n  }\n\n  static updateDescription(index, desc, tasks) {\n    tasks.description = desc;\n    return [tasks];\n  }\n\n  static editInput(id, e, tdHide, editPara) {\n    if (e.children[0].classList.contains('kebabImg')) {\n      console.log(e.children[3]);\n\n      const todoListItem = Storage.getToDo();\n      console.log(todoListItem);\n\n      todoListItem.forEach((todo) => {\n        if (id === todo.id) {\n          console.log(id);\n\n          const editItem = todo.description;\n          // console.log(editItem);\n\n          const edit = document.getElementsByName('edit')[0];\n\n          if (edit) {\n            edit.remove();\n          }\n\n          const input = document.createElement('input');\n          input.type = 'text';\n          input.name = 'edit';\n          input.value = editItem;\n          input.classList.add('edit');\n\n          input.addEventListener('keypress', () => {\n            editPara.textContent = input.value;\n            todo.description = input.value;\n            localStorage.setItem('todoListItem', JSON.stringify(todoListItem));\n          });\n\n          tdHide.appendChild(input);\n        }\n      });\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n\n//# sourceURL=webpack://web-pack/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/myTodoApp.js":
/*!**********************************!*\
  !*** ./src/modules/myTodoApp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MyTodoApp {\n  constructor(description, id, completed) {\n    this.description = description;\n    this.id = id;\n    this.completed = completed;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTodoApp);\n\n\n//# sourceURL=webpack://web-pack/./src/modules/myTodoApp.js?");

/***/ }),

/***/ "./src/modules/uIdisplay.js":
/*!**********************************!*\
  !*** ./src/modules/uIdisplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/trash.svg */ \"./src/assets/trash.svg\");\n/* harmony import */ var _assets_kebab_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/kebab.svg */ \"./src/assets/kebab.svg\");\n\n\n\n\ndocument.getElementById('trashImg').src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_1__;\nclass UiTodo {\n  static displayToDo() {\n    const todo = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToDo();\n\n    todo.forEach((todo) => {\n      UiTodo.addToDoList(todo);\n    });\n  }\n\n  static addToDoList(todo) {\n    const ulContainer = document.getElementById('list-container');\n    // const row = document.createElement('tr');\n    const inputrow = document.createElement('div');\n    const attr = document.createAttribute('class');\n    attr.value = 'single-list';\n    inputrow.setAttributeNode(attr);\n\n    if (todo.completed) {\n      inputrow.innerHTML = `\n       <input class='check'  id='checkBox' type=\"checkbox\" checked />\n    <p class='paragragh strike-through'> ${todo.description}</p>\n    <span class='hide'>${todo.id}</span>\n    <img class='kebabImg' src=\"${_assets_kebab_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"\" />\n    <a href=\"#\" class='delete'>🗑</a>\n       `;\n    } else {\n      inputrow.innerHTML = `\n      <input class='check'  id='checkBox' type=\"checkbox\"  />\n    <p class='paragragh '> ${todo.description}</p>\n    <span class='hide'>${todo.id}</span>\n    <img class='kebabImg' src=\"${_assets_kebab_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"\" />\n    <a href=\"#\" class='delete'>🗑</a>\n    `;\n    }\n    ulContainer.appendChild(inputrow);\n  }\n\n  static trashTodo(list) {\n    if (list.classList.contains('delete')) {\n      list.parentElement.remove();\n    }\n  }\n\n  static deleteData() {\n    document.getElementById('input-text').value = '';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiTodo);\n\n\n//# sourceURL=webpack://web-pack/./src/modules/uIdisplay.js?");

/***/ }),

/***/ "./src/assets/kebab.svg":
/*!******************************!*\
  !*** ./src/assets/kebab.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4060799d0e3d97fd5ae7.svg\";\n\n//# sourceURL=webpack://web-pack/./src/assets/kebab.svg?");

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b26c5a048915af450e20.svg\";\n\n//# sourceURL=webpack://web-pack/./src/assets/trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
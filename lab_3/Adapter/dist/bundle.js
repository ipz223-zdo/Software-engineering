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

/***/ "./src/FileLoggerAdapter.ts":
/*!**********************************!*\
  !*** ./src/FileLoggerAdapter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FileLoggerAdapter: () => (/* binding */ FileLoggerAdapter)\n/* harmony export */ });\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.ts\");\n\nclass FileLoggerAdapter extends _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger {\n    fileWriter;\n    constructor(fileWriter) {\n        super();\n        this.fileWriter = fileWriter;\n    }\n    log(message) {\n        this.fileWriter.write(message);\n    }\n    error(message) {\n        this.fileWriter.writeLine(`ERROR: ${message}`);\n    }\n    warn(message) {\n        this.fileWriter.writeLine(`WARN: ${message}`);\n    }\n}\n\n\n//# sourceURL=webpack://adapter/./src/FileLoggerAdapter.ts?");

/***/ }),

/***/ "./src/FileWriter.ts":
/*!***************************!*\
  !*** ./src/FileWriter.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FileWriter: () => (/* binding */ FileWriter)\n/* harmony export */ });\nclass FileWriter {\n    write(data) {\n        // console.log(`Writing data: ${data}`);\n        this.appendToOutput('log', data);\n    }\n    writeLine(data) {\n        // console.log(`Writing line: ${data}`);\n        this.appendToOutput('log', `${data}\\n`);\n    }\n    appendToOutput(className, message) {\n        const outputDiv = document.getElementById('output');\n        if (outputDiv) {\n            const messageElement = document.createElement('div');\n            messageElement.className = className;\n            messageElement.innerText = message;\n            outputDiv.appendChild(messageElement);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://adapter/./src/FileWriter.ts?");

/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logger: () => (/* binding */ Logger)\n/* harmony export */ });\nclass Logger {\n    log(message) {\n        console.log(`%c${message}`, 'color: green');\n        // this.appendToOutput('log', message);\n    }\n    error(message) {\n        console.log(`%c${message}`, 'color: red');\n        // this.appendToOutput('error', message);\n    }\n    warn(message) {\n        console.log(`%c${message}`, 'color: orange');\n        // this.appendToOutput('warn', message);\n    }\n}\n\n\n//# sourceURL=webpack://adapter/./src/Logger.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FileWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileWriter */ \"./src/FileWriter.ts\");\n/* harmony import */ var _FileLoggerAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileLoggerAdapter */ \"./src/FileLoggerAdapter.ts\");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.ts\");\n\n\n\nfunction main() {\n    const logger = new _Logger__WEBPACK_IMPORTED_MODULE_2__.Logger();\n    const fileWriter = new _FileWriter__WEBPACK_IMPORTED_MODULE_0__.FileWriter();\n    const fileLogger = new _FileLoggerAdapter__WEBPACK_IMPORTED_MODULE_1__.FileLoggerAdapter(fileWriter);\n    logger.log(\"This is a 'log' message(Logger).\");\n    logger.error(\"This is an 'error' message(Logger).\");\n    logger.warn(\"This is a 'warning' message(Logger).\");\n    fileWriter.writeLine(\"This is 'writeLine' message(fileWriter)\");\n    fileWriter.write(\"This is 'write' message(fileWriter)\");\n    fileLogger.log(\"This is a 'log' message(fileLoggerAdapter).\");\n    fileLogger.error(\"This is an 'error' message(fileLoggerAdapter)\");\n    fileLogger.warn(\"This is a 'warning' message(fileLoggerAdapter)\");\n}\nmain();\n\n\n//# sourceURL=webpack://adapter/./src/main.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
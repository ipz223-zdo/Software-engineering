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

/***/ "./src/js/classes/Animal.js":
/*!**********************************!*\
  !*** ./src/js/classes/Animal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Animal = /*#__PURE__*/function () {\n  function Animal(id, name, species) {\n    _classCallCheck(this, Animal);\n    _defineProperty(this, \"id\", void 0);\n    _defineProperty(this, \"name\", void 0);\n    _defineProperty(this, \"species\", void 0);\n    this.id = id;\n    this.name = name;\n    this.species = species;\n  }\n  return _createClass(Animal, [{\n    key: \"feed\",\n    value: function feed() {\n      console.log(\"\".concat(this.name, \" the \").concat(this.species, \" has been fed.\"));\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://lab_1/./src/js/classes/Animal.js?");

/***/ }),

/***/ "./src/js/classes/Employee.js":
/*!************************************!*\
  !*** ./src/js/classes/Employee.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Employee: () => (/* binding */ Employee)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Employee = /*#__PURE__*/_createClass(function Employee(id, name, position) {\n  _classCallCheck(this, Employee);\n  _defineProperty(this, \"id\", void 0);\n  _defineProperty(this, \"name\", void 0);\n  _defineProperty(this, \"position\", void 0);\n  this.id = id;\n  this.name = name;\n  this.position = position;\n});\n\n//# sourceURL=webpack://lab_1/./src/js/classes/Employee.js?");

/***/ }),

/***/ "./src/js/classes/Enclosure.js":
/*!*************************************!*\
  !*** ./src/js/classes/Enclosure.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Enclosure: () => (/* binding */ Enclosure)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Enclosure = /*#__PURE__*/_createClass(function Enclosure(id, type, size) {\n  _classCallCheck(this, Enclosure);\n  _defineProperty(this, \"id\", void 0);\n  _defineProperty(this, \"type\", void 0);\n  _defineProperty(this, \"size\", void 0);\n  this.id = id;\n  this.type = type;\n  this.size = size;\n});\n\n//# sourceURL=webpack://lab_1/./src/js/classes/Enclosure.js?");

/***/ }),

/***/ "./src/js/classes/Food.js":
/*!********************************!*\
  !*** ./src/js/classes/Food.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Food: () => (/* binding */ Food)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Food = /*#__PURE__*/_createClass(function Food(id, name, quantity) {\n  _classCallCheck(this, Food);\n  _defineProperty(this, \"id\", void 0);\n  _defineProperty(this, \"name\", void 0);\n  _defineProperty(this, \"quantity\", void 0);\n  this.id = id;\n  this.name = name;\n  this.quantity = quantity;\n});\n\n//# sourceURL=webpack://lab_1/./src/js/classes/Food.js?");

/***/ }),

/***/ "./src/js/classes/Zoo.js":
/*!*******************************!*\
  !*** ./src/js/classes/Zoo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zoo: () => (/* binding */ Zoo)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Zoo = /*#__PURE__*/function () {\n  function Zoo() {\n    _classCallCheck(this, Zoo);\n    _defineProperty(this, \"animals\", []);\n    _defineProperty(this, \"employees\", []);\n    _defineProperty(this, \"foodInventory\", []);\n    _defineProperty(this, \"enclosures\", []);\n  }\n  return _createClass(Zoo, [{\n    key: \"addAnimal\",\n    value: function addAnimal(animal) {\n      this.animals.push(animal);\n    }\n  }, {\n    key: \"addEmployee\",\n    value: function addEmployee(employee) {\n      this.employees.push(employee);\n    }\n  }, {\n    key: \"addFood\",\n    value: function addFood(food) {\n      this.foodInventory.push(food);\n    }\n  }, {\n    key: \"addEnclosure\",\n    value: function addEnclosure(enclosure) {\n      this.enclosures.push(enclosure);\n    }\n  }, {\n    key: \"inventory\",\n    value: function inventory() {\n      this.displayAnimals();\n      this.displayEmployees();\n      this.displayFood();\n      this.displayEnclosures();\n    }\n  }, {\n    key: \"displayAnimals\",\n    value: function displayAnimals() {\n      console.log(\"Animals:\");\n      this.animals.forEach(function (animal) {\n        return console.log(\"ID: \".concat(animal.id, \", Name: \").concat(animal.name, \", Species: \").concat(animal.species));\n      });\n    }\n  }, {\n    key: \"displayEmployees\",\n    value: function displayEmployees() {\n      console.log(\"Employees:\");\n      this.employees.forEach(function (employee) {\n        return console.log(\"ID: \".concat(employee.id, \", Name: \").concat(employee.name, \", Position: \").concat(employee.position));\n      });\n    }\n  }, {\n    key: \"displayFood\",\n    value: function displayFood() {\n      console.log(\"Food Inventory:\");\n      this.foodInventory.forEach(function (food) {\n        return console.log(\"ID: \".concat(food.id, \", Name: \").concat(food.name, \", Quantity: \").concat(food.quantity));\n      });\n    }\n  }, {\n    key: \"displayEnclosures\",\n    value: function displayEnclosures() {\n      console.log(\"Enclosures:\");\n      this.enclosures.forEach(function (enclosure) {\n        return console.log(\"ID: \".concat(enclosure.id, \", Type: \").concat(enclosure.type, \", Size: \").concat(enclosure.size));\n      });\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://lab_1/./src/js/classes/Zoo.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Animal */ \"./src/js/classes/Animal.js\");\n/* harmony import */ var _classes_Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Employee */ \"./src/js/classes/Employee.js\");\n/* harmony import */ var _classes_Food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Food */ \"./src/js/classes/Food.js\");\n/* harmony import */ var _classes_Enclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Enclosure */ \"./src/js/classes/Enclosure.js\");\n/* harmony import */ var _classes_Zoo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Zoo */ \"./src/js/classes/Zoo.js\");\n\n\n\n\n\n// Fail Fast: Initialize Zoo and add objects directly\nvar zoo = new _classes_Zoo__WEBPACK_IMPORTED_MODULE_4__.Zoo();\n// Animals\nvar lion = new _classes_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal(1, \"Leo\", \"Lion\");\nvar zebra = new _classes_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal(2, \"Zara\", \"Zebra\");\nzoo.addAnimal(lion);\nzoo.addAnimal(zebra);\n// Employees\nvar keeper = new _classes_Employee__WEBPACK_IMPORTED_MODULE_1__.Employee(1, \"John Doe\", \"Keeper\");\nvar vet = new _classes_Employee__WEBPACK_IMPORTED_MODULE_1__.Employee(2, \"Jane Smith\", \"Veterinarian\");\nzoo.addEmployee(keeper);\nzoo.addEmployee(vet);\n// Food\nvar meat = new _classes_Food__WEBPACK_IMPORTED_MODULE_2__.Food(1, \"Meat\", 50);\nvar grass = new _classes_Food__WEBPACK_IMPORTED_MODULE_2__.Food(2, \"Grass\", 100);\nzoo.addFood(meat);\nzoo.addFood(grass);\n// Enclosures\nvar lionEnclosure = new _classes_Enclosure__WEBPACK_IMPORTED_MODULE_3__.Enclosure(1, \"Carnivore\", \"Large\");\nvar herbivoreEnclosure = new _classes_Enclosure__WEBPACK_IMPORTED_MODULE_3__.Enclosure(2, \"Herbivore\", \"Medium\");\nzoo.addEnclosure(lionEnclosure);\nzoo.addEnclosure(herbivoreEnclosure);\n// Display Inventory\nzoo.inventory();\n\n//# sourceURL=webpack://lab_1/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
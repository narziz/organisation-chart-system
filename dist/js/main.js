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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://organisation-chart-system/./src/scss/main.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/add.png */ \"./src/icons/add.png\");\n/* harmony import */ var _icons_remove_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/remove.png */ \"./src/icons/remove.png\");\n/* harmony import */ var _icons_cancel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/cancel.png */ \"./src/icons/cancel.png\");\n/* harmony import */ var _icons_confirm_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/confirm.png */ \"./src/icons/confirm.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet button = document.querySelector('button.category__button--add')\r\nbutton.addEventListener('click', function (event) {\r\n  init(event)    \r\n})\r\n\r\nfunction init(event) {\r\n  let category = event.target.closest('.category')\r\n  let subCategories = category.nextElementSibling\r\n\r\n  if (subCategories) {\r\n    addCategory(subCategories)\r\n  } else {\r\n    let ul = document.createElement('ul')\r\n    ul.classList.add('categories')\r\n    if (category.closest('.categories__item')) {\r\n      category.closest('.categories__item').append(ul)\r\n    } else {\r\n      category.closest('.container').append(ul)\r\n    }\r\n    \r\n    addCategory(ul)\r\n  }\r\n}\r\n\r\nfunction addCategory(elem){\r\n\r\n  let li = createElement({ el: 'li', class: 'categories__item', parent: elem })\r\n  let category = createElement({ el: 'div', class: 'category', parent: li })\r\n  let input = createElement({\r\n    el: 'input',\r\n    class: 'category__input',\r\n    placeholder: 'Category Name...',\r\n    parent: category\r\n  })\r\n\r\n  let btn_group = createElement({ el: 'div', class: 'category__btn-group', parent: category })\r\n\r\n  let btn_cancel = createElement({ \r\n    el: 'button', \r\n    btnType: 'cancel',\r\n    class: ['category__btn', 'category__button--cancel'], \r\n    parent: btn_group \r\n  })\r\n\r\n  let btn_confirm = createElement({\r\n    el: 'button',\r\n    btnType: 'confirm',\r\n    class: ['category__btn', 'category__button--confirm'],\r\n    parent: btn_group\r\n  })\r\n\r\n createElement({ el: 'img', class: 'category__img', src: _icons_cancel_png__WEBPACK_IMPORTED_MODULE_3__, parent: btn_cancel })\r\n createElement({ el: 'img', class: 'category__img', src: _icons_confirm_png__WEBPACK_IMPORTED_MODULE_4__, parent: btn_confirm })\r\n\r\n}\r\n\r\nfunction createCategory(elem) {\r\n  let category = elem.closest('.category')\r\n  let input = category.firstElementChild\r\n  let buttons = category.lastElementChild\r\n  let inputVal = input.value\r\n  input.remove()\r\n  buttons.remove()\r\n\r\n  category.classList.add('category--default')\r\n\r\n  createElement({ el: 'span', class: 'category__title', text: inputVal, parent: category })\r\n  let btn_group = createElement({ el: 'div', class: 'category__btn-group', parent: category })\r\n\r\n  let btn_add = createElement({ \r\n    el: 'button', \r\n    btnType: 'add',\r\n    class: ['category__btn', 'category__button--add'], \r\n    parent: btn_group \r\n  })\r\n\r\n  let btn_remove = createElement({\r\n    el: 'button',\r\n    btnType: 'remove',\r\n    class: ['category__btn', 'category__button--remove'],\r\n    parent: btn_group\r\n  })\r\n\r\n  createElement({ el: 'img', class: 'category__img', src: _icons_add_png__WEBPACK_IMPORTED_MODULE_1__, parent: btn_add })\r\n  createElement({ el: 'img', class: 'category__img', src: _icons_remove_png__WEBPACK_IMPORTED_MODULE_2__, parent: btn_remove })\r\n}\r\n\r\nfunction removeCategory(event) {\r\n  let category = event.target.closest('.categories__item');\r\n  let categories = category.parentElement;\r\n\r\n  if (categories.children.length > 1) {\r\n    category.remove()\r\n  } else {\r\n    categories.remove()\r\n  }\r\n}\r\n\r\nfunction createElement(params){\r\n  let elem = document.createElement(params.el)\r\n\r\n  if (Array.isArray(params.class)) {\r\n    params.class.forEach(clsName => elem.classList.add(clsName))\r\n  } else {\r\n    elem.classList.add(params.class)\r\n  }\r\n\r\n  if (params.text) {\r\n    elem.textContent = params.text\r\n  }\r\n\r\n  if (params.src) {\r\n    elem.src = params.src\r\n  }\r\n\r\n  if (params.placeholder) {\r\n    elem.placeholder = params.placeholder\r\n  }\r\n\r\n  if (params.btnType === 'add') {\r\n    elem.onclick = (e) => init(e)\r\n  } else if (params.btnType === 'remove') {\r\n    elem.onclick = (e) => openModal(e)\r\n  } else if (params.btnType === 'confirm'){\r\n    elem.onclick = () => createCategory(elem) \r\n  } else if (params.btnType === 'cancel'){\r\n    elem.onclick = (e) => removeCategory(e)\r\n  }\r\n\r\n  params.parent.append(elem)\r\n\r\n  return elem\r\n}\r\n\r\nfunction openModal(event) {\r\n  let modal = document.body.lastElementChild\r\n  let btnCancel= modal.querySelector('.modal__button--cancel')\r\n  let btnDelete = modal.querySelector('.modal__button--delete')\r\n  modal.classList.add('modal--active')\r\n\r\n  btnCancel.addEventListener('click', function () {\r\n    closeModal()\r\n  })\r\n  btnDelete.addEventListener('click', function () {\r\n    removeCategory(event)\r\n    closeModal()\r\n  })\r\n}\r\n\r\nfunction closeModal(params) {\r\n  let modal = document.body.lastElementChild\r\n  modal.classList.remove('modal--active')\r\n}\n\n//# sourceURL=webpack://organisation-chart-system/./src/js/index.js?");

/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/add.png\";\n\n//# sourceURL=webpack://organisation-chart-system/./src/icons/add.png?");

/***/ }),

/***/ "./src/icons/cancel.png":
/*!******************************!*\
  !*** ./src/icons/cancel.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/cancel.png\";\n\n//# sourceURL=webpack://organisation-chart-system/./src/icons/cancel.png?");

/***/ }),

/***/ "./src/icons/confirm.png":
/*!*******************************!*\
  !*** ./src/icons/confirm.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/confirm.png\";\n\n//# sourceURL=webpack://organisation-chart-system/./src/icons/confirm.png?");

/***/ }),

/***/ "./src/icons/remove.png":
/*!******************************!*\
  !*** ./src/icons/remove.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/remove.png\";\n\n//# sourceURL=webpack://organisation-chart-system/./src/icons/remove.png?");

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
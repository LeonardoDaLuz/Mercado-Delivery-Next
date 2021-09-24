"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets */ \"./assets/index.js\");\n/* harmony import */ var _store_actions_carrinho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/actions/carrinho */ \"./store/actions/carrinho.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.js\");\n/* harmony import */ var _globalStyleds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @globalStyleds */ \"./globalStyleds.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Sidebar */ \"./components/Sidebar/index.js\");\n/* harmony import */ var _BarraCategorias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BarraCategorias */ \"./components/BarraCategorias/index.js\");\n/* harmony import */ var utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/combinePathWithQuery */ \"./utils/combinePathWithQuery.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/leo/Dev/Mercado-Delivery-Next/front/components/Header/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import './style.css';\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header_(_ref) {\n  _s();\n\n  var history = _ref.history,\n      location = _ref.location;\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n  var carrinhoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (rootState) {\n    return rootState.carrinho;\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch((0,_store_actions_carrinho__WEBPACK_IMPORTED_MODULE_2__.carregarCarrinho)());\n  }, []);\n\n  function buscaSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData(e.target);\n    var searchedText = formData.get('busca');\n    router.push('/search?q=' + searchedText);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ContainerLg, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_globalStyleds__WEBPACK_IMPORTED_MODULE_4__.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n            href: \"/\",\n            passHref: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavbarLogo, {\n              href: \"/\",\n              passHref: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SearchBar, {\n            onSubmit: buscaSubmit,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"input\", {\n              type: \"text\",\n              name: \"busca\",\n              value: router.query['q']\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_globalStyleds__WEBPACK_IMPORTED_MODULE_4__.ButtonOutline, {\n              type: \"submit\",\n              children: \"Buscar\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Sandwich, {\n            id: \"sidebar-toogler\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.MenuPrincipal, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Crie sua conta\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Entre\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Compras\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              className: \"d-block\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Carrinho, {\n                id: \"carrinho\",\n                href: \"#\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n                  className: \"quantidade\",\n                  children: quantosProdutosTemNoCarrinho(carrinhoState)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n                  className: \"custo\",\n                  children: [\"R$ \", custoTotalNoCarrinho(carrinhoState)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 37\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      tooglerId: \"sidebar-toogler\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_BarraCategorias__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Header_, \"6WDdiDrA8wzPXeXBQeuVzCjjMV8=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];\n});\n\n_c = Header_;\n\nfunction quantosProdutosTemNoCarrinho(carrinho) {\n  //jogar isso no util depois\n  var qty = 0;\n\n  for (var key in carrinho.produtos) {\n    qty += carrinho.produtos[key].quantidade;\n  }\n\n  return qty;\n}\n\nfunction custoTotalNoCarrinho(carrinho) {\n  var custo = 0;\n\n  for (var key in carrinho.produtos) {\n    var prod = carrinho.produtos[key];\n    custo += parseFloat(prod.data.price) * parseInt(prod.quantidade);\n  }\n\n  return custo.toFixed(2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header_);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header_\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M2EwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFzc2V0cyBmcm9tICcvYXNzZXRzJztcbmltcG9ydCB7IGNhcnJlZ2FyQ2FycmluaG8gfSBmcm9tICcvc3RvcmUvYWN0aW9ucy9jYXJyaW5obyc7XG5cbi8vaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBIZWFkZXIsIENvbnRhaW5lckxnLCBOYXZiYXJMb2dvLCBTZWFyY2hCYXIsIFNhbmR3aWNoLCBDYXJyaW5obywgVGVzdGUsIE1lbnVQcmluY2lwYWwgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uT3V0bGluZSwgSG9yaXpvbnRhbEZsZXhMaXN0X0xnIH0gZnJvbSAnQGdsb2JhbFN0eWxlZHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL1NpZGViYXInO1xuaW1wb3J0IEJhcnJhQ2F0ZWdvcmlhcyBmcm9tICcuLi9CYXJyYUNhdGVnb3JpYXMnO1xuaW1wb3J0IHsgY29tYmluZVBhdGhXaXRoUXVlcnkyIH0gZnJvbSAndXRpbHMvY29tYmluZVBhdGhXaXRoUXVlcnknO1xuXG5cbmZ1bmN0aW9uIEhlYWRlcl8oeyBoaXN0b3J5LCBsb2NhdGlvbiB9KSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgY2FycmluaG9TdGF0ZSA9IHVzZVNlbGVjdG9yKHJvb3RTdGF0ZSA9PiByb290U3RhdGUuY2FycmluaG8pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY2FycmVnYXJDYXJyaW5obygpKTtcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIGJ1c2NhU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgICAgICBsZXQgc2VhcmNoZWRUZXh0ID0gZm9ybURhdGEuZ2V0KCdidXNjYScpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL3NlYXJjaD9xPScrc2VhcmNoZWRUZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxDb250YWluZXJMZz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJMb2dvIGhyZWY9XCIvXCIgcGFzc0hyZWY+PC9OYXZiYXJMb2dvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBvblN1Ym1pdD17YnVzY2FTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPVwiYnVzY2FcIiB2YWx1ZT17cm91dGVyLnF1ZXJ5WydxJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk91dGxpbmUgdHlwZT0nc3VibWl0Jz5CdXNjYXI8L0J1dHRvbk91dGxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaEJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTYW5kd2ljaCBpZD1cInNpZGViYXItdG9vZ2xlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TYW5kd2ljaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51UHJpbmNpcGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmllIHN1YSBjb250YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkVudHJlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcHJhczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnJpbmhvIGlkPVwiY2FycmluaG9cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGlkYWRlXCI+e3F1YW50b3NQcm9kdXRvc1RlbU5vQ2FycmluaG8oY2FycmluaG9TdGF0ZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvXCI+UiQge2N1c3RvVG90YWxOb0NhcnJpbmhvKGNhcnJpbmhvU3RhdGUpfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FycmluaG8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudVByaW5jaXBhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXJMZz5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPFNpZGViYXIgdG9vZ2xlcklkPSdzaWRlYmFyLXRvb2dsZXInIC8+XG4gICAgICAgICAgICA8QmFycmFDYXRlZ29yaWFzIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHF1YW50b3NQcm9kdXRvc1RlbU5vQ2FycmluaG8oY2FycmluaG8pIHsgLy9qb2dhciBpc3NvIG5vIHV0aWwgZGVwb2lzXG5cbiAgICBsZXQgcXR5ID0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gY2FycmluaG8ucHJvZHV0b3MpIHtcbiAgICAgICAgcXR5ICs9IGNhcnJpbmhvLnByb2R1dG9zW2tleV0ucXVhbnRpZGFkZTtcbiAgICB9XG4gICAgcmV0dXJuIHF0eTtcbn1cblxuZnVuY3Rpb24gY3VzdG9Ub3RhbE5vQ2FycmluaG8oY2FycmluaG8pIHtcbiAgICBcbiAgICBsZXQgY3VzdG8gPSAwO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGNhcnJpbmhvLnByb2R1dG9zKSB7XG4gICAgICAgIGxldCBwcm9kID0gY2FycmluaG8ucHJvZHV0b3Nba2V5XTtcbiAgICAgICAgY3VzdG8gKz0gKHBhcnNlRmxvYXQocHJvZC5kYXRhLnByaWNlKSAqIHBhcnNlSW50KHByb2QucXVhbnRpZGFkZSkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VzdG8udG9GaXhlZCgyKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJfO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYXNzZXRzIiwiY2FycmVnYXJDYXJyaW5obyIsIkhlYWRlciIsIkNvbnRhaW5lckxnIiwiTmF2YmFyTG9nbyIsIlNlYXJjaEJhciIsIlNhbmR3aWNoIiwiQ2FycmluaG8iLCJUZXN0ZSIsIk1lbnVQcmluY2lwYWwiLCJSb3ciLCJDb2wiLCJCdXR0b25PdXRsaW5lIiwiSG9yaXpvbnRhbEZsZXhMaXN0X0xnIiwidXNlUm91dGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkxpbmsiLCJTaWRlYmFyIiwiQmFycmFDYXRlZ29yaWFzIiwiY29tYmluZVBhdGhXaXRoUXVlcnkyIiwiSGVhZGVyXyIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInJvdXRlciIsImRpc3BhdGNoIiwiY2FycmluaG9TdGF0ZSIsInJvb3RTdGF0ZSIsImNhcnJpbmhvIiwiYnVzY2FTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0Iiwic2VhcmNoZWRUZXh0IiwiZ2V0IiwicHVzaCIsInF1ZXJ5IiwicXVhbnRvc1Byb2R1dG9zVGVtTm9DYXJyaW5obyIsImN1c3RvVG90YWxOb0NhcnJpbmhvIiwicXR5Iiwia2V5IiwicHJvZHV0b3MiLCJxdWFudGlkYWRlIiwiY3VzdG8iLCJwcm9kIiwicGFyc2VGbG9hdCIsImRhdGEiLCJwcmljZSIsInBhcnNlSW50IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});
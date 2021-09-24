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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets */ \"./assets/index.js\");\n/* harmony import */ var _store_actions_carrinho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/actions/carrinho */ \"./store/actions/carrinho.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.js\");\n/* harmony import */ var _globalStyleds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @globalStyleds */ \"./globalStyleds.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Sidebar */ \"./components/Sidebar/index.js\");\n/* harmony import */ var _BarraCategorias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BarraCategorias */ \"./components/BarraCategorias/index.js\");\n/* harmony import */ var utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/combinePathWithQuery */ \"./utils/combinePathWithQuery.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/leo/Dev/Mercado-Delivery-Next/front/components/Header/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import './style.css';\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header_(_ref) {\n  _s();\n\n  var history = _ref.history,\n      location = _ref.location;\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n  var carrinhoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (rootState) {\n    return rootState.carrinho;\n  });\n  var buscaTxt = new URLSearchParams(router.asPath.split('?').pop).get('q');\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buscaTxt),\n      buscaState = _useState[0],\n      setBuscaState = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch((0,_store_actions_carrinho__WEBPACK_IMPORTED_MODULE_2__.carregarCarrinho)());\n  }, []);\n\n  function buscaSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData(e.target);\n    var searchedText = formData.get('busca');\n    router.push('/search?q=' + searchedText);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ContainerLg, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_globalStyleds__WEBPACK_IMPORTED_MODULE_4__.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n            href: \"/\",\n            passHref: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavbarLogo, {\n              href: \"/\",\n              passHref: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SearchBar, {\n            onSubmit: buscaSubmit,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"input\", {\n              type: \"text\",\n              name: \"busca\",\n              onChange: function onChange(e) {\n                return setBuscaState(e.target.value);\n              },\n              vakye: buscaState\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_globalStyleds__WEBPACK_IMPORTED_MODULE_4__.ButtonOutline, {\n              type: \"submit\",\n              children: \"Buscar\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Sandwich, {\n            id: \"sidebar-toogler\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.MenuPrincipal, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Crie sua conta\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Entre\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Compras\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              className: \"d-block\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Carrinho, {\n                id: \"carrinho\",\n                href: \"#\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n                  className: \"quantidade\",\n                  children: quantosProdutosTemNoCarrinho(carrinhoState)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n                  className: \"custo\",\n                  children: [\"R$ \", custoTotalNoCarrinho(carrinhoState)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 37\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      tooglerId: \"sidebar-toogler\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_BarraCategorias__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Header_, \"0AimM3vyGBJ9Z0+mlyd70XtMZmo=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];\n});\n\n_c = Header_;\n\nfunction quantosProdutosTemNoCarrinho(carrinho) {\n  //jogar isso no util depois\n  var qty = 0;\n\n  for (var key in carrinho.produtos) {\n    qty += carrinho.produtos[key].quantidade;\n  }\n\n  return qty;\n}\n\nfunction custoTotalNoCarrinho(carrinho) {\n  var custo = 0;\n\n  for (var key in carrinho.produtos) {\n    var prod = carrinho.produtos[key];\n    custo += parseFloat(prod.data.price) * parseInt(prod.quantidade);\n  }\n\n  return custo.toFixed(2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header_);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header_\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksR0FBR3pCLFFBQVEsQ0FBQ3NCLFFBQVQsQ0FBa0JELEdBQWxCLENBQVg7QUFDQUcsSUFBQUEsS0FBSyxJQUFLRSxVQUFVLENBQUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxLQUFYLENBQVYsR0FBOEJDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDRixVQUFOLENBQWhEO0FBQ0g7O0FBQ0QsU0FBT0MsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUFQO0FBQ0g7O0FBR0QsK0RBQWVyQyxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzPzNhMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXNzZXRzIGZyb20gJy9hc3NldHMnO1xuaW1wb3J0IHsgY2FycmVnYXJDYXJyaW5obyB9IGZyb20gJy9zdG9yZS9hY3Rpb25zL2NhcnJpbmhvJztcblxuLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEhlYWRlciwgQ29udGFpbmVyTGcsIE5hdmJhckxvZ28sIFNlYXJjaEJhciwgU2FuZHdpY2gsIENhcnJpbmhvLCBUZXN0ZSwgTWVudVByaW5jaXBhbCB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b25PdXRsaW5lLCBIb3Jpem9udGFsRmxleExpc3RfTGcgfSBmcm9tICdAZ2xvYmFsU3R5bGVkcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhcic7XG5pbXBvcnQgQmFycmFDYXRlZ29yaWFzIGZyb20gJy4uL0JhcnJhQ2F0ZWdvcmlhcyc7XG5pbXBvcnQgeyBjb21iaW5lUGF0aFdpdGhRdWVyeTIgfSBmcm9tICd1dGlscy9jb21iaW5lUGF0aFdpdGhRdWVyeSc7XG5cblxuZnVuY3Rpb24gSGVhZGVyXyh7IGhpc3RvcnksIGxvY2F0aW9uIH0pIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBjYXJyaW5ob1N0YXRlID0gdXNlU2VsZWN0b3Iocm9vdFN0YXRlID0+IHJvb3RTdGF0ZS5jYXJyaW5obyk7XG4gICAgY29uc3QgYnVzY2FUeHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5hc1BhdGguc3BsaXQoJz8nKS5wb3ApLmdldCgncScpO1xuICAgIGNvbnN0IFtidXNjYVN0YXRlLCBzZXRCdXNjYVN0YXRlXSA9IHVzZVN0YXRlKGJ1c2NhVHh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNhcnJlZ2FyQ2FycmluaG8oKSk7XG4gICAgfSwgW10pXG5cbiAgICBmdW5jdGlvbiBidXNjYVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgbGV0IHNlYXJjaGVkVGV4dCA9IGZvcm1EYXRhLmdldCgnYnVzY2EnKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9zZWFyY2g/cT0nICsgc2VhcmNoZWRUZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxDb250YWluZXJMZz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJMb2dvIGhyZWY9XCIvXCIgcGFzc0hyZWY+PC9OYXZiYXJMb2dvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBvblN1Ym1pdD17YnVzY2FTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPVwiYnVzY2FcIiBvbkNoYW5nZT17KGUpID0+IHNldEJ1c2NhU3RhdGUoZS50YXJnZXQudmFsdWUpfSB2YWt5ZT17YnVzY2FTdGF0ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25PdXRsaW5lIHR5cGU9J3N1Ym1pdCc+QnVzY2FyPC9CdXR0b25PdXRsaW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hCYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2FuZHdpY2ggaWQ9XCJzaWRlYmFyLXRvb2dsZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2FuZHdpY2g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVByaW5jaXBhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3JpZSBzdWEgY29udGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FbnRyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXByYXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJyaW5obyBpZD1cImNhcnJpbmhvXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpZGFkZVwiPntxdWFudG9zUHJvZHV0b3NUZW1Ob0NhcnJpbmhvKGNhcnJpbmhvU3RhdGUpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b1wiPlIkIHtjdXN0b1RvdGFsTm9DYXJyaW5obyhjYXJyaW5ob1N0YXRlKX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcnJpbmhvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVQcmluY2lwYWw+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyTGc+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxTaWRlYmFyIHRvb2dsZXJJZD0nc2lkZWJhci10b29nbGVyJyAvPlxuICAgICAgICAgICAgPEJhcnJhQ2F0ZWdvcmlhcyAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBxdWFudG9zUHJvZHV0b3NUZW1Ob0NhcnJpbmhvKGNhcnJpbmhvKSB7IC8vam9nYXIgaXNzbyBubyB1dGlsIGRlcG9pc1xuXG4gICAgbGV0IHF0eSA9IDA7XG4gICAgZm9yICh2YXIga2V5IGluIGNhcnJpbmhvLnByb2R1dG9zKSB7XG4gICAgICAgIHF0eSArPSBjYXJyaW5oby5wcm9kdXRvc1trZXldLnF1YW50aWRhZGU7XG4gICAgfVxuICAgIHJldHVybiBxdHk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvVG90YWxOb0NhcnJpbmhvKGNhcnJpbmhvKSB7XG5cbiAgICBsZXQgY3VzdG8gPSAwO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGNhcnJpbmhvLnByb2R1dG9zKSB7XG4gICAgICAgIGxldCBwcm9kID0gY2FycmluaG8ucHJvZHV0b3Nba2V5XTtcbiAgICAgICAgY3VzdG8gKz0gKHBhcnNlRmxvYXQocHJvZC5kYXRhLnByaWNlKSAqIHBhcnNlSW50KHByb2QucXVhbnRpZGFkZSkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VzdG8udG9GaXhlZCgyKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJfO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhc3NldHMiLCJjYXJyZWdhckNhcnJpbmhvIiwiSGVhZGVyIiwiQ29udGFpbmVyTGciLCJOYXZiYXJMb2dvIiwiU2VhcmNoQmFyIiwiU2FuZHdpY2giLCJDYXJyaW5obyIsIlRlc3RlIiwiTWVudVByaW5jaXBhbCIsIlJvdyIsIkNvbCIsIkJ1dHRvbk91dGxpbmUiLCJIb3Jpem9udGFsRmxleExpc3RfTGciLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTGluayIsIlNpZGViYXIiLCJCYXJyYUNhdGVnb3JpYXMiLCJjb21iaW5lUGF0aFdpdGhRdWVyeTIiLCJIZWFkZXJfIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicm91dGVyIiwiZGlzcGF0Y2giLCJjYXJyaW5ob1N0YXRlIiwicm9vdFN0YXRlIiwiY2FycmluaG8iLCJidXNjYVR4dCIsIlVSTFNlYXJjaFBhcmFtcyIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwiZ2V0IiwiYnVzY2FTdGF0ZSIsInNldEJ1c2NhU3RhdGUiLCJidXNjYVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJzZWFyY2hlZFRleHQiLCJwdXNoIiwidmFsdWUiLCJxdWFudG9zUHJvZHV0b3NUZW1Ob0NhcnJpbmhvIiwiY3VzdG9Ub3RhbE5vQ2FycmluaG8iLCJxdHkiLCJrZXkiLCJwcm9kdXRvcyIsInF1YW50aWRhZGUiLCJjdXN0byIsInByb2QiLCJwYXJzZUZsb2F0IiwiZGF0YSIsInByaWNlIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[[...category]]",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets */ \"./assets/index.js\");\n/* harmony import */ var _store_actions_carrinho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/actions/carrinho */ \"./store/actions/carrinho.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.js\");\n/* harmony import */ var _globalStyleds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @globalStyleds */ \"./globalStyleds.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Sidebar */ \"./components/Sidebar/index.js\");\n/* harmony import */ var _BarraCategorias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BarraCategorias */ \"./components/BarraCategorias/index.js\");\n/* harmony import */ var utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/combinePathWithQuery */ \"./utils/combinePathWithQuery.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/leo/Dev/Mercado-Delivery-Next/front/components/Header/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import './style.css';\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header_(_ref) {\n  _s();\n\n  var history = _ref.history,\n      location = _ref.location;\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n  var carrinhoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (rootState) {\n    return rootState.carrinho;\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch((0,_store_actions_carrinho__WEBPACK_IMPORTED_MODULE_2__.carregarCarrinho)());\n  }, []);\n\n  function buscaSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData(e.target);\n    var searchedText = formData.get('busca');\n    router.push((0,utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_10__.combinePathWithQuery2)('/search?q=' + searchedText));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ContainerLg, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_globalStyleds__WEBPACK_IMPORTED_MODULE_4__.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n            href: \"/\",\n            passHref: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavbarLogo, {\n              href: \"/\",\n              passHref: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SearchBar, {\n            onSubmit: buscaSubmit,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"input\", {\n              type: \"text\",\n              name: \"busca\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_globalStyleds__WEBPACK_IMPORTED_MODULE_4__.ButtonOutline, {\n              type: \"submit\",\n              children: \"Buscar\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Sandwich, {\n            id: \"sidebar-toogler\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.MenuPrincipal, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Crie sua conta\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Entre\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              children: \"Compras\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"li\", {\n              className: \"d-block\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Carrinho, {\n                id: \"carrinho\",\n                href: \"#\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n                  className: \"quantidade\",\n                  children: quantosProdutosTemNoCarrinho(carrinhoState)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n                  className: \"custo\",\n                  children: [\"R$ \", custoTotalNoCarrinho(carrinhoState)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 37\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      tooglerId: \"sidebar-toogler\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_BarraCategorias__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Header_, \"6WDdiDrA8wzPXeXBQeuVzCjjMV8=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];\n});\n\n_c = Header_;\n\nfunction quantosProdutosTemNoCarrinho(carrinho) {\n  //jogar isso no util depois\n  var qty = 0;\n\n  for (var key in carrinho.produtos) {\n    qty += carrinho.produtos[key].quantidade;\n  }\n\n  return qty;\n}\n\nfunction custoTotalNoCarrinho(carrinho) {\n  var custo = 0;\n\n  for (var key in carrinho.produtos) {\n    var prod = carrinho.produtos[key];\n    custo += parseFloat(prod.data.price) * parseInt(prod.quantidade);\n  }\n\n  return custo.toFixed(2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header_);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header_\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQTZCSSwrREFBQyw2Q0FBRDtBQUFTLGVBQVMsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JKLGVBOEJJLCtEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Qko7QUFBQSxrQkFESjtBQWtDSDs7R0FuRFFMO1VBRVVQLGdFQUNFQyxzREFDS0M7OztLQUpqQks7O0FBcURULFNBQVNpQiw0QkFBVCxDQUFzQ1YsUUFBdEMsRUFBZ0Q7QUFBRTtBQUU5QyxNQUFJWSxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxPQUFLLElBQUlDLEdBQVQsSUFBZ0JiLFFBQVEsQ0FBQ2MsUUFBekIsRUFBbUM7QUFDL0JGLElBQUFBLEdBQUcsSUFBSVosUUFBUSxDQUFDYyxRQUFULENBQWtCRCxHQUFsQixFQUF1QkUsVUFBOUI7QUFDSDs7QUFDRCxTQUFPSCxHQUFQO0FBQ0g7O0FBRUQsU0FBU0Qsb0JBQVQsQ0FBOEJYLFFBQTlCLEVBQXdDO0FBRXBDLE1BQUlnQixLQUFLLEdBQUcsQ0FBWjs7QUFFQSxPQUFLLElBQUlILEdBQVQsSUFBZ0JiLFFBQVEsQ0FBQ2MsUUFBekIsRUFBbUM7QUFDL0IsUUFBSUcsSUFBSSxHQUFHakIsUUFBUSxDQUFDYyxRQUFULENBQWtCRCxHQUFsQixDQUFYO0FBQ0FHLElBQUFBLEtBQUssSUFBS0UsVUFBVSxDQUFDRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsS0FBWCxDQUFWLEdBQThCQyxRQUFRLENBQUNKLElBQUksQ0FBQ0YsVUFBTixDQUFoRDtBQUNIOztBQUNELFNBQU9DLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBUDtBQUNIOztBQUdELCtEQUFlN0IsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz8zYTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXNzZXRzIGZyb20gJy9hc3NldHMnO1xuaW1wb3J0IHsgY2FycmVnYXJDYXJyaW5obyB9IGZyb20gJy9zdG9yZS9hY3Rpb25zL2NhcnJpbmhvJztcblxuLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEhlYWRlciwgQ29udGFpbmVyTGcsIE5hdmJhckxvZ28sIFNlYXJjaEJhciwgU2FuZHdpY2gsIENhcnJpbmhvLCBUZXN0ZSwgTWVudVByaW5jaXBhbCB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b25PdXRsaW5lLCBIb3Jpem9udGFsRmxleExpc3RfTGcgfSBmcm9tICdAZ2xvYmFsU3R5bGVkcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhcic7XG5pbXBvcnQgQmFycmFDYXRlZ29yaWFzIGZyb20gJy4uL0JhcnJhQ2F0ZWdvcmlhcyc7XG5pbXBvcnQgeyBjb21iaW5lUGF0aFdpdGhRdWVyeTIgfSBmcm9tICd1dGlscy9jb21iaW5lUGF0aFdpdGhRdWVyeSc7XG5cblxuZnVuY3Rpb24gSGVhZGVyXyh7IGhpc3RvcnksIGxvY2F0aW9uIH0pIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBjYXJyaW5ob1N0YXRlID0gdXNlU2VsZWN0b3Iocm9vdFN0YXRlID0+IHJvb3RTdGF0ZS5jYXJyaW5obyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChjYXJyZWdhckNhcnJpbmhvKCkpO1xuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gYnVzY2FTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgIGxldCBzZWFyY2hlZFRleHQgPSBmb3JtRGF0YS5nZXQoJ2J1c2NhJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKGNvbWJpbmVQYXRoV2l0aFF1ZXJ5MignL3NlYXJjaD9xPScrc2VhcmNoZWRUZXh0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyTGc+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyTG9nbyBocmVmPVwiL1wiIHBhc3NIcmVmPjwvTmF2YmFyTG9nbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgb25TdWJtaXQ9e2J1c2NhU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT1cImJ1c2NhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uT3V0bGluZSB0eXBlPSdzdWJtaXQnPkJ1c2NhcjwvQnV0dG9uT3V0bGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNhbmR3aWNoIGlkPVwic2lkZWJhci10b29nbGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NhbmR3aWNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVQcmluY2lwYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNyaWUgc3VhIGNvbnRhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW50cmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21wcmFzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FycmluaG8gaWQ9XCJjYXJyaW5ob1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aWRhZGVcIj57cXVhbnRvc1Byb2R1dG9zVGVtTm9DYXJyaW5obyhjYXJyaW5ob1N0YXRlKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9cIj5SJCB7Y3VzdG9Ub3RhbE5vQ2FycmluaG8oY2FycmluaG9TdGF0ZSl9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJyaW5obz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51UHJpbmNpcGFsPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lckxnPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8U2lkZWJhciB0b29nbGVySWQ9J3NpZGViYXItdG9vZ2xlcicgLz5cbiAgICAgICAgICAgIDxCYXJyYUNhdGVnb3JpYXMgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcXVhbnRvc1Byb2R1dG9zVGVtTm9DYXJyaW5obyhjYXJyaW5obykgeyAvL2pvZ2FyIGlzc28gbm8gdXRpbCBkZXBvaXNcblxuICAgIGxldCBxdHkgPSAwO1xuICAgIGZvciAodmFyIGtleSBpbiBjYXJyaW5oby5wcm9kdXRvcykge1xuICAgICAgICBxdHkgKz0gY2FycmluaG8ucHJvZHV0b3Nba2V5XS5xdWFudGlkYWRlO1xuICAgIH1cbiAgICByZXR1cm4gcXR5O1xufVxuXG5mdW5jdGlvbiBjdXN0b1RvdGFsTm9DYXJyaW5obyhjYXJyaW5obykge1xuICAgIFxuICAgIGxldCBjdXN0byA9IDA7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gY2FycmluaG8ucHJvZHV0b3MpIHtcbiAgICAgICAgbGV0IHByb2QgPSBjYXJyaW5oby5wcm9kdXRvc1trZXldO1xuICAgICAgICBjdXN0byArPSAocGFyc2VGbG9hdChwcm9kLmRhdGEucHJpY2UpICogcGFyc2VJbnQocHJvZC5xdWFudGlkYWRlKSk7XG4gICAgfVxuICAgIHJldHVybiBjdXN0by50b0ZpeGVkKDIpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcl87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhc3NldHMiLCJjYXJyZWdhckNhcnJpbmhvIiwiSGVhZGVyIiwiQ29udGFpbmVyTGciLCJOYXZiYXJMb2dvIiwiU2VhcmNoQmFyIiwiU2FuZHdpY2giLCJDYXJyaW5obyIsIlRlc3RlIiwiTWVudVByaW5jaXBhbCIsIlJvdyIsIkNvbCIsIkJ1dHRvbk91dGxpbmUiLCJIb3Jpem9udGFsRmxleExpc3RfTGciLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTGluayIsIlNpZGViYXIiLCJCYXJyYUNhdGVnb3JpYXMiLCJjb21iaW5lUGF0aFdpdGhRdWVyeTIiLCJIZWFkZXJfIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicm91dGVyIiwiZGlzcGF0Y2giLCJjYXJyaW5ob1N0YXRlIiwicm9vdFN0YXRlIiwiY2FycmluaG8iLCJidXNjYVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJzZWFyY2hlZFRleHQiLCJnZXQiLCJwdXNoIiwicXVhbnRvc1Byb2R1dG9zVGVtTm9DYXJyaW5obyIsImN1c3RvVG90YWxOb0NhcnJpbmhvIiwicXR5Iiwia2V5IiwicHJvZHV0b3MiLCJxdWFudGlkYWRlIiwiY3VzdG8iLCJwcm9kIiwicGFyc2VGbG9hdCIsImRhdGEiLCJwcmljZSIsInBhcnNlSW50IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});
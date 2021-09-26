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

/***/ "./store/slices/productsSlice.js":
/*!***************************************!*\
  !*** ./store/slices/productsSlice.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsSlice\": function() { return /* binding */ productsSlice; },\n/* harmony export */   \"loadMoreProductsStart\": function() { return /* binding */ loadMoreProductsStart; },\n/* harmony export */   \"loadMoreProductsSuccess\": function() { return /* binding */ loadMoreProductsSuccess; },\n/* harmony export */   \"loadMoreProductsFailure\": function() { return /* binding */ loadMoreProductsFailure; },\n/* harmony export */   \"resetProductList\": function() { return /* binding */ resetProductList; },\n/* harmony export */   \"loadMoreProducts\": function() { return /* binding */ loadMoreProducts; },\n/* harmony export */   \"reloadProductList\": function() { return /* binding */ reloadProductList; }\n/* harmony export */ });\n/* harmony import */ var _home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/combinePathWithQuery */ \"./utils/combinePathWithQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar initialState = {\n  status: 'IDLE',\n  loadingStarted: null,\n  mainSearch: []\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSlice)({\n  name: 'products',\n  initialState: initialState,\n  reducers: {\n    loadMoreProductsStart: function loadMoreProductsStart(state) {\n      state.status = \"LOADING\";\n    },\n    loadMoreProductsSuccess: function loadMoreProductsSuccess(state, action) {\n      var currentKey = (0,utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_4__.combinePathWithQuery2)(action.payload.path, action.payload.query);\n      var previousProductList = state[currentKey];\n      previousProductList = previousProductList === undefined ? [] : previousProductList;\n      state[currentKey] = previousProductList.concat(action.payload.data);\n      state.status = 'SUCCESS';\n    },\n    loadMoreProductsFailure: function loadMoreProductsFailure(state) {\n      state.status = 'FAILURE';\n    },\n    resetProductList: function resetProductList(state) {\n      Object.keys(state.mainSearch).forEach(function (key) {\n        return state.mainSearch[key] = [];\n      });\n    }\n  },\n  extraReducers: (0,_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.HYDRATE, function (state, action) {\n    return _objectSpread(_objectSpread({}, state), action.payload.products);\n  })\n});\nvar _productsSlice$action = productsSlice.actions,\n    loadMoreProductsStart = _productsSlice$action.loadMoreProductsStart,\n    loadMoreProductsSuccess = _productsSlice$action.loadMoreProductsSuccess,\n    loadMoreProductsFailure = _productsSlice$action.loadMoreProductsFailure,\n    resetProductList = _productsSlice$action.resetProductList;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n/* THUNKS: */\n\nvar loadMoreProducts = function loadMoreProducts(path, query, quantity) {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(dispatch, getState) {\n      var currentLoadedProducts, slicesFrom, url, response, data;\n      return _home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              currentLoadedProducts = getState().products[(0,utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_4__.combinePathWithQuery2)(path, query)];\n              if (currentLoadedProducts === undefined) currentLoadedProducts = [];\n              slicesFrom = currentLoadedProducts.length; //Montando a url de pesquisa q será interpretada pelo backend.\n\n              url = \"http://localhost:3001\" + \"/search\" + (0,utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_4__.combinePathWithQuery2)(path + '/' + slicesFrom + \"/\" + (slicesFrom + quantity), query); //fazendo as requisições e a emissão os actions.\n\n              _context.next = 6;\n              return dispatch(loadMoreProductsStart({\n                url: url\n              }));\n\n            case 6:\n              _context.next = 8;\n              return fetch(url);\n\n            case 8:\n              response = _context.sent;\n              _context.prev = 9;\n              _context.next = 12;\n              return response.json();\n\n            case 12:\n              data = _context.sent;\n              dispatch(loadMoreProductsSuccess({\n                data: data,\n                path: path,\n                query: query,\n                url: url\n              }));\n              _context.next = 19;\n              break;\n\n            case 16:\n              _context.prev = 16;\n              _context.t0 = _context[\"catch\"](9);\n              dispatch(loadMoreProductsFailure({\n                error: _context.t0.message,\n                status: response.status,\n                url: url\n              }));\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[9, 16]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar reloadProductList = function reloadProductList(path, query, quantidade) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(dispatch, getState) {\n      return _home_leo_Dev_Mercado_Delivery_Next_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              dispatch(resetProductList());\n              dispatch(loadMoreProducts(path, query, quantidade));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLENBQUM3QixJQUFELEVBQU9DLEtBQVAsRUFBYzZCLFVBQWQsRUFBNkI7QUFDMUQ7QUFBQSxzU0FBTyxrQkFBT1osUUFBUCxFQUFpQkMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIRCxjQUFBQSxRQUFRLENBQUNYLGdCQUFnQixFQUFqQixDQUFSO0FBQ0FXLGNBQUFBLFFBQVEsQ0FBQ0YsZ0JBQWdCLENBQUNoQixJQUFELEVBQU9DLEtBQVAsRUFBYzZCLFVBQWQsQ0FBakIsQ0FBUjs7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUgsQ0FMTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9zbGljZXMvcHJvZHVjdHNTbGljZS5qcz9jY2U4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgY29tYmluZVBhdGhXaXRoUXVlcnkyIH0gZnJvbSAndXRpbHMvY29tYmluZVBhdGhXaXRoUXVlcnknO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgc3RhdHVzOiAnSURMRScsXG4gICAgbG9hZGluZ1N0YXJ0ZWQ6IG51bGwsXG4gICAgbWFpblNlYXJjaDogW10sXG59O1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvZHVjdHMnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBsb2FkTW9yZVByb2R1Y3RzU3RhcnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gXCJMT0FESU5HXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRNb3JlUHJvZHVjdHNTdWNjZXNzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEtleSA9IGNvbWJpbmVQYXRoV2l0aFF1ZXJ5MihhY3Rpb24ucGF5bG9hZC5wYXRoLCBhY3Rpb24ucGF5bG9hZC5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNQcm9kdWN0TGlzdCA9IHN0YXRlW2N1cnJlbnRLZXldO1xuICAgICAgICAgICAgcHJldmlvdXNQcm9kdWN0TGlzdCA9IHByZXZpb3VzUHJvZHVjdExpc3QgPT09IHVuZGVmaW5lZCA/IFtdIDogcHJldmlvdXNQcm9kdWN0TGlzdDtcbiAgICAgICAgICAgIHN0YXRlW2N1cnJlbnRLZXldID0gcHJldmlvdXNQcm9kdWN0TGlzdC5jb25jYXQoYWN0aW9uLnBheWxvYWQuZGF0YSk7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnU1VDQ0VTUyc7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRNb3JlUHJvZHVjdHNGYWlsdXJlOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdGQUlMVVJFJztcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXRQcm9kdWN0TGlzdDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5tYWluU2VhcmNoKS5mb3JFYWNoKGtleSA9PiBzdGF0ZS5tYWluU2VhcmNoW2tleV0gPSBbXSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBleHRyYVJlZHVjZXJzOiB7XG4gICAgICAgIFtIWURSQVRFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBsb2FkTW9yZVByb2R1Y3RzU3RhcnQsIGxvYWRNb3JlUHJvZHVjdHNTdWNjZXNzLCBsb2FkTW9yZVByb2R1Y3RzRmFpbHVyZSwgcmVzZXRQcm9kdWN0TGlzdCB9ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcblxuXG4vKiBUSFVOS1M6ICovXG5cbmV4cG9ydCBjb25zdCBsb2FkTW9yZVByb2R1Y3RzID0gKHBhdGgsIHF1ZXJ5LCBxdWFudGl0eSkgPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRMb2FkZWRQcm9kdWN0cyA9IGdldFN0YXRlKCkucHJvZHVjdHNbY29tYmluZVBhdGhXaXRoUXVlcnkyKHBhdGgsIHF1ZXJ5KV07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMb2FkZWRQcm9kdWN0cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgY3VycmVudExvYWRlZFByb2R1Y3RzID0gW107XG5cbiAgICAgICAgY29uc3Qgc2xpY2VzRnJvbSA9IGN1cnJlbnRMb2FkZWRQcm9kdWN0cy5sZW5ndGg7XG5cbiAgICAgICAgLy9Nb250YW5kbyBhIHVybCBkZSBwZXNxdWlzYSBxIHNlcsOhIGludGVycHJldGFkYSBwZWxvIGJhY2tlbmQuXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiICsgXCIvc2VhcmNoXCIgKyBjb21iaW5lUGF0aFdpdGhRdWVyeTIocGF0aCArICcvJyArIHNsaWNlc0Zyb20gKyBcIi9cIiArIChzbGljZXNGcm9tICsgcXVhbnRpdHkpLCBxdWVyeSk7XG5cbiAgICAgICAgLy9mYXplbmRvIGFzIHJlcXVpc2nDp8O1ZXMgZSBhIGVtaXNzw6NvIG9zIGFjdGlvbnMuXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGxvYWRNb3JlUHJvZHVjdHNTdGFydCh7IHVybCB9KSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZE1vcmVQcm9kdWN0c1N1Y2Nlc3MoeyBkYXRhLCBwYXRoLCBxdWVyeSwgdXJsIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkTW9yZVByb2R1Y3RzRmFpbHVyZSh7IGVycm9yOiBlcnIubWVzc2FnZSwgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsIHVybCB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWxvYWRQcm9kdWN0TGlzdCA9IChwYXRoLCBxdWVyeSwgcXVhbnRpZGFkZSkgPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHJlc2V0UHJvZHVjdExpc3QoKSk7XG4gICAgICAgIGRpc3BhdGNoKGxvYWRNb3JlUHJvZHVjdHMocGF0aCwgcXVlcnksIHF1YW50aWRhZGUpKTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIkhZRFJBVEUiLCJwcm9kdWNlIiwiY29tYmluZVBhdGhXaXRoUXVlcnkyIiwiaW5pdGlhbFN0YXRlIiwic3RhdHVzIiwibG9hZGluZ1N0YXJ0ZWQiLCJtYWluU2VhcmNoIiwicHJvZHVjdHNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvYWRNb3JlUHJvZHVjdHNTdGFydCIsInN0YXRlIiwibG9hZE1vcmVQcm9kdWN0c1N1Y2Nlc3MiLCJhY3Rpb24iLCJjdXJyZW50S2V5IiwicGF5bG9hZCIsInBhdGgiLCJxdWVyeSIsInByZXZpb3VzUHJvZHVjdExpc3QiLCJ1bmRlZmluZWQiLCJjb25jYXQiLCJkYXRhIiwibG9hZE1vcmVQcm9kdWN0c0ZhaWx1cmUiLCJyZXNldFByb2R1Y3RMaXN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJleHRyYVJlZHVjZXJzIiwicHJvZHVjdHMiLCJhY3Rpb25zIiwicmVkdWNlciIsImxvYWRNb3JlUHJvZHVjdHMiLCJxdWFudGl0eSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJjdXJyZW50TG9hZGVkUHJvZHVjdHMiLCJzbGljZXNGcm9tIiwibGVuZ3RoIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJyZWxvYWRQcm9kdWN0TGlzdCIsInF1YW50aWRhZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/productsSlice.js\n");

/***/ })

});
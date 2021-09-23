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

/***/ "./store/reducers/products.js":
/*!************************************!*\
  !*** ./store/reducers/products.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./store/types/index.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n/* harmony import */ var utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/combinePathWithQuery */ \"./utils/combinePathWithQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar initialState = {\n  status: 'IDLE',\n  mainSearch: []\n};\nvar products = (0,immer__WEBPACK_IMPORTED_MODULE_3__.default)(function (draftState, action) {\n  var payload = action.payload;\n\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:\n      Object.keys(action.payload.products).forEach(function (key) {// draftState[key] = action.payload.products[key];\n      });\n      break;\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__.CARREGA_MAIS_PRODUTOS_START:\n      draftState.status = \"LOADING\";\n      break;\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__.CARREGA_MAIS_PRODUTOS_SUCCESS:\n      var currentKey = (0,utils_combinePathWithQuery__WEBPACK_IMPORTED_MODULE_2__.combinePathWithQuery2)(payload.path, payload.query);\n      var previousProductList = draftState[currentKey];\n      previousProductList = previousProductList === undefined ? [] : previousProductList;\n      draftState[currentKey] = previousProductList.concat(payload.data);\n      draftState.status = 'SUCCESS';\n      break;\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__.CARREGA_MAIS_PRODUTOS_FAILURE:\n      draftState.status = 'FAILURE';\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__.RESETA_LISTA_PRODUTOS:\n      draftState.mainSearch = [];\n      break;\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__.RESET_PRODUCT_LIST:\n      Object.keys(draftState.mainSearch).forEach(function (key) {\n        return draftState.mainSearch[key] = [];\n      });\n      break;\n\n    default:\n      return draftState;\n  }\n}, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUVBLElBQU1jLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsTUFBTSxFQUFFLE1BRFM7QUFFakJDLEVBQUFBLFVBQVUsRUFBRTtBQUZLLENBQXJCO0FBS0EsSUFBTUMsUUFBUSxHQUFHTCw4Q0FBTyxDQUFDLFVBQUNNLFVBQUQsRUFBYUMsTUFBYixFQUF3QjtBQUU3QyxNQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0MsT0FBdkI7O0FBRUEsVUFBUUQsTUFBTSxDQUFDRSxJQUFmO0FBQ0ksU0FBS1YsdURBQUw7QUFDSVcsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxRQUEzQixFQUFxQ08sT0FBckMsQ0FBNkMsVUFBQ0MsR0FBRCxFQUFTLENBQ25EO0FBQ0YsT0FGRDtBQUdBOztBQUNKLFNBQUtuQiwrREFBTDtBQUNJWSxNQUFBQSxVQUFVLENBQUNILE1BQVgsR0FBb0IsU0FBcEI7QUFDQTs7QUFDSixTQUFLUixpRUFBTDtBQUNJLFVBQU1tQixVQUFVLEdBQUdiLGlGQUFxQixDQUFDTyxPQUFPLENBQUNPLElBQVQsRUFBZVAsT0FBTyxDQUFDUSxLQUF2QixDQUF4QztBQUNBLFVBQUlDLG1CQUFtQixHQUFHWCxVQUFVLENBQUNRLFVBQUQsQ0FBcEM7QUFDQUcsTUFBQUEsbUJBQW1CLEdBQUdBLG1CQUFtQixLQUFLQyxTQUF4QixHQUFvQyxFQUFwQyxHQUF5Q0QsbUJBQS9EO0FBQ0FYLE1BQUFBLFVBQVUsQ0FBQ1EsVUFBRCxDQUFWLEdBQXlCRyxtQkFBbUIsQ0FBQ0UsTUFBcEIsQ0FBMkJYLE9BQU8sQ0FBQ1ksSUFBbkMsQ0FBekI7QUFDQWQsTUFBQUEsVUFBVSxDQUFDSCxNQUFYLEdBQW9CLFNBQXBCO0FBQ0E7O0FBQ0osU0FBS1AsaUVBQUw7QUFDSVUsTUFBQUEsVUFBVSxDQUFDSCxNQUFYLEdBQW9CLFNBQXBCOztBQUNKLFNBQUtOLHlEQUFMO0FBQ0lTLE1BQUFBLFVBQVUsQ0FBQ0YsVUFBWCxHQUF3QixFQUF4QjtBQUNBOztBQUNKLFNBQUtOLHNEQUFMO0FBQ0lZLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxVQUFVLENBQUNGLFVBQXZCLEVBQW1DUSxPQUFuQyxDQUEyQyxVQUFBQyxHQUFHO0FBQUEsZUFBRVAsVUFBVSxDQUFDRixVQUFYLENBQXNCUyxHQUF0QixJQUEyQixFQUE3QjtBQUFBLE9BQTlDO0FBQ0E7O0FBQ0o7QUFDSSxhQUFPUCxVQUFQO0FBekJSO0FBMkJILENBL0J1QixFQStCckJKLFlBL0JxQixDQUF4QjtBQWlDQSwrREFBZUcsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0cy5qcz9mYmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ0FSUkVHQV9QUk9EVVRPX1NUQVJULFxuICAgIENBUlJFR0FfUFJPRFVUT19TVUNDRVNTLFxuICAgIENBUlJFR0FfUFJPRFVUT19GQUlMVVJFLFxuICAgIExJS0VfUFJPRFVUT19TVEFSVCxcbiAgICBMSUtFX1BST0RVVE9fU1VDQ0VTUyxcbiAgICBMSUtFX1BST0RVVE9fRkFJTFVSRSxcbiAgICBDQVJSRUdBX01BSVNfUFJPRFVUT1NfU1RBUlQsXG4gICAgQ0FSUkVHQV9NQUlTX1BST0RVVE9TX1NVQ0NFU1MsXG4gICAgQ0FSUkVHQV9NQUlTX1BST0RVVE9TX0ZBSUxVUkUsXG4gICAgUkVTRVRBX0xJU1RBX1BST0RVVE9TLFxuICAgIFJFU0VUX1BST0RVQ1RfTElTVFxufSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgY29tYmluZVBhdGhXaXRoUXVlcnkyIH0gZnJvbSAndXRpbHMvY29tYmluZVBhdGhXaXRoUXVlcnknO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgc3RhdHVzOiAnSURMRScsXG4gICAgbWFpblNlYXJjaDogW10sXG59O1xuXG5jb25zdCBwcm9kdWN0cyA9IHByb2R1Y2UoKGRyYWZ0U3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgY29uc3QgcGF5bG9hZCA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb24ucGF5bG9hZC5wcm9kdWN0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAvLyBkcmFmdFN0YXRlW2tleV0gPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0c1trZXldO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENBUlJFR0FfTUFJU19QUk9EVVRPU19TVEFSVDpcbiAgICAgICAgICAgIGRyYWZ0U3RhdGUuc3RhdHVzID0gXCJMT0FESU5HXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDQVJSRUdBX01BSVNfUFJPRFVUT1NfU1VDQ0VTUzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBjb21iaW5lUGF0aFdpdGhRdWVyeTIocGF5bG9hZC5wYXRoLCBwYXlsb2FkLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1Byb2R1Y3RMaXN0ID0gZHJhZnRTdGF0ZVtjdXJyZW50S2V5XTtcbiAgICAgICAgICAgIHByZXZpb3VzUHJvZHVjdExpc3QgPSBwcmV2aW91c1Byb2R1Y3RMaXN0ID09PSB1bmRlZmluZWQgPyBbXSA6IHByZXZpb3VzUHJvZHVjdExpc3Q7XG4gICAgICAgICAgICBkcmFmdFN0YXRlW2N1cnJlbnRLZXldID0gcHJldmlvdXNQcm9kdWN0TGlzdC5jb25jYXQocGF5bG9hZC5kYXRhKTtcbiAgICAgICAgICAgIGRyYWZ0U3RhdGUuc3RhdHVzID0gJ1NVQ0NFU1MnO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBDQVJSRUdBX01BSVNfUFJPRFVUT1NfRkFJTFVSRTpcbiAgICAgICAgICAgIGRyYWZ0U3RhdGUuc3RhdHVzID0gJ0ZBSUxVUkUnO1xuICAgICAgICBjYXNlIFJFU0VUQV9MSVNUQV9QUk9EVVRPUzpcbiAgICAgICAgICAgIGRyYWZ0U3RhdGUubWFpblNlYXJjaCA9IFtdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUkVTRVRfUFJPRFVDVF9MSVNUOlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZHJhZnRTdGF0ZS5tYWluU2VhcmNoKS5mb3JFYWNoKGtleT0+ZHJhZnRTdGF0ZS5tYWluU2VhcmNoW2tleV09W10pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZHJhZnRTdGF0ZTtcbiAgICB9XG59LCBpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0czsiXSwibmFtZXMiOlsiQ0FSUkVHQV9QUk9EVVRPX1NUQVJUIiwiQ0FSUkVHQV9QUk9EVVRPX1NVQ0NFU1MiLCJDQVJSRUdBX1BST0RVVE9fRkFJTFVSRSIsIkxJS0VfUFJPRFVUT19TVEFSVCIsIkxJS0VfUFJPRFVUT19TVUNDRVNTIiwiTElLRV9QUk9EVVRPX0ZBSUxVUkUiLCJDQVJSRUdBX01BSVNfUFJPRFVUT1NfU1RBUlQiLCJDQVJSRUdBX01BSVNfUFJPRFVUT1NfU1VDQ0VTUyIsIkNBUlJFR0FfTUFJU19QUk9EVVRPU19GQUlMVVJFIiwiUkVTRVRBX0xJU1RBX1BST0RVVE9TIiwiUkVTRVRfUFJPRFVDVF9MSVNUIiwiSFlEUkFURSIsInByb2R1Y2UiLCJjb21iaW5lUGF0aFdpdGhRdWVyeTIiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJtYWluU2VhcmNoIiwicHJvZHVjdHMiLCJkcmFmdFN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImN1cnJlbnRLZXkiLCJwYXRoIiwicXVlcnkiLCJwcmV2aW91c1Byb2R1Y3RMaXN0IiwidW5kZWZpbmVkIiwiY29uY2F0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/products.js\n");

/***/ })

});
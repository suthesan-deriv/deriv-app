/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["reset-password-modal"],{

/***/ "./App/Containers/RedirectToLoginModal/index.js":
/*!******************************************************!*\
  !*** ./App/Containers/RedirectToLoginModal/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _redirect_to_login_modal_jsx__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _redirect_to_login_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirect-to-login-modal.jsx */ \"./App/Containers/RedirectToLoginModal/redirect-to-login-modal.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZWRpcmVjdFRvTG9naW5Nb2RhbC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1JlZGlyZWN0VG9Mb2dpbk1vZGFsL2luZGV4LmpzPzYzMjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9yZWRpcmVjdC10by1sb2dpbi1tb2RhbC5qc3gnO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/RedirectToLoginModal/index.js\n");

/***/ }),

/***/ "./App/Containers/RedirectToLoginModal/redirect-to-login-modal.jsx":
/*!*************************************************************************!*\
  !*** ./App/Containers/RedirectToLoginModal/redirect-to-login-modal.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"../../../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar ModalHeader = function ModalHeader(_ref) {\n  var header = _ref.header;\n\n  switch (header) {\n    case 'password_changed':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n        as: \"p\",\n        weight: \"bold\",\n        className: \"reset-password__heading\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n        i18n_default_text: \"Your password has been changed\"\n      }));\n\n    default:\n      return '';\n  }\n};\n\nvar RedirectToLoginModal = function RedirectToLoginModal(_ref2) {\n  var is_logged_in = _ref2.is_logged_in,\n      logout = _ref2.logout,\n      disableApp = _ref2.disableApp,\n      enableApp = _ref2.enableApp,\n      is_loading = _ref2.is_loading;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      is_visible = _React$useState2[0],\n      setVisible = _React$useState2[1];\n\n  var url_params = new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().search);\n  var header = url_params.get('header');\n\n  var showModal = function showModal() {\n    setVisible(true);\n    (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.redirectToLogin)(false, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.getLanguage)(), false);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    if (is_logged_in) {\n      logout().then(function () {\n        return showModal();\n      });\n    } else {\n      showModal();\n    }\n  }, [is_logged_in, logout]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reset-password__password-selection\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalHeader, {\n    header: header\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    align: \"center\",\n    as: \"p\",\n    size: \"xxs\",\n    className: \"reset-password__subtext\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: \"We will now redirect you to the login page.\"\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,Stores_connect__WEBPACK_IMPORTED_MODULE_1__.connect)(function (_ref3) {\n  var client = _ref3.client,\n      ui = _ref3.ui;\n  return {\n    disableApp: ui.disableApp,\n    enableApp: ui.enableApp,\n    is_loading: ui.is_loading,\n    is_logged_in: client.is_logged_in,\n    logout: client.logout\n  };\n})(RedirectToLoginModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZWRpcmVjdFRvTG9naW5Nb2RhbC9yZWRpcmVjdC10by1sb2dpbi1tb2RhbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9SZWRpcmVjdFRvTG9naW5Nb2RhbC9yZWRpcmVjdC10by1sb2dpbi1tb2RhbC5qc3g/ZWFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgeyBEaWFsb2csIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2NhbGl6ZSwgZ2V0TGFuZ3VhZ2UgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IHJlZGlyZWN0VG9Mb2dpbiB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG5jb25zdCBNb2RhbEhlYWRlciA9ICh7IGhlYWRlciB9KSA9PiB7XG4gICAgc3dpdGNoIChoZWFkZXIpIHtcbiAgICAgICAgY2FzZSAncGFzc3dvcmRfY2hhbmdlZCc6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyB3ZWlnaHQ9J2JvbGQnIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX2hlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gY2hhbmdlZCcgLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn07XG5cbmNvbnN0IFJlZGlyZWN0VG9Mb2dpbk1vZGFsID0gKHsgaXNfbG9nZ2VkX2luLCBsb2dvdXQsIGRpc2FibGVBcHAsIGVuYWJsZUFwcCwgaXNfbG9hZGluZyB9KSA9PiB7XG4gICAgY29uc3QgW2lzX3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHVybF9wYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZUxvY2F0aW9uKCkuc2VhcmNoKTtcbiAgICBjb25zdCBoZWFkZXIgPSB1cmxfcGFyYW1zLmdldCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHJlZGlyZWN0VG9Mb2dpbihmYWxzZSwgZ2V0TGFuZ3VhZ2UoKSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNfbG9nZ2VkX2luKSB7XG4gICAgICAgICAgICBsb2dvdXQoKS50aGVuKCgpID0+IHNob3dNb2RhbCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfSwgW2lzX2xvZ2dlZF9pbiwgbG9nb3V0XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nIGlzX3Zpc2libGU9e2lzX3Zpc2libGV9IGRpc2FibGVBcHA9e2Rpc2FibGVBcHB9IGVuYWJsZUFwcD17ZW5hYmxlQXBwfSBpc19sb2FkaW5nPXtpc19sb2FkaW5nfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fcGFzc3dvcmQtc2VsZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgaGVhZGVyPXtoZWFkZXJ9IC8+XG4gICAgICAgICAgICAgICAgPFRleHQgYWxpZ249J2NlbnRlcicgYXM9J3AnIHNpemU9J3h4cycgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fc3VidGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nV2Ugd2lsbCBub3cgcmVkaXJlY3QgeW91IHRvIHRoZSBsb2dpbiBwYWdlLicgLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHsgY2xpZW50LCB1aSB9KSA9PiAoe1xuICAgIGRpc2FibGVBcHA6IHVpLmRpc2FibGVBcHAsXG4gICAgZW5hYmxlQXBwOiB1aS5lbmFibGVBcHAsXG4gICAgaXNfbG9hZGluZzogdWkuaXNfbG9hZGluZyxcbiAgICBpc19sb2dnZWRfaW46IGNsaWVudC5pc19sb2dnZWRfaW4sXG4gICAgbG9nb3V0OiBjbGllbnQubG9nb3V0LFxufSkpKFJlZGlyZWN0VG9Mb2dpbk1vZGFsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/RedirectToLoginModal/redirect-to-login-modal.jsx\n");

/***/ }),

/***/ "./App/Containers/ResetPasswordModal/index.js":
/*!****************************************************!*\
  !*** ./App/Containers/ResetPasswordModal/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _reset_password_modal_jsx__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _reset_password_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-modal.jsx */ \"./App/Containers/ResetPasswordModal/reset-password-modal.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvaW5kZXguanM/MmNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLW1vZGFsLmpzeCc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/ResetPasswordModal/index.js\n");

/***/ }),

/***/ "./App/Containers/ResetPasswordModal/reset-password-modal.jsx":
/*!********************************************************************!*\
  !*** ./App/Containers/ResetPasswordModal/reset-password-modal.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var Services_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Services/index */ \"./Services/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nvar ResetPassword = function ResetPassword(_ref) {\n  var logoutClient = _ref.logoutClient,\n      verification_code = _ref.verification_code;\n\n  var onResetComplete = function onResetComplete(error_msg, actions) {\n    actions.setSubmitting(false);\n    actions.resetForm({\n      password: ''\n    }); // Error would be returned on invalid token (and the like) cases.\n    // TODO: Proper error handling (currently we have no place to put the message)\n\n    if (error_msg) {\n      // eslint-disable-next-line no-console\n      console.error(error_msg);\n      actions.setStatus({\n        error_msg: error_msg\n      });\n      return;\n    }\n\n    actions.setStatus({\n      reset_complete: true\n    });\n    logoutClient().then(function () {\n      (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.redirectToLogin)(false, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.getLanguage)());\n    });\n  };\n\n  var handleSubmit = function handleSubmit(values, actions) {\n    var api_request = {\n      reset_password: 1,\n      new_password: values.password,\n      verification_code: verification_code\n    };\n    Services_index__WEBPACK_IMPORTED_MODULE_8__.WS.resetPassword(api_request).then( /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (response.error) {\n                  onResetComplete(response.error.message, actions);\n                } else {\n                  onResetComplete(null, actions);\n                }\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  };\n\n  var validateReset = function validateReset(values) {\n    var errors = {};\n\n    if (!(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.validLength)(values.password, {\n      min: 8,\n      max: 25\n    })) {\n      errors.password = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('You should enter {{min_number}}-{{max_number}} characters.', {\n        min_number: 8,\n        max_number: 25\n      });\n    } else if (!(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.validPassword)(values.password)) {\n      errors.password = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.getErrorMessages)().password();\n    }\n\n    return errors;\n  };\n\n  var reset_initial_values = {\n    password: ''\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reset-password\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {\n    initialValues: reset_initial_values,\n    initialStatus: {\n      reset_complete: false,\n      error_msg: ''\n    },\n    validate: validateReset,\n    onSubmit: handleSubmit\n  }, function (_ref3) {\n    var handleBlur = _ref3.handleBlur,\n        errors = _ref3.errors,\n        values = _ref3.values,\n        touched = _ref3.touched,\n        isSubmitting = _ref3.isSubmitting,\n        handleChange = _ref3.handleChange,\n        status = _ref3.status;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, status.reset_complete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"reset-password__password-selection\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      weight: \"bold\",\n      className: \"reset-password__heading\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Your password has been changed\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      align: \"center\",\n      as: \"p\",\n      size: \"xxs\",\n      className: \"reset-password__subtext\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"We will now redirect you to the login page.\"\n    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"reset-password__password-selection\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      weight: \"bold\",\n      className: \"reset-password__heading\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Choose a new password\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"fieldset\", {\n      className: \"reset-password__fieldset\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.PasswordMeter, {\n      input: values.password,\n      has_error: !!(touched.password && errors.password),\n      custom_feedback_messages: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.getErrorMessages)().password_warnings\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.PasswordInput, {\n      autoComplete: \"new-password\",\n      className: \"reset-password__password-field\",\n      name: \"password\",\n      label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('Create a password'),\n      onChange: handleChange,\n      onBlur: handleBlur,\n      error: touched.password && errors.password,\n      value: values.password,\n      \"data-lpignore\": \"true\",\n      required: true\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      align: \"center\",\n      as: \"p\",\n      size: \"xxs\",\n      className: \"reset-password__subtext\"\n    }, status.error_msg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"{{error_msg}}\",\n      values: {\n        error_msg: status.error_msg\n      }\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols.\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('reset-password__btn', {\n        'reset-password__btn--disabled': !values.password || errors.password || isSubmitting\n      }),\n      type: \"submit\",\n      is_disabled: !values.password || !!errors.password || isSubmitting,\n      primary: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Reset my password\"\n    })))));\n  }));\n};\n\nResetPassword.propTypes = {\n  logoutClient: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  verification_code: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\n\nvar ResetPasswordModal = function ResetPasswordModal(_ref4) {\n  var disableApp = _ref4.disableApp,\n      enableApp = _ref4.enableApp,\n      is_loading = _ref4.is_loading,\n      is_visible = _ref4.is_visible,\n      logoutClient = _ref4.logoutClient,\n      verification_code = _ref4.verification_code;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResetPassword, {\n    verification_code: verification_code,\n    logoutClient: logoutClient\n  }));\n};\n\nResetPasswordModal.propTypes = {\n  disableApp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  enableApp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  is_loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  is_visible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  logoutClient: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  verification_code: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,Stores_connect__WEBPACK_IMPORTED_MODULE_7__.connect)(function (_ref5) {\n  var ui = _ref5.ui,\n      client = _ref5.client;\n  return {\n    disableApp: ui.disableApp,\n    enableApp: ui.enableApp,\n    is_loading: ui.is_loading,\n    is_visible: ui.is_reset_password_modal_visible,\n    logoutClient: client.logout,\n    verification_code: client.verification_code.reset_password\n  };\n})(ResetPasswordModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvcmVzZXQtcGFzc3dvcmQtbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvUmVzZXRQYXNzd29yZE1vZGFsL3Jlc2V0LXBhc3N3b3JkLW1vZGFsLmpzeD84OGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIFBhc3N3b3JkSW5wdXQsIFBhc3N3b3JkTWV0ZXIsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvTG9naW4sIHZhbGlkUGFzc3dvcmQsIHZhbGlkTGVuZ3RoLCBnZXRFcnJvck1lc3NhZ2VzIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBnZXRMYW5ndWFnZSwgbG9jYWxpemUsIExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgV1MgfSBmcm9tICdTZXJ2aWNlcy9pbmRleCc7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoeyBsb2dvdXRDbGllbnQsIHZlcmlmaWNhdGlvbl9jb2RlIH0pID0+IHtcbiAgICBjb25zdCBvblJlc2V0Q29tcGxldGUgPSAoZXJyb3JfbXNnLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKHsgcGFzc3dvcmQ6ICcnIH0pO1xuICAgICAgICAvLyBFcnJvciB3b3VsZCBiZSByZXR1cm5lZCBvbiBpbnZhbGlkIHRva2VuIChhbmQgdGhlIGxpa2UpIGNhc2VzLlxuICAgICAgICAvLyBUT0RPOiBQcm9wZXIgZXJyb3IgaGFuZGxpbmcgKGN1cnJlbnRseSB3ZSBoYXZlIG5vIHBsYWNlIHRvIHB1dCB0aGUgbWVzc2FnZSlcbiAgICAgICAgaWYgKGVycm9yX21zZykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfbXNnKTtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3RhdHVzKHsgZXJyb3JfbXNnIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0aW9ucy5zZXRTdGF0dXMoeyByZXNldF9jb21wbGV0ZTogdHJ1ZSB9KTtcblxuICAgICAgICBsb2dvdXRDbGllbnQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJlZGlyZWN0VG9Mb2dpbihmYWxzZSwgZ2V0TGFuZ3VhZ2UoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaV9yZXF1ZXN0ID0ge1xuICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IDEsXG4gICAgICAgICAgICBuZXdfcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvbl9jb2RlLFxuICAgICAgICB9O1xuXG4gICAgICAgIFdTLnJlc2V0UGFzc3dvcmQoYXBpX3JlcXVlc3QpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgb25SZXNldENvbXBsZXRlKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UsIGFjdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvblJlc2V0Q29tcGxldGUobnVsbCwgYWN0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZVJlc2V0ID0gdmFsdWVzID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXZhbGlkTGVuZ3RoKHZhbHVlcy5wYXNzd29yZCwge1xuICAgICAgICAgICAgICAgIG1pbjogOCxcbiAgICAgICAgICAgICAgICBtYXg6IDI1LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBsb2NhbGl6ZSgnWW91IHNob3VsZCBlbnRlciB7e21pbl9udW1iZXJ9fS17e21heF9udW1iZXJ9fSBjaGFyYWN0ZXJzLicsIHtcbiAgICAgICAgICAgICAgICBtaW5fbnVtYmVyOiA4LFxuICAgICAgICAgICAgICAgIG1heF9udW1iZXI6IDI1LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkUGFzc3dvcmQodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZ2V0RXJyb3JNZXNzYWdlcygpLnBhc3N3b3JkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldF9pbml0aWFsX3ZhbHVlcyA9IHsgcGFzc3dvcmQ6ICcnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmQnPlxuICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3Jlc2V0X2luaXRpYWxfdmFsdWVzfVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0dXM9e3sgcmVzZXRfY29tcGxldGU6IGZhbHNlLCBlcnJvcl9tc2c6ICcnIH19XG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlUmVzZXR9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KHsgaGFuZGxlQmx1ciwgZXJyb3JzLCB2YWx1ZXMsIHRvdWNoZWQsIGlzU3VibWl0dGluZywgaGFuZGxlQ2hhbmdlLCBzdGF0dXMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzLnJlc2V0X2NvbXBsZXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLXNlbGVjdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgd2VpZ2h0PSdib2xkJyBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19oZWFkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gY2hhbmdlZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPSdjZW50ZXInIGFzPSdwJyBzaXplPSd4eHMnIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX3N1YnRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nV2Ugd2lsbCBub3cgcmVkaXJlY3QgeW91IHRvIHRoZSBsb2dpbiBwYWdlLicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19wYXNzd29yZC1zZWxlY3Rpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIHdlaWdodD0nYm9sZCcgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9faGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdDaG9vc2UgYSBuZXcgcGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fZmllbGRzZXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZE1ldGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc19lcnJvcj17ISEodG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21fZmVlZGJhY2tfbWVzc2FnZXM9e2dldEVycm9yTWVzc2FnZXMoKS5wYXNzd29yZF93YXJuaW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J25ldy1wYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLWZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoJ0NyZWF0ZSBhIHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbHBpZ25vcmU9J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRNZXRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhbGlnbj0nY2VudGVyJyBhcz0ncCcgc2l6ZT0neHhzJyBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19zdWJ0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzLmVycm9yX21zZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0ne3tlcnJvcl9tc2d9fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17eyBlcnJvcl9tc2c6IHN0YXR1cy5lcnJvcl9tc2cgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1N0cm9uZyBwYXNzd29yZHMgY29udGFpbiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMsIGNvbWJpbmUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIHN5bWJvbHMuJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3Jlc2V0LXBhc3N3b3JkX19idG4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXNldC1wYXNzd29yZF9fYnRuLS1kaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsdWVzLnBhc3N3b3JkIHx8IGVycm9ycy5wYXNzd29yZCB8fCBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXshdmFsdWVzLnBhc3N3b3JkIHx8ICEhZXJyb3JzLnBhc3N3b3JkIHx8IGlzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdSZXNldCBteSBwYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblJlc2V0UGFzc3dvcmQucHJvcFR5cGVzID0ge1xuICAgIGxvZ291dENsaWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmVyaWZpY2F0aW9uX2NvZGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBSZXNldFBhc3N3b3JkTW9kYWwgPSAoeyBkaXNhYmxlQXBwLCBlbmFibGVBcHAsIGlzX2xvYWRpbmcsIGlzX3Zpc2libGUsIGxvZ291dENsaWVudCwgdmVyaWZpY2F0aW9uX2NvZGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEaWFsb2cgaXNfdmlzaWJsZT17aXNfdmlzaWJsZX0gZGlzYWJsZUFwcD17ZGlzYWJsZUFwcH0gZW5hYmxlQXBwPXtlbmFibGVBcHB9IGlzX2xvYWRpbmc9e2lzX2xvYWRpbmd9PlxuICAgICAgICAgICAgPFJlc2V0UGFzc3dvcmQgdmVyaWZpY2F0aW9uX2NvZGU9e3ZlcmlmaWNhdGlvbl9jb2RlfSBsb2dvdXRDbGllbnQ9e2xvZ291dENsaWVudH0gLz5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbn07XG5cblJlc2V0UGFzc3dvcmRNb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlQXBwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc19sb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc192aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2dvdXRDbGllbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoeyB1aSwgY2xpZW50IH0pID0+ICh7XG4gICAgZGlzYWJsZUFwcDogdWkuZGlzYWJsZUFwcCxcbiAgICBlbmFibGVBcHA6IHVpLmVuYWJsZUFwcCxcbiAgICBpc19sb2FkaW5nOiB1aS5pc19sb2FkaW5nLFxuICAgIGlzX3Zpc2libGU6IHVpLmlzX3Jlc2V0X3Bhc3N3b3JkX21vZGFsX3Zpc2libGUsXG4gICAgbG9nb3V0Q2xpZW50OiBjbGllbnQubG9nb3V0LFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBjbGllbnQudmVyaWZpY2F0aW9uX2NvZGUucmVzZXRfcGFzc3dvcmQsXG59KSkoUmVzZXRQYXNzd29yZE1vZGFsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQXpEQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/ResetPasswordModal/reset-password-modal.jsx\n");

/***/ })

}]);
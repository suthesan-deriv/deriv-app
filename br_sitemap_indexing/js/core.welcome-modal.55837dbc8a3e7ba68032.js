/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["welcome-modal"],{

/***/ "./App/Containers/WelcomeModal/index.js":
/*!**********************************************!*\
  !*** ./App/Containers/WelcomeModal/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _welcome_modal_jsx__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _welcome_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-modal.jsx */ \"./App/Containers/WelcomeModal/welcome-modal.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvaW5kZXguanM/MzczMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3dlbGNvbWUtbW9kYWwuanN4JztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/WelcomeModal/index.js\n");

/***/ }),

/***/ "./App/Containers/WelcomeModal/welcome-modal.jsx":
/*!*******************************************************!*\
  !*** ./App/Containers/WelcomeModal/welcome-modal.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ \"../../../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar WelcomeColumn = function WelcomeColumn(_ref) {\n  var button_text = _ref.button_text,\n      className = _ref.className,\n      description = _ref.description,\n      footer_text = _ref.footer_text,\n      icons = _ref.icons,\n      is_hovered = _ref.is_hovered,\n      onButtonClick = _ref.onButtonClick,\n      onMouseEnter = _ref.onMouseEnter,\n      onMouseLeave = _ref.onMouseLeave,\n      platforms = _ref.platforms,\n      title = _ref.title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('welcome-column', className),\n    onMouseEnter: onMouseEnter,\n    onMouseLeave: onMouseLeave\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome-column__icons\"\n  }, icons.map(function (icon, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n      className: \"welcome-column__icon\",\n      icon: icon,\n      key: index,\n      size: 48\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome-column__title\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome-column__description\"\n  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome-column__platforms\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    color: \"prominent\",\n    weight: \"bold\",\n    size: \"xs\",\n    className: \"welcome-column__platforms__title\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Platforms')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome-column__platforms__container\"\n  }, platforms.map(function (platform, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"welcome-column__platform\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n      className: \"welcome-column__platform__icon\",\n      icon: platform.icon,\n      size: 32\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n      className: \"welcome-column__platform__title\"\n    }, platform.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      as: \"p\",\n      color: \"less-prominent\",\n      size: \"xxs\",\n      align: \"left\",\n      className: \"welcome-column__platform__description\"\n    }, platform.description));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome-column__footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n    className: \"welcome-column__button\",\n    onClick: onButtonClick,\n    large: true,\n    primary: is_hovered || (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.isMobile)(),\n    secondary: !(is_hovered || (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.isMobile)())\n  }, button_text), footer_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    size: \"xxs\",\n    color: \"less-prominent\",\n    className: \"welcome-column__footer__text\"\n  }, footer_text)));\n};\n\nvar footer_text = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Whatever you choose, you will always be able to access Margin or Options & Multipliers at any time');\nWelcomeColumn.propTypes = {\n  button_text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  icons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),\n  onButtonClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  platforms: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\n\nvar WelcomeModal = function WelcomeModal(_ref2) {\n  var toggleWelcomeModal = _ref2.toggleWelcomeModal,\n      history = _ref2.history;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      hovered = _React$useState2[0],\n      setHovered = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(320),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      column_width = _React$useState4[0],\n      setColumnWidth = _React$useState4[1];\n\n  var carouselRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n  var switchPlatform = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (route) {\n    toggleWelcomeModal({\n      is_visible: false,\n      should_persist: true\n    });\n    history.push(route);\n  }, [toggleWelcomeModal, history]);\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    setColumnWidth(carouselRef.current.offsetWidth);\n  }, [carouselRef]);\n  var Cards = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WelcomeColumn, {\n    key: 0,\n    button_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Start here'),\n    className: \"welcome-column--left\",\n    description: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Trade with leverage and low spreads for better returns on successful trades.'),\n    icons: ['IcPercentSolid'],\n    is_hovered: hovered === 'left',\n    onButtonClick: function onButtonClick() {\n      return switchPlatform(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.routes.mt5);\n    },\n    platforms: [{\n      icon: 'IcBrandDmt5',\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Deriv MetaTrader 5 (DMT5)'),\n      description: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('All-in-one multi-asset trading platform for CFDs & margin trading.')\n    }],\n    title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Margin (MetaTrader 5)'),\n    onMouseEnter: function onMouseEnter() {\n      setHovered('left');\n    },\n    onMouseLeave: function onMouseLeave() {\n      setHovered(null);\n    },\n    footer_text: footer_text\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WelcomeColumn, {\n    key: 1,\n    button_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Start here'),\n    className: \"welcome-column--right\",\n    description: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Earn fixed payouts with options, or trade multipliers to combine the upside of margin trading with the simplicity of options.'),\n    icons: ['IcUpDownSolid', 'IcCrossSolid'],\n    is_hovered: hovered === 'right',\n    onButtonClick: function onButtonClick() {\n      return switchPlatform(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.routes.trade);\n    },\n    platforms: [{\n      icon: 'IcBrandDtrader',\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('DTrader'),\n      description: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Start trading with a powerful, yet easy-to-use platform.')\n    }, {\n      icon: 'IcBrandDbot',\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('DBot'),\n      description: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Automate your trading ideas without coding.')\n    }],\n    title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Options & Multipliers'),\n    onMouseEnter: function onMouseEnter() {\n      setHovered('right');\n    },\n    onMouseLeave: function onMouseLeave() {\n      setHovered(null);\n    },\n    footer_text: footer_text\n  })];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n    width: \"760px\",\n    className: \"welcome\",\n    is_open: true,\n    has_close_icon: false,\n    has_outer_content: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.ThemedScrollbars, {\n    height: 700\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"welcome__title\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Where would you like to start?')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('welcome__message', 'welcome__message--left', {\n      'welcome__message--visible': hovered === 'left'\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    color: \"colored-background\",\n    weight: \"bold\",\n    align: \"left\",\n    className: \"welcome__message__text\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)(\"If you're looking for CFDs\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n    icon: \"IcArrowRightCurly\",\n    size: 43\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('welcome__message', 'welcome__message--right', {\n      'welcome__message--visible': hovered === 'right'\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n    icon: \"IcArrowLeftCurly\",\n    size: 43\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    color: \"colored-background\",\n    weight: \"bold\",\n    align: \"left\",\n    className: \"welcome__message__text\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Not sure? Try this'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"welcome__body\",\n    ref: carouselRef\n  }, (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.isMobile)() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n    show_nav: false,\n    list: Cards,\n    width: column_width,\n    className: \"welcome__carousel\"\n  }) : Cards), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    size: \"xxs\",\n    color: \"less-prominent\",\n    className: \"welcome__footer\"\n  }, footer_text)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)((0,Stores_connect__WEBPACK_IMPORTED_MODULE_6__.connect)(function (_ref3) {\n  var ui = _ref3.ui;\n  return {\n    toggleWelcomeModal: ui.toggleWelcomeModal\n  };\n})(WelcomeModal)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvd2VsY29tZS1tb2RhbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvd2VsY29tZS1tb2RhbC5qc3g/MGU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBNb2RhbCwgQ2Fyb3VzZWwsIEljb24sIEJ1dHRvbiwgVGhlbWVkU2Nyb2xsYmFycywgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IHJvdXRlcywgaXNNb2JpbGUgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuXG5jb25zdCBXZWxjb21lQ29sdW1uID0gKHtcbiAgICBidXR0b25fdGV4dCxcbiAgICBjbGFzc05hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZm9vdGVyX3RleHQsXG4gICAgaWNvbnMsXG4gICAgaXNfaG92ZXJlZCxcbiAgICBvbkJ1dHRvbkNsaWNrLFxuICAgIG9uTW91c2VFbnRlcixcbiAgICBvbk1vdXNlTGVhdmUsXG4gICAgcGxhdGZvcm1zLFxuICAgIHRpdGxlLFxufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnd2VsY29tZS1jb2x1bW4nLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19pY29ucyc+XG4gICAgICAgICAgICAgICAge2ljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9faWNvbicgaWNvbj17aWNvbn0ga2V5PXtpbmRleH0gc2l6ZT17NDh9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fdGl0bGUnPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fZGVzY3JpcHRpb24nPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fcGxhdGZvcm1zJz5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgY29sb3I9J3Byb21pbmVudCcgd2VpZ2h0PSdib2xkJyBzaXplPSd4cycgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fcGxhdGZvcm1zX190aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgIHtsb2NhbGl6ZSgnUGxhdGZvcm1zJyl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fcGxhdGZvcm1zX19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICB7cGxhdGZvcm1zLm1hcCgocGxhdGZvcm0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW5fX3BsYXRmb3JtJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19wbGF0Zm9ybV9faWNvbicgaWNvbj17cGxhdGZvcm0uaWNvbn0gc2l6ZT17MzJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW5fX3BsYXRmb3JtX190aXRsZSc+e3BsYXRmb3JtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdsZXNzLXByb21pbmVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHhzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fcGxhdGZvcm1fX2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYXRmb3JtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19mb290ZXInPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtpc19ob3ZlcmVkIHx8IGlzTW9iaWxlKCl9XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17IShpc19ob3ZlcmVkIHx8IGlzTW9iaWxlKCkpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbl90ZXh0fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHtmb290ZXJfdGV4dCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyBzaXplPSd4eHMnIGNvbG9yPSdsZXNzLXByb21pbmVudCcgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fZm9vdGVyX190ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXJfdGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IGZvb3Rlcl90ZXh0ID0gbG9jYWxpemUoXG4gICAgJ1doYXRldmVyIHlvdSBjaG9vc2UsIHlvdSB3aWxsIGFsd2F5cyBiZSBhYmxlIHRvIGFjY2VzcyBNYXJnaW4gb3IgT3B0aW9ucyAmIE11bHRpcGxpZXJzIGF0IGFueSB0aW1lJ1xuKTtcblxuV2VsY29tZUNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gICAgYnV0dG9uX3RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbkJ1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGF0Zm9ybXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgV2VsY29tZU1vZGFsID0gKHsgdG9nZ2xlV2VsY29tZU1vZGFsLCBoaXN0b3J5IH0pID0+IHtcbiAgICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29sdW1uX3dpZHRoLCBzZXRDb2x1bW5XaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgzMjApO1xuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHN3aXRjaFBsYXRmb3JtID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICAgIHJvdXRlID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVdlbGNvbWVNb2RhbCh7IGlzX3Zpc2libGU6IGZhbHNlLCBzaG91bGRfcGVyc2lzdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChyb3V0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFt0b2dnbGVXZWxjb21lTW9kYWwsIGhpc3RvcnldXG4gICAgKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvbHVtbldpZHRoKGNhcm91c2VsUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xuICAgIH0sIFtjYXJvdXNlbFJlZl0pO1xuXG4gICAgY29uc3QgQ2FyZHMgPSBbXG4gICAgICAgIDxXZWxjb21lQ29sdW1uXG4gICAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgICBidXR0b25fdGV4dD17bG9jYWxpemUoJ1N0YXJ0IGhlcmUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW4tLWxlZnQnXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17bG9jYWxpemUoJ1RyYWRlIHdpdGggbGV2ZXJhZ2UgYW5kIGxvdyBzcHJlYWRzIGZvciBiZXR0ZXIgcmV0dXJucyBvbiBzdWNjZXNzZnVsIHRyYWRlcy4nKX1cbiAgICAgICAgICAgIGljb25zPXtbJ0ljUGVyY2VudFNvbGlkJ119XG4gICAgICAgICAgICBpc19ob3ZlcmVkPXtob3ZlcmVkID09PSAnbGVmdCd9XG4gICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXsoKSA9PiBzd2l0Y2hQbGF0Zm9ybShyb3V0ZXMubXQ1KX1cbiAgICAgICAgICAgIHBsYXRmb3Jtcz17W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ0ljQnJhbmREbXQ1JyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2FsaXplKCdEZXJpdiBNZXRhVHJhZGVyIDUgKERNVDUpJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBsb2NhbGl6ZSgnQWxsLWluLW9uZSBtdWx0aS1hc3NldCB0cmFkaW5nIHBsYXRmb3JtIGZvciBDRkRzICYgbWFyZ2luIHRyYWRpbmcuJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ01hcmdpbiAoTWV0YVRyYWRlciA1KScpfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SG92ZXJlZCgnbGVmdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyZWQobnVsbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZm9vdGVyX3RleHQ9e2Zvb3Rlcl90ZXh0fVxuICAgICAgICAvPixcbiAgICAgICAgPFdlbGNvbWVDb2x1bW5cbiAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgIGJ1dHRvbl90ZXh0PXtsb2NhbGl6ZSgnU3RhcnQgaGVyZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbi0tcmlnaHQnXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgJ0Vhcm4gZml4ZWQgcGF5b3V0cyB3aXRoIG9wdGlvbnMsIG9yIHRyYWRlIG11bHRpcGxpZXJzIHRvIGNvbWJpbmUgdGhlIHVwc2lkZSBvZiBtYXJnaW4gdHJhZGluZyB3aXRoIHRoZSBzaW1wbGljaXR5IG9mIG9wdGlvbnMuJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGljb25zPXtbJ0ljVXBEb3duU29saWQnLCAnSWNDcm9zc1NvbGlkJ119XG4gICAgICAgICAgICBpc19ob3ZlcmVkPXtob3ZlcmVkID09PSAncmlnaHQnfVxuICAgICAgICAgICAgb25CdXR0b25DbGljaz17KCkgPT4gc3dpdGNoUGxhdGZvcm0ocm91dGVzLnRyYWRlKX1cbiAgICAgICAgICAgIHBsYXRmb3Jtcz17W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ0ljQnJhbmREdHJhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2FsaXplKCdEVHJhZGVyJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBsb2NhbGl6ZSgnU3RhcnQgdHJhZGluZyB3aXRoIGEgcG93ZXJmdWwsIHlldCBlYXN5LXRvLXVzZSBwbGF0Zm9ybS4nKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ0ljQnJhbmREYm90JyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2FsaXplKCdEQm90JyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBsb2NhbGl6ZSgnQXV0b21hdGUgeW91ciB0cmFkaW5nIGlkZWFzIHdpdGhvdXQgY29kaW5nLicpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdPcHRpb25zICYgTXVsdGlwbGllcnMnKX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyZWQoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SG92ZXJlZChudWxsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBmb290ZXJfdGV4dD17Zm9vdGVyX3RleHR9XG4gICAgICAgIC8+LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgd2lkdGg9Jzc2MHB4JyBjbGFzc05hbWU9J3dlbGNvbWUnIGlzX29wZW49e3RydWV9IGhhc19jbG9zZV9pY29uPXtmYWxzZX0gaGFzX291dGVyX2NvbnRlbnQ9e3RydWV9PlxuICAgICAgICAgICAgPFRoZW1lZFNjcm9sbGJhcnMgaGVpZ2h0PXs3MDB9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3dlbGNvbWVfX3RpdGxlJz57bG9jYWxpemUoJ1doZXJlIHdvdWxkIHlvdSBsaWtlIHRvIHN0YXJ0PycpfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3dlbGNvbWVfX21lc3NhZ2UnLCAnd2VsY29tZV9fbWVzc2FnZS0tbGVmdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd3ZWxjb21lX19tZXNzYWdlLS12aXNpYmxlJzogaG92ZXJlZCA9PT0gJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0ncCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdjb2xvcmVkLWJhY2tncm91bmQnXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2JvbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd2VsY29tZV9fbWVzc2FnZV9fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKFwiSWYgeW91J3JlIGxvb2tpbmcgZm9yIENGRHNcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNBcnJvd1JpZ2h0Q3VybHknIHNpemU9ezQzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3ZWxjb21lX19tZXNzYWdlJywgJ3dlbGNvbWVfX21lc3NhZ2UtLXJpZ2h0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3dlbGNvbWVfX21lc3NhZ2UtLXZpc2libGUnOiBob3ZlcmVkID09PSAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljQXJyb3dMZWZ0Q3VybHknIHNpemU9ezQzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0nY29sb3JlZC1iYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dlbGNvbWVfX21lc3NhZ2VfX3RleHQnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbGl6ZSgnTm90IHN1cmU/IFRyeSB0aGlzJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZV9fYm9keScgcmVmPXtjYXJvdXNlbFJlZn0+XG4gICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSgpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dfbmF2PXtmYWxzZX0gbGlzdD17Q2FyZHN9IHdpZHRoPXtjb2x1bW5fd2lkdGh9IGNsYXNzTmFtZT0nd2VsY29tZV9fY2Fyb3VzZWwnIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXJkc1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyBzaXplPSd4eHMnIGNvbG9yPSdsZXNzLXByb21pbmVudCcgY2xhc3NOYW1lPSd3ZWxjb21lX19mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyX3RleHR9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9UaGVtZWRTY3JvbGxiYXJzPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFxuICAgIGNvbm5lY3QoKHsgdWkgfSkgPT4gKHtcbiAgICAgICAgdG9nZ2xlV2VsY29tZU1vZGFsOiB1aS50b2dnbGVXZWxjb21lTW9kYWwsXG4gICAgfSkpKFdlbGNvbWVNb2RhbClcbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBaUJBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFpQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/WelcomeModal/welcome-modal.jsx\n");

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/index.jsx":
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./app/router.jsx\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./app/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n    }\n  }));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\index.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app/index.jsx?");

/***/ }),

/***/ "./app/index.scss":
/*!************************!*\
  !*** ./app/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/index.scss?");

/***/ }),

/***/ "./app/router.jsx":
/*!************************!*\
  !*** ./app/router.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var kui_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kui-mobile */ \"./src/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\nvar ActionSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./containers/ActionSheet */ \"./app/containers/ActionSheet/index.jsx\"));\n});\nvar Alert = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./containers/Alert */ \"./app/containers/Alert/index.jsx\"));\n});\nvar Avatar = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ./containers/Avatar */ \"./app/containers/Avatar/index.jsx\"));\n});\nvar Badge = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ./containers/Badge */ \"./app/containers/Badge/index.jsx\"));\n});\nvar Button = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./containers/Button */ \"./app/containers/Button/index.jsx\"));\n});\nvar Card = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ./containers/Card */ \"./app/containers/Card/index.jsx\"));\n});\nvar Cell = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./containers/Cell */ \"./app/containers/Cell/index.jsx\"));\n});\nvar Checkbox = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./containers/Checkbox */ \"./app/containers/Checkbox/index.jsx\"));\n});\nvar Collapse = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! ./containers/Collapse */ \"./app/containers/Collapse/index.jsx\"));\n});\nvar DatePicker = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./containers/DatePicker */ \"./app/containers/DatePicker/index.jsx\"));\n});\nvar Divider = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ./containers/Divider */ \"./app/containers/Divider/index.jsx\"));\n});\nvar Drawer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! ./containers/Drawer */ \"./app/containers/Drawer/index.jsx\"));\n});\nvar Home = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! ./containers/Home */ \"./app/containers/Home/index.jsx\"));\n});\nvar Icon = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ./containers/Icon */ \"./app/containers/Icon/index.jsx\"));\n});\nvar Input = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./containers/Input */ \"./app/containers/Input/index.jsx\"));\n});\nvar InputNumber = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./containers/InputNumber */ \"./app/containers/InputNumber/index.jsx\"));\n});\nvar Layout = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./containers/Layout */ \"./app/containers/Layout/index.jsx\"));\n});\nvar LazyLoad = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ./containers/LazyLoad */ \"./app/containers/LazyLoad/index.jsx\"));\n});\nvar Loading = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./containers/Loading */ \"./app/containers/Loading/index.jsx\"));\n});\nvar LoadMore = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, /*! ./containers/LoadMore */ \"./app/containers/LoadMore/index.jsx\"));\n});\nvar Message = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, /*! ./containers/Message */ \"./app/containers/Message/index.jsx\"));\n});\nvar Modal = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ./containers/Modal */ \"./app/containers/Modal/index.jsx\"));\n});\nvar NavBar = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! ./containers/NavBar */ \"./app/containers/NavBar/index.jsx\"));\n});\nvar NoticeBar = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ./containers/NoticeBar */ \"./app/containers/NoticeBar/index.jsx\"));\n});\nvar Pagination = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./containers/Pagination */ \"./app/containers/Pagination/index.jsx\"));\n});\nvar Picker = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./containers/Picker */ \"./app/containers/Picker/index.jsx\"));\n});\nvar Progress = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./containers/Progress */ \"./app/containers/Progress/index.jsx\"));\n});\nvar PullRefresh = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! ./containers/PullRefresh */ \"./app/containers/PullRefresh/index.jsx\"));\n});\nvar Radio = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ./containers/Radio */ \"./app/containers/Radio/index.jsx\"));\n});\nvar Rate = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./containers/Rate */ \"./app/containers/Rate/index.jsx\"));\n});\nvar SearchBar = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ./containers/SearchBar */ \"./app/containers/SearchBar/index.jsx\"));\n});\nvar Slider = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./containers/Slider */ \"./app/containers/Slider/index.jsx\"));\n});\nvar Steps = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./containers/Steps */ \"./app/containers/Steps/index.jsx\"));\n});\nvar TabBar = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./containers/TabBar */ \"./app/containers/TabBar/index.jsx\"));\n});\nvar Switch = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./containers/Switch */ \"./app/containers/Switch/index.jsx\"));\n});\nvar Tabs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./containers/Tabs */ \"./app/containers/Tabs/index.jsx\"));\n});\nvar Tag = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ./containers/Tag */ \"./app/containers/Tag/index.jsx\"));\n});\nvar Timeline = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! ./containers/Timeline */ \"./app/containers/Timeline/index.jsx\"));\n});\nvar Toast = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, /*! ./containers/Toast */ \"./app/containers/Toast/index.jsx\"));\n});\n\nvar Router = function Router(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(kui_mobile__WEBPACK_IMPORTED_MODULE_2__[\"AnimationRouter\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Home, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/actionsheet\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionSheet, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/alert\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Alert, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/avatar\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Avatar, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/badge\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Badge, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/button\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/card\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/cell\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cell, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/checkbox\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/collapse\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Collapse, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/datepicker\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatePicker, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/divider\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/drawer\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Drawer, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/icon\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/input\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/inputnumber\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputNumber, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/layout\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/lazyload\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LazyLoad, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/loading\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/loadmore\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadMore, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/message\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/modal\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modal, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/navbar\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBar, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/noticebar\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoticeBar, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/pagination\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pagination, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/picker\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Picker, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/progress\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Progress, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/pullRefresh\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PullRefresh, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/radio\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Radio, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/rate\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Rate, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/searchbar\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchBar, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/slider\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slider, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/steps\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Steps, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/switch\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Switch, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/tabbar\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabBar, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/tabs\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tabs, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/tag\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/timeline\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Timeline, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/toast\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Toast, null);\n    }\n  }));\n};\n\nvar _default = Router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ActionSheet, \"ActionSheet\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Alert, \"Alert\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Avatar, \"Avatar\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Badge, \"Badge\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Button, \"Button\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Card, \"Card\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Cell, \"Cell\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Checkbox, \"Checkbox\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Collapse, \"Collapse\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(DatePicker, \"DatePicker\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Divider, \"Divider\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Drawer, \"Drawer\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Icon, \"Icon\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Input, \"Input\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(InputNumber, \"InputNumber\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Layout, \"Layout\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(LazyLoad, \"LazyLoad\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Loading, \"Loading\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(LoadMore, \"LoadMore\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Message, \"Message\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Modal, \"Modal\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(NavBar, \"NavBar\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(NoticeBar, \"NoticeBar\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Pagination, \"Pagination\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Picker, \"Picker\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Progress, \"Progress\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(PullRefresh, \"PullRefresh\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Radio, \"Radio\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Rate, \"Rate\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(SearchBar, \"SearchBar\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Slider, \"Slider\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Steps, \"Steps\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(TabBar, \"TabBar\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Switch, \"Switch\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Tabs, \"Tabs\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Tag, \"Tag\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Timeline, \"Timeline\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Toast, \"Toast\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Router, \"Router\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app/router.jsx?");

/***/ })

},[["./app/index.jsx","runtime","vendors","kui-mobile"]]]);
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/analytics.js":
/*!*********************************!*\
  !*** ./components/analytics.js ***!
  \*********************************/
/*! exports provided: Analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analytics", function() { return Analytics; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");



var GoogleAnalticsID = 'UA-151971686-1';

var AnalyticsInternal =
/*#__PURE__*/
function () {
  function AnalyticsInternal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnalyticsInternal);

    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize(GoogleAnalticsID);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnalyticsInternal, [{
    key: "logPageView",
    value: function logPageView(url) {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].pageview(url);
    }
  }]);

  return AnalyticsInternal;
}();

var Analytics = new AnalyticsInternal();

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_masthead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/masthead */ "./components/masthead.js");
/* harmony import */ var _components_biography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/biography */ "./components/biography.js");
/* harmony import */ var _components_twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/twitter */ "./components/twitter.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact */ "./components/contact.js");
/* harmony import */ var _components_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/analytics */ "./components/analytics.js");
var _jsxFileName = "/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







_components_analytics__WEBPACK_IMPORTED_MODULE_7__["Analytics"].logPageView("/");

var Home = function Home() {
  return __jsx("div", {
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Derek Kinsman. Maker of things."), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/favicon-16.png",
    sizes: "16x16",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/favicon-32.png",
    sizes: "32x32",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96.png",
    sizes: "96x96",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i&display=swap",
    rel: "stylesheet",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "profile",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "Derek Kinsman",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "Rude mechanical. Maker of things.",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://derekkinsman.com/",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://derekkinsman.com/meta-fb.png",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: "Derek Kinsman",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Rude mechanical. Maker of things.",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://derekkinsman.com/meta-tw.png",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(_components_masthead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_biography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-976634604" + " " + "seperator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\xD7"), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-976634604" + " " + "seperator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\xD7"), __jsx(_components_twitter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-976634604" + " " + "seperator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\xD7"), __jsx("footer", {
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\xA9 2019 Derek Kinsman. Handmade with", __jsx("span", {
    className: "jsx-976634604" + " " + "emoji",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\uD83D\uDDA4"), "on ", __jsx("a", {
    href: "https://downiewenjack.ca/support-us/donate/",
    target: "_blank",
    className: "jsx-976634604",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Treaty 3 Territory"), ", Turtle Island."), __jsx("img", {
    src: "black.svg",
    className: "jsx-976634604" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "976634604",
    __self: this
  }, ".seperator.jsx-976634604{margin:42px 0;text-align:center;}footer.jsx-976634604{font-size:0.8rem;line-height:0.9rem;text-align:center;margin:0 auto;width:50vw;}.emoji.jsx-976634604{margin-left:5px;margin-right:0px;vertical-align:middle;}.logo.jsx-976634604{height:50px;margin:21px auto 42px;}@media screen and (max-width:650px){footer.jsx-976634604{width:75vw;}.logo.jsx-976634604{height:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNnQixBQUd1QixBQUtHLEFBUUQsQUFNSixBQU9DLEFBSUMsV0FIZCxDQVBzQixBQVd0QixFQTlCa0IsRUFhRCxDQVJFLGVBSnJCLENBYXdCLENBTXhCLEVBZG9CLGtCQUNKLENBUWhCLGFBUGEsV0FDYiIsImZpbGUiOiIvVXNlcnMvZGVyZWtraW5zbWFuL0RvY3VtZW50cy9Db3Ntb25hdXQgSW5kdXN0cmllcy9kZXJla2tpbnNtYW4td2ViL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hc3RoZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvbWFzdGhlYWQnXG5pbXBvcnQgQmlvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvYmlvZ3JhcGh5J1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy90d2l0dGVyJ1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0J1xuaW1wb3J0IHtBbmFseXRpY3N9IGZyb20gJy4uL2NvbXBvbmVudHMvYW5hbHl0aWNzJ1xuXG5BbmFseXRpY3MubG9nUGFnZVZpZXcoXCIvXCIpXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+RGVyZWsgS2luc21hbi4gTWFrZXIgb2YgdGhpbmdzLjwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi0xNi5wbmdcIiBzaXplcz1cIjE2eDE2XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9mYXZpY29uLTMyLnBuZ1wiIHNpemVzPVwiMzJ4MzJcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Zhdmljb24tOTYucG5nXCIgc2l6ZXM9XCI5Nng5NlwiIC8+XG5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q3JpbXNvbitUZXh0OjQwMCw0MDBpLDYwMCw2MDBpLDcwMCw3MDBpJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwicHJvZmlsZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkRlcmVrIEtpbnNtYW5cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSdWRlIG1lY2hhbmljYWwuIE1ha2VyIG9mIHRoaW5ncy5cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9kZXJla2tpbnNtYW4uY29tL1wiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGVyZWtraW5zbWFuLmNvbS9tZXRhLWZiLnBuZ1wiIC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJEZXJlayBLaW5zbWFuXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJ1ZGUgbWVjaGFuaWNhbC4gTWFrZXIgb2YgdGhpbmdzLlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RlcmVra2luc21hbi5jb20vbWV0YS10dy5wbmdcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxNYXN0aGVhZCAvPlxuICAgIDxCaW9ncmFwaHkgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGVyYXRvclwiPsOXPC9kaXY+XG4gICAgPENvbnRhY3QgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGVyYXRvclwiPsOXPC9kaXY+XG4gICAgPFR3aXR0ZXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGVyYXRvclwiPsOXPC9kaXY+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPHA+JmNvcHk7IDIwMTkgRGVyZWsgS2luc21hbi4gSGFuZG1hZGUgd2l0aDxzcGFuIGNsYXNzTmFtZT1cImVtb2ppXCI+8J+WpDwvc3Bhbj5vbiA8YSBocmVmPVwiaHR0cHM6Ly9kb3duaWV3ZW5qYWNrLmNhL3N1cHBvcnQtdXMvZG9uYXRlL1wiIHRhcmdldD1cIl9ibGFua1wiPlRyZWF0eSAzIFRlcnJpdG9yeTwvYT4sIFR1cnRsZSBJc2xhbmQuPC9wPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiYmxhY2suc3ZnXCIgLz5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZXBlcmF0b3Ige1xuICAgICAgICBtYXJnaW46IDQycHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuOXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICB9XG5cbiAgICAgIC5lbW9qaSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luOiAyMXB4IGF1dG8gNDJweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5038e42db9b7e65d77b7.hot-update.js.map
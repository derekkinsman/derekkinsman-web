webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var resume = [{
  href: 'https://www.linkedin.com/in/derekkinsman/',
  label: 'LinkedIn'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
var email = [{
  href: 'mailto:derekkinsman@protonmail.com',
  label: 'derekkinsman@protonmail.com'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
var phone = [{
  href: 'tel:14163715652',
  label: '+1 (416) 371-5652'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
var links = [{
  href: 'https://github.com/derekkinsman',
  label: 'Github'
}, {
  href: 'https://www.producthunt.com/@derek_kinsman',
  label: 'ProductHunt'
}, {
  href: 'https://medium.com/@derekkinsman',
  label: 'Medium'
}, {
  href: 'http://www.meetup.com/members/104598882/',
  label: 'Meetup'
}, {
  href: 'https://derekkinsman.itch.io/',
  label: 'Itch'
}, {
  href: 'https://www.goodreads.com/user/show/5449872-derek-kinsman',
  label: 'Goodreads'
}, {
  href: 'http://twitter.com/derekkinsman',
  label: 'Twitter'
}, {
  href: 'https://www.facebook.com/derek.kinsman',
  label: 'Facebook'
}, {
  href: 'http://instagram.com/derekkinsman',
  label: 'Instagram'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Contact = function Contact() {
  return __jsx("section", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Internet R\xE9sum\xE9"), __jsx("h4", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "PDF available by request."), __jsx("ul", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, resume.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, label));
  })), __jsx("h3", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Contact"), __jsx("h4", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u2014via Email:"), __jsx("ul", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, email.map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        label = _ref2.label;
    return __jsx("li", {
      key: key,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u2014via Telephony:"), __jsx("ul", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, phone.map(function (_ref3) {
    var key = _ref3.key,
        href = _ref3.href,
        label = _ref3.label;
    return __jsx("li", {
      key: key,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u2014via the Internet:"), __jsx("ul", {
    className: "jsx-35229474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, links.map(function (_ref4) {
    var key = _ref4.key,
        href = _ref4.href,
        label = _ref4.label;
    return __jsx("li", {
      key: key,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-35229474",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "35229474",
    __self: this
  }, "section.jsx-35229474{text-align:center;margin:0 auto;width:50vw;}@media screen and (max-width:650px){section.jsx-35229474{width:75vw;}}h3.jsx-35229474{margin:0;}h4.jsx-35229474{font-size:1rem;margin:0;margin-top:21px;}ul.jsx-35229474{list-style-type:none;margin:0 auto;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFHMkIsQUFPTCxBQUtKLEFBSU0sQUFNTSxTQVR2QixFQUxFLElBU1MsR0FoQkssR0FzQkEsR0FMRSxRQWhCTCxHQXNCRCxLQUxaLEdBaEJBLEVBc0JBIiwiZmlsZSI6Ii9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCByZXN1bWUgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kZXJla2tpbnNtYW4vJywgbGFiZWw6ICdMaW5rZWRJbicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgZW1haWwgPSBbXG4gIHsgaHJlZjogJ21haWx0bzpkZXJla2tpbnNtYW5AcHJvdG9ubWFpbC5jb20nLCBsYWJlbDogJ2RlcmVra2luc21hbkBwcm90b25tYWlsLmNvbScgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgcGhvbmUgPSBbXG4gIHsgaHJlZjogJ3RlbDoxNDE2MzcxNTY1MicsIGxhYmVsOiAnKzEgKDQxNikgMzcxLTU2NTInIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vZGVyZWtraW5zbWFuJywgbGFiZWw6ICdHaXRodWInIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3LnByb2R1Y3RodW50LmNvbS9AZGVyZWtfa2luc21hbicsIGxhYmVsOiAnUHJvZHVjdEh1bnQnIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vbWVkaXVtLmNvbS9AZGVyZWtraW5zbWFuJywgbGFiZWw6ICdNZWRpdW0nIH0sXG4gIHsgaHJlZjogJ2h0dHA6Ly93d3cubWVldHVwLmNvbS9tZW1iZXJzLzEwNDU5ODg4Mi8nLCBsYWJlbDogJ01lZXR1cCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly9kZXJla2tpbnNtYW4uaXRjaC5pby8nLCBsYWJlbDogJ0l0Y2gnIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vdXNlci9zaG93LzU0NDk4NzItZGVyZWsta2luc21hbicsIGxhYmVsOiAnR29vZHJlYWRzJyB9LFxuICB7IGhyZWY6ICdodHRwOi8vdHdpdHRlci5jb20vZGVyZWtraW5zbWFuJywgbGFiZWw6ICdUd2l0dGVyJyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGVyZWsua2luc21hbicsIGxhYmVsOiAnRmFjZWJvb2snIH0sXG4gIHsgaHJlZjogJ2h0dHA6Ly9pbnN0YWdyYW0uY29tL2RlcmVra2luc21hbicsIGxhYmVsOiAnSW5zdGFncmFtJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBDb250YWN0ID0gKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8aDM+SW50ZXJuZXQgUsOpc3Vtw6k8L2gzPlxuICAgIDxoND5QREYgYXZhaWxhYmxlIGJ5IHJlcXVlc3QuPC9oND5cbiAgICA8dWw+XG4gICAgICB7cmVzdW1lLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxoMz5Db250YWN0PC9oMz5cbiAgICA8aDQ+4oCUdmlhIEVtYWlsOjwvaDQ+XG4gICAgPHVsPlxuICAgICAge2VtYWlsLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxoND7igJR2aWEgVGVsZXBob255OjwvaDQ+XG4gICAgPHVsPlxuICAgICAge3Bob25lLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxoND7igJR2aWEgdGhlIEludGVybmV0OjwvaDQ+XG4gICAgPHVsPlxuICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDc1dnc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbmF2ID4gdWwge1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdfQ== */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.f28b9b64d17c3e2ed6d5.hot-update.js.map
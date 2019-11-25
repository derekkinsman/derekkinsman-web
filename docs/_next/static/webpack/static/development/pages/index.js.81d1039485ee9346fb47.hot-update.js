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
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Internet R\xE9sum\xE9"), __jsx("h4", {
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "PDF available by request."), __jsx("ul", {
    className: "jsx-4137610788",
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
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, label));
  })), __jsx("h3", {
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Contact"), __jsx("h4", {
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u2014via Email:"), __jsx("ul", {
    className: "jsx-4137610788",
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
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u2014via Telephony:"), __jsx("ul", {
    className: "jsx-4137610788",
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
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-4137610788",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u2014via the Internet:"), __jsx("ul", {
    className: "jsx-4137610788",
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
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4137610788",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4137610788",
    __self: this
  }, "section.jsx-4137610788{text-align:center;width:100vw;}ul.jsx-4137610788{width:50vw;}a.jsx-4137610788{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFHMkIsQUFJUCxBQU9HLFdBTmhCLEdBT3VCLElBWFQsWUFDZCxrQ0FXaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2RlcmVra2luc21hbi9Eb2N1bWVudHMvQ29zbW9uYXV0IEluZHVzdHJpZXMvZGVyZWtraW5zbWFuLXdlYi9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHJlc3VtZSA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RlcmVra2luc21hbi8nLCBsYWJlbDogJ0xpbmtlZEluJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBlbWFpbCA9IFtcbiAgeyBocmVmOiAnbWFpbHRvOmRlcmVra2luc21hbkBwcm90b25tYWlsLmNvbScsIGxhYmVsOiAnZGVyZWtraW5zbWFuQHByb3Rvbm1haWwuY29tJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBwaG9uZSA9IFtcbiAgeyBocmVmOiAndGVsOjE0MTYzNzE1NjUyJywgbGFiZWw6ICcrMSAoNDE2KSAzNzEtNTY1MicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZXJla2tpbnNtYW4nLCBsYWJlbDogJ0dpdGh1YicgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cucHJvZHVjdGh1bnQuY29tL0BkZXJla19raW5zbWFuJywgbGFiZWw6ICdQcm9kdWN0SHVudCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWRpdW0uY29tL0BkZXJla2tpbnNtYW4nLCBsYWJlbDogJ01lZGl1bScgfSxcbiAgeyBocmVmOiAnaHR0cDovL3d3dy5tZWV0dXAuY29tL21lbWJlcnMvMTA0NTk4ODgyLycsIGxhYmVsOiAnTWVldHVwJyB9LFxuICB7IGhyZWY6ICdodHRwczovL2RlcmVra2luc21hbi5pdGNoLmlvLycsIGxhYmVsOiAnSXRjaCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvNTQ0OTg3Mi1kZXJlay1raW5zbWFuJywgbGFiZWw6ICdHb29kcmVhZHMnIH0sXG4gIHsgaHJlZjogJ2h0dHA6Ly90d2l0dGVyLmNvbS9kZXJla2tpbnNtYW4nLCBsYWJlbDogJ1R3aXR0ZXInIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZXJlay5raW5zbWFuJywgbGFiZWw6ICdGYWNlYm9vaycgfSxcbiAgeyBocmVmOiAnaHR0cDovL2luc3RhZ3JhbS5jb20vZGVyZWtraW5zbWFuJywgbGFiZWw6ICdJbnN0YWdyYW0nIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxoMz5JbnRlcm5ldCBSw6lzdW3DqTwvaDM+XG4gICAgPGg0PlBERiBhdmFpbGFibGUgYnkgcmVxdWVzdC48L2g0PlxuICAgIDx1bD5cbiAgICAgIHtyZXN1bWUubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPGgzPkNvbnRhY3Q8L2gzPlxuICAgIDxoND7igJR2aWEgRW1haWw6PC9oND5cbiAgICA8dWw+XG4gICAgICB7ZW1haWwubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPGg0PuKAlHZpYSBUZWxlcGhvbnk6PC9oND5cbiAgICA8dWw+XG4gICAgICB7cGhvbmUubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPGg0PuKAlHZpYSB0aGUgSW50ZXJuZXQ6PC9oND5cbiAgICA8dWw+XG4gICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgIH1cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdfQ== */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.81d1039485ee9346fb47.hot-update.js.map
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
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Internet R\xE9sum\xE9"), __jsx("ul", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, resume.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, label));
  }), __jsx("li", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: "/resume_derekkinsman_2019.pdf",
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "PDF"))), __jsx("h3", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Contact"), __jsx("h4", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u2014via Email:"), __jsx("ul", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, email.map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        label = _ref2.label;
    return __jsx("li", {
      key: key,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\u2014via Telephony:"), __jsx("ul", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, phone.map(function (_ref3) {
    var key = _ref3.key,
        href = _ref3.href,
        label = _ref3.label;
    return __jsx("li", {
      key: key,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\u2014via the Internet:"), __jsx("ul", {
    className: "jsx-711032293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, links.map(function (_ref4) {
    var key = _ref4.key,
        href = _ref4.href,
        label = _ref4.label;
    return __jsx("li", {
      key: key,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-711032293",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "711032293",
    __self: this
  }, "section.jsx-711032293{text-align:center;margin:0 auto;width:50vw;}@media screen and (max-width:650px){section.jsx-711032293{width:75vw;}}h3.jsx-711032293{margin:0;}h3.jsx-711032293:last-of-type{margin-top:42px;}h4.jsx-711032293{font-size:1rem;font-weight:400;margin:0;}.italics.jsx-711032293{font-style:italic;}ul.jsx-711032293{list-style-type:none;margin:0 auto 21px;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGZ0IsQUFHMkIsQUFPTCxBQUtKLEFBSU8sQUFJRCxBQU1HLEFBSUcsU0FqQnZCLEVBTEUsSUFhZ0IsQ0FKbEIsRUFoQmdCLEFBMEJoQixHQUlxQixVQVRWLENBcEJFLFFBcUJiLEFBU1ksR0E3QlosT0E4QkEiLCJmaWxlIjoiL1VzZXJzL2RlcmVra2luc21hbi9Eb2N1bWVudHMvQ29zbW9uYXV0IEluZHVzdHJpZXMvZGVyZWtraW5zbWFuLXdlYi9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IHJlc3VtZSA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RlcmVra2luc21hbi8nLCBsYWJlbDogJ0xpbmtlZEluJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBlbWFpbCA9IFtcbiAgeyBocmVmOiAnbWFpbHRvOmRlcmVra2luc21hbkBwcm90b25tYWlsLmNvbScsIGxhYmVsOiAnZGVyZWtraW5zbWFuQHByb3Rvbm1haWwuY29tJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBwaG9uZSA9IFtcbiAgeyBocmVmOiAndGVsOjE0MTYzNzE1NjUyJywgbGFiZWw6ICcrMSAoNDE2KSAzNzEtNTY1MicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZXJla2tpbnNtYW4nLCBsYWJlbDogJ0dpdGh1YicgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cucHJvZHVjdGh1bnQuY29tL0BkZXJla19raW5zbWFuJywgbGFiZWw6ICdQcm9kdWN0SHVudCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWRpdW0uY29tL0BkZXJla2tpbnNtYW4nLCBsYWJlbDogJ01lZGl1bScgfSxcbiAgeyBocmVmOiAnaHR0cDovL3d3dy5tZWV0dXAuY29tL21lbWJlcnMvMTA0NTk4ODgyLycsIGxhYmVsOiAnTWVldHVwJyB9LFxuICB7IGhyZWY6ICdodHRwczovL2RlcmVra2luc21hbi5pdGNoLmlvLycsIGxhYmVsOiAnSXRjaCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvNTQ0OTg3Mi1kZXJlay1raW5zbWFuJywgbGFiZWw6ICdHb29kcmVhZHMnIH0sXG4gIHsgaHJlZjogJ2h0dHA6Ly90d2l0dGVyLmNvbS9kZXJla2tpbnNtYW4nLCBsYWJlbDogJ1R3aXR0ZXInIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZXJlay5raW5zbWFuJywgbGFiZWw6ICdGYWNlYm9vaycgfSxcbiAgeyBocmVmOiAnaHR0cDovL2luc3RhZ3JhbS5jb20vZGVyZWtraW5zbWFuJywgbGFiZWw6ICdJbnN0YWdyYW0nIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxoMz5JbnRlcm5ldCBSw6lzdW3DqTwvaDM+XG4gICAgey8qIDxoND48c3BhbiBjbGFzc05hbWU9XCJpdGFsaWNzXCI+4oCUUERGIGF2YWlsYWJsZSBieSByZXF1ZXN0Ljwvc3Bhbj48L2g0PiAqL31cbiAgICA8dWw+XG4gICAgICB7cmVzdW1lLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIvcmVzdW1lX2RlcmVra2luc21hbl8yMDE5LnBkZlwiPlBERjwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDxoMz5Db250YWN0PC9oMz5cbiAgICA8aDQ+4oCUdmlhIEVtYWlsOjwvaDQ+XG4gICAgPHVsPlxuICAgICAge2VtYWlsLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxoND7igJR2aWEgVGVsZXBob255OjwvaDQ+XG4gICAgPHVsPlxuICAgICAge3Bob25lLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxoND7igJR2aWEgdGhlIEludGVybmV0OjwvaDQ+XG4gICAgPHVsPlxuICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDc1dnc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGgzOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgICB9XG5cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5pdGFsaWNzIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjFweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbmF2ID4gdWwge1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdfQ== */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.c64990582d0c3850b263.hot-update.js.map
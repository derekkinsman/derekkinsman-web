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
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Internet R\xE9sum\xE9"), __jsx("h4", {
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u2014PDF available by request."), __jsx("ul", {
    className: "jsx-4238740112",
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
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, label));
  })), __jsx("h3", {
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Contact"), __jsx("h4", {
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u2014via Email:"), __jsx("ul", {
    className: "jsx-4238740112",
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
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u2014via Telephony:"), __jsx("ul", {
    className: "jsx-4238740112",
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
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, label));
  })), __jsx("h4", {
    className: "jsx-4238740112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u2014via the Internet:"), __jsx("ul", {
    className: "jsx-4238740112",
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
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4238740112",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4238740112",
    __self: this
  }, "section.jsx-4238740112{text-align:center;margin:0 auto;width:50vw;}@media screen and (max-width:650px){section.jsx-4238740112{width:75vw;}}h3.jsx-4238740112{margin:0;}h4.jsx-4238740112{font-size:1rem;font-weight:400;margin:0;}ul.jsx-4238740112{list-style-type:none;margin:0 auto;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFHMkIsQUFPTCxBQUtKLEFBSU0sQUFNTSxTQVR2QixFQUxFLElBU2dCLEdBaEJGLEdBc0JBLFVBTEwsQ0FoQkUsR0FzQkQsS0FMWixHQWhCQSxFQXNCQSIsImZpbGUiOiIvVXNlcnMvZGVyZWtraW5zbWFuL0RvY3VtZW50cy9Db3Ntb25hdXQgSW5kdXN0cmllcy9kZXJla2tpbnNtYW4td2ViL2NvbXBvbmVudHMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgcmVzdW1lID0gW1xuICB7IGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGVyZWtraW5zbWFuLycsIGxhYmVsOiAnTGlua2VkSW4nIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IGVtYWlsID0gW1xuICB7IGhyZWY6ICdtYWlsdG86ZGVyZWtraW5zbWFuQHByb3Rvbm1haWwuY29tJywgbGFiZWw6ICdkZXJla2tpbnNtYW5AcHJvdG9ubWFpbC5jb20nIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IHBob25lID0gW1xuICB7IGhyZWY6ICd0ZWw6MTQxNjM3MTU2NTInLCBsYWJlbDogJysxICg0MTYpIDM3MS01NjUyJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2RlcmVra2luc21hbicsIGxhYmVsOiAnR2l0aHViJyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5wcm9kdWN0aHVudC5jb20vQGRlcmVrX2tpbnNtYW4nLCBsYWJlbDogJ1Byb2R1Y3RIdW50JyB9LFxuICB7IGhyZWY6ICdodHRwczovL21lZGl1bS5jb20vQGRlcmVra2luc21hbicsIGxhYmVsOiAnTWVkaXVtJyB9LFxuICB7IGhyZWY6ICdodHRwOi8vd3d3Lm1lZXR1cC5jb20vbWVtYmVycy8xMDQ1OTg4ODIvJywgbGFiZWw6ICdNZWV0dXAnIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vZGVyZWtraW5zbWFuLml0Y2guaW8vJywgbGFiZWw6ICdJdGNoJyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5nb29kcmVhZHMuY29tL3VzZXIvc2hvdy81NDQ5ODcyLWRlcmVrLWtpbnNtYW4nLCBsYWJlbDogJ0dvb2RyZWFkcycgfSxcbiAgeyBocmVmOiAnaHR0cDovL3R3aXR0ZXIuY29tL2RlcmVra2luc21hbicsIGxhYmVsOiAnVHdpdHRlcicgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RlcmVrLmtpbnNtYW4nLCBsYWJlbDogJ0ZhY2Vib29rJyB9LFxuICB7IGhyZWY6ICdodHRwOi8vaW5zdGFncmFtLmNvbS9kZXJla2tpbnNtYW4nLCBsYWJlbDogJ0luc3RhZ3JhbScgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGgzPkludGVybmV0IFLDqXN1bcOpPC9oMz5cbiAgICA8aDQ+4oCUUERGIGF2YWlsYWJsZSBieSByZXF1ZXN0LjwvaDQ+XG4gICAgPHVsPlxuICAgICAge3Jlc3VtZS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8aDM+Q29udGFjdDwvaDM+XG4gICAgPGg0PuKAlHZpYSBFbWFpbDo8L2g0PlxuICAgIDx1bD5cbiAgICAgIHtlbWFpbC5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8aDQ+4oCUdmlhIFRlbGVwaG9ueTo8L2g0PlxuICAgIDx1bD5cbiAgICAgIHtwaG9uZS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8aDQ+4oCUdmlhIHRoZSBJbnRlcm5ldDo8L2g0PlxuICAgIDx1bD5cbiAgICAgIHtsaW5rcy5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0XG4iXX0= */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.d508233837e5308161c5.hot-update.js.map
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
  href: 'https://twitter.com/derekkinsman',
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
    href: "/resume_derekkinsman_2020.pdf",
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
  }, "section.jsx-711032293{text-align:center;margin:0 auto;width:50vw;}@media screen and (max-width:650px){section.jsx-711032293{width:75vw;}}h3.jsx-711032293{margin:0;}h3.jsx-711032293:last-of-type{margin-top:42px;}h4.jsx-711032293{font-size:1rem;font-weight:400;margin:0;}.italics.jsx-711032293{font-style:italic;}ul.jsx-711032293{list-style-type:none;margin:0 auto 21px;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGZ0IsQUFHMkIsQUFPTCxBQUtKLEFBSU8sQUFJRCxBQU1HLEFBSUcsU0FqQnZCLEVBTEUsSUFhZ0IsQ0FKbEIsRUFoQmdCLEFBMEJoQixHQUlxQixVQVRWLENBcEJFLFFBcUJiLEFBU1ksR0E3QlosT0E4QkEiLCJmaWxlIjoiL1VzZXJzL2RlcmVra2luc21hbi9Eb2N1bWVudHMvQ29zbW9uYXV0IEluZHVzdHJpZXMvZGVyZWtraW5zbWFuLXdlYi9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IHJlc3VtZSA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RlcmVra2luc21hbi8nLCBsYWJlbDogJ0xpbmtlZEluJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBlbWFpbCA9IFtcbiAgeyBocmVmOiAnbWFpbHRvOmRlcmVra2luc21hbkBwcm90b25tYWlsLmNvbScsIGxhYmVsOiAnZGVyZWtraW5zbWFuQHByb3Rvbm1haWwuY29tJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBwaG9uZSA9IFtcbiAgeyBocmVmOiAndGVsOjE0MTYzNzE1NjUyJywgbGFiZWw6ICcrMSAoNDE2KSAzNzEtNTY1MicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZXJla2tpbnNtYW4nLCBsYWJlbDogJ0dpdGh1YicgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cucHJvZHVjdGh1bnQuY29tL0BkZXJla19raW5zbWFuJywgbGFiZWw6ICdQcm9kdWN0SHVudCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWRpdW0uY29tL0BkZXJla2tpbnNtYW4nLCBsYWJlbDogJ01lZGl1bScgfSxcbiAgeyBocmVmOiAnaHR0cDovL3d3dy5tZWV0dXAuY29tL21lbWJlcnMvMTA0NTk4ODgyLycsIGxhYmVsOiAnTWVldHVwJyB9LFxuICB7IGhyZWY6ICdodHRwczovL2RlcmVra2luc21hbi5pdGNoLmlvLycsIGxhYmVsOiAnSXRjaCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvNTQ0OTg3Mi1kZXJlay1raW5zbWFuJywgbGFiZWw6ICdHb29kcmVhZHMnIH0sXG4gIHsgaHJlZjogJ2h0dHBzOi8vdHdpdHRlci5jb20vZGVyZWtraW5zbWFuJywgbGFiZWw6ICdUd2l0dGVyJyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGVyZWsua2luc21hbicsIGxhYmVsOiAnRmFjZWJvb2snIH0sXG4gIHsgaHJlZjogJ2h0dHA6Ly9pbnN0YWdyYW0uY29tL2RlcmVra2luc21hbicsIGxhYmVsOiAnSW5zdGFncmFtJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBDb250YWN0ID0gKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8aDM+SW50ZXJuZXQgUsOpc3Vtw6k8L2gzPlxuICAgIHsvKiA8aDQ+PHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljc1wiPuKAlFBERiBhdmFpbGFibGUgYnkgcmVxdWVzdC48L3NwYW4+PC9oND4gKi99XG4gICAgPHVsPlxuICAgICAge3Jlc3VtZS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiL3Jlc3VtZV9kZXJla2tpbnNtYW5fMjAyMC5wZGZcIj5QREY8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8aDM+Q29udGFjdDwvaDM+XG4gICAgPGg0PuKAlHZpYSBFbWFpbDo8L2g0PlxuICAgIDx1bD5cbiAgICAgIHtlbWFpbC5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8aDQ+4oCUdmlhIFRlbGVwaG9ueTo8L2g0PlxuICAgIDx1bD5cbiAgICAgIHtwaG9uZS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8aDQ+4oCUdmlhIHRoZSBJbnRlcm5ldDo8L2g0PlxuICAgIDx1bD5cbiAgICAgIHtsaW5rcy5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBoMzpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgICAgfVxuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuaXRhbGljcyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0XG4iXX0= */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.def5c4d49ee184d0c2ec.hot-update.js.map
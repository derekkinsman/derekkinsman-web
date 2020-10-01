webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/twitter.js":
/*!*******************************!*\
  !*** ./components/twitter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
var _jsxFileName = "/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/twitter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var tweets = [{
  tweetId: '405174155760267265'
}, {
  tweetId: '405744509465526272'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Twitter = function Twitter() {
  return __jsx("section", {
    className: "jsx-3938385413",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3938385413",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Nice Things People On The Internet Have Said"), __jsx("div", {
    className: "jsx-3938385413" + " " + "tweets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, tweets.map(function (_ref) {
    var tweetId = _ref.tweetId;
    return __jsx("div", {
      className: "jsx-3938385413" + " " + "tweet-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__["TwitterTweetEmbed"], {
      tweetId: tweetId,
      placeholder: "Loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3938385413",
    __self: this
  }, "section.jsx-3938385413{text-align:center;margin:0 auto;width:520px;}@media screen and (max-width:650px){section.jsx-3938385413{width:250px;}}.tweets.jsx-3938385413{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}h3.jsx-3938385413{margin-bottom:0;}.tweet-wrapper.jsx-3938385413{width:250px;margin:0 10px;}.tweet-wrapper.jsx-3938385413:first-of-type{margin-left:0;}.tweet-wrapper.jsx-3938385413:last-of-type{margin-right:0;}@media screen and (max-width:650px){.tweets.jsx-3938385413{-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.tweet-wrapper.jsx-3938385413{width:250px;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy90d2l0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHMkIsQUFPSixBQUtELEFBSUcsQUFJSixBQUtFLEFBSUMsQUFLSSxBQUlMLFlBOUJkLEFBYWMsQUFrQkgsRUFiYixDQUlBLENBYkEsRUFoQmdCLEdBdUNkLEtBbEJGLE1BcEJjLFlBQ2QsbUJBZ0NFLFdBdEJGIiwiZmlsZSI6Ii9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy90d2l0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcblxuY29uc3QgdHdlZXRzID0gW1xuICB7IHR3ZWV0SWQ6ICc0MDUxNzQxNTU3NjAyNjcyNjUnIH0sXG4gIHsgdHdlZXRJZDogJzQwNTc0NDUwOTQ2NTUyNjI3MicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgVHdpdHRlciA9ICgpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGgzPk5pY2UgVGhpbmdzIFBlb3BsZSBPbiBUaGUgSW50ZXJuZXQgSGF2ZSBTYWlkPC9oMz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR3ZWV0c1wiPlxuICAgICAge3R3ZWV0cy5tYXAoKHsgdHdlZXRJZCB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdlZXQtd3JhcHBlclwiPjxUd2l0dGVyVHdlZXRFbWJlZCB0d2VldElkPXt0d2VldElkfSBwbGFjZWhvbGRlcj1cIkxvYWRpbmdcIiAvPjwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDUyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnR3ZWV0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLnR3ZWV0LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAudHdlZXQtd3JhcHBlcjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC50d2VldC13cmFwcGVyOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgLnR3ZWV0cyB7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAudHdlZXQtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXG4iXX0= */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/twitter.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ })

})
//# sourceMappingURL=index.js.62d349c801c43e94b307.hot-update.js.map
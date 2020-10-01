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
  link.key = "nav-link-".concat(link.tweetId);
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
  }, "section.jsx-3938385413{text-align:center;margin:0 auto;width:520px;}@media screen and (max-width:650px){section.jsx-3938385413{width:250px;}}.tweets.jsx-3938385413{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}h3.jsx-3938385413{margin-bottom:0;}.tweet-wrapper.jsx-3938385413{width:250px;margin:0 10px;}.tweet-wrapper.jsx-3938385413:first-of-type{margin-left:0;}.tweet-wrapper.jsx-3938385413:last-of-type{margin-right:0;}@media screen and (max-width:650px){.tweets.jsx-3938385413{-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.tweet-wrapper.jsx-3938385413{width:250px;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy90d2l0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHMkIsQUFPSixBQUtELEFBSUcsQUFJSixBQUtFLEFBSUMsQUFLSSxBQUlMLFlBOUJkLEFBYWMsQUFrQkgsRUFiYixDQUlBLENBYkEsRUFoQmdCLEdBdUNkLEtBbEJGLE1BcEJjLFlBQ2QsbUJBZ0NFLFdBdEJGIiwiZmlsZSI6Ii9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy90d2l0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcblxuY29uc3QgdHdlZXRzID0gW1xuICB7IHR3ZWV0SWQ6ICc0MDUxNzQxNTU3NjAyNjcyNjUnIH0sXG4gIHsgdHdlZXRJZDogJzQwNTc0NDUwOTQ2NTUyNjI3MicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay50d2VldElkfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IFR3aXR0ZXIgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxoMz5OaWNlIFRoaW5ncyBQZW9wbGUgT24gVGhlIEludGVybmV0IEhhdmUgU2FpZDwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VldHNcIj5cbiAgICAgIHt0d2VldHMubWFwKCh7IHR3ZWV0SWQgfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3ZWV0LXdyYXBwZXJcIj48VHdpdHRlclR3ZWV0RW1iZWQgdHdlZXRJZD17dHdlZXRJZH0gcGxhY2Vob2xkZXI9XCJMb2FkaW5nXCIgLz48L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA1MjBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50d2VldHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC50d2VldC13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIH1cblxuICAgICAgLnR3ZWV0LXdyYXBwZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAudHdlZXQtd3JhcHBlcjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIC50d2VldHMge1xuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLnR3ZWV0LXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlclxuIl19 */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/twitter.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ })

})
//# sourceMappingURL=index.js.9d13edd854201a866f14.hot-update.js.map
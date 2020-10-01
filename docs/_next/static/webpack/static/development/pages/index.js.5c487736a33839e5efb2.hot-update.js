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
    var key = _ref.key,
        tweetId = _ref.tweetId;
    return __jsx("div", {
      key: key,
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
  }, "section.jsx-3938385413{text-align:center;margin:0 auto;width:520px;}@media screen and (max-width:650px){section.jsx-3938385413{width:250px;}}.tweets.jsx-3938385413{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}h3.jsx-3938385413{margin-bottom:0;}.tweet-wrapper.jsx-3938385413{width:250px;margin:0 10px;}.tweet-wrapper.jsx-3938385413:first-of-type{margin-left:0;}.tweet-wrapper.jsx-3938385413:last-of-type{margin-right:0;}@media screen and (max-width:650px){.tweets.jsx-3938385413{-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.tweet-wrapper.jsx-3938385413{width:250px;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy90d2l0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHMkIsQUFPSixBQUtELEFBSUcsQUFJSixBQUtFLEFBSUMsQUFLSSxBQUlMLFlBOUJkLEFBYWMsQUFrQkgsRUFiYixDQUlBLENBYkEsRUFoQmdCLEdBdUNkLEtBbEJGLE1BcEJjLFlBQ2QsbUJBZ0NFLFdBdEJGIiwiZmlsZSI6Ii9Vc2Vycy9kZXJla2tpbnNtYW4vRG9jdW1lbnRzL0Nvc21vbmF1dCBJbmR1c3RyaWVzL2RlcmVra2luc21hbi13ZWIvY29tcG9uZW50cy90d2l0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcblxuY29uc3QgdHdlZXRzID0gW1xuICB7IHR3ZWV0SWQ6ICc0MDUxNzQxNTU3NjAyNjcyNjUnIH0sXG4gIHsgdHdlZXRJZDogJzQwNTc0NDUwOTQ2NTUyNjI3MicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay50d2VldElkfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IFR3aXR0ZXIgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxoMz5OaWNlIFRoaW5ncyBQZW9wbGUgT24gVGhlIEludGVybmV0IEhhdmUgU2FpZDwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VldHNcIj5cbiAgICAgIHt0d2VldHMubWFwKCh7IGtleSwgdHdlZXRJZCB9KSA9PiAoXG4gICAgICAgIDxkaXYgIGtleT17a2V5fSBjbGFzc05hbWU9XCJ0d2VldC13cmFwcGVyXCI+PFR3aXR0ZXJUd2VldEVtYmVkIHR3ZWV0SWQ9e3R3ZWV0SWR9IHBsYWNlaG9sZGVyPVwiTG9hZGluZ1wiIC8+PC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogNTIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudHdlZXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAudHdlZXQtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC50d2VldC13cmFwcGVyOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLnR3ZWV0LXdyYXBwZXI6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAgICAgICAudHdlZXRzIHtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50d2VldC13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFR3aXR0ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/derekkinsman/Documents/Cosmonaut Industries/derekkinsman-web/components/twitter.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ })

})
//# sourceMappingURL=index.js.5c487736a33839e5efb2.hot-update.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=a.cssRules();return a.flush(),e},t.default=void 0;var r,i=n("q1tI");var a=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map(function(e){var t=e[0],n=e[1];return a.computeId(t,n)}).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){a.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=o},"8oxB":function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,f=-1;function h(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(h);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"initialize",function(){return se}),n.d(r,"ga",function(){return ce}),n.d(r,"set",function(){return le}),n.d(r,"send",function(){return ue}),n.d(r,"pageview",function(){return fe}),n.d(r,"modalview",function(){return he}),n.d(r,"timing",function(){return pe}),n.d(r,"event",function(){return me}),n.d(r,"exception",function(){return de}),n.d(r,"plugin",function(){return ge}),n.d(r,"outboundLink",function(){return ye}),n.d(r,"testModeAPI",function(){return be}),n.d(r,"default",function(){return ve});var i=n("MX0m"),a=n.n(i),o=n("q1tI"),s=n.n(o),c=n("8Kt/"),l=n.n(c),u=s.a.createElement,f=function(){return u("header",{className:"jsx-3465927687"},u("h1",{className:"jsx-3465927687 logo-a"},u("img",{src:"/logo-a.png",alt:"Desktop Logo.",className:"jsx-3465927687"})),u("h1",{className:"jsx-3465927687 logo-b"},u("img",{src:"/logo-b.png",alt:"Mobile Logo.",className:"jsx-3465927687"})),u(a.a,{id:"3465927687"},["html{font-size:21px;line-height:30px;}","body{margin:0;font-family:'Crimson Text',serif;}","@media screen and (max-width:650px){html{font-size:16px;line-height:21px;}}","a{font-style:italic;font-weight:600;-webkit-transition:color 0.5s ease;transition:color 0.5s ease;color:rgb(227,133,180);}","a:hover{color:rgb(104,204,242);}",".twitter-tweet{display:inline-block !important;}","header.jsx-3465927687{position:relative;height:100vh;color:#FFF;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url('/masthead.png');text-align:center;}","h1.jsx-3465927687{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-75%);-ms-transform:translate(-50%,-75%);transform:translate(-50%,-75%);}","img.jsx-3465927687{width:50vw;}",".logo-b.jsx-3465927687{display:none;}","@media screen and (max-width:650px){h1.jsx-3465927687{-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);}img.jsx-3465927687{width:75vw;}.logo-a.jsx-3465927687{display:none;}.logo-b.jsx-3465927687{display:block;}}"]))},h=s.a.createElement,p=function(){return h("section",{className:"jsx-3951310688"},h("p",{className:"jsx-3951310688"},"Derek J. Kinsman is a maker of things residing in ",h("a",{href:"https://goo.gl/maps/jELi5nooTP62",target:"_blank",className:"jsx-3951310688"},"Guelph, ON, Canada"),". Sometimes those things require code, sometimes power tools and hand tools, usually it's for other people, and often it's done with others. Derek specialises in radical generalism (thanks for the term ",h("a",{href:"https://twitter.com/ablerism",target:"_blank",className:"jsx-3951310688"},"Sara Hendren"),") and he's really good at breaking things for Science! While he deeply enjoys the proof of life stage of a project, he's just as comfortable doing research, fixing ",h("span",{className:"jsx-3951310688 italics"},"&")," logging bugs, writing documentation, making flowcharts, and writing code."),h("p",{className:"jsx-3951310688"},"Currently, Derek is looking for remote opportunities working in digital product design in a technical capacity ",h("span",{className:"jsx-3951310688 italics"},"(in office and/or partial remote located if in the Waterloo\u2014Toronto corridor)"),". He most recently worked with the mighty fine folks at ",h("a",{href:"http://siberia.io/",target:"_blank",className:"jsx-3951310688"},"Siberia"),", and ",h("a",{href:"http://teehanlax.com/",target:"_blank",className:"jsx-3951310688"},"Teehan+Lax")," \u2014 on the ",h("a",{href:"https://vimeo.com/tllabs",target:"_blank",className:"jsx-3951310688"},"Labs")," team \u2014 prior to that."),h("p",{className:"jsx-3951310688"},"Much of the work he has been involved with in recent years was completed under NDA. Previous clients come from a diverse set of industries including social impact, music production, active apparel ",h("span",{className:"jsx-3951310688 italics"},"&")," high fashion, telecommunications, smart home, home automation, home security, automotive, advertising, wellness ",h("span",{className:"jsx-3951310688 italics"},"&")," fitness, healthcare, and medical marijuana. If you would like to learn more about Derek's involvement in these projects reach out using your preferred contact details below."),h("p",{className:"jsx-3951310688"},"Derek can also be found building ",h("span",{className:"jsx-3951310688 italics"},"&")," designing websites for his ",h("a",{href:"http://worldoftwilight.com",target:"_blank",className:"jsx-3951310688"},"friends"),", making a variety ",h("a",{href:"https://instagram.com/cavernsofurk",target:"_blank",className:"jsx-3951310688"},"of")," ",h("a",{href:"https://twitter.com/atunnelgoon",target:"_blank",className:"jsx-3951310688"},"weird")," ",h("a",{href:"https://twitter.com/parchmentwitch",target:"_blank",className:"jsx-3951310688"},"bots"),", as well as designing analogue ",h("a",{href:"https://derekkinsman.itch.io",target:"_blank",className:"jsx-3951310688"},"games of r\xf4le\u2014play"),"."),h(a.a,{id:"3951310688"},["section.jsx-3951310688{text-align:justify;margin:84px auto 0;width:50vw;}",".italics.jsx-3951310688{font-style:italic;}","@media screen and (max-width:650px){section.jsx-3951310688{margin:63px auto;width:75vw;}}"]))},m=s.a.createElement,d=([{href:"https://github.com/derekkinsman",label:"Github"},{href:"https://www.producthunt.com/@derek_kinsman",label:"ProductHunt"},{href:"https://medium.com/@derekkinsman",label:"Medium"},{href:"http://www.meetup.com/members/104598882/",label:"Meetup"},{href:"https://derekkinsman.itch.io/",label:"Itch"},{href:"https://www.goodreads.com/user/show/5449872-derek-kinsman",label:"Goodreads"},{href:"http://twitter.com/derekkinsman",label:"Twitter"},{href:"https://www.facebook.com/derek.kinsman",label:"Facebook"},{href:"http://instagram.com/derekkinsman",label:"Instagram"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),function(){return m("section",{className:"jsx-3472338650"},m("h3",{className:"jsx-3472338650"},"Nice Things People On The Internet Have Said"),m("blockquote",{className:"jsx-3472338650 twitter-tweet"},m("p",{lang:"en",dir:"ltr",className:"jsx-3472338650"},"These guys do cool stuff. I want some of the things they build. Tho I suspect they're not for sale. ",m("a",{href:"http://t.co/v4PYUrbyWp",className:"jsx-3472338650"},"http://t.co/v4PYUrbyWp")),"\u2014 Adam Savage (@donttrythis) ",m("a",{href:"https://twitter.com/donttrythis/status/405174155760267265?ref_src=twsrc%5Etfw",className:"jsx-3472338650"},"November 26, 2013")),m("blockquote",{className:"jsx-3472338650 twitter-tweet"},m("p",{lang:"en",dir:"ltr",className:"jsx-3472338650"},"Did I tell y'all that I love this D.I.G.I.T display from ",m("a",{href:"https://twitter.com/tllabs?ref_src=twsrc%5Etfw",className:"jsx-3472338650"},"@tllabs")," ? ",m("a",{href:"http://t.co/2HC3MSe4K3",className:"jsx-3472338650"},"http://t.co/2HC3MSe4K3")," Now, are they phyxels or not?"),"\u2014 jared ficklin (@jaredrawk) ",m("a",{href:"https://twitter.com/jaredrawk/status/405744509465526272?ref_src=twsrc%5Etfw",className:"jsx-3472338650"},"November 27, 2013")),m("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8",className:"jsx-3472338650"}),m(a.a,{id:"3472338650"},["section.jsx-3472338650{text-align:center;margin:0 auto;width:50vw;}","@media screen and (max-width:650px){section.jsx-3472338650{width:75vw;}}","h3.jsx-3472338650{margin-bottom:0;}",".twitter-tweet.jsx-3472338650{display:inline-block !important;}"]))}),g=s.a.createElement,y=[{href:"https://www.linkedin.com/in/derekkinsman/",label:"LinkedIn"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),b=[{href:"mailto:derekkinsman@protonmail.com",label:"derekkinsman@protonmail.com"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),v=[{href:"tel:14163715652",label:"+1 (416) 371-5652"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),w=[{href:"https://github.com/derekkinsman",label:"Github"},{href:"https://www.producthunt.com/@derek_kinsman",label:"ProductHunt"},{href:"https://medium.com/@derekkinsman",label:"Medium"},{href:"http://www.meetup.com/members/104598882/",label:"Meetup"},{href:"https://derekkinsman.itch.io/",label:"Itch"},{href:"https://www.goodreads.com/user/show/5449872-derek-kinsman",label:"Goodreads"},{href:"http://twitter.com/derekkinsman",label:"Twitter"},{href:"https://www.facebook.com/derek.kinsman",label:"Facebook"},{href:"http://instagram.com/derekkinsman",label:"Instagram"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),j=function(){return g("section",{className:"jsx-711032293"},g("h3",{className:"jsx-711032293"},"Internet R\xe9sum\xe9"),g("ul",{className:"jsx-711032293"},y.map(function(e){var t=e.key,n=e.href,r=e.label;return g("li",{key:t,className:"jsx-711032293"},g("a",{href:n,className:"jsx-711032293"},r))}),g("li",{className:"jsx-711032293"},g("a",{href:"/resume_derekkinsman_2020.pdf",className:"jsx-711032293"},"PDF"))),g("h3",{className:"jsx-711032293"},"Contact"),g("h4",{className:"jsx-711032293"},"\u2014via Email:"),g("ul",{className:"jsx-711032293"},b.map(function(e){var t=e.key,n=e.href,r=e.label;return g("li",{key:t,className:"jsx-711032293"},g("a",{href:n,className:"jsx-711032293"},r))})),g("h4",{className:"jsx-711032293"},"\u2014via Telephony:"),g("ul",{className:"jsx-711032293"},v.map(function(e){var t=e.key,n=e.href,r=e.label;return g("li",{key:t,className:"jsx-711032293"},g("a",{href:n,className:"jsx-711032293"},r))})),g("h4",{className:"jsx-711032293"},"\u2014via the Internet:"),g("ul",{className:"jsx-711032293"},w.map(function(e){var t=e.key,n=e.href,r=e.label;return g("li",{key:t,className:"jsx-711032293"},g("a",{href:n,className:"jsx-711032293"},r))})),g(a.a,{id:"711032293"},["section.jsx-711032293{text-align:center;margin:0 auto;width:50vw;}","@media screen and (max-width:650px){section.jsx-711032293{width:75vw;}}","h3.jsx-711032293{margin:0;}","h3.jsx-711032293:last-of-type{margin-top:42px;}","h4.jsx-711032293{font-size:1rem;font-weight:400;margin:0;}",".italics.jsx-711032293{font-style:italic;}","ul.jsx-711032293{list-style-type:none;margin:0 auto 21px;padding:0;}"]))};var k=n("hfKm"),x=n.n(k);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),x()(e,r.key,r)}}var S=n("17x9"),O=n.n(S);function N(e){console.warn("[react-ga]",e)}function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z="_blank",D=1,q=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return r=this,i=(e=E(t)).call.apply(e,[this].concat(o)),n=!i||"object"!==T(i)&&"function"!==typeof i?R(r):i,F(R(n),"handleClick",function(e){var r=n.props,i=r.target,a=r.eventLabel,o=r.to,s=r.onClick,c=r.trackerNames,l={label:a},u=i!==z,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===D);u&&f?(e.preventDefault(),t.trackLink(l,function(){window.location.href=o},c)):t.trackLink(l,function(){},c),s&&s(e)}),n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){F(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},C(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===z&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,s.a.createElement("a",n)}}])&&A(n.prototype,r),i&&A(n,i),t}();function L(e){return e.replace(/^\s+|\s+$/g,"")}F(q,"trackLink",function(){N("ga tracking not enabled")}),F(q,"propTypes",{eventLabel:O.a.string.isRequired,target:O.a.string,to:O.a.string,onClick:O.a.func,trackerNames:O.a.arrayOf(O.a.string)}),F(q,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var B=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var M="REDACTED (Potential Email Address)";function G(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(N("This arg looks like an email address, redacting."),M):t?L(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(B)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var K=function(e){var t,n,r,i,a,o,s,c="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?c=e.gaAddress:e&&e.debug&&(c="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",i=c,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,o=n.createElement(r),s=n.getElementsByTagName(r)[0],o.async=1,o.src=i,s.parentNode.insertBefore(o,s)};function W(e){console.info("[react-ga]",e)}var J=[],H={calls:J,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];J.push([].concat(t))},resetCalls:function(){J.length=0}};function U(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){return(Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var $="undefined"===typeof window||"undefined"===typeof document,Q=!1,ee=!0,te=!1,ne=!0,re=function(){var e;return te?H.ga.apply(H,arguments):!$&&(window.ga?(e=window).ga.apply(e,arguments):N("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function ie(e){return G(e,ee)}function ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0];if("function"===typeof re){if("string"!==typeof i)return void N("ga command must be a string");!ne&&Array.isArray(e)||re.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){re.apply(void 0,Y(["".concat(e,".").concat(i)].concat(n.slice(1))))})}}function oe(e,t){e?t&&(t.debug&&!0===t.debug&&(Q=!0),!1===t.titleCase&&(ee=!1),t.useExistingGa)||(t&&t.gaOptions?re("create",e,t.gaOptions):re("create",e,"auto")):N("gaTrackingID is required in initialize()")}function se(e,t){if(t&&!0===t.testMode)te=!0;else{if($)return!1;t&&!0===t.standardImplementation||K(t)}return ne=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===Z(e)?oe(e.trackingId,e):N("All configs must be an object")}):oe(e,t),!0}function ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(re.apply(void 0,t),Q&&(W("called ga('arguments');"),W("with arguments: ".concat(JSON.stringify(t))))),window.ga}function le(e,t){e?"object"===Z(e)?(0===Object.keys(e).length&&N("empty `fieldsObject` given to .set()"),ae(t,"set",e),Q&&(W("called ga('set', fieldsObject);"),W("with fieldsObject: ".concat(JSON.stringify(e))))):N("Expected `fieldsObject` arg to be an Object"):N("`fieldsObject` is required in .set()")}function ue(e,t){ae(t,"send",e),Q&&(W("called ga('send', fieldObject);"),W("with fieldObject: ".concat(JSON.stringify(e))),W("with trackers: ".concat(JSON.stringify(t))))}function fe(e,t,n){if(e){var r=L(e);if(""!==r){var i={};if(n&&(i.title=n),ae(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){X(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({hitType:"pageview",page:r},i)),Q){W("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),W("with path: ".concat(r).concat(a))}}else N("path cannot be an empty string in .pageview()")}else N("path is required in .pageview()")}function he(e,t){if(e){var n,r="/"===(n=L(e)).substring(0,1)?n.substring(1):n;if(""!==r){var i="/modal/".concat(r);ae(t,"send","pageview",i),Q&&(W("called ga('send', 'pageview', path);"),W("with path: ".concat(i)))}else N("modalName cannot be an empty string or a single / in .modalview()")}else N("modalName is required in .modalview(modalName)")}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,i=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var o={hitType:"timing",timingCategory:ie(t),timingVar:ie(n),timingValue:r};i&&(o.timingLabel=ie(i)),ue(o,a)}else N("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,i=e.value,a=e.nonInteraction,o=e.transport,s=U(e,["category","action","label","value","nonInteraction","transport"]),c=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:ie(t),eventAction:ie(n)};r&&(l.eventLabel=ie(r)),"undefined"!==typeof i&&("number"!==typeof i?N("Expected `args.value` arg to be a Number."):l.eventValue=i),"undefined"!==typeof a&&("boolean"!==typeof a?N("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),"undefined"!==typeof o&&("string"!==typeof o?N("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(o)&&N("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=o)),Object.keys(s).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){l[e]=s[e]}),Object.keys(s).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){l[e]=s[e]}),ue(l,c)}else N("args.category AND args.action are required in event()")}function de(e,t){var n=e.description,r=e.fatal,i={hitType:"exception"};n&&(i.exDescription=ie(n)),"undefined"!==typeof r&&("boolean"!==typeof r?N("`args.fatal` must be a boolean."):i.exFatal=r),ue(i,t)}var ge={require:function(e,t,n){if(e){var r=L(e);if(""!==r){var i=n?"".concat(n,".require"):"require";if(t){if("object"!==Z(t))return void N("Expected `options` arg to be an Object");0===Object.keys(t).length&&N("Empty `options` given to .require()"),ce(i,r,t),Q&&W("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else ce(i,r),Q&&W("called ga('require', '".concat(r,"');"))}else N("`name` cannot be an empty string in .require()")}else N("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)N("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)N("Expected `action` arg to be a String.");else{var i="".concat(e,":").concat(t);n=n||null,r&&n?(ce(i,r,n),Q&&(W("called ga('".concat(i,"');")),W('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(ce(i,n),Q&&(W("called ga('".concat(i,"');")),W("with payload: ".concat(JSON.stringify(n))))):(ce(i),Q&&W("called ga('".concat(i,"');")))}}};function ye(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:ie(e.label)},i=!1,a=setTimeout(function(){i=!0,t()},250);r.hitCallback=function(){clearTimeout(a),i||t()},ue(r,n)}else N("args.label is required in outboundLink()");else N("hitCallback function is required")}var be=H,ve={initialize:se,ga:ce,set:le,send:ue,pageview:fe,modalview:he,timing:pe,event:me,exception:de,plugin:ge,outboundLink:ye,testModeAPI:H};function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}q.origTrackLink=q.trackLink,q.trackLink=ye;var ke=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach(function(t){je(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r,{OutboundLink:q}),xe="UA-151971686-1",_e=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ke.initialize(xe)}var t,n,r;return t=e,(n=[{key:"logPageView",value:function(e){ke.pageview(e)}}])&&_(t.prototype,n),r&&_(t,r),e}());n.d(t,"default",function(){return Oe});var Se=s.a.createElement;function Oe(){return _e.logPageView("/"),Se("div",{className:"jsx-976634604"},Se(l.a,null,Se("title",{className:"jsx-976634604"},"Derek Kinsman. Maker of things."),Se("link",{rel:"icon",type:"image/png",href:"/favicon-16.png",sizes:"16x16",className:"jsx-976634604"}),Se("link",{rel:"icon",type:"image/png",href:"/favicon-32.png",sizes:"32x32",className:"jsx-976634604"}),Se("link",{rel:"icon",type:"image/png",href:"/favicon-96.png",sizes:"96x96",className:"jsx-976634604"}),Se("link",{href:"https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i&display=swap",rel:"stylesheet",className:"jsx-976634604"}),Se("meta",{property:"og:type",content:"profile",className:"jsx-976634604"}),Se("meta",{property:"og:title",content:"Derek Kinsman",className:"jsx-976634604"}),Se("meta",{property:"og:description",content:"Rude mechanical. Maker of things.",className:"jsx-976634604"}),Se("meta",{property:"og:url",content:"https://derekkinsman.com/",className:"jsx-976634604"}),Se("meta",{property:"og:image",content:"https://derekkinsman.com/meta-fb.png",className:"jsx-976634604"}),Se("meta",{name:"twitter:card",content:"summary_large_image",className:"jsx-976634604"}),Se("meta",{name:"twitter:title",content:"Derek Kinsman",className:"jsx-976634604"}),Se("meta",{name:"twitter:description",content:"Rude mechanical. Maker of things.",className:"jsx-976634604"}),Se("meta",{name:"twitter:image",content:"https://derekkinsman.com/meta-tw.png",className:"jsx-976634604"})),Se(f,null),Se(p,null),Se("div",{className:"jsx-976634604 seperator"},"\xd7"),Se(j,null),Se("div",{className:"jsx-976634604 seperator"},"\xd7"),Se(d,null),Se("div",{className:"jsx-976634604 seperator"},"\xd7"),Se("footer",{className:"jsx-976634604"},Se("p",{className:"jsx-976634604"},"\xa9 2019 Derek Kinsman. Handmade with",Se("span",{className:"jsx-976634604 emoji"},"\ud83d\udda4"),"on ",Se("a",{href:"https://downiewenjack.ca/support-us/donate/",target:"_blank",className:"jsx-976634604"},"Treaty 3 Territory"),", Turtle Island."),Se("img",{src:"black.svg",className:"jsx-976634604 logo"})),Se(a.a,{id:"976634604"},[".seperator.jsx-976634604{margin:42px 0;text-align:center;}","footer.jsx-976634604{font-size:0.8rem;line-height:0.9rem;text-align:center;margin:0 auto;width:50vw;}",".emoji.jsx-976634604{margin-left:5px;margin-right:0px;vertical-align:middle;}",".logo.jsx-976634604{height:50px;margin:21px auto 42px;}","@media screen and (max-width:650px){footer.jsx-976634604{width:75vw;}.logo.jsx-976634604{height:50px;}}"]))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=a(n("9kyW")),i=a(n("bVZc"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,a=t.optimizeForSpeed,o=void 0!==a&&a,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var a=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=a,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),a=t+i;return e[a]||(e[a]="jsx-"+(0,r.default)(t+"-"+i)),e[a]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var a=this.computeId(i,r);return{styleId:a,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(a,e)}):[this.computeSelector(a,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}();t.default=o},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,a=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,c=void 0===s?r:s,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,a,s,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(a){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var a=document.head||document.getElementsByTagName("head")[0];return n?a.insertBefore(r,n):a.appendChild(r),r},t=e,(a=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,a),s&&n(t,s),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=a}).call(this,n("8oxB"))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);
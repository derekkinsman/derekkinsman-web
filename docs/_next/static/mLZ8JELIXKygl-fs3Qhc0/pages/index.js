(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,n=s("q1tI");var i=new(((r=s("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,s;function r(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=r).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,r.dynamic=function(e){return e.map(function(e){var t=e[0],s=e[1];return i.computeId(t,s)}).join(" ")};var n=r.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){i.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(n.Component);t.default=a},"8oxB":function(e,t){var s,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===i||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:i}catch(e){s=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,c=[],h=!1,u=-1;function m(){h&&l&&(h=!1,l.length?c=l.concat(c):u=-1,c.length&&d())}function d(){if(!h){var e=o(m);h=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];c.push(new p(e,t)),1!==c.length||h||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},MX0m:function(e,t,s){e.exports=s("3niX")},RNiq:function(e,t,s){"use strict";s.r(t);var r=s("MX0m"),n=s.n(r),i=s("q1tI"),a=s.n(i),o=s("8Kt/"),l=s.n(o),c=a.a.createElement,h=function(){return c("header",{className:"jsx-2833846446"},c("h1",{className:"jsx-2833846446 logo-a"},c("img",{src:"/logo-a.png",alt:"Desktop Logo.",className:"jsx-2833846446"})),c("h1",{className:"jsx-2833846446 logo-b"},c("img",{src:"/logo-b.png",alt:"Mobile Logo.",className:"jsx-2833846446"})),c(n.a,{id:"2833846446"},["html{font-size:21px;line-height:30px;}","body{margin:0;font-family:'Crimson Text',serif;}","@media screen and (max-width:650px){html{font-size:16px;line-height:21px;}}","a{font-style:italic;font-weight:600;-webkit-transition:color 0.5s ease;transition:color 0.5s ease;color:rgb(227,133,180);}","a:hover{color:rgb(104,204,242);}",".twitter-tweet{display:inline-block !important;}","header.jsx-2833846446{position:relative;height:100vh;color:#FFF;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url('/masthead.png');text-align:center;}","h1.jsx-2833846446{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}","img.jsx-2833846446{width:50vw;}",".logo-b.jsx-2833846446{display:none;}","@media screen and (max-width:650px){img.jsx-2833846446{width:75vw;}.logo-a.jsx-2833846446{display:none;}.logo-b.jsx-2833846446{display:block;}}"]))},u=a.a.createElement,m=function(){return u("section",{className:"jsx-3951310688"},u("p",{className:"jsx-3951310688"},"Derek J. Kinsman is a maker of things residing in ",u("a",{href:"https://goo.gl/maps/jELi5nooTP62",target:"_blank",className:"jsx-3951310688"},"Guelph, ON, Canada"),". Sometimes those things require code, sometimes power tools and hand tools, usually it's for other people, and often it's done with others. Derek specialises in radical generalism (thanks for the term ",u("a",{href:"https://twitter.com/ablerism",target:"_blank",className:"jsx-3951310688"},"Sara Hendren"),") and he's really good at breaking things for Science! While he deeply enjoys the proof of life stage of a project, he's just as comfortable doing research, fixing and logging bugs, writing documentation, making flowcharts, and writing code."),u("p",{className:"jsx-3951310688"},"Currently, Derek is looking for new remote opportunities working in digital product design in a technical capacity ",u("span",{className:"jsx-3951310688 italics"},"(partial remote located if in the KW\u2014Toronto corridor)"),". He most recently worked with the mighty fine folks at ",u("a",{href:"http://siberia.io/",target:"_blank",className:"jsx-3951310688"},"Siberia"),", and ",u("a",{href:"http://teehanlax.com/",target:"_blank",className:"jsx-3951310688"},"Teehan+Lax")," \u2014 on the ",u("a",{href:"https://vimeo.com/tllabs",target:"_blank",className:"jsx-3951310688"},"Labs")," team \u2014 prior to that."),u("p",{className:"jsx-3951310688"},"Most of the projects he has been involved with in recent years were completed under NDA and cannot be shown publicly. If you would like to learn more about Derek's involvement in these projects reach out using your preferred contact details below."),u("p",{className:"jsx-3951310688"},"Derek can also be found building ",u("span",{className:"jsx-3951310688 italics"},"&")," designing websites for his ",u("a",{href:"http://worldoftwilight.com",target:"_blank",className:"jsx-3951310688"},"friends"),", making weird AI-driven ",u("a",{href:"https://twitter.com/parchmentwitch",target:"_blank",className:"jsx-3951310688"},"Twitterbots"),", as well as designing analogue ",u("a",{href:"https://derekkinsman.itch.io",target:"_blank",className:"jsx-3951310688"},"games of r\xf4le\u2014play"),"."),u(n.a,{id:"3951310688"},["section.jsx-3951310688{text-align:justify;margin:84px auto 0;width:50vw;}",".italics.jsx-3951310688{font-style:italic;}","@media screen and (max-width:650px){section.jsx-3951310688{margin:63px auto;width:75vw;}}"]))},d=a.a.createElement,p=([{href:"https://github.com/derekkinsman",label:"Github"},{href:"https://www.producthunt.com/@derek_kinsman",label:"ProductHunt"},{href:"https://medium.com/@derekkinsman",label:"Medium"},{href:"http://www.meetup.com/members/104598882/",label:"Meetup"},{href:"https://derekkinsman.itch.io/",label:"Itch"},{href:"https://www.goodreads.com/user/show/5449872-derek-kinsman",label:"Goodreads"},{href:"http://twitter.com/derekkinsman",label:"Twitter"},{href:"https://www.facebook.com/derek.kinsman",label:"Facebook"},{href:"http://instagram.com/derekkinsman",label:"Instagram"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),function(){return d("section",{className:"jsx-3472338650"},d("h3",{className:"jsx-3472338650"},"Nice Things People On The Internet Have Said"),d("blockquote",{className:"jsx-3472338650 twitter-tweet"},d("p",{lang:"en",dir:"ltr",className:"jsx-3472338650"},"These guys do cool stuff. I want some of the things they build. Tho I suspect they're not for sale. ",d("a",{href:"http://t.co/v4PYUrbyWp",className:"jsx-3472338650"},"http://t.co/v4PYUrbyWp")),"\u2014 Adam Savage (@donttrythis) ",d("a",{href:"https://twitter.com/donttrythis/status/405174155760267265?ref_src=twsrc%5Etfw",className:"jsx-3472338650"},"November 26, 2013")),d("blockquote",{className:"jsx-3472338650 twitter-tweet"},d("p",{lang:"en",dir:"ltr",className:"jsx-3472338650"},"Did I tell y'all that I love this D.I.G.I.T display from ",d("a",{href:"https://twitter.com/tllabs?ref_src=twsrc%5Etfw",className:"jsx-3472338650"},"@tllabs")," ? ",d("a",{href:"http://t.co/2HC3MSe4K3",className:"jsx-3472338650"},"http://t.co/2HC3MSe4K3")," Now, are they phyxels or not?"),"\u2014 jared ficklin (@jaredrawk) ",d("a",{href:"https://twitter.com/jaredrawk/status/405744509465526272?ref_src=twsrc%5Etfw",className:"jsx-3472338650"},"November 27, 2013")),d("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8",className:"jsx-3472338650"}),d(n.a,{id:"3472338650"},["section.jsx-3472338650{text-align:center;margin:0 auto;width:50vw;}","@media screen and (max-width:650px){section.jsx-3472338650{width:75vw;}}","h3.jsx-3472338650{margin-bottom:0;}",".twitter-tweet.jsx-3472338650{display:inline-block !important;}"]))}),f=a.a.createElement,g=[{href:"https://www.linkedin.com/in/derekkinsman/",label:"LinkedIn"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),w=[{href:"mailto:derekkinsman@protonmail.com",label:"derekkinsman@protonmail.com"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),v=[{href:"tel:14163715652",label:"+1 (416) 371-5652"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),x=[{href:"https://github.com/derekkinsman",label:"Github"},{href:"https://www.producthunt.com/@derek_kinsman",label:"ProductHunt"},{href:"https://medium.com/@derekkinsman",label:"Medium"},{href:"http://www.meetup.com/members/104598882/",label:"Meetup"},{href:"https://derekkinsman.itch.io/",label:"Itch"},{href:"https://www.goodreads.com/user/show/5449872-derek-kinsman",label:"Goodreads"},{href:"http://twitter.com/derekkinsman",label:"Twitter"},{href:"https://www.facebook.com/derek.kinsman",label:"Facebook"},{href:"http://instagram.com/derekkinsman",label:"Instagram"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),y=function(){return f("section",{className:"jsx-711032293"},f("h3",{className:"jsx-711032293"},"Internet R\xe9sum\xe9"),f("h4",{className:"jsx-711032293"},f("span",{className:"jsx-711032293 italics"},"\u2014PDF available by request.")),f("ul",{className:"jsx-711032293"},g.map(function(e){var t=e.key,s=e.href,r=e.label;return f("li",{key:t,className:"jsx-711032293"},f("a",{href:s,className:"jsx-711032293"},r))})),f("h3",{className:"jsx-711032293"},"Contact"),f("h4",{className:"jsx-711032293"},"\u2014via Email:"),f("ul",{className:"jsx-711032293"},w.map(function(e){var t=e.key,s=e.href,r=e.label;return f("li",{key:t,className:"jsx-711032293"},f("a",{href:s,className:"jsx-711032293"},r))})),f("h4",{className:"jsx-711032293"},"\u2014via Telephony:"),f("ul",{className:"jsx-711032293"},v.map(function(e){var t=e.key,s=e.href,r=e.label;return f("li",{key:t,className:"jsx-711032293"},f("a",{href:s,className:"jsx-711032293"},r))})),f("h4",{className:"jsx-711032293"},"\u2014via the Internet:"),f("ul",{className:"jsx-711032293"},x.map(function(e){var t=e.key,s=e.href,r=e.label;return f("li",{key:t,className:"jsx-711032293"},f("a",{href:s,className:"jsx-711032293"},r))})),f(n.a,{id:"711032293"},["section.jsx-711032293{text-align:center;margin:0 auto;width:50vw;}","@media screen and (max-width:650px){section.jsx-711032293{width:75vw;}}","h3.jsx-711032293{margin:0;}","h3.jsx-711032293:last-of-type{margin-top:42px;}","h4.jsx-711032293{font-size:1rem;font-weight:400;margin:0;}",".italics.jsx-711032293{font-style:italic;}","ul.jsx-711032293{list-style-type:none;margin:0 auto 21px;padding:0;}"]))},_=a.a.createElement;t.default=function(){return _("div",{className:"jsx-976634604"},_(l.a,null,_("title",{className:"jsx-976634604"},"Derek Kinsman. Maker of things."),_("link",{rel:"icon",type:"image/png",href:"/favicon-16.png",sizes:"16x16",className:"jsx-976634604"}),_("link",{rel:"icon",type:"image/png",href:"/favicon-32.png",sizes:"32x32",className:"jsx-976634604"}),_("link",{rel:"icon",type:"image/png",href:"/favicon-96.png",sizes:"96x96",className:"jsx-976634604"}),_("link",{href:"https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i&display=swap",rel:"stylesheet",className:"jsx-976634604"}),_("meta",{property:"og:type",content:"profile",className:"jsx-976634604"}),_("meta",{property:"og:title",content:"Derek Kinsman",className:"jsx-976634604"}),_("meta",{property:"og:description",content:"Rude mechanical. Maker of things.",className:"jsx-976634604"}),_("meta",{property:"og:url",content:"https://derekkinsman.com/",className:"jsx-976634604"}),_("meta",{property:"og:image",content:"https://derekkinsman.com/meta-fb.png",className:"jsx-976634604"}),_("meta",{name:"twitter:card",content:"summary_large_image",className:"jsx-976634604"}),_("meta",{name:"twitter:title",content:"Derek Kinsman",className:"jsx-976634604"}),_("meta",{name:"twitter:description",content:"Rude mechanical. Maker of things.",className:"jsx-976634604"}),_("meta",{name:"twitter:image",content:"https://derekkinsman.com/meta-tw.png",className:"jsx-976634604"})),_(h,null),_(m,null),_("div",{className:"jsx-976634604 seperator"},"\xd7"),_(y,null),_("div",{className:"jsx-976634604 seperator"},"\xd7"),_(p,null),_("div",{className:"jsx-976634604 seperator"},"\xd7"),_("footer",{className:"jsx-976634604"},_("p",{className:"jsx-976634604"},"\xa9 2019 Derek Kinsman. Handmade with",_("span",{className:"jsx-976634604 emoji"},"\ud83d\udda4"),"on ",_("a",{href:"https://downiewenjack.ca/support-us/donate/",target:"_blank",className:"jsx-976634604"},"Treaty 3 Territory"),", Turtle Island."),_("img",{src:"black.svg",className:"jsx-976634604 logo"})),_(n.a,{id:"976634604"},[".seperator.jsx-976634604{margin:42px 0;text-align:center;}","footer.jsx-976634604{font-size:0.8rem;line-height:0.9rem;text-align:center;margin:0 auto;width:50vw;}",".emoji.jsx-976634604{margin-left:5px;margin-right:0px;vertical-align:middle;}",".logo.jsx-976634604{height:50px;margin:21px auto 42px;}","@media screen and (max-width:650px){footer.jsx-976634604{width:75vw;}.logo.jsx-976634604{height:50px;}}"]))}},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var r=i(s("9kyW")),n=i(s("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,i=t.optimizeForSpeed,a=void 0!==i&&i,o=t.isBrowser,l=void 0===o?"undefined"!==typeof window:o;this._sheet=r||new n.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var s=this.getIdAndRules(e),r=s.styleId,n=s.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=n.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return s[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var n=String(s),i=t+n;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+n)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var n=s+r;return t[n]||(t[n]=r.replace(e,s)),t[n]}},t.getIdAndRules=function(e){var t=this,s=e.children,r=e.dynamic,n=e.id;if(r){var i=this.computeId(n,r);return{styleId:i,rules:Array.isArray(s)?s.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,s)]}}return{styleId:this.computeId(n),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}();t.default=a},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,o=t.optimizeForSpeed,l=void 0===o?r:o,c=t.isBrowser,h=void 0===c?"undefined"!==typeof window:c;a(n(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=h,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,i,o,l=e.prototype;return l.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(a(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(o){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];a(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,s){t&&a(n(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return s?i.insertBefore(r,s):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,i),o&&s(t,o),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,s("8oxB"))},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,1]]]);
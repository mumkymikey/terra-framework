/*! For license information please see 90321-aeefc0378b8b16bde564.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90321],{8787:function(e,t,r){"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(10434)),u=n(r(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(67294)),l=n(r(45697)),f=n(r(44887)),c=n(r(77947));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var p={value:l.default.string,initialTimeZone:l.default.string},d=function(e){var t=e.value,r=c.default.createSafeDate(t,e.initialTimeZone);r&&r.isValid()&&(t=r.format());var n=(0,o.useState)(t),a=(0,u.default)(n,2),l=a[0],s=a[1];return o.default.createElement("div",null,o.default.createElement("p",null,"Selected ISO Date Time:",o.default.createElement("span",{"data-date-time-value":!0},l)),o.default.createElement(f.default,(0,i.default)({name:"date-time-picker-example",onChange:function(e,t){s(t)},initialTimeZone:e.initialTimeZone},e)))};d.propTypes=p,d.defaultProps={value:""};var v=d;t.default=v},13864:function(e,t,r){"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(67294)),o=n(r(77947)),l=n(r(8787));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var c=function(){return(0,u.useEffect)((function(){return window.ontouchstart||(i=!0,window.ontouchstart="true"),function(){i&&delete window.ontouchstart}})),u.default.createElement(u.default.Fragment,null,u.default.createElement("h3",{id:"titleWithDateTimeValue"},"Disabled Date-Time-Picker"),u.default.createElement(l.default,{id:"disabledDatetimeValueProvided",disabled:!0,value:"2019-04-10T15:23:00-05:00",timeVariant:o.default.FORMAT_12_HOUR}))};t.default=c},45374:function(e,t,r){"use strict";r.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___Mk9By"}},63476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(29995)),i=l(r(96542)),u=l(r(45374)),o=["refCallback","text"];function l(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.default.bind(u.default),p={refCallback:a.default.func,text:a.default.string},d={text:void 0,refCallback:void 0},v=function(e){var t=e.refCallback,r=e.text,a=c(e,o),i=s(["visually-hidden-text",a.className]);return n.default.createElement("span",f({ref:t},a,{className:i}),r)};v.propTypes=p,v.defaultProps=d;var y=v;t.default=y},96542:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(this&&this[u]||u)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},37890:function(e,t,r){"use strict";var n=r(19140);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,u){if(u!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},29995:function(e,t,r){e.exports=r(37890)()},19140:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[57287],{51536:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(67294)),l=r(39711),i=n(r(2396)),u=n(r(94809)),o=n(r(50826)),f=n(r(2406)),c=function(){return a.default.createElement(l.MemoryRouter,null,a.default.createElement(f.default,{id:"test-header",layoutConfig:{size:"large"},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1",icon:a.default.createElement(i.default,null)},{id:"234",path:"/something2",text:"item 2",icon:a.default.createElement(u.default,null)},{id:"345",path:"/something3",text:"item 3",icon:a.default.createElement(o.default,null)}]}}))};t.default=c},66633:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AlignmentTypes=t.default=void 0;var n=o(r(67294)),a=o(r(45697)),l=o(r(47166)),i=o(r(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function o(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=l.default.bind(i.default),b={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},v=function(e){var t=e.fitStart,r=e.fill,a=e.fitEnd,l=e.align,i=e.alignFitStart,o=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,b=e.fillAttributes,v=e.fitEndAttributes,g=m(e,u),_=d({},s),O=d({},b),h=d({},v);return n.default.createElement("div",f({},g,{className:p("arrange",g.className)}),n.default.createElement("div",f({},_,{className:p("fit",l||i,_.className)}),t),n.default.createElement("div",f({},O,{className:p("fill",l||o,O.className)}),r),n.default.createElement("div",f({},h,{className:p("fit",l||c,h.className)}),a))};v.propTypes=b;var g=v;t.default=g},91021:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u=function(e){var t=i({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M24 37.7L0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};u.displayName="IconChevronDown",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=u;t.default=o},94809:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u=function(e){var t=i({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};u.displayName="IconFolder",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var o=u;t.default=o},2396:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u=function(e){var t=i({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};u.displayName="IconTrash",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var o=u;t.default=o}}]);
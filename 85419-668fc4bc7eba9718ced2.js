(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[85419],{248:function(e,t,n){"use strict";var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=n(39711),u=o(n(80303)),i={header:{"/":{path:"/",component:{default:{componentClass:function(){return r.default.createElement("div",{className:"test-header"},"Header")}}}}},menu:{"/":{path:"/",component:{default:{componentClass:function(){return r.default.createElement("div",{className:"test-menu"},"Menu")}}}}},content:{"/":{path:"/",component:{default:{componentClass:function(){return r.default.createElement("div",{className:"test-content"},"Content")}}}}}},c=function(){return r.default.createElement(a.MemoryRouter,{initialEntries:["/"],initialIndex:0},r.default.createElement(u.default,{config:i,menuText:"Menu",id:"test-root"}))};t.default=c},37714:function(e,t,n){"use strict";var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.supportedComponentBreakpoints=t.routePropType=t.routeConfigPropType=t.processedRoutesPropType=t.navigationLayoutConfigPropType=t.componentConfigPropType=void 0;var r=o(n(18698)),a=o(n(45697)),u=["tiny","small","medium","large","huge"];t.supportedComponentBreakpoints=u;var i=a.default.objectOf((function(e,t,n,o,a){if(!("default"===t||u.indexOf(t)>=0))return new Error("Invalid prop '".concat(a,"' supplied to '").concat(n,"'. Validation failed."));var i=e[t],c=!0;return null!==i&&("object"!==(0,r.default)(i)||!i.componentClass||"object"!==(0,r.default)(i.props)&&null!==i.props&&void 0!==i.props)&&(c=!1),!!c||new Error("Invalid prop '".concat(a,"' supplied to '").concat(n,"'. Validation failed."))}));t.componentConfigPropType=i;var c=a.default.shape({path:function(e,t,n){return!!/\/.*/.test(e[t])||new Error("Invalid prop `".concat(t,"` supplied to")+" `".concat(n,"`. Validation failed. ").concat(t," must start with a forward slash (/)."))},component:i.isRequired});t.routePropType=c;var l=a.default.objectOf(c);t.routeConfigPropType=l;var d=a.default.shape({header:l,menu:l,content:l});t.navigationLayoutConfigPropType=d;var p=a.default.arrayOf(a.default.shape({path:a.default.string,componentClass:a.default.func,componentProps:a.default.object}));t.processedRoutesPropType=p},34760:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function r(e,t){t=t||{};var r,u,i,d=[],p=[],f=e.querySelectorAll(n);for(t.includeContainer&&o.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),r=0;r<f.length;r++)a(u=f[r])&&(0===(i=c(u))?d.push(u):p.push({documentOrder:r,tabIndex:i,node:u}));return p.sort(l).map((function(e){return e.node})).concat(d)}function a(e){return!(!u(e)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||c(e)<0)}function u(e){return!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}r.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,n)&&a(e)},r.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,i)&&u(e)};var i=t.concat("iframe").join(",");function c(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function l(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function d(e){return"INPUT"===e.tagName}e.exports=r}}]);
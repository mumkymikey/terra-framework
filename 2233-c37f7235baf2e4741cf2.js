"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[2233],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var d=r?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(a,i,d):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),d=a(n(45697)),o=a(n(47166)),m=n(21538),s=a(n(33864)),p=a(n(23399)),c=n(51051),u=a(n(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}var f=o.default.bind(u.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,d=e.description,o=e.isExpanded,u=(0,i.useState)(o),x=(0,r.default)(u,2),y=x[0],v=x[1],N=(0,i.useState)(!1),T=(0,r.default)(N,2),E=T[0],b=T[1],C=i.default.useContext(m.ThemeContext),_=void 0!==a,w=function(){b(!E),y&&v(!y)},L=function(){v(!y),E&&b(!E)},D=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:f("template",C.className)},i.default.createElement("div",{className:f("header")},l&&i.default.createElement("h2",{className:f("title")},l)),i.default.createElement("div",{className:f("content")},d&&i.default.createElement("div",{className:f("description")},d),t),i.default.createElement("div",{className:f("footer")},n?i.default.createElement("div",{className:f("button-container")},_&&i.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:f("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(p.default,{className:f("chevron")})),i.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:L,onKeyDown:function(e){return D(e,L)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:f("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(p.default,{className:f("chevron")}))):null,i.default.createElement("div",null,E&&i.default.createElement("div",{className:f("css")},a),y&&i.default.createElement("div",{className:f("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var N=v;t.Z=N},82739:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(87462),l=n(44925),r=n(67294),i=n(81254),d=n(55838),o=n(75983),m=n(78530),s=["components"],p={};function c(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(m.ZP,{mdxType:"PropsTable"},(0,i.mdx)(m.X2,{key:"ROW1",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"String that labels the list for screen readers."))),(0,i.mdx)(m.X2,{key:"ROW2",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"children"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The child list items, of type InfiniteList Item, to be placed within the infinite list.\nFor further documentation of InfiniteList Item see terra-list's ListItem."))),(0,i.mdx)(m.X2,{key:"ROW3",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"dividerStyle"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'standard'\n  'bottom-only'\n],\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Whether or not the list's child items should have a border color applied.\nOne of ",(0,i.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"'bottom-only'"),"."))),(0,i.mdx)(m.X2,{key:"ROW4",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"initialLoadingIndicator"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"An indicator to be displayed when no children are yet present."))),(0,i.mdx)(m.X2,{key:"ROW5",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"isFinishedLoading"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Determines whether or not the loading indicator is visible and if callbacks are triggered."))),(0,i.mdx)(m.X2,{key:"ROW6",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"onRequestItems"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Callback trigger when new list items are requested."))),(0,i.mdx)(m.X2,{key:"ROW7",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"paddingStyle"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'standard'\n  'compact'\n],\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The padding styling to apply to the child list item content.\nOne of ",(0,i.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"'compact'"),"."))),(0,i.mdx)(m.X2,{key:"ROW8",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"progressiveLoadingIndicator"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"An indicator to be displayed at the end of the current loaded children."))),(0,i.mdx)(m.X2,{key:"ROW9",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"progressiveLoadingMessage"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"A message to be provided to screen readers as new items are progressively loaded in"))),(0,i.mdx)(m.X2,{key:"ROW10",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"role"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'."))),(0,i.mdx)(m.X2,{key:"ROW11",mdxType:"Row"},(0,i.mdx)(m.O,{mdxType:"PropNameCell"},"refCallback"),(0,i.mdx)(m.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,i.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Function callback for the ref of the List(ul).")))))}c.isMDXComponent=!0;var u=n(15404),x=["components"],f={};function y(e){var t=e.components,n=(0,l.Z)(e,x);return(0,i.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteList from 'terra-infinite-list';\n\nimport MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\n\nconst InitialLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      ariaLabel=\"Initial Loading\"\n      initialLoadingIndicator={<MyInitialLoadingIndicator />}\n    />\n  </MyExampleContainer>\n);\n\nexport default InitialLoadingExample;\n\n")))}y.isMDXComponent=!0;var g=n(49271),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(g.Z,{title:t||"Initial Loading Example",description:n,example:r.createElement(u.Z,null),exampleSrc:r.createElement(y,null),isExpanded:a})},v=n(98446),N=["components"],T={};function E(e){var t=e.components,n=(0,l.Z)(e,N);return(0,i.mdx)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteList, { Item } from 'terra-infinite-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\n\nimport MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressiveLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      ariaLabel=\"Progressive Loading\"\n      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}\n    >\n      <Item key=\"item-1\">\n        <Placeholder title=\"Item 1\" className={cx('placeholder')} />\n      </Item>\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default ProgressiveLoadingExample;\n\n")))}E.isMDXComponent=!0;var b=["components"],C={};function _(e){var t=e.components,n=(0,l.Z)(e,b);return(0,i.mdx)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .placeholder {\n    height: 50px;\n  }\n\n  .item-content {\n    height: 50px;\n    width: 100%;\n  }\n\n  .main-content {\n    border: 1px solid #000;\n    height: 300px;\n    position: relative;\n    width: 100%;\n  }\n}\n\n")))}_.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(g.Z,{title:t||"Progressive Loading Example",description:n,example:r.createElement(v.Z,null),exampleCssSrc:r.createElement(_,null),exampleSrc:r.createElement(E,null),isExpanded:a})},L=n(60777),D=["components"],I={};function k(e){var t=e.components,n=(0,l.Z)(e,D);return(0,i.mdx)("wrapper",(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteList, { Item } from 'terra-infinite-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\n\nimport mockData from './mock-data/virtualizedData';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createItems = data => data.map(item => createListItem(item));\n\nconst VirtualizedExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      isFinishedLoading\n      ariaLabel=\"Virtualized\"\n    >\n      {createItems(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default VirtualizedExample;\n\n")))}k.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(g.Z,{title:t||"Virtualized Example",description:n,example:r.createElement(L.Z,null),exampleCssSrc:r.createElement(_,null),exampleSrc:r.createElement(k,null),isExpanded:a})},P=["components"],M={};function R(e){var t=e.components,n=(0,l.Z)(e,P);return(0,i.mdx)("wrapper",(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(d.C,{mdxType:"Badge"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,i.mdx)("h1",{id:"terra-infinite-list"},"Terra Infinite List"),(0,i.mdx)(o.Notice,{variant:"deprecation",mdxType:"Notice"},(0,i.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,i.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,i.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,i.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,i.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,i.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,i.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,i.mdx)("p",null,"The infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.\nInfiniteList is a controlled HOC built upon the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-list")," component in order to allow for list style and selection patterns."),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install with ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-infinite-list"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,i.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,i.mdx)("h2",{id:"component-features"},"Component Features"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,i.mdx)("h2",{id:"list-item-selection"},"List Item Selection"),(0,i.mdx)("p",null,"Management of list selection is provided by the HOC implementing the InfiniteList. For an example of list item selection you can refer to List's documentation:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/single-select-list"},"Single Select List")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/multi-select-list"},"Multi Select List"))),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(h,{title:"Example Initial Loading Indicator",mdxType:"InitialLoadingExample"}),(0,i.mdx)(w,{title:"Example Progressive Loading Indicator",mdxType:"ProgressiveLoadingExample"}),(0,i.mdx)(O,{title:"Example Virtualized List",mdxType:"VirtualizedExample"}),(0,i.mdx)("h2",{id:"infinite-list-props-table"},"Infinite List Props Table"),(0,i.mdx)(c,{mdxType:"InfiniteListSrc"}))}R.isMDXComponent=!0},55838:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.41.1",url:t})}},15404:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45186)),i=a(n(45664)),d=a(n(66635)),o=function(){return l.default.createElement(d.default,null,l.default.createElement(r.default,{dividerStyle:"standard",ariaLabel:"Initial Loading",initialLoadingIndicator:l.default.createElement(i.default,null)}))};t.Z=o},98446:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(67294)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var d=r?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(a,i,d):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(45186)),d=n(75983),o=a(n(47166)),m=a(n(30111)),s=a(n(66635)),p=a(n(63190));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=o.default.bind(p.default),x=function(){return r.default.createElement(s.default,null,r.default.createElement(i.default,{dividerStyle:"standard",ariaLabel:"Progressive Loading",progressiveLoadingIndicator:r.default.createElement(m.default,null)},r.default.createElement(i.Item,{key:"item-1"},r.default.createElement(d.Placeholder,{title:"Item 1",className:u("placeholder")}))))};t.Z=x},60777:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(67294)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var d=r?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(a,i,d):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(45186)),d=n(75983),o=a(n(47166)),m=a(n(60495)),s=a(n(66635)),p=a(n(63190));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=o.default.bind(p.default),x=function(e){return e.map((function(e){return t=e,r.default.createElement(i.Item,{key:t.key},r.default.createElement(d.Placeholder,{title:t.title,className:u("placeholder")}));var t}))},f=function(){return r.default.createElement(s.default,null,r.default.createElement(i.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Virtualized"},x(m.default)))};t.Z=f},60495:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var e=[],t=0;t<100;t+=1)e.push({title:"Item ".concat(t),key:"unique-".concat(t)});return e}();t.default=n},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var d=function(e){var t=i({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=d;t.default=o}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{211:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),b=r,u=m["".concat(c,".").concat(b)]||m[b]||d[b]||a;return n?o.a.createElement(u,i(i({ref:t},p),{},{components:n})):o.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(211));const a={title:"Element Properties"},c={unversionedId:"frontend-quick-learning/javascript-guide/element-properties",id:"frontend-quick-learning/javascript-guide/element-properties",isDocsHomePage:!1,title:"Element Properties",description:"Goal",source:"@site/docs/frontend-quick-learning/javascript-guide/element-properties.md",permalink:"/docs/frontend-quick-learning/javascript-guide/element-properties",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/javascript-guide/element-properties.md",sidebar:"frontendQuickLearning",previous:{title:"Element Events",permalink:"/docs/frontend-quick-learning/javascript-guide/element-events"},next:{title:"Various writing ways of JavaScript",permalink:"/docs/frontend-quick-learning/javascript-guide/various-writing-ways"}},i=[{value:"Goal",id:"goal",children:[]},{value:"Element <code>Properties</code>",id:"element-properties",children:[]},{value:"Check properties in console",id:"check-properties-in-console",children:[]},{value:"Change properties",id:"change-properties",children:[]},{value:"Summery",id:"summery",children:[]}],l={rightToc:i};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u26a1 Understand ",Object(o.b)("strong",{parentName:"li"},"(3)")," of the below code")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="js-test1.html"',title:'"js-test1.html"'}),'<script>\n  let demoElement = document.getElementById("demo");       --- (1)\n  \n  demoElement.onclick = function changeContent () {        --- (2)\n    // highlight-start\n    demoElement.innerHTML = "Help me";                     --- (3)\n    demoElement.style = "color: red";                      --- (3)\n    // highlight-end\n  }\n<\/script>\n')),Object(o.b)("h2",{id:"element-properties"},"Element ",Object(o.b)("inlineCode",{parentName:"h2"},"Properties")),Object(o.b)("p",null,"To understand  ",Object(o.b)("strong",{parentName:"p"},"(3)")," we focus on ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Element Properties"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-24-19-40-15.png",alt:null}))),Object(o.b)("p",null,"As described here, HTML element has a lot of properties."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-20-28-59.png",alt:"html-element-properties"}))),Object(o.b)("p",null,"Ref: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"}),"https://developer.mozilla.org/en-US/docs/Web/API/Element")),Object(o.b)("p",null,"You see ",Object(o.b)("inlineCode",{parentName:"p"},"innerHTML")," property."),Object(o.b)("p",null,"And ",Object(o.b)("inlineCode",{parentName:"p"},"style")," property is not documented here. It is documented here\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style"}),"https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style")),Object(o.b)("h2",{id:"check-properties-in-console"},"Check properties in console"),Object(o.b)("p",null,"So, first let's check current ",Object(o.b)("inlineCode",{parentName:"p"},"<div#demo>")," properties."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_232636.gif",alt:"check-property"}))),Object(o.b)("h2",{id:"change-properties"},"Change properties"),Object(o.b)("p",null,"You can ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("mark",null,"change these properties by assigning new values")),"."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_232934.gif",alt:"change-property"}))),Object(o.b)("p",null,"And we're doing the same thing inside function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  let demoElement = document.getElementById("demo");       --- (1)\n  \n  demoElement.onclick = function changeContent () {        --- (2)\n    // highlight-start\n    demoElement.innerHTML = "Help me";                     --- (3)\n    demoElement.style = "color: red";                      --- (3)\n    // highlight-end\n  }\n<\/script>\n')),Object(o.b)("h2",{id:"summery"},"Summery"),Object(o.b)("p",null,"I hope you understand this code! \ud83d\ude4b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  let demoElement = document.getElementById("demo");       --- (1)\n  \n  demoElement.onclick = function changeContent () {        --- (2)\n    demoElement.innerHTML = "Help me";                     --- (3)\n    demoElement.style = "color: red";                      --- (3)\n  }\n<\/script>\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you understand ",Object(o.b)("strong",{parentName:"p"},"the flow of this code"),", it is enough! \ud83d\udcaf"),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"70% understanding is enough"),"! Let's go next!  \ud83d\udc4d"))))}p.isMDXComponent=!0}}]);
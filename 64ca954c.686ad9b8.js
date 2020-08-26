(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(2),c=(n(0),n(211));const r={title:"DOM - Document Object Model"},o={unversionedId:"frontend-quick-learning/javascript-guide/dom-document",id:"frontend-quick-learning/javascript-guide/dom-document",isDocsHomePage:!1,title:"DOM - Document Object Model",description:"Goal",source:"@site/docs/frontend-quick-learning/javascript-guide/dom-document.md",permalink:"/docs/frontend-quick-learning/javascript-guide/dom-document",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/javascript-guide/dom-document.md",sidebar:"frontendQuickLearning",previous:{title:"Where to write javascript",permalink:"/docs/frontend-quick-learning/javascript-guide/where-to-write-script"},next:{title:"Element Events",permalink:"/docs/frontend-quick-learning/javascript-guide/element-events"}},i=[{value:"Goal",id:"goal",children:[]},{value:"What is <code>let</code> ?",id:"what-is-let-",children:[]},{value:"What is <code>document</code> ?",id:"what-is-document-",children:[{value:"What is DOM ?",id:"what-is-dom-",children:[]},{value:"Why making DOM ?",id:"why-making-dom-",children:[]}]},{value:"Check <code>document</code>",id:"check-document",children:[]},{value:"<code>getElementById()</code> method",id:"getelementbyid-method",children:[{value:"Image of <code>getElementById()</code>",id:"image-of-getelementbyid",children:[]},{value:"Check returned Element",id:"check-returned-element",children:[]}]},{value:"Summery",id:"summery",children:[]}],l={rightToc:i};function m({components:e,...t}){return Object(c.a)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"goal"},"Goal"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"\u26a1 Understand ",Object(c.a)("strong",{parentName:"li"},"(1)")," of the below code")),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="js-test1.html"',title:'"js-test1.html"'}),'<script>\n    // highlight-next-line\n  let demoElement = document.getElementById("demo");       --- (1)\n\n  demoElement.onclick = function changeContent () {        --- (2)\n    demoElement.innerHTML = "Help me";                     --- (3)\n    demoElement.style = "color: red";                      --- (3)\n  }\n<\/script>\n')),Object(c.a)("h2",{id:"what-is-let-"},"What is ",Object(c.a)("inlineCode",{parentName:"h2"},"let")," ?"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},Object(c.a)("mark",null,Object(c.a)("inlineCode",{parentName:"strong"},"let")," is used to declare variable."))),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let x = 1;\n")),Object(c.a)("p",null,"Ref: ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"}),"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let")),Object(c.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"There is also ",Object(c.a)("inlineCode",{parentName:"p"},"var")," to declare variable. But currently it is enough to use ",Object(c.a)("inlineCode",{parentName:"p"},"let"),"."))),Object(c.a)("h2",{id:"what-is-document-"},"What is ",Object(c.a)("inlineCode",{parentName:"h2"},"document")," ?"),Object(c.a)("p",null,"To understand ",Object(c.a)("inlineCode",{parentName:"p"},"document"),", we need to understand ",Object(c.a)("strong",{parentName:"p"},"DOM - Document Object Model")),Object(c.a)("h3",{id:"what-is-dom-"},"What is DOM ?"),Object(c.a)("p",null,"When browser receives HTML file, the browser turns HTML file into a ",Object(c.a)("strong",{parentName:"p"},"Document Object Model (DOM) Tree")," under browser's ",Object(c.a)("strong",{parentName:"p"},"window")," object."),Object(c.a)("p",null,Object(c.a)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-01-53-13.png",alt:"browser-html-to-DOM"})),"\nref: ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part3"}),"https://developers.google.com/web/updates/2018/09/inside-browser-part3")),Object(c.a)("h3",{id:"why-making-dom-"},"Why making DOM ?"),Object(c.a)("p",null,"By making DOM tree, ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("mark",null,"it becomes easier to handle by javascript."))),Object(c.a)("h2",{id:"check-document"},"Check ",Object(c.a)("inlineCode",{parentName:"h2"},"document")),Object(c.a)("p",null,"Let's check ",Object(c.a)("inlineCode",{parentName:"p"},"document")," in chrome console."),Object(c.a)("p",null,"In ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"console"))," tab, you can write ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"javascript")," code"),"."),Object(c.a)("p",null,"And you can easily access ",Object(c.a)("inlineCode",{parentName:"p"},"document")," thanks to ",Object(c.a)("strong",{parentName:"p"},"DOM tree"),"."),Object(c.a)("p",null,Object(c.a)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200501_053737.gif",alt:"check-document"}))),Object(c.a)("p",null,"By typing ",Object(c.a)("inlineCode",{parentName:"p"},"document")," in console, you can obtain tree under ",Object(c.a)("inlineCode",{parentName:"p"},"document"),"."),Object(c.a)("h2",{id:"getelementbyid-method"},Object(c.a)("inlineCode",{parentName:"h2"},"getElementById()")," method"),Object(c.a)("p",null,"As described in the below link ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"document"))," has various ",Object(c.a)("strong",{parentName:"p"},'"methods"'),"."),Object(c.a)("p",null,Object(c.a)("img",Object(a.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200523_171309.gif",alt:null}))),Object(c.a)("p",null,Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document"}),"https://developer.mozilla.org/en-US/docs/Web/API/Document")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"getElementById()"))," is one of these ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"document")),"'s method."),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"The Document method ",Object(c.a)("mark",null,Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"getElementById()")," returns an ",Object(c.a)("inlineCode",{parentName:"strong"},"Element")," object"))," representing the element ",Object(c.a)("strong",{parentName:"p"},"whose id property matches the specified string"),". ")),Object(c.a)("p",null,Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"}),"https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById")),Object(c.a)("h3",{id:"image-of-getelementbyid"},"Image of ",Object(c.a)("inlineCode",{parentName:"h3"},"getElementById()")),Object(c.a)("p",null,"This is the image of getting element by using ",Object(c.a)("inlineCode",{parentName:"p"},"getElementById()"),"."),Object(c.a)("p",null,Object(c.a)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-02-39-08.png",alt:"dom-getElementById"}))),Object(c.a)("h3",{id:"check-returned-element"},"Check returned Element"),Object(c.a)("p",null,Object(c.a)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200501_054401.gif",alt:"check-returned-element"}))),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'document.getElementById("demo");\n')),Object(c.a)("p",null,"returns the below part of ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"strong"},"Element")," object"),"."),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div id="demo">Click here</div>\n')),Object(c.a)("h2",{id:"summery"},"Summery"),Object(c.a)("p",null,"I hope you understand ",Object(c.a)("strong",{parentName:"p"},"(1)")),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="js-test1.html"',title:'"js-test1.html"'}),'<script>\n  // highlight-next-line\n  let demoElement = document.getElementById("demo");       --- (1)\n\n  demoElement.onclick = function changeContent () {        --- (2)\n    demoElement.innerHTML = "Help me";                     --- (3)\n    demoElement.style = "color: red";\n  }\n<\/script>\n')),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Recap the meaning of this code")),Object(c.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("ol",{parentName:"div"},Object(c.a)("li",{parentName:"ol"},"Declare ",Object(c.a)("inlineCode",{parentName:"li"},"demoElement")," variable using ",Object(c.a)("inlineCode",{parentName:"li"},"let")),Object(c.a)("li",{parentName:"ol"},"Assign ",Object(c.a)("strong",{parentName:"li"},Object(c.a)("inlineCode",{parentName:"strong"},"Element")," object")," which is returned by ",Object(c.a)("inlineCode",{parentName:"li"},'document.getElementById("demo")')," to it.")))))}m.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var m=c.a.createContext({}),d=function(e){var t=c.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,u=p["".concat(o,".").concat(b)]||p[b]||s[b]||r;return n?c.a.createElement(u,i(i({ref:t},m),{},{components:n})):c.a.createElement(u,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
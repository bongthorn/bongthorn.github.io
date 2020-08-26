(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{184:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return n})),o.d(e,"metadata",(function(){return c})),o.d(e,"rightToc",(function(){return s})),o.d(e,"default",(function(){return p}));var r=o(2),a=(o(0),o(211));const n={title:"Introduction to Bootstrap"},c={unversionedId:"frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro",id:"frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro",isDocsHomePage:!1,title:"Introduction to Bootstrap",description:"Goal",source:"@site/docs/frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro.md",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro.md",sidebar:"frontendQuickLearning",previous:{title:"Complex CSS",permalink:"/docs/frontend-quick-learning/css-guide/complex-css"},next:{title:"Play with Bootstrap CSS",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/play-with-bootstrap"}},s=[{value:"Goal",id:"goal",children:[]},{value:"What is Bootstrap ?",id:"what-is-bootstrap-",children:[]},{value:"Check official website",id:"check-official-website",children:[]},{value:"Check Bootstrap CSS file",id:"check-bootstrap-css-file",children:[]}],i={rightToc:s};function p({components:t,...e}){return Object(a.b)("wrapper",Object(r.a)({},i,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"goal"},"Goal"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u26a1 Understand what is ",Object(a.b)("strong",{parentName:"li"},"Bootstrap"))),Object(a.b)("h2",{id:"what-is-bootstrap-"},"What is Bootstrap ?"),Object(a.b)("p",null,"From wikipedia..."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Bootstrap is a free and open-source ",Object(a.b)("mark",null,Object(a.b)("strong",{parentName:"p"},"CSS framework"))," directed at responsive, mobile-first front-end web development. ",Object(a.b)("mark",null,Object(a.b)("strong",{parentName:"p"},"It contains CSS- and (optionally) JavaScript-based")," design templates")," for typography, forms, buttons, navigation and other interface ",Object(a.b)("strong",{parentName:"p"},"components"),".")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"}),"https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)")),Object(a.b)("p",null,"So, Bootstrap is a ",Object(a.b)("strong",{parentName:"p"},"CSS framework")," which contains CSS and Javascript."),Object(a.b)("p",null,"In this section, we are going to ",Object(a.b)("strong",{parentName:"p"},"focus on CSS part")," of Bootstrap."),Object(a.b)("h2",{id:"check-official-website"},"Check official website"),Object(a.b)("p",null,"Visit: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://getbootstrap.com/"}),"https://getbootstrap.com/")),Object(a.b)("p",null,"You see you need to add ",Object(a.b)("strong",{parentName:"p"},"CSS and Javascript"),"."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-get-started.gif",alt:"bootstrap-get-started"}))),Object(a.b)("h2",{id:"check-bootstrap-css-file"},"Check Bootstrap CSS file"),Object(a.b)("p",null,"In Bootstrap page, it is written that you need to import below CSS file. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">\n')),Object(a.b)("p",null,"Let's check this file."),Object(a.b)("p",null,"Open: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"}),"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-19-16-31-17.png",alt:"bootstrap-css-file"}))),Object(a.b)("p",null,"It is difficult to read this file because this file is ",Object(a.b)("strong",{parentName:"p"},"compressed")," ."),Object(a.b)("p",null,"So, use chrome extension to ",Object(a.b)("strong",{parentName:"p"},"decompress")," this file for easy reading.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/javascript-and-css-code-b/iiglodndmmefofehaibmaignglbpdald?hl=en"}),"https://chrome.google.com/webstore/detail/javascript-and-css-code-b/iiglodndmmefofehaibmaignglbpdald?hl=en")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-19-16-32-19.png",alt:"beautified-bootstrap-ss"}))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important \ud83d\udd25")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("strong",{parentName:"p"},"Bootstrap CSS is a ",Object(a.b)("mark",null,"huge external CSS file"),".")))),Object(a.b)("p",null,"Remember ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../css-guide/3-writing-ways-of-css#3-external-css-file"}),"the step in CSS section"),"."),Object(a.b)("p",null,"From the next step, let's play with this bootstrap CSS!"))}p.isMDXComponent=!0},211:function(t,e,o){"use strict";o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return m}));var r=o(0),a=o.n(r);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var p=a.a.createContext({}),b=function(t){var e=a.a.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},l=function(t){var e=b(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=a.a.forwardRef((function(t,e){var o=t.components,r=t.mdxType,n=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=b(o),u=r,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||n;return o?a.a.createElement(m,s(s({ref:e},p),{},{components:o})):a.a.createElement(m,s({ref:e},p))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=o.length,c=new Array(n);c[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var p=2;p<n;p++)c[p]=o[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);
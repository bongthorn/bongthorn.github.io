(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(211)),o={title:"Complex CSS"},l={unversionedId:"frontend-quick-learning/css-guide/complex-css",id:"frontend-quick-learning/css-guide/complex-css",isDocsHomePage:!1,title:"Complex CSS",description:"Goal",source:"@site/docs/frontend-quick-learning/css-guide/complex-css.md",permalink:"/docs/frontend-quick-learning/css-guide/complex-css",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/css-guide/complex-css.md",sidebar:"frontendQuickLearning",previous:{title:"Flexbox Usecase - Navbar",permalink:"/docs/frontend-quick-learning/css-guide/flexbox-usecase-navbar"},next:{title:"Introduction to Bootstrap",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Website to make",id:"website-to-make",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"Final code",id:"final-code",children:[]},{value:"What is a pain point ?",id:"what-is-a-pain-point-",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"goal"},"Goal"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"\u26a1 Copy the code of a part of real website for recapping what we've learned in CSS section."),Object(i.a)("li",{parentName:"ul"},"\ud83d\udd25 To know the pain point which is solved by using Bootstrap")),Object(i.a)("h2",{id:"website-to-make"},"Website to make"),Object(i.a)("p",null,Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://complex-css.now.sh/"}),"https://complex-css.now.sh/")),Object(i.a)("h4",{id:"desktop"},"Desktop"),Object(i.a)("p",null,Object(i.a)("img",Object(a.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-16-15-30-25.png",alt:null}))),Object(i.a)("h4",{id:"mobile"},"Mobile"),Object(i.a)("p",null,Object(i.a)("img",Object(a.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-16-15-30-48.png",alt:null}))),Object(i.a)("h2",{id:"preparation"},"Preparation"),Object(i.a)("p",null,"Okay let's start!"),Object(i.a)("p",null,"Make ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("inlineCode",{parentName:"strong"},"complex-css-example.html"))," and ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("inlineCode",{parentName:"strong"},"complex-css-example.css"))," in ",Object(i.a)("inlineCode",{parentName:"p"},"css-test")," folder."),Object(i.a)("h2",{id:"final-code"},"Final code"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="complex-css-example.html"',title:'"complex-css-example.html"'}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n\n    \x3c!-- highlight-start --\x3e\n    <link rel="stylesheet" href="complex-css-example.css" />\n    \x3c!-- highlight-end --\x3e\n  </head>\n  <body>\n    \x3c!-- highlight-start --\x3e\n    <nav class="navbar">\n      <a href="#" class="logo">Logo</a>\n      <ul class="navbar-list">\n        <li class="navbar-list-item">\n          <a class="navbar-list-item-link" href="#">Features</a>\n        </li>\n        <li class="navbar-list-item">\n          <a class="navbar-list-item-link" href="#">Pricing</a>\n        </li>\n        <li class="navbar-list-item">\n          <a class="navbar-list-item-link" href="#">About</a>\n        </li>\n        <li class="navbar-list-item">\n          <a class="navbar-list-item-link" href="#">Team</a>\n        </li>\n        <li class="navbar-list-item">\n          <a class="navbar-list-item-link" href="#">Contact</a>\n        </li>\n      </ul>\n      <a class="sign-up-button" href="#">Sign Up</a>\n    </nav>\n    \x3c!-- highlight-end --\x3e\n\n    \x3c!-- highlight-start --\x3e\n    <div class="jumbotron">\n      <h1>We provide solutions for your business</h1>\n      <p>\n        And an even wittier subheading to boot. Jumpstart your marketing efforts\n        with this example based on Apple\u2019s marketing pages.\n      </p>\n      <a class="get-started-button" href="#">Get started</a>\n    </div>\n    \x3c!-- highlight-end --\x3e\n  </body>\n</html>\n')),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="complex-css-example.css"',title:'"complex-css-example.css"'}),"body {\n  margin: 0;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #dddddd;\n}\n\n.logo {\n  color: #007bff;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.navbar-list {\n  display: flex;\n  margin-left: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style: none;\n  padding-left: 0;\n}\n\n/* when viewport is 767px or narrower */\n@media screen and (max-width: 767px) {\n  .navbar-list {\n    display: none;\n  }\n}\n\n.navbar-list-item {\n  margin-right: 16px;\n}\n\n.navbar-list-item-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar-list-item-link:hover {\n  color: rgba(0, 0, 0, 1);\n}\n\n.sign-up-button {\n  color: #ffffff;\n  background-color: #007bff;\n  margin-left: 16px;\n  padding: 6px 12px;\n  font-weight: bold;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n/* when viewport is 767px or narrower */\n@media screen and (max-width: 767px) {\n  .sign-up-button {\n    margin-left: auto;\n  }\n}\n\n.jumbotron {\n  background: aliceblue;\n  text-align: center;\n  padding: 32px 48px 96px;\n}\n\n.jumbotron-title {\n  font-weight: bold;\n}\n\n.jumbotron-subtitle {\n  margin-bottom: 32px;\n}\n\n.get-started-button {\n  background-color: #007bff;\n  color: #ffffff;\n  font-weight: bold;\n  padding: 10px 32px;\n  border-radius: 50px;\n  text-decoration: none;\n}\n")),Object(i.a)("h2",{id:"what-is-a-pain-point-"},"What is a pain point ?"),Object(i.a)("div",{className:"admonition admonition-important alert alert--info"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Pain Point \ud83d\ude2d")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("ul",{parentName:"div"},Object(i.a)("li",{parentName:"ul"},"Troublesome to write a lot of CSS"),Object(i.a)("li",{parentName:"ul"},"You need to get familiar with CSS")))),Object(i.a)("p",null,"By using ",Object(i.a)("strong",{parentName:"p"},"Bootstrap"),", these problems will be solved!"))}p.isMDXComponent=!0},211:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return t?r.a.createElement(u,l(l({ref:n},s),{},{components:t})):r.a.createElement(u,l({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
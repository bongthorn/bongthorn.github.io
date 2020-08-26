(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(211));const o={title:"px, em and rem"},i={unversionedId:"frontend-quick-learning/bootstrap-css-guide/px-em-rem",id:"frontend-quick-learning/bootstrap-css-guide/px-em-rem",isDocsHomePage:!1,title:"px, em and rem",description:"Goal",source:"@site/docs/frontend-quick-learning/bootstrap-css-guide/px-em-rem.md",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/px-em-rem",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/bootstrap-css-guide/px-em-rem.md",sidebar:"frontendQuickLearning",previous:{title:"Bootstrap Flexbox",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/bootstrap-flexbox"},next:{title:"Introduction to JavaScript",permalink:"/docs/frontend-quick-learning/javascript-guide/javascript-intro"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"What is <code>em</code> ?",id:"what-is-em-",children:[{value:"Demo",id:"demo",children:[]}]},{value:"What is <code>rem</code> ?",id:"what-is-rem-",children:[{value:"Demo",id:"demo-1",children:[]}]},{value:"<code>px</code>",id:"px",children:[]},{value:"Which should I use ?",id:"which-should-i-use-",children:[]},{value:"Refs",id:"refs",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"goal"},"Goal"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u26a1 Learn the difference of ",Object(a.b)("inlineCode",{parentName:"li"},"px"),", ",Object(a.b)("inlineCode",{parentName:"li"},"em")," and ",Object(a.b)("inlineCode",{parentName:"li"},"rem"))),Object(a.b)("h2",{id:"preparation"},"Preparation"),Object(a.b)("p",null,"Please make ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"px-em-rem.html"))," file in ",Object(a.b)("inlineCode",{parentName:"p"},"bootstrap-test")," folder."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="bootstrap-test/px-em-rem.html"',title:'"bootstrap-test/px-em-rem.html"'}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <style>\n      html {\n        font-size: 16px;\n      }\n\n      .em-area {\n        font-size: 14px;\n      }\n\n      .i-am-2em {\n        font-size: 2em;\n      }\n\n      .i-am-2rem {\n        font-size: 2rem;\n      }\n\n      .i-am-32px {\n        font-size: 32px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="em-area">\n      <p class="i-am-2em">Hello I\'m 2em</p>\n      <p class="i-am-2rem">Hello I\'m 2rem</p>\n      <p class="i-am-32px">Hello I\'m 32px</p>\n    </div>\n  </body>\n</html>\n')),Object(a.b)("h2",{id:"what-is-em-"},"What is ",Object(a.b)("inlineCode",{parentName:"h2"},"em")," ?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"em"),": Relative to font-size of the parent element\t"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://dzone.com/articles/css-relative-font-size"}),"https://dzone.com/articles/css-relative-font-size")),Object(a.b)("h3",{id:"demo"},"Demo"),Object(a.b)("p",null,"If you change ",Object(a.b)("inlineCode",{parentName:"p"},".em-area")," font-size,"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".em-area {\n  font-size: 20px;\n}\n")),Object(a.b)("p",null,"you see "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<p class="i-am-2em">Hello I\'m 2em</p>\n')),Object(a.b)("p",null,"also become bigger."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_074317.gif",alt:null}))),Object(a.b)("h2",{id:"what-is-rem-"},"What is ",Object(a.b)("inlineCode",{parentName:"h2"},"rem")," ?"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"rem"),": Relative to font-size of the root element\t")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3schools.com/cssref/css_units.asp"}),"https://www.w3schools.com/cssref/css_units.asp")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"root element")," is ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"<html>")),"."),Object(a.b)("h3",{id:"demo-1"},"Demo"),Object(a.b)("p",null,"If you change ",Object(a.b)("inlineCode",{parentName:"p"},"html")," font-size,"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"html {\n  font-size: 24px;\n}\n")),Object(a.b)("p",null,"you see "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<p class="i-am-2rem">Hello I\'m 2rem</p>\n')),Object(a.b)("p",null,"also become bigger."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_074159.gif",alt:null}))),Object(a.b)("h2",{id:"px"},Object(a.b)("inlineCode",{parentName:"h2"},"px")),Object(a.b)("p",null,"Pixel doesn't change related to other element. That's why this is called absolute value."),Object(a.b)("h2",{id:"which-should-i-use-"},"Which should I use ?"),Object(a.b)("p",null,"Bootstrap uses ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"rem")),", and we're using Bootstrap, so following bootstrap convention is better."),Object(a.b)("p",null,"We're going to use ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"rem"))," towards these properties in future steps"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"font-size")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"margin")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"padding"))),Object(a.b)("h2",{id:"refs"},"Refs"),Object(a.b)("p",null,"Discussion about this topic: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/twbs/bootstrap/issues/19943"}),"https://github.com/twbs/bootstrap/issues/19943")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/11799236/should-i-use-px-or-rem-value-units-in-my-css"}),"https://stackoverflow.com/questions/11799236/should-i-use-px-or-rem-value-units-in-my-css"))))}s.isMDXComponent=!0}}]);
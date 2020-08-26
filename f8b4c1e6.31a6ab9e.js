(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n(2),i=(n(0),n(211));const r={title:"3 writing ways of CSS"},c={unversionedId:"frontend-quick-learning/css-guide/3-writing-ways-of-css",id:"frontend-quick-learning/css-guide/3-writing-ways-of-css",isDocsHomePage:!1,title:"3 writing ways of CSS",description:"Goal",source:"@site/docs/frontend-quick-learning/css-guide/3-writing-ways-of-css.md",permalink:"/docs/frontend-quick-learning/css-guide/3-writing-ways-of-css",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/css-guide/3-writing-ways-of-css.md",sidebar:"frontendQuickLearning",previous:{title:"CSS Colors",permalink:"/docs/frontend-quick-learning/css-guide/css-colors"},next:{title:"Class and ID",permalink:"/docs/frontend-quick-learning/css-guide/class-and-id"}},s=[{value:"Goal",id:"goal",children:[]},{value:"1. Style tag",id:"1-style-tag",children:[]},{value:"2. Inline style",id:"2-inline-style",children:[]},{value:"3. External CSS file",id:"3-external-css-file",children:[]},{value:"Refs",id:"refs",children:[]}],l={rightToc:s};function o({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"goal"},"Goal"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u26a1 Learn 3 writing ways of CSS")),Object(i.b)("h2",{id:"1-style-tag"},"1. Style tag"),Object(i.b)("p",null,"This is just we did in the previous step."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<style>\n  h1 { color: white; background: navy; }\n  ul { background: #ffff00; }\n</style>\n")),Object(i.b)("h2",{id:"2-inline-style"},"2. Inline style"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="css-test1.html"',title:'"css-test1.html"'}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n\n  <body>\n    \x3c!-- highlight-next-line --\x3e\n    <h1 style="color: white; background: navy;">Here is a title.</h1>\n    <h2>Here is a subtitle.</h2>\n\n    \x3c!-- highlight-next-line --\x3e\n    <ul style="background: #ffff00;">\n      <li>Coffee</li>\n      <li>Tea</li>\n      <li>Milk</li>\n    </ul>\n  </body>\n</html>\n')),Object(i.b)("h2",{id:"3-external-css-file"},"3. External CSS file"),Object(i.b)("p",null,"Make new file ",Object(i.b)("inlineCode",{parentName:"p"},"css-test1.css")," in ",Object(i.b)("inlineCode",{parentName:"p"},"css-test")," folder"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="css-test1.css"',title:'"css-test1.css"'}),"  h1 { color: white; background: navy; }\n  ul { background: #ffff00; }\n")),Object(i.b)("p",null,"Edit ",Object(i.b)("inlineCode",{parentName:"p"},"css-test1.html")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="css-test1.html"',title:'"css-test1.html"'}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  \n    \x3c!-- highlight-next-line --\x3e\n    <link rel="stylesheet" href="css-test1.css">\n  </head>\n\n<body>\n  <h1>Here is a title.</h1>\n  <h2>Here is a subtitle.</h2>\n\n  <ul>\n    <li>Coffee</li>\n    <li>Tea</li>\n    <li>Milk</li>\n  </ul>\n</body>\n</html>\n')),Object(i.b)("p",null,"Current folder structure looks like this"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-14-12-47-40.png",alt:"css-3-writing-styles-folder"}))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You see that ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("mark",null,"all 1, 2, 3 output is same."))))),Object(i.b)("p",null,"In the next step, we will learn how to use ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"class"))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"id"))," as an ",Object(i.b)("strong",{parentName:"p"},"css selector"),"."),Object(i.b)("h2",{id:"refs"},"Refs"),Object(i.b)("p",null,"You can check the pros and cons of each styling way in the below links."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"But currently it is just enough to know there is 3 ways of writing CSS.")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.w3schools.com/css/css_howto.asp"}),"https://www.w3schools.com/css/css_howto.asp")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css"}),"https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.inmotionhosting.com/support/email/outlook/using-css/linking-your-css-to-your-website"}),"https://www.inmotionhosting.com/support/email/outlook/using-css/linking-your-css-to-your-website"))))}o.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(m,s(s({ref:t},o),{},{components:n})):i.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<r;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);